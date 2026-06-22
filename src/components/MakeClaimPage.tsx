import { Download } from "lucide-react";

export default function MakeClaimPage() {
  return (
    <main className="bg-white font-sans text-gray-800">
      <section className="bg-[#fffdd8] pt-[150px] pb-20 text-center">
        <div className="mx-auto max-w-5xl px-6">
          <span className="text-[13px] font-bold uppercase tracking-widest text-gray-500">Get Started</span>
          <h1 className="mt-8 text-[38px] font-extrabold uppercase leading-tight tracking-wide text-gray-900 sm:text-[52px]">
            Our Claim Process
          </h1>
          <p className="mt-5 text-[14px] font-medium text-gray-500">
            There are some information we need to get started, please make sure you provide the right details.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-[30px] font-extrabold tracking-tight text-[#052e16] sm:text-[38px]">
            How to process a claim
          </h2>

          <div className="mx-auto mt-14 flex h-16 w-16 items-center justify-center rounded-full bg-[#052e16] text-[28px] font-extrabold text-white">
            1
          </div>

          <div className="mx-auto mt-14 max-w-sm text-left">
            <h3 className="text-center text-[21px] font-extrabold leading-snug text-gray-900">
              Claim Process for Partial Surrender Claim
            </h3>

            <div className="mt-8 space-y-6 text-[14px] font-medium leading-7 text-gray-500">
              <p className="font-bold text-gray-600">Maturity claim:</p>
              <p>
                Walk to any of our offices or make a request through our social platforms: info@emplegh.com /
                Infogh@emplegh.com or Our WhatsApp line: 0595949328.
              </p>
              <p>
                Complete claim form and resend it along with a valid ID card (passport ID/Driving
                licence/Ghana Card/SSNIT ID/voter ID)
              </p>
              <p>Claims are processed and paid within 3-5 working days.</p>
              <p className="font-bold text-gray-600">For Death Claims:</p>
              <p>The following are required documents for processing a death claim.</p>
              <p>Policy Document</p>
              <p>Mortuary Receipt</p>
              <p>Medical Cause of Death</p>
              <p>Death Certificate</p>
              <p>A valid ID card</p>
              <p>Burial permit, if any, and any proof of death.</p>
            </div>
          </div>

          <div className="mt-16 border-t border-gray-100 pt-10">
            <button
              type="button"
              className="inline-flex items-center gap-4 bg-[#052e16] px-8 py-3.5 text-[14px] font-extrabold text-white transition-colors hover:bg-[#32B44A]"
            >
              Download Claim Form
              <span className="flex h-6 w-6 items-center justify-center bg-[#32B44A] text-[#052e16]">
                <Download size={14} />
              </span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
