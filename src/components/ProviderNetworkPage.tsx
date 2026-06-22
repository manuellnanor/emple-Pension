"use client";

import { useState } from "react";
import { Ambulance, BriefcaseMedical, Eye, FlaskConical, Search } from "lucide-react";
import {
  BEIGE_HOSPITALS,
  BURGUNDY_HOSPITALS,
  BURGUNDY_OPTICAL_CENTRES,
  CHAMPAGNE_HOSPITALS,
  CHAMPAGNE_OPTICAL_CENTRES,
  CHAMPAGNE_PHARMACIES,
  ORANGE_HOSPITALS,
  TURQUOISE_HOSPITALS,
  TURQUOISE_OPTICAL_CENTRES,
} from "../providerData.generated";
import {
  CHAMPAGNE_DENTAL,
  CHAMPAGNE_LABORATORIES,
  ORANGE_DENTAL,
  ORANGE_LABORATORIES,
  ORANGE_OPTICAL_CENTRES,
  ORANGE_PHARMACIES,
  TURQUOISE_DENTAL,
  TURQUOISE_LABORATORIES,
} from "../providerData.manual";

export const PROVIDER_PLANS = {
  champagne: { name: "Champagne", color: "#f59e0b" },
  burgundy: { name: "Burgundy", color: "#800020" },
  turquoise: { name: "Turquoise", color: "#20b2aa" },
  orange: { name: "Orange", color: "#f97316" },
  beige: { name: "Beige", color: "#b79b72" },
} as const;

export type ProviderPlanSlug = keyof typeof PROVIDER_PLANS;
type ProviderCategory = "hospitals" | "pharmacies" | "laboratories" | "dental" | "optical";

function ToothIcon({ size = 17, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.3 3.4C5.1 4.2 4 6.2 4.4 8.7c.3 1.8 1.2 3.1 1.6 5.1.6 3.3 1.3 6.2 3 6.2 1.4 0 1.5-2.2 1.8-4.2.2-1.3.5-2.2 1.2-2.2s1 .9 1.2 2.2c.3 2 .4 4.2 1.8 4.2 1.7 0 2.4-2.9 3-6.2.4-2 1.3-3.3 1.6-5.1.4-2.5-.7-4.5-2.9-5.3-1.5-.5-2.9.2-4.7.2s-3.2-.7-4.7-.2Z" />
      <path d="M9 5.5c1.8.7 4.2.7 6 0" />
    </svg>
  );
}

const categories = [
  { id: "hospitals" as const, label: "Hospitals/Clinics", icon: Ambulance },
  { id: "pharmacies" as const, label: "Pharmacies", icon: BriefcaseMedical },
  { id: "laboratories" as const, label: "Laboratories", icon: FlaskConical },
  { id: "dental" as const, label: "Dental", icon: ToothIcon },
  { id: "optical" as const, label: "Optical Centres", icon: Eye },
];

interface ProviderNetworkPageProps {
  plan: ProviderPlanSlug;
}

