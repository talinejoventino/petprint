import { PawPrint, Heart } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 pt-24 pb-16 relative overflow-hidden"
    >
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

      <h1 className="text-4xl md:text-6xl font-extrabold max-w-3xl animate-fade-in">
        Transforme seu pet em{" "}
        <span className="text-gradient">arte impressa</span>
      </h1>
      <p className="mt-6 text-lg md:text-xl text-text-secondary max-w-xl animate-slide-up">
        Faça upload da foto do seu pet e crie camisas e canecas únicas com
        estilos gerados por IA
      </p>
      <a
        href="#produtos"
        className="btn-primary mt-10 text-lg px-8 py-4 animate-slide-up"
      >
        Criar agora
      </a>
    </section>
  );
}
