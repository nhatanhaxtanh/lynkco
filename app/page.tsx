import { DeliverySection } from "@/components/delivery-section";
import { FeaturesSection } from "@/components/features-section";
import { FloatingContact } from "@/components/floating-contact";
import { Hero } from "@/components/hero";
import { ModelsSection } from "@/components/models-section";
import { SiteFooter } from "@/components/site-footer";
import { ShowroomSection } from "@/components/showroom-section";
import { SiteHeader } from "@/components/site-header";
import { TestDriveForm } from "@/components/test-drive-form";
import { cars, formatVnd } from "@/lib/cars";
import { siteConfig } from "@/lib/site-config";

function StructuredData() {
  const dealer = {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: `+84${siteConfig.hotline.slice(1)}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "220 Nguyễn Hữu Cảnh, P. Thạnh Mỹ Tây",
      addressLocality: "TP. Hồ Chí Minh",
      addressCountry: "VN",
    },
    openingHours: "Mo-Su 08:00-19:00",
    sameAs: [siteConfig.facebook, siteConfig.zalo, siteConfig.youtube],
  };

  const carList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Bảng giá xe Lynk & Co",
    itemListElement: cars.map((car, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Car",
        name: car.name,
        brand: { "@type": "Brand", name: "Lynk & Co" },
        bodyType: car.bodyType,
        vehicleEngine: { "@type": "EngineSpecification", name: car.powertrain },
        description: car.tagline,
        offers: {
          "@type": "Offer",
          priceCurrency: "VND",
          price: car.price,
          priceValidUntil: "2026-12-31",
          availability: car.anticipated
            ? "https://schema.org/PreOrder"
            : "https://schema.org/InStock",
          description: formatVnd(car.price),
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dealer) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(carList) }}
      />
    </>
  );
}

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <SiteHeader />
      <main>
        <Hero />
        <ModelsSection />
        <FeaturesSection />
        <DeliverySection />
        <ShowroomSection />
        <TestDriveForm />
      </main>
      <SiteFooter />
      <FloatingContact />
    </>
  );
}