export default function ProviderNetworkPage({ plan }: ProviderNetworkPageProps) {
  const [category, setCategory] = useState<ProviderCategory>("hospitals");
  const [query, setQuery] = useState("");
  const planDetails = PROVIDER_PLANS[plan];
  const records =
    plan === "champagne"
      ? category === "hospitals"
        ? CHAMPAGNE_HOSPITALS
        : category === "pharmacies"
          ? CHAMPAGNE_PHARMACIES
          : category === "laboratories"
            ? CHAMPAGNE_LABORATORIES
            : category === "dental"
              ? CHAMPAGNE_DENTAL
              : category === "optical"
                ? CHAMPAGNE_OPTICAL_CENTRES
                : []
      : plan === "burgundy"
        ? category === "hospitals"
          ? BURGUNDY_HOSPITALS
          : category === "pharmacies"
            ? CHAMPAGNE_PHARMACIES
            : category === "laboratories"
              ? CHAMPAGNE_LABORATORIES
              : category === "dental"
                ? CHAMPAGNE_DENTAL
                : category === "optical"
                  ? BURGUNDY_OPTICAL_CENTRES
                  : []
        : plan === "turquoise"
          ? category === "hospitals"
            ? TURQUOISE_HOSPITALS
            : category === "pharmacies"
              ? CHAMPAGNE_PHARMACIES
              : category === "laboratories"
                ? TURQUOISE_LABORATORIES
                : category === "dental"
                  ? TURQUOISE_DENTAL
                  : category === "optical"
                    ? TURQUOISE_OPTICAL_CENTRES
                    : []
          : plan === "orange"
            ? category === "hospitals"
              ? ORANGE_HOSPITALS
              : category === "pharmacies"
                ? ORANGE_PHARMACIES
                : category === "laboratories"
                  ? ORANGE_LABORATORIES
                  : category === "dental"
                    ? ORANGE_DENTAL
                    : []
            : plan === "beige"
              ? category === "hospitals"
                ? BEIGE_HOSPITALS
                : category === "pharmacies"
                  ? ORANGE_PHARMACIES
                  : category === "laboratories"
                    ? ORANGE_LABORATORIES
                    : []
              : [];
  const safeRecords = records ?? [];
  const normalizedQuery = query.trim().toLowerCase();
  const filteredRecords = normalizedQuery
    ? safeRecords.filter((record) =>
        [record.institution, record.location, record.region, record.telephone]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery),
      )
    : safeRecords;

  return (
    <main className="min-h-screen bg-white pt-[130px] pb-20 font-montserrat">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-7">
        <h1
          className="mb-9 text-[42px] sm:text-[50px] font-semibold tracking-[-0.025em]"
          style={{ color: planDetails.color }}
        >
          {planDetails.name}
        </h1>

        <div className="grid grid-cols-2 gap-px overflow-hidden border border-[#19351f] bg-[#19351f] sm:grid-cols-3 lg:grid-cols-5">
          {categories.map(({ id, label, icon: Icon }) => {
            const active = category === id;
            return (
              <button
                key={id}
                onClick={() => setCategory(id)}
                className={`flex min-h-[58px] items-center justify-center px-3 text-center text-[12px] font-medium leading-tight transition-colors sm:min-h-[56px] sm:px-4 sm:text-[14px] lg:min-h-[52px] lg:text-[15px] ${
                  id === "optical" ? "col-span-2 sm:col-span-1" : ""
                } ${
                  active ? "bg-[#052e16] text-white" : "bg-[#f8f8f8] text-[#111827] hover:bg-gray-100"
                }`}
              >
                <span className="grid w-full max-w-[148px] grid-cols-[18px_1fr] items-center gap-2 text-left sm:flex sm:w-auto sm:max-w-none sm:justify-center">
                  <Icon size={16} className={`shrink-0 justify-self-center ${active ? "text-white" : "text-[#092e19]"}`} />
                  <span>{label}</span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] text-gray-500">
            {filteredRecords.length > 0
              ? `${filteredRecords.length} providers`
              : `No ${categories.find((item) => item.id === category)?.label.toLowerCase()} have been added for this plan yet.`}
          </p>
          {safeRecords.length > 0 && (
            <label className="relative block w-full sm:w-[320px]">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search providers, region or location"
                className="h-10 w-full border border-gray-200 bg-white pl-9 pr-3 text-[12px] outline-none transition-colors focus:border-[#32B44A]"
              />
            </label>
          )}
        </div>

        {filteredRecords.length > 0 && (
          <div className="mt-4 overflow-x-auto border border-gray-200">
            <table className="w-full min-w-[900px] border-collapse text-left">
              <thead>
                <tr className="bg-[#052e16] text-white">
                  <th className="w-[30%] px-2 py-2 text-[11px] font-semibold">Name of Institution</th>
                  <th className="w-[38%] px-2 py-2 text-[11px] font-semibold">Location</th>
                  <th className="w-[10%] px-2 py-2 text-[11px] font-semibold">Region</th>
                  <th className="w-[22%] px-2 py-2 text-[11px] font-semibold">Telephone</th>
                </tr>
              </thead>
              <tbody>
                {filteredRecords.map((record, index) => (
                  <tr key={`${record.institution}-${record.location}-${index}`} className="even:bg-[#f4f4f4]">
                    <td className="border-b border-r border-gray-300 px-2 py-2 text-[10px] text-gray-700">{record.institution}</td>
                    <td className="border-b border-r border-gray-300 px-2 py-2 text-[10px] text-gray-700">{record.location}</td>
                    <td className="border-b border-r border-gray-300 px-2 py-2 text-[10px] text-gray-700">{record.region}</td>
                    <td className="border-b border-gray-300 px-2 py-2 text-[10px] text-gray-700">{record.telephone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}
