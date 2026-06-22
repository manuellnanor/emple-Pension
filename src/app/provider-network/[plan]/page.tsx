import { notFound } from "next/navigation";
import App from "../../../App";
import type { ProviderPlanSlug } from "../../../components/ProviderNetworkPage";

const providerPlanSlugs: ProviderPlanSlug[] = [
  "champagne",
  "burgundy",
  "turquoise",
  "orange",
  "beige",
];

export function generateStaticParams() {
  return providerPlanSlugs.map((plan) => ({ plan }));
}

export default async function ProviderNetworkPlanPage({
  params,
}: {
  params: Promise<{ plan: string }>;
}) {
  const { plan } = await params;

  if (!providerPlanSlugs.includes(plan as ProviderPlanSlug)) {
    notFound();
  }

  return <App initialView="provider-network" initialProviderPlan={plan as ProviderPlanSlug} />;
}
