import { PawPrint } from "lucide-react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: { icon: 20, text: "text-lg" },
  md: { icon: 24, text: "text-xl" },
  lg: { icon: 32, text: "text-3xl" },
};

export default function Logo({ size = "md" }: LogoProps) {
  const { icon, text } = sizeMap[size];

  return (
    <div className="flex items-center gap-2">
      <PawPrint size={icon} className="text-primary" />
      <span className={`${text} font-extrabold text-gradient`}>PetPrint</span>
    </div>
  );
}
