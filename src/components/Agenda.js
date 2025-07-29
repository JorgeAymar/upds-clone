
import React from 'react';

const Agenda = () => {
    return (
        <section id="agenda" className="py-8 px-4 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-8">Agenda de Actividades</h2>
            <ul className="space-y-4">
                <li className="bg-white p-4 rounded-lg shadow-md">
                    <time dateTime="2025-08-02T08:00" className="text-sm text-gray-500">agosto 2, 2025 08:00</time>
                    <p className="text-lg font-medium">Campeonato administrativo 2025</p>
                </li>
                <li className="bg-white p-4 rounded-lg shadow-md">
                    <time dateTime="2025-08-02T08:30" className="text-sm text-gray-500">agosto 2, 2025 08:30</time>
                    <p className="text-lg font-medium">Taller :Gestionando tu miedo escénico con una oratoria altamente persuasiva</p>
                </li>
                <li className="bg-white p-4 rounded-lg shadow-md">
                    <time dateTime="2025-08-01T08:00" className="text-sm text-gray-500">agosto 1, 2025 08:00</time>
                    <p className="text-lg font-medium">Curso propedéutico</p>
                </li>
            </ul>
        </section>
    );
};

export default Agenda;
