export default {
  global: {
    componenteFormativo: 'Viabilizando el mercado turístico',
    descripcionCurso:
      'Una vez se caracteriza el mercado, se diagnostica el entorno estimando la demanda. En este sentido, es necesario determinar la viabilidad del mercado turístico, lo que equivale a definir si el mercado o la plaza en la cual desea incursionar la empresa es comercialmente atractiva y puede generar la demanda esperada.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Plataforma estratégica',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'El producto turístico y sus sustitutos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Distribución turística',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Estudios de mercado',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Estudios cualitativos',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Estudios cuantitativos',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Mercadeo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Mercadeo análogo',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Mercadeo digital',
            hash: 't_5_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '2. El producto turístico y sus sustitutos ',
      referencia:
        'García, A. y Alburquerque, F. (2003). El turismo cultural y el de sol y playa: ¿sustitutivos o complementarios? Cuadernos de Turismo. Universidad Politécnica de Cartagena.',
      tipo: 'Artículo',
      link: 'https://revistas.um.es/turismo/article/view/19581/18921/',
    },
    {
      tema: '4. Estudios de mercado',
      referencia:
        'Kotler, P. & Armstrong, G. (2007). Marketing, Versión para Latinoamérica. Decimoprimera ed. México. Pearson Educación.',
      tipo: 'Libro',
      link:
        'https://www.academia.edu/42907931/MARKETING_Versi%C3%B3n_para_Latinoam%C3%A9rica',
    },
    {
      tema: '4. Estudios de mercado',
      referencia:
        'Malhotra, N. (2008). Investigación de Mercados. Pearson Educación. Quinta Edición.',
      tipo: 'Libro',
      link:
        'http://www.elmayorportaldegerencia.com/Libros/Mercadeo/%5BPD%5D%20Libros%20-%20Investigacion%20de%20Mercados.pdf',
    },
    {
      tema: '5.1 Mercadeo análogo',
      referencia:
        'Armstrong, G. y Kotler, P. (2013). Fundamentos de marketing. Pearson Educación. Decimoprimera edición.',
      tipo: 'Libro',
      link:
        'https://frrq.cvg.utn.edu.ar/pluginfile.php/14584/mod_resource/content/1/Fundamentos%20del%20Marketing-Kotler.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Cliente',
      significado:
        'Es el centro de la estrategia de la empresa. Representa a la persona o empresa que adquiere los bienes y servicios.',
    },
    {
      termino: 'Distribución turística',
      significado:
        'Es la forma que se emplea para asegurar que el producto turístico llegue a manos de los turistas/ viajeros.',
    },
    {
      termino: 'Encuestas',
      significado:
        'Es la técnica de investigación más utilizada dentro de la metodología cuantitativa, ya que permite recopilar de manera específica, a través de preguntas, gran cantidad de información.',
    },
    {
      termino: 'Investigación cuantitativa',
      significado:
        'Es la investigación de mercados que tiene por fin cuantificar los resultados, por tanto, sus resultados siempre se dan en cifras estadísticas.',
    },
    {
      termino: 'Investigación cualitativa',
      significado:
        'Es la investigación de mercados que permite conocer un tema a profundidad, por tanto, sus resultados suelen estar orientados a características, cualidades y atributos.',
    },
    {
      termino: 'Mercadeo',
      significado:
        'Es el proceso responsable de diseñar y operar las estrategias para que los clientes adquieran los productos de la empresa de una forma rentable.',
    },
    {
      termino: 'Mercadeo análogo',
      significado:
        'Es el mercadeo basado en las herramientas tradicionales, en donde el fundamento se da en el mundo offline o presencial.',
    },
    {
      termino: 'Mercadeo digital',
      significado:
        'Es el mercadeo basado en las herramientas digitales, por lo cual está soportado sobre tecnología y conectividad.',
    },
    {
      termino: 'Mezcla de mercadeo',
      significado:
        'Hace alusión a las cuatro P’s del mercadeo. Son las cuatro variables básicas en el mercadeo: producto, precio, plaza, promoción.',
    },
    {
      termino: 'Producto turístico',
      significado:
        'Es una combinación de elementos materiales e inmateriales, como los recursos naturales, culturales y antrópicos, así como los atractivos turísticos, las instalaciones, los servicios y las actividades en torno a un elemento específico de interés.',
    },
  ],
  referencias: [
    {
      referencia:
        'Kinnear, T. & Taylor, J. (1998). Investigación de Mercados. Editorial Mc. Graw Hill, Bogotá.',
      link: '',
    },
    {
      referencia:
        'Kotler, P. & Armstrong, G. (1996). Mercadotecnia. Editorial Prentice Hall Hispanoamérica. ',
      link: '',
    },
    {
      referencia:
        'Middleton, V., Clarke, J. (2001): Marketing in travel and tourism. Butterworth Heinemann. Oxford.',
      link: '',
    },
    {
      referencia:
        'Shum Xie, Y. M. (2019). Marketing digital: navegando en aguas digitales. Sumérgete conmigo. Ediciones de la U.',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
