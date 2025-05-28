export type Vestuario = {
    id: string;
    nombre: string;
    descripcion: string;
    estadoID: string;
    generoID: string;
    disponible: boolean;
    fechaEntrada?: Date;
    imagen?: string
}

export type Prestamo = {
    id: string;
    bailarinID: string;
    bailarinNombre: string;
    vestuarioID: string;
    fechaPrestamo: Date;
    fechaDevolucion?: Date;
    estado: "disponible" | "prestado" | "atrasado";
    notas?: string;
}