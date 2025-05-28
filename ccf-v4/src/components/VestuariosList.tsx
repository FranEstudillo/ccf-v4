"use client"; 
import { useState } from "react";

export default function VestuariosList() {
    const [vestuarios, setVestuarios] = useState<Vestuario[]>([
        {id: "1", nombre: "Traje de charro Blanco", descripcion: "Pantalón, chaleco, Saco", estadoID: "1", generoID: "2", disponible: true}
    ]);

	return (
			<div className="mt-6"> 
					<h2 className="text-xl font-semibold">Inventario de Vestuarios</h2>
						<ul className="mt-4 space-y-2">
								{vestuarios.map((vestuario) => (
										<li key={vestuario.id} className="p-4 border rounded-lg flex justify-between items-center">
											<div>
												<h3 className="font-medium">{vestuario.nombre}</h3>
												<p className="text-sm text-gray-600">{vestuario.descripcion}</p>
											</div>
											<span className={`px-3 py-1 rounded-full text-xs ${vestuario.disponible ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
												{vestuario.disponible ? 'Disponible' : 'Prestado'}
											</span>
										</li>
								))}
						</ul>
			</div>
	);
}