
import React from 'react';

const Header = () => {
    return (
        <header className="bg-gray-100 p-4 border-b border-gray-200 flex items-center justify-between">
            <img src="/images/logo..jpg" alt="UPDS Logo" className="h-12" />
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="#" className="text-gray-700 hover:text-blue-600">Nacional</a></li>
                    <li><a href="#" className="text-gray-700 hover:text-blue-600">Santa Cruz</a></li>
                    <li><a href="#" className="text-gray-700 hover:text-blue-600">Tarija</a></li>
                    <li><a href="#" className="text-gray-700 hover:text-blue-600">Potosí</a></li>
                    <li><a href="#" className="text-gray-700 hover:text-blue-600">Cochabamba</a></li>
                    <li><a href="#" className="text-gray-700 hover:text-blue-600">La Paz</a></li>
                    <li><a href="#" className="text-gray-700 hover:text-blue-600">Trinidad</a></li>
                    <li><a href="#" className="text-gray-700 hover:text-blue-600">Sucre</a></li>
                    <li><a href="#" className="text-gray-700 hover:text-blue-600">Oruro</a></li>
                    <li><a href="#" className="text-gray-700 hover:text-blue-600">Cobija</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
