// GROQ query constants — imported by pages and used with sanityFetch()

export const Q = {
  // Proyectos
  proyectosDestacados: `*[_type == "proyecto" && destacado == true] | order(orden asc) {
    _id, titulo, slug, categorias, destacado,
    imagenes[]{ asset->{url}, alt },
    descripcion
  }`,

  todosProyectos: `*[_type == "proyecto"] | order(orden asc) {
    _id, titulo, slug, categorias,
    imagenes[]{ asset->{url}, alt }
  }`,

  proyectoPorSlug: `*[_type == "proyecto" && slug.current == $slug][0] {
    _id, titulo, slug, categorias, descripcion,
    imagenes[]{ asset->{url}, alt },
    servicioRelacionado->{ nombre, slug },
    cliente, fechaFinalizacion
  }`,

  // Artículos
  articulosRecientes: `*[_type == "articulo" && publicado == true] | order(fechaPublicacion desc)[0...3] {
    _id, titulo, slug, resumen,
    imagenDestacada{ asset->{url}, alt },
    fechaPublicacion, categorias
  }`,

  todosArticulos: `*[_type == "articulo" && publicado == true] | order(fechaPublicacion desc) {
    _id, titulo, slug, resumen,
    imagenDestacada{ asset->{url}, alt },
    fechaPublicacion, categorias
  }`,

  articuloPorSlug: `*[_type == "articulo" && slug.current == $slug && publicado == true][0] {
    _id, titulo, slug, cuerpo, resumen, autor,
    imagenDestacada{ asset->{url}, alt },
    fechaPublicacion, categorias
  }`,

  // Servicios
  servicios: `*[_type == "servicio"] | order(orden asc) {
    _id, nombre, slug, descripcionCorta, icono,
    imagenes[]{ asset->{url}, alt }
  }`,

  servicioPorSlug: `*[_type == "servicio" && slug.current == $slug][0] {
    _id, nombre, slug, descripcionCorta, descripcionLarga,
    imagenes[]{ asset->{url}, alt },
    proyectosRelacionados[]->{ titulo, slug, imagenes[]{ asset->{url}, alt } }
  }`,

  // FAQ
  faqItems: `*[_type == "faqItem" && visible == true] | order(orden asc) {
    _id, pregunta, respuesta, orden, categoria
  }`,

  // Testimonios
  testimonios: `*[_type == "testimonio" && visible == true] | order(orden asc) {
    _id, texto, autor, plataforma, fecha
  }`,

  // Productos
  productosDisponibles: `*[_type == "producto" && disponible == true] | order(_createdAt desc) {
    _id, nombre, slug, precio, rangoPrecio, precioHasta, categoriaProducto,
    imagenes[]{ asset->{url}, alt }
  }`,

  productoPorSlug: `*[_type == "producto" && slug.current == $slug && disponible == true][0] {
    _id, nombre, slug, descripcion, precio, rangoPrecio, precioHasta,
    categoriaProducto, sku, peso,
    imagenes[]{ asset->{url}, alt }
  }`,

  // Página de cliente (SSR — solo desde el Worker)
  paginaClientePorSlug: `*[_type == "paginaCliente" && slug.current == $slug][0] {
    _id, nombreProyecto, slug, estado, encargado,
    fechaInicio, fechaEntregaEstimada,
    actualizaciones[] | order(fecha desc) {
      fecha, texto,
      imagenes[]{ asset->{url}, alt }
    },
    documentos[]{ asset->{url}, nombre }
  }`,
} as const
