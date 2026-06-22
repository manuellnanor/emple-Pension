import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    SH_Embed?: unknown;
  }
}

const EMBED_KEY =
  "eyJpdiI6IkpIQmNaYVoya2g1ZkdBcWQwVkhSZ2c9PSIsInZhbHVlIjoiUW1SZGoyUlNYL3Via3pTKytnNytzVjJCSkxnSjVEdlpWRzVBMVQxeTljQlo3M1YzQ000NW91OU1CMGw2WHk3Nk1vOFpQZ3hTeC90b1J5RzZIRENZaGc9PSIsIm1hYyI6ImU3YTU2NWVjODQ4MjkxNmNhMWNhNDJlYzhlNDEyMWE2MzdlYWNhMTE3NjEzNzMwMjUwOWYzZmY1YWViNGY5NTYiLCJ0YWciOiIifQ==";

const EMBED_SCRIPT_URLS = [
  "https://emplegh.seamlesshiring.com/js/embed.js",
  "https://seamlesshiring.com/js/embed.js",
];

const toEmbedLoadError = (src: string) =>
  new Error(`Unable to load vacancies embed script: ${src}`);

const getEmbedPull = () => {
  const embed = window.SH_Embed;

  if (
    embed &&
    typeof embed === "object" &&
    "pull" in embed &&
    typeof embed.pull === "function"
  ) {
    return embed.pull.bind(embed) as (config: {
      key: string;
      base_url: string;
      country: string;
      specialization: string;
    }) => string;
  }

  return null;
};

export default function VacanciesPage() {
  const embedRef = useRef<HTMLDivElement | null>(null);
  const [loadFailed, setLoadFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const decorateEmbed = () => {
      const embed = embedRef.current;
      if (!embed) return;

      const selects = embed.querySelectorAll("select");
      const button = embed.querySelector("button");

      if (selects.length && button && !embed.querySelector(".sh-filters")) {
        const wrapper = document.createElement("div");
        wrapper.className = "sh-filters";
        selects.forEach((select) => wrapper.appendChild(select));
        wrapper.appendChild(button);
        embed.prepend(wrapper);
      }
    };

    const loadContent = (country = "all", specialization = "all") => {
      const pull = getEmbedPull();
      if (cancelled || !embedRef.current || !pull) {
        setLoadFailed(true);
        return false;
      }

      try {
        embedRef.current.innerHTML = pull({
          key: EMBED_KEY,
          base_url: "https://emplegh.seamlesshiring.com/",
          country,
          specialization,
        });
      } catch {
        setLoadFailed(true);
        return false;
      }

      decorateEmbed();
      setLoadFailed(false);
      return true;
    };

    const loadScript = (src: string) =>
      new Promise<void>((resolve, reject) => {
        const existing = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`);
        if (existing) {
          existing.addEventListener("load", () => resolve(), { once: true });
          existing.addEventListener("error", () => reject(toEmbedLoadError(src)), { once: true });
          if (getEmbedPull()) resolve();
          return;
        }

        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.dataset.shEmbed = "true";
        script.onload = () => resolve();
        script.onerror = () => reject(toEmbedLoadError(src));
        document.body.appendChild(script);
      });

    const ensureEmbedScript = async () => {
      if (getEmbedPull() && loadContent()) {
        return;
      }

      for (const src of EMBED_SCRIPT_URLS) {
        try {
          await loadScript(src);
          if (loadContent()) return;
        } catch {
          // Try the next script source.
        }
      }

      setLoadFailed(true);
    };

    ensureEmbedScript().catch(() => {
      if (!cancelled) setLoadFailed(true);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <main className="bg-white font-sans text-gray-800">
      <section className="pt-[106px] sm:pt-[112px]">
        <div className="relative h-[360px] w-full overflow-hidden bg-[#052e16] sm:h-[430px] md:h-[500px]">
          <img
            src="/assets/images/emple_way_banner_1780860095204.png"
            alt="emPLE vacancies"
            className="absolute inset-0 h-full w-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
            <h1 className="text-[42px] font-extrabold leading-none tracking-tight !text-white drop-shadow-md sm:text-[58px] md:text-[68px]">
              Job Vacancies
            </h1>
            <p className="mt-7 max-w-2xl text-[16px] font-medium leading-7 text-white/90 sm:text-[18px]">
              Explore our latest job opportunities and find the role that&apos;s right for you.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto min-h-[420px] max-w-6xl px-6 pb-20">
        <div className="-mt-24 bg-[#f8f8f8] px-8 py-10 shadow-sm sm:px-10 md:px-12">
          <div id="SH_Embed" ref={embedRef} className="vacancies-embed min-h-[120px]" />

          {loadFailed && (
            <div className="space-y-2 text-[15px] leading-7 text-gray-600">
              <p>Try removing filters to refine your search</p>
              <p>Sorry, no job currently matches the criteria</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
