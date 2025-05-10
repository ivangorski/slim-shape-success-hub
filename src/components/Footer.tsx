
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-lg mb-4">ImersivaIA</h3>
            <p className="text-gray-600 mb-4">
              Dedicados a ajudar líderes e organizações a implementarem inteligência artificial de forma estratégica e transformadora.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Programas</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">Plano Básico</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">Plano Premium</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">Plano Corporativo</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">Consultoria Personalizada</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">Casos de Sucesso</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">Guia de Implementação</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">Biblioteca de Recursos</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-2">
              <li><a href="mailto:contato@imersivia.com.br" className="text-gray-600 hover:text-teal-600 transition-colors">contato@imersivia.com.br</a></li>
              <li><a href="tel:+551155551234" className="text-gray-600 hover:text-teal-600 transition-colors">(11) 5555-1234</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} ImersivaIA. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-500 text-sm hover:text-teal-600 transition-colors">
                Política de Privacidade
              </Link>
              <Link to="/terms" className="text-gray-500 text-sm hover:text-teal-600 transition-colors">
                Termos de Serviço
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
