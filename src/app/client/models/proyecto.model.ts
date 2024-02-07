
export interface ProyectoImagen {
  itemImageSrc: string;
  thumbnailImageSrc: string;
  alt: string;
  title: string;
}

export interface Proyecto {
  ruta: string;
  nombre: string;
  descripcion: {
    opciones: { [key: string]: string };
  };
  imagenes: ProyectoImagen[];
}

