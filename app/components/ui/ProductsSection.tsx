import { Shirt, Coffee, PawPrint, Heart } from "lucide-react";
import ProductCard from "@/app/components/ui/ProductCard";

export default function ProductsSection() {
  return (
    <section id="produtos" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
          {/* Decorative floating elements */}
      <PawPrint
        size={48}
        className="absolute top-32 left-[10%] text-primary/20 animate-float"
      />
      <PawPrint
        size={32}
        className="absolute top-48 right-[12%] text-secondary/20 animate-float"
        style={{ animationDelay: "1s" }}
      />
      <Heart
        size={28}
        className="absolute bottom-24 left-[20%] text-accent/20 animate-float"
        style={{ animationDelay: "2s" }}
      />
      <PawPrint
        size={24}
        className="absolute bottom-32 right-[18%] text-primary/20 animate-float"
        style={{ animationDelay: "0.5s" }}
      />
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
          Our <span className="text-gradient">Products</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProductCard
            icon={Shirt}
            name="Custom T-Shirt"
            description="Premium cotton with high-quality DTG printing. Available in various sizes."
            price="$14.90"
          />
          <ProductCard
            icon={Coffee}
            name="Custom Mug"
            description="Durable ceramic with sublimation printing. Perfect for morning coffee with your pet."
            price="$9.90"
          />
        </div>
      </div>
    </section>
  );
}
