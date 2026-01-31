import type { LucideIcon } from "lucide-react";

interface ProductCardProps {
  icon: LucideIcon;
  name: string;
  description: string;
  price: string;
}

export default function ProductCard({
  icon: Icon,
  name,
  description,
  price,
}: ProductCardProps) {
  return (
    <div className="card flex flex-col items-center text-center gap-4">
      <div className="w-16 h-16 rounded-2xl bg-primary-subtle flex items-center justify-center">
        <Icon size={32} className="text-primary" />
      </div>
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-text-secondary">{description}</p>
      <p className="text-2xl font-extrabold text-primary">{price}</p>
      <a href="#hero" className="btn-primary w-full text-center">
        Customize
      </a>
    </div>
  );
}
