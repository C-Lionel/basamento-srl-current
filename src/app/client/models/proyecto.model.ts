
export interface ProyectoImagen {
  itemImageSrc: string;
  thumbnailImageSrc: string;
  alt: string;
  title: string;
}

export interface Servicio {
  ruta: string;
  nombre: string;
  descripcion: string;
  imagenes: ProyectoImagen[];
}

