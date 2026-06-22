import App from "../../../App";
import { notFound } from "next/navigation";
import { getProductPageBySlug, PRODUCT_PAGES } from "../../../productPages";
import { getPensionProductBySlug, PENSION_PRODUCT_PAGES } from "../../../pensionProducts";

export const dynamicParams = false;

export function generateStaticParams() {
  return [...PRODUCT_PAGES, ...PENSION_PRODUCT_PAGES].map((page) => ({ slug: page.slug }));
}

export default async function ProductPageRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!getProductPageBySlug(slug) && !getPensionProductBySlug(slug)) {
    notFound();
  }

  return <App initialView="product-detail" initialProductSlug={slug} />;
}
