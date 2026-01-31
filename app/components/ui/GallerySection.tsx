import { PawPrint } from "lucide-react";

const galleryColors = [
  "bg-primary-subtle",
  "bg-secondary-subtle",
  "bg-accent-subtle",
  "bg-secondary-subtle",
  "bg-accent-subtle",
  "bg-primary-subtle",
];

export default function GallerySection() {
  return (
    <section id="galeria" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
          <span className="text-gradient">Galeria</span> de inspiração
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryColors.map((color, i) => (
            <div
              key={i}
              className={`${color} rounded-2xl aspect-square flex items-center justify-center`}
            >
              <PawPrint
                size={48}
                className="text-text-tertiary/40"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
