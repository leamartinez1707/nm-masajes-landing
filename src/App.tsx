import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Clock, Star, Check, MessageCircle } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    servicio: '',
    mensaje: ''
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppContact = (message: string) => {
    const phoneNumber = '+59898323837';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\s+/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hola! Soy ${formData.nombre}.

Estoy interesado/a en: ${formData.servicio}

Mi número: ${formData.telefono}

Mensaje: ${formData.mensaje}

¡Espero su respuesta!`;
    handleWhatsAppContact(message);
  };

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Header */}
      <header className="bg-white shadow-lg fixed w-full z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <a href="#inicio">
                <img
                  src="/nm_log.png"
                  alt="NM Masajes Logo"
                  className="h-10 w-auto mr-3"
                />
              </a>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">NM Masajes</h1>
                <span className="text-sm text-gray-600">Bienestar y Relajación</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Inicio</a>
              <a href="#servicios" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Servicios</a>
              <a href="#nosotros" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Nosotros</a>
              <a href="#precios" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Precios</a>
              <a href="#contacto" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Contacto</a>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-orange-500 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
                <a href="#inicio" className="block px-3 py-2 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors" onClick={toggleMenu}>Inicio</a>
                <a href="#servicios" className="block px-3 py-2 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors" onClick={toggleMenu}>Servicios</a>
                <a href="#nosotros" className="block px-3 py-2 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors" onClick={toggleMenu}>Nosotros</a>
                <a href="#precios" className="block px-3 py-2 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors" onClick={toggleMenu}>Precios</a>
                <a href="#contacto" className="block px-3 py-2 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors" onClick={toggleMenu}>Contacto</a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3BhfGVufDB8fDB8fHww" alt="Hero image" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Tu Bienestar,
            <span className="text-purple-300 block">Mi Pasión</span>
          </h1>
          <p className="text-xl lg:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto">
            Experimenta el equilibrio perfecto entre cuerpo y mente con tratamientos personalizados.
            Un emprendimiento dedicado exclusivamente a tu comfort y relajación.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleWhatsAppContact('¡Hola! Me gustaría reservar una sesión de masajes. ¿Podrían ayudarme con la disponibilidad?')}
              className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-sm hover:from-purple-700 hover:to-purple-800 transition-all text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2 justify-center"
            >
              <MessageCircle className="w-5 h-5" />
              Reservar por WhatsApp
            </button>
            <a
              href="#servicios"
              className="border-2 border-white text-white px-8 py-4 rounded-sm hover:bg-white hover:text-purple-700 transition-all text-lg font-medium"
            >
              Ver Servicios
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nuestros Servicios</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tratamientos personalizados diseñados especialmente para tu bienestar y comfort
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Masaje Relajante */}
            <div className="group relative overflow-hidden rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img
                src="https://ecopostural.com/wp-content/uploads/2024/03/masaje_sueco_Ecopostural.jpg"
                alt="Masaje relajante"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Desktop overlay - solo visible en hover */}
              <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="hidden md:block absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-2">Masaje Relajante</h3>
                <p className="text-sm mb-4 leading-relaxed">
                  Ideal para liberar el estrés diario. Técnicas suaves que calman tu mente y relajan profundamente los músculos tensos.
                </p>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-sm text-sm font-medium transition-colors">
                  MÁS INFO
                </button>
              </div>
              {/* Mobile info - siempre visible */}
              <div className="md:hidden absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                <h3 className="text-xl font-bold mb-2">Masaje Relajante</h3>
                <p className="text-sm mb-3 leading-relaxed">
                  Ideal para liberar el estrés diario. Técnicas suaves que calman tu mente y relajan profundamente los músculos tensos.
                </p>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-sm text-xs font-medium transition-colors">
                  MÁS INFO
                </button>
              </div>
              <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-sm">
                <span className="text-sm font-medium text-gray-800">Relajación</span>
              </div>
            </div>

            {/* Drenaje Linfático */}
            <div className="group relative overflow-hidden rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img
                src="https://f.fcdn.app/imgs/b74308/www.analiamartin.com.uy/anamuy/f145/original/catalogo/DLMMTAMS_DLMMTAMS_1/2000-2000/drenaje-linfatico-manual-metodo-tradicional-drenaje-linfatico-manual-metodo-tradicional.jpg"
                alt="Drenaje linfático"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Desktop overlay */}
              <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="hidden md:block absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-2">Drenaje Linfático</h3>
                <p className="text-sm mb-4 leading-relaxed">
                  Técnica especializada que te ayuda a eliminar toxinas y reducir la retención de líquidos. Mejora tu circulación linfática.
                </p>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-sm text-sm font-medium transition-colors">
                  MÁS INFO
                </button>
              </div>
              {/* Mobile info */}
              <div className="md:hidden absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                <h3 className="text-xl font-bold mb-2">Drenaje Linfático</h3>
                <p className="text-sm mb-3 leading-relaxed">
                  Técnica especializada que te ayuda a eliminar toxinas y reducir la retención de líquidos. Mejora tu circulación linfática.
                </p>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-sm text-xs font-medium transition-colors">
                  MÁS INFO
                </button>
              </div>
              <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-sm">
                <span className="text-sm font-medium text-gray-800">Detox</span>
              </div>
            </div>

            {/* Masaje Modelador */}
            <div className="group relative overflow-hidden rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img
                src="https://www.younique.com.py/images/tratamientos/masaje-modelador-rf_foto_1.jpg"
                alt="Masaje modelador"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Desktop overlay */}
              <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="hidden md:block absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-2">Masaje Modelador</h3>
                <p className="text-sm mb-4 leading-relaxed">
                  Tratamiento estético que te ayuda a modelar tu figura, reducir medidas y mejorar la apariencia de tu piel.
                </p>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-sm text-sm font-medium transition-colors">
                  MÁS INFO
                </button>
              </div>
              {/* Mobile info */}
              <div className="md:hidden absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                <h3 className="text-xl font-bold mb-2">Masaje Modelador</h3>
                <p className="text-sm mb-3 leading-relaxed">
                  Tratamiento estético que te ayuda a modelar tu figura, reducir medidas y mejorar la apariencia de tu piel.
                </p>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-sm text-xs font-medium transition-colors">
                  MÁS INFO
                </button>
              </div>
              <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-sm">
                <span className="text-sm font-medium text-gray-800">Estético</span>
              </div>
            </div>

            {/* Piedras Calientes */}
            <div className="group relative overflow-hidden rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img
                src="https://www.spazio26.com/wp-content/uploads/2019/02/Piedras_Calientes.jpg"
                alt="Masaje con piedras calientes"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Desktop overlay */}
              <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="hidden md:block absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-2">Piedras Calientes</h3>
                <p className="text-sm mb-4 leading-relaxed">
                  El calor de las piedras volcánicas penetra profundamente, relajando músculos y mejorando la circulación sanguínea.
                </p>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-sm text-sm font-medium transition-colors">
                  MÁS INFO
                </button>
              </div>
              {/* Mobile info */}
              <div className="md:hidden absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                <h3 className="text-xl font-bold mb-2">Piedras Calientes</h3>
                <p className="text-sm mb-3 leading-relaxed">
                  El calor de las piedras volcánicas penetra profundamente, relajando músculos y mejorando la circulación sanguínea.
                </p>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-sm text-xs font-medium transition-colors">
                  MÁS INFO
                </button>
              </div>
              <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-sm">
                <span className="text-sm font-medium text-gray-800">Terapéutico</span>
              </div>
            </div>

            {/* Masaje Descontracturante */}
            <div className="group relative overflow-hidden rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img
                src="https://www.europeanhealthschool.com/es/wp-content/uploads/2024/07/masaje-relajante-descontracturante.jpg"
                alt="Masaje descontracturante"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Desktop overlay */}
              <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="hidden md:block absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-2">Masaje Descontracturante</h3>
                <p className="text-sm mb-4 leading-relaxed">
                  Tratamiento específico para dolores musculares y contracturas. Técnicas avanzadas para problemas posturales.
                </p>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-sm text-sm font-medium transition-colors">
                  MÁS INFO
                </button>
              </div>
              {/* Mobile info */}
              <div className="md:hidden absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                <h3 className="text-xl font-bold mb-2">Masaje Descontracturante</h3>
                <p className="text-sm mb-3 leading-relaxed">
                  Tratamiento específico para dolores musculares y contracturas. Técnicas avanzadas para problemas posturales.
                </p>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-sm text-xs font-medium transition-colors">
                  MÁS INFO
                </button>
              </div>
              <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-sm">
                <span className="text-sm font-medium text-gray-800">Terapéutico</span>
              </div>
            </div>

            {/* Vendas Neuromusculares */}
            <div className="group relative overflow-hidden rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img
                src="https://sillasderuedascali.com/wp-content/uploads/2018/01/Cinta-Kinesiologica-Vendaje-Neuromuscular2.webp"
                alt="Aplicación de vendas neuromusculares"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Desktop overlay */}
              <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="hidden md:block absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-2">Vendas Neuromusculares</h3>
                <p className="text-sm mb-4 leading-relaxed">
                  Aplicación de vendas especializadas que ayudan en la recuperación muscular y mejoran el rendimiento físico.
                </p>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-sm text-sm font-medium transition-colors">
                  MÁS INFO
                </button>
              </div>
              {/* Mobile info */}
              <div className="md:hidden absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                <h3 className="text-xl font-bold mb-2">Vendas Neuromusculares</h3>
                <p className="text-sm mb-3 leading-relaxed">
                  Aplicación de vendas especializadas que ayudan en la recuperación muscular y mejoran el rendimiento físico.
                </p>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-sm text-xs font-medium transition-colors">
                  MÁS INFO
                </button>
              </div>
              <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-sm">
                <span className="text-sm font-medium text-gray-800">Deportivo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Sobre NM Masajes</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Soy una profesional apasionada por el bienestar y la relajación. Mi emprendimiento nació del deseo de
                brindar un espacio de tranquilidad donde cada persona pueda encontrar el equilibrio que necesita.
                Con formación especializada y dedicación completa, me enfoco en ofrecer tratamientos de calidad.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Utilizo técnicas especializadas y productos premium para garantizar tu comfort. Cada sesión es
                personalizada según tus necesidades específicas, creando una experiencia única de bienestar y relajación.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-center p-4 bg-white rounded-sm shadow-sm">
                  <Check className="w-6 h-6 text-purple-600 mr-3" />
                  <span className="text-gray-700 font-medium">Atención Profesional</span>
                </div>
                <div className="flex items-center p-4 bg-white rounded-sm shadow-sm">
                  <Check className="w-6 h-6 text-purple-600 mr-3" />
                  <span className="text-gray-700 font-medium">Tratamientos Personalizados</span>
                </div>
                <div className="flex items-center p-4 bg-white rounded-sm shadow-sm">
                  <MapPin className="w-5 h-5 text-purple-600 mr-3" />
                  <span className="text-gray-700">Montevideo, Uruguay</span>
                </div>
                <div className="flex items-center p-4 bg-white rounded-sm shadow-sm">
                  <Mail className="w-5 h-5 text-purple-600 mr-3" />
                  <span className="text-gray-700">nataliasantos@hotmail.com</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <video
                src="/videos/spa_room.mp4"
                autoPlay
                loop
                muted
                className="rounded-sm shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Precios y Promociones</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos precios accesibles para que puedas disfrutar del bienestar que mereces
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Precio Individual */}
            <div className="bg-gray-50 rounded-sm p-8 text-center hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-purple-300 transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Masajes Básicos</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-purple-600">$990</span>
                <span className="text-gray-600 ml-2">UYU</span>
              </div>
              <ul className="text-gray-700 space-y-3 mb-8">
                <li>• 60 minutos de tratamiento</li>
                <li>• Masaje Relajante</li>
                <li>• Masaje Descontracturante</li>
                <li>• Drenaje Linfático</li>
              </ul>
              <button
                onClick={() => handleWhatsAppContact('Hola! Me interesa un masaje (relajante, descontracturante o drenaje linfático) por $990. ¿Podrían darme más información sobre disponibilidad y reservas?')}
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-6 rounded-sm hover:from-purple-700 hover:to-purple-800 transition-all font-medium shadow-lg flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Reservar por WhatsApp
              </button>
            </div>

            {/* Masajes Reductores */}
            <div className="bg-orange-50 rounded-sm p-8 text-center hover:shadow-xl transition-all duration-300 border-2 border-orange-400 relative transform hover:-translate-y-2">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-orange-600 text-white px-4 py-2 rounded-sm text-sm font-medium shadow-lg">Especializado</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Masajes Reductores</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-orange-600">$1,200</span>
                <span className="text-gray-600 ml-2">UYU</span>
              </div>
              <ul className="text-gray-700 space-y-3 mb-8">
                <li>• 60 minutos de tratamiento</li>
                <li>• Productos especializados</li>
                <li>• Técnicas reductoras</li>
                <li>• Resultados visibles</li>
              </ul>
              <button
                onClick={() => handleWhatsAppContact('Hola! Me interesa un masaje reductor por $1,200. ¿Podrían darme más información sobre este tratamiento especializado?')}
                className="w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white py-3 px-6 rounded-sm hover:from-orange-700 hover:to-orange-800 transition-all font-medium shadow-lg flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Consultar por WhatsApp
              </button>
            </div>

            {/* Paquete 3 Sesiones */}
            <div className="bg-purple-50 rounded-sm p-8 text-center hover:shadow-xl transition-all duration-300 border-2 border-purple-400 relative transform hover:-translate-y-2">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-600 text-white px-4 py-2 rounded-sm text-sm font-medium shadow-lg">Más Popular</span>
              </div>
              <div className='flex flex-col justify-between'>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Paquete 3 Sesiones</h3>
                  <div className="mb-2">
                    <span className="text-lg text-gray-500 line-through">$2,970</span>
                  </div>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-purple-600">$2,700</span>
                    <span className="text-gray-600 ml-2">UYU</span>
                  </div>
                  <ul className="text-gray-700 space-y-3 mb-8">
                    <li>• 3 sesiones de 60 minutos</li>
                    <li>• Ahorro de $270</li>
                    <li>• Válido por 3 meses</li>
                    <li>• Combiná diferentes masajes</li>
                  </ul>
                </div>
                <button
                  onClick={() => handleWhatsAppContact('¡Hola! Me interesa el paquete de 3 sesiones con descuento. ¿Podrían darme más detalles sobre cómo adquirirlo?')}
                  className="block w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-6 rounded-sm hover:from-purple-700 hover:to-purple-800 transition-all font-medium shadow-lg flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Consultar por WhatsApp
                </button>
              </div>
            </div>

            {/* Membresía Mensual */}
            <div className="bg-gray-50 rounded-sm p-8 text-center hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-purple-300 transform hover:-translate-y-2 flex flex-col justify-between">

              <>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Plan Mensual</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-purple-600">$3,500</span>
                  <span className="text-gray-600 ml-2">UYU/mes</span>
                </div>
                <ul className="text-gray-700 space-y-3 mb-8">
                  <li>• 4 sesiones mensuales</li>
                  <li>• 12% descuento adicional</li>
                  <li>• Prioridad en reservas</li>
                  <li>• Consultas incluidas</li>
                </ul>
              </>
              <button
                onClick={() => handleWhatsAppContact('Hola! Me interesa el plan mensual de 4 sesiones. ¿Podrían explicarme cómo funciona la suscripción?')}
                className="block w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-6 rounded-sm hover:from-purple-700 hover:to-purple-800 transition-all font-medium shadow-lg flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Consultar por WhatsApp
              </button>
            </div>
          </div>

          {/* Ofertas Especiales */}
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-sm p-8 text-white text-center shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Promociones Especiales</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-sm p-6 backdrop-blur-sm">
                <h4 className="text-xl text-purple-800 font-semibold mb-3">Primera Visita</h4>
                <p className="text-purple-600 mb-2">20% de descuento en tu primera sesión</p>
                <p className="text-2xl text-purple-800 font-bold">Solo $792 UYU</p>
              </div>
              <div className="bg-white rounded-sm p-6 backdrop-blur-sm">
                <h4 className="text-xl text-purple-800 font-semibold mb-3">Referidos</h4>
                <p className="text-purple-600 mb-2">Trae un amigo y ambos obtienen 20% off</p>
                <p className="text-2xl text-purple-800 font-bold">¡Bienestar compartido!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-purple-50 mx-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Contáctanos</h2>
            <p className="text-xl text-gray-600">
              Estoy aquí para ayudarte. Reserva tu sesión o consulta cualquier duda sobre los tratamientos
            </p>
          </div>

          <div className="flex gap-12">
            {/* Contact Info */}
            <div className="flex flex-col lg:flex-row items-center justify-between mx-auto w-full">
              <div className="bg-white rounded-sm p-8 shadow-xl border border-purple-200 w-full max-w-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Información de Contacto</h3>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-purple-600 mr-3" />
                    <span className="text-gray-700">+598 98 323 837</span>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-purple-600 mr-3 mt-1" />
                    <div className="text-gray-700">
                      <p className="font-medium mb-2">Horarios de Atención:</p>
                      <p>Lunes, Miércoles, Viernes y Sábados: 9:00 - 20:00</p>
                      <p>Martes y Jueves: 15:00 - 20:00</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-purple-600 mr-3" />
                    <span className="text-gray-700">Montevideo, Uruguay</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-purple-600 mr-3" />
                    <span className="text-gray-700">info@nmmasajes.com</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-sm p-8 shadow-xl border border-purple-200 mt-8 w-full max-w-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Reserva tu Sesión</h3>

                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Nombre Completo</label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
                      placeholder="Tu nombre completo"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">WhatsApp</label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
                      placeholder="Tu número de WhatsApp"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Servicio de Interés</label>
                    <select
                      name="servicio"
                      value={formData.servicio}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="Masaje Relajante">Masaje Relajante - $990</option>
                      <option value="Masaje Descontracturante">Masaje Descontracturante - $990</option>
                      <option value="Drenaje Linfático">Drenaje Linfático - $990</option>
                      <option value="Masaje Reductor">Masaje Reductor - $1,200</option>
                      <option value="Masaje Modelador">Masaje Modelador</option>
                      <option value="Piedras Calientes">Piedras Calientes</option>
                      <option value="Vendas Neuromusculares">Vendas Neuromusculares</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Mensaje</label>
                    <textarea
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
                      placeholder="Cuéntanos sobre tus necesidades o preferencias"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-4 rounded-sm hover:from-purple-700 hover:to-purple-800 transition-all font-medium text-lg shadow-lg flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Contactar por WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Lo que dicen nuestros clientes</h2>
            <p className="text-xl text-gray-600">
              La satisfacción de nuestros clientes es nuestra mejor recomendación
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white backdrop-blur-sm rounded-sm p-6 shadow-lg border border-purple-200">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Increíble experiencia. Los masajes descontracturantes me ayudaron muchísimo con mis dolores de espalda.
                El ambiente es súper relajante y profesional."
              </p>
              <div className="font-semibold text-gray-900">María González</div>
              <div className="text-sm text-gray-600">Masaje Descontracturante</div>
            </div>

            <div className="bg-white backdrop-blur-sm rounded-sm p-6 shadow-lg border border-purple-200">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "El masaje con piedras calientes fue una experiencia única. Salí completamente renovada.
                Definitivamente voy a volver."
              </p>
              <div className="font-semibold text-gray-900">Ana Rodríguez</div>
              <div className="text-sm text-gray-600">Piedras Calientes</div>
            </div>

            <div className="bg-white backdrop-blur-sm rounded-sm p-6 shadow-lg border border-purple-200">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "El drenaje linfático me ayudó mucho con la retención de líquidos.
                Me siento mucho mejor y más liviana después de cada sesión."
              </p>
              <div className="font-semibold text-gray-900">Carlos Méndez</div>
              <div className="text-sm text-gray-600">Drenaje Linfático</div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => handleWhatsAppContact('¡Hola! Me gustaría obtener más información sobre sus servicios de masajes.')}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 whatsapp-float animate-pulse-soft"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="w-8 h-8" />
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 border-t-4 border-purple-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <img
                src="/nm_log.png"
                alt="NM Masajes Logo"
                className="h-10 w-auto mr-3"
              />
              <h3 className="text-2xl font-bold">NM Masajes</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Tu bienestar es mi pasión. Un emprendimiento dedicado a tu comfort y relajación integral.
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#inicio" className="text-gray-300 hover:text-purple-400 transition-colors">Inicio</a>
              <a href="#servicios" className="text-gray-300 hover:text-purple-400 transition-colors">Servicios</a>
              <a href="#nosotros" className="text-gray-300 hover:text-purple-400 transition-colors">Nosotros</a>
              <a href="#precios" className="text-gray-300 hover:text-purple-400 transition-colors">Precios</a>
            </div>
            <div className="border-t border-gray-600 pt-8">
              <p className="text-gray-400">
                © 2025 NM Masajes. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;