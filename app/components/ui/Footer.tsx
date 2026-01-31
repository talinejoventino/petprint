import { Heart } from "lucide-react";
import Logo from "@/app/components/logo/Logo";

export default function Footer() {
  return (
    <footer className="bg-text-primary text-white py-12 px-4">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <Logo size="md" />
          <p className="mt-3 text-gray-400 text-sm">
            Seu pet, seu estilo. Produtos únicos com arte gerada por IA.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-3">Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#produtos" className="hover:text-white transition-colors">
                Produtos
              </a>
            </li>
            <li>
              <a href="#como-funciona" className="hover:text-white transition-colors">
                Como funciona
              </a>
            </li>
            <li>
              <a href="#galeria" className="hover:text-white transition-colors">
                Galeria
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3">Contato</h4>
          <p className="text-gray-400 text-sm">contato@petprint.com.br</p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-8 pt-8 border-t border-gray-700 text-center text-gray-500 text-sm">
        Feito com <Heart size={14} className="inline text-primary" /> para
        pets &mdash; PetPrint &copy; {new Date().getFullYear()}
      </div>
    </footer>
  );
}
