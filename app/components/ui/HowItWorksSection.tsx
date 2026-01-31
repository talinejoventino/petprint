import { Upload, Palette, Package } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload photo",
    description: "Send the best photo of your pet",
  },
  {
    icon: Palette,
    title: "Choose a style",
    description: "Select from AI-generated artistic styles",
  },
  {
    icon: Package,
    title: "Get it delivered",
    description: "Quality printed product delivered to your door",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16">
          How it <span className="text-gradient">works</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step.title} className="card flex flex-col items-center text-center gap-4">
              <span className="text-sm font-bold text-white bg-primary rounded-full w-8 h-8 flex items-center justify-center">
                {i + 1}
              </span>
              <div className="w-14 h-14 rounded-xl bg-secondary-subtle flex items-center justify-center">
                <step.icon size={28} className="text-secondary" />
              </div>
              <h3 className="text-lg font-bold">{step.title}</h3>
              <p className="text-text-secondary text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
