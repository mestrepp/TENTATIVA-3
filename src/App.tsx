import React from 'react';
import { Truck, MapPin, MapIcon as WhatsappIcon, Building2, Timer, Award, CheckCircle2, Quote } from 'lucide-react';

function App() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Quero solicitar uma cotação de concreto usinado");
    window.open(`https://wa.me/5511934728596?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg fixed w-full z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2">
              <Truck className="text-orange-500 h-8 w-8" />
              <span className="text-2xl font-bold text-orange-500">USIMIX</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-orange-500 transition duration-300">Sobre</a>
              <a href="#projects" className="text-gray-700 hover:text-orange-500 transition duration-300">Projetos</a>
              <a href="#testimonials" className="text-gray-700 hover:text-orange-500 transition duration-300">Depoimentos</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-500 transition duration-300">Contato</a>
            </nav>
            <div className="flex space-x-4">
              <button
                onClick={handleWhatsAppClick}
                className="bg-orange-500 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-orange-600 transition duration-300 shadow-lg"
              >
                <WhatsappIcon className="h-5 w-5" />
                <span className="hidden sm:inline">Solicitar Orçamento</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20">
        <div className="relative h-[80vh]">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80"
            alt="Construction site"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  50 Anos de Excelência em Concreto Usinado
                </h1>
                <p className="text-xl text-white mb-8 opacity-90">
                  Construindo o futuro com qualidade e inovação desde 1974
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <button
                    onClick={handleWhatsAppClick}
                    className="bg-orange-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-orange-600 transition duration-300 shadow-xl"
                  >
                    Solicite um Orçamento
                  </button>
                  <a
                    href="#contact"
                    className="bg-white text-orange-500 px-8 py-4 rounded-full text-xl font-semibold hover:bg-gray-100 transition duration-300 shadow-xl text-center"
                  >
                    Fale Conosco
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Shipping Banner */}
      <section className="bg-orange-500 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-3">
            <Truck className="text-white h-6 w-6" />
            <p className="text-white font-semibold text-lg">Somente na primeira compra: Frete Grátis!</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white" id="about">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Por que a Usimix é a Escolha Certa?</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition duration-300">
              <Timer className="h-16 w-16 text-orange-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">50 Anos de História</h3>
              <p className="text-gray-600">Meio século de experiência e conhecimento em concreto usinado</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition duration-300">
              <Award className="h-16 w-16 text-orange-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Qualidade Certificada</h3>
              <p className="text-gray-600">Rigoroso controle de qualidade em todos os processos</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition duration-300">
              <Building2 className="h-16 w-16 text-orange-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Grandes Obras</h3>
              <p className="text-gray-600">Presente nas maiores construções do Brasil</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-gray-50" id="projects">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Nossos Projetos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1581092446327-9b52bd1570c2?auto=format&fit=crop&q=80"
                alt="Concrete truck"
                className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition duration-300">
                <h3 className="text-xl font-bold mb-2">Frota Moderna</h3>
                <p>Caminhões Betoneira</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80"
                alt="Construction materials"
                className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition duration-300">
                <h3 className="text-xl font-bold mb-2">Materiais Premium</h3>
                <p>Agregados Selecionados</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80"
                alt="Construction site"
                className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition duration-300">
                <h3 className="text-xl font-bold mb-2">Grandes Obras</h3>
                <p>Execução Especializada</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white" id="testimonials">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">O Que Dizem Nossos Clientes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <Quote className="h-8 w-8 text-orange-500 mb-4" />
              <p className="text-gray-600 mb-6">"A Usimix superou todas as nossas expectativas. Entrega pontual e concreto de altíssima qualidade. Recomendo fortemente!"</p>
              <div>
                <p className="font-semibold">João Silva</p>
                <p className="text-sm text-gray-500">Engenheiro Civil - Construtora ABC</p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <Quote className="h-8 w-8 text-orange-500 mb-4" />
              <p className="text-gray-600 mb-6">"Parceria de anos que só tem fortalecido. A equipe técnica é excepcional e o suporte é sempre presente."</p>
              <div>
                <p className="font-semibold">Maria Santos</p>
                <p className="text-sm text-gray-500">Diretora - Incorporadora XYZ</p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <Quote className="h-8 w-8 text-orange-500 mb-4" />
              <p className="text-gray-600 mb-6">"O diferencial da Usimix é a consistência. Sempre entregam o mesmo padrão de qualidade, fundamental para nossas obras."</p>
              <div>
                <p className="font-semibold">Pedro Oliveira</p>
                <p className="text-sm text-gray-500">Gestor de Obras - Construtora 123</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-orange-500">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Diferenciais Usimix</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              'Entrega Pontual',
              'Concreto de Alta Resistência',
              'Atendimento 24/7',
              'Suporte Técnico Especializado'
            ].map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white bg-opacity-10 p-4 rounded-lg">
                <CheckCircle2 className="text-white h-6 w-6 flex-shrink-0" />
                <span className="text-white font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-white" id="contact">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-800 mb-8">Entre em Contato</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Endereço</p>
                    <p className="text-lg font-semibold">Av. Industrial, 1000</p>
                    <p className="text-gray-500">São Paulo - SP</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Solicite um Orçamento</h3>
              <div className="space-y-4">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-orange-500 text-white px-6 py-4 rounded-full flex items-center justify-center space-x-2 hover:bg-orange-600 transition duration-300 shadow-lg"
                >
                  <WhatsappIcon className="h-5 w-5" />
                  <span>Solicitar Orçamento</span>
                </button>
                <a
                  href="mailto:contato@usimix.com.br"
                  className="w-full bg-gray-800 text-white px-6 py-4 rounded-full flex items-center justify-center space-x-2 hover:bg-gray-700 transition duration-300 shadow-lg"
                >
                  <span>Fale Conosco</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Truck className="text-orange-500 h-8 w-8" />
            <span className="text-2xl font-bold text-orange-500">USIMIX</span>
          </div>
          <p className="text-center text-gray-400">© 2024 Usimix. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;