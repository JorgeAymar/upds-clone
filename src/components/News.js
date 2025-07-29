
import React from 'react';

const News = () => {
    return (
        <section id="noticias" className="py-8 px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Últimas Noticias</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <article className="bg-white p-6 rounded-lg shadow-md">
                    <img src="https://www.upds.edu.bo/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-23-at-15.33.38-1024x683.jpeg" alt="News 1" className="w-full h-48 object-cover rounded-md mb-4" />
                    <h3 className="text-xl font-semibold mb-2">¡Éxito rotundo! El libro “Isaac Attie, el regreso del turco rubio” deslumbró en la UPDS Tarija</h3>
                    <p className="text-gray-700">El evento se realizó el 23 de julio en el auditorio principal de la UPDS Tarija, con la presencia de destacadas autoridades municipales, académicas, autores</p>
                </article>
                <article className="bg-white p-6 rounded-lg shadow-md">
                    <img src="https://www.upds.edu.bo/wp-content/uploads/2024/07/universo-1-1024x683.jpeg" alt="News 2" className="w-full h-48 object-cover rounded-md mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Nuevo artículo de investigación de docente de Ciencias Empresariales es publicado en revista científica indexada internacionalmente</h3>
                    <p className="text-gray-700">El artículo fue publicado en la revista indexada O Universo Observável y trata sobre el papel de las reservas internacionales en la sostenibilidad económica de</p>
                </article>
                <article className="bg-white p-6 rounded-lg shadow-md">
                    <img src="https://www.upds.edu.bo/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-18-at-09.39.20-1024x683.jpeg" alt="News 3" className="w-full h-48 object-cover rounded-md mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Estudiantes de Microeconomía de la UPDS impulsan iniciativas de reciclaje en mercados populares de Santa Cruz</h3>
                    <p className="text-gray-700">Los jóvenes desarrollaron proyectos de reciclaje en mercados populares de Santa Cruz, implementando iniciativas como contenedores para PET, ladrillos ecológicos y bolsas biodegradables. En el</p>
                </article>
            </div>
        </section>
    );
};

export default News;
