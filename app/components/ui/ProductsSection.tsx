import { Shirt, Coffee } from "lucide-react";
import ProductCard from "@/app/components/ui/ProductCard";

export default function ProductsSection() {
  return (
    <section id="produtos" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
          Nossos <span className="text-gradient">Produtos</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProductCard
            icon={Shirt}
            name="Camisa Personalizada"
            description="Algodão premium com estampa DTG de alta qualidade. Disponível em diversos tamanhos."
            price="R$ 79,90"
          />
          <ProductCard
            icon={Coffee}
            name="Caneca Personalizada"
            description="Cerâmica resistente com sublimação. Perfeita para o café da manhã com seu pet."
            price="R$ 49,90"
          />
        </div>
      </div>
    </section>
  );
}
