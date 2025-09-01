import { useState } from 'react';
import { About, Contact, Footer, Header, Hero, Pricing, Services, Testimonials, WhatsappButton } from "./components/index";
import { handleWhatsAppContact } from './utils';

function App() {

  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    servicio: '',
    mensaje: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Services />

      {/* About Section */}
      <About />

      {/* Pricing Section */}
      <Pricing />

      {/* Contact Section */}
      <Contact
        formData={formData}
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
      />

      {/* Testimonials Section */}
      {/* <Testimonials /> */}

      {/* WhatsApp Floating Button */}
      <WhatsappButton />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;