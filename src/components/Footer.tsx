const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 border-t-4 border-purple-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <img
                src="/nm_log.png"
                alt="NM Masajes Logo"
                className="h-10 w-auto mr-3 rounded-full"
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
  )
}

export default Footer