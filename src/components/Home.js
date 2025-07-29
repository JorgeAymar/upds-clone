import React from 'react';

const Home = () => {
    return (
        <div className="container mx-auto px-4">
            {/* Hero Section */}
            <section id="hero" className="my-8">
                <img src="/images/banner.jpg" alt="Main Banner" className="w-full h-auto rounded-lg shadow-lg" />
                <div className="text-center mt-4">
                    <h1 className="text-4xl font-bold text-blue-800">Bienvenido a la UPDS</h1>
                    <p className="text-lg text-gray-700 mt-2">Tu futuro comienza aquí.</p>
                    <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
                        Conoce más
                    </button>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="my-12 p-8 bg-gray-100 rounded-lg shadow-md">
                <h2 className="text-3xl font-semibold text-blue-700 mb-6 text-center">Sobre Nosotros</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-2xl font-medium text-blue-600 mb-3">Nuestra Historia</h3>
                        <p className="text-gray-700 leading-relaxed">
                            La Universidad Privada Domingo Savio (UPDS) fue fundada con la visión de ofrecer educación superior de calidad, formando profesionales íntegros y competentes para el desarrollo del país. Desde nuestros inicios, nos hemos comprometido con la excelencia académica y la innovación.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-medium text-blue-600 mb-3">Nuestra Misión</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Formar profesionales líderes, emprendedores y socialmente responsables, a través de un modelo educativo innovador y pertinente, que contribuya al desarrollo sostenible de la sociedad.
                        </p>
                    </div>
                </div>
            </section>

            {/* Faculties Section */}
            <section id="faculties" className="my-12 p-8 bg-white rounded-lg shadow-md">
                <h2 className="text-3xl font-semibold text-blue-700 mb-6 text-center">Nuestras Facultades</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                        <h3 className="text-xl font-medium text-blue-800 mb-2">Ciencias Jurídicas</h3>
                        <p className="text-gray-600">Formando profesionales del derecho con ética y compromiso social.</p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                        <h3 className="text-xl font-medium text-blue-800 mb-2">Ciencias Empresariales</h3>
                        <p className="text-gray-600">Líderes en gestión, finanzas y marketing para el mundo empresarial.</p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                        <h3 className="text-xl font-medium text-blue-800 mb-2">Ciencias Sociales</h3>
                        <p className="text-gray-600">Desarrollando profesionales con visión crítica y social.</p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                        <h3 className="text-xl font-medium text-blue-800 mb-2">Ingeniería</h3>
                        <p className="text-gray-600">Innovación y tecnología al servicio de la sociedad.</p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                        <h3 className="text-xl font-medium text-blue-800 mb-2">Ciencias de la Salud</h3>
                        <p className="text-gray-600">Comprometidos con la salud y el bienestar humano.</p>
                    </div>
                </div>
            </section>

            {/* Campuses Section */}
            <section id="campuses" className="my-12 p-8 bg-gray-100 rounded-lg shadow-md">
                <h2 className="text-3xl font-semibold text-blue-700 mb-6 text-center">Nuestras Sedes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {['Santa Cruz', 'Tarija', 'Potosí', 'Cochabamba', 'La Paz', 'Trinidad', 'Sucre', 'Oruro', 'Cobija'].map(campus => (
                        <div key={campus} className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition duration-300">
                            <h3 className="text-xl font-medium text-blue-800">{campus}</h3>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;