import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import logoImage from 'figma:asset/df4bb514bb3a1fc9ad9a9bfa8db7a0ce8a5e6646.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'Sobre Nós', href: '#' },
      { name: 'Como Funciona', href: '#how-it-works' },
      { name: 'Serviços', href: '#services' },
      { name: 'Carreiras', href: '#' },
    ],
    support: [
      { name: 'Central de Ajuda', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: 'Rastrear Pedido', href: '#' },
      { name: 'Contato', href: '#' },
    ],
    legal: [
      { name: 'Termos de Uso', href: '#' },
      { name: 'Política de Privacidade', href: '#' },
      { name: 'Política de Cookies', href: '#' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img src={logoImage} alt="LaundryPass" className="w-10 h-10" />
              <span className="text-white">LaundryPass</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Plataforma SaaS de lavanderia com delivery. Conectando clientes, lavanderias e motoristas.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white mb-4">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4">Suporte</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-blue-500" />
              <div>
                <div className="text-gray-400">Telefone</div>
                <div className="text-white">(49) 98845-4548</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-500" />
              <div>
                <div className="text-gray-400">E-mail</div>
                <div className="text-white">contato@laundrypass.com</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-blue-500" />
              <div>
                <div className="text-gray-400">Endereço</div>
                <div className="text-white">Curitibanos, SC</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">
            © {currentYear} LaundryPass. Todos os direitos reservados.
          </p>
          <p className="text-gray-400">
            Desenvolvido com ❤️ para facilitar sua vida
          </p>
        </div>
      </div>
    </footer>
  );
}
