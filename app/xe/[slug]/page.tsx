import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CarDetail } from "@/components/car-detail";
import { FloatingContact } from "@/components/floating-contact";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { cars, formatVnd, getCar } from "@/lib/cars";
import { siteConfig } from "@/lib/site-config";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return cars.map((car) => ({ slug: car.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const car = getCar(slug);
  if (!car) return {};
  const title = `${car.name} — Giá từ ${car.priceDisplay} VNĐ`;
  return {
    title,
    description: car.description,
    alternates: { canonical: `/xe/${car.slug}` },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description: car.description,
      url: `${siteConfig.url}/xe/${car.slug}`,
      images: car.image ? [{ url: car.image }] : undefined,
    },
  };
}

function StructuredData({ car }: { car: (typeof cars)[number] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Car",
    name: car.name,
    brand: { "@type": "Brand", name: "Lynk & Co" },
    bodyType: car.bodyType,
    vehicleEngine: { "@type": "EngineSpecification", name: car.powertrain },
    description: car.description,
    image: car.image ? `${siteConfig.url}${car.image}` : undefined,
    url: `${siteConfig.url}/xe/${car.slug}`,
    offers: {
      "@type": "Offer",
      priceCurrency: "VND",
      price: car.price,
      priceValidUntil: "2026-12-31",
      availability: car.anticipated
        ? "https://schema.org/PreOrder"
        : "https://schema.org/InStock",
      description: formatVnd(car.price),
      seller: { "@type": "AutoDealer", name: siteConfig.name },
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Trang chủ", item: siteConfig.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Mẫu xe",
        item: `${siteConfig.url}/#mau-xe`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: car.name,
        item: `${siteConfig.url}/xe/${car.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}

export default async function CarDetailPage({ params }: Props) {
  const { slug } = await params;
  const car = getCar(slug);
  if (!car) notFound();

  const otherCars = cars.filter((c) => c.slug !== car.slug).slice(0, 4);

  return (
    <>
      <StructuredData car={car} />
      <SiteHeader />
      <CarDetail car={car} otherCars={otherCars} />
      <SiteFooter />
      <FloatingContact />
    </>
  );
}
