import Header from "@/app/components/ui/Header";
import HeroSection from "@/app/components/ui/HeroSection";
import ProductsSection from "@/app/components/ui/ProductsSection";
import HowItWorksSection from "@/app/components/ui/HowItWorksSection";
import GallerySection from "@/app/components/ui/GallerySection";
import Footer from "@/app/components/ui/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProductsSection />
        <HowItWorksSection />
        <GallerySection />
      </main>
      <Footer />
    </>
  );
}
