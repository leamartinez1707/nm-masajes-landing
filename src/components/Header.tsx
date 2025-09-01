import { X, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <header className="bg-white shadow-lg fixed w-full z-50 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center">
                        <a href="#inicio">
                            <img
                                src="/nm_log.png"
                                alt="NM Masajes Logo"
                                className="h-10 w-auto mr-3 rounded-full"
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
    )
}

export default Header