<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 El producto turístico y sus sustitutos

    .row.justify-content-around.align-items-center.mt-5.mb-5
      .row
        .col-lg-8.mb-5
          p Se tienen muchas definiciones para el producto turístico, sin embargo, una de las más completas y claras es la de la Organización Internacional del Turismo (OMT):
          
          .col-lg-12.sm-8
            .cajon.color-acento-contenido.p-4.mb-4     
              p “Un producto turístico es una combinación de elementos materiales e inmateriales, como los recursos naturales, culturales y antrópicos, así como los atractivos turísticos, las instalaciones, los servicios y las actividades en torno a un elemento específico de interés, que representa la esencia del plan de comercialización de un destino y genera una experiencia turística integral, con elementos emocionales, para los posibles clientes.”
          .col-lg-12.sm-8
            p No obstante, por más que se haga referencia a un producto turístico, sigue atendiendo a la premisa básica del mercadeo y está orientado a la satisfacción de las necesidades, gustos y expectativas de los clientes.

        
        .col-lg-4
          figure
            img(src='@/assets/curso/temas/tema2/img1.png', alt='Texto que describa la imagen').imagen-deco
        .col-lg-12
          p.mt-3 Para profundizar en el entendimiento del producto turístico, 
            i Middleton y Clarke 
            | (2001) definen como las principales características de los productos turísticos, las siguientes:


    .row.mt-5.justify-content-center.imgslider
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center.my-lg-4
          .col-lg-6
            .number(data-number="01")
              b.ps-2 Estacionalidad
              p.ps-2.mb-0.mt-2 esta es una variable implícita para el turismo y está asociada a que los usuarios de los servicios turísticos tienen ciertas épocas del año destinadas a hacer uso del turismo, lo que genera como consecuencia que los productos turísticos sean usados por ‘temporadas’. Esta variable está influenciada principalmente por aspectos climáticos, laborales, culturales y religiosos, ya que cada uno de estos momentos lleva consigo la asociación de cierto tipo de lugares. Por ejemplo, es común ver en Colombia los destinos turísticos con mayor ocupación en vacaciones de fin, comienzo y mitad de año, así como en Semana Santa.
          .col-6.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema2/img2.png')

        .row.justify-content-center.align-items-center.my-lg-4
          .col-lg-6
            .number(data-number="02")
              b.ps-2 Costos fijos de las operaciones: 
              p.ps-2.mb-0.mt-2 un costo fijo se entiende como aquellos costos en los que se incurre, independientemente del nivel de ventas o de la comercialización que tiene la empresa; de alguna manera, son aquellos que garantizan la operación de la empresa a nivel administrativo y de infraestructura. En este sentido, en los productos turísticos los costos fijos de las operaciones suelen ser altos, ya que están asociados al mantenimiento y conservación que, indistinto del nivel de clientes que se tengan, se debe garantizar que estén en buen estado, pues de no cuidarlos, el costo de implementar acciones correctivas va a ser mucho más alto que el que se tuvo con fines preventivos. 
          .col-6.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema2/img3.png')

        .row.justify-content-center.align-items-center.my-lg-4
          .col-lg-6
            .number(data-number="03")
              h5.ps-2 Interdependencia con los otros productos turísticos: 
              p.ps-2.mb-0.mt-2 el turismo es quizá de los sectores donde se evidencia la mayor interdependencia con los otros productos turísticos, ello implica que el uso o disfrute de un servicio tenga relación directa con la necesidad de usar otro. Por ejemplo, una visita a un museo tiene interdependencia con un servicio de desplazamiento.
          .col-6.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema2/img4.png')
    p.mt-5 El otro aspecto relevante al momento de hablar sobre un producto turístico está asociado con sus componentes, los cuales son definidos por Smith (1994) como un modelo de círculos concéntricos, donde cada vez que se avanza en el ciclo la empresa deja de tener participación y el cliente a ganarla (p. 17); dichos componentes son: la planta física, el servicio, la hospitalidad, la libertad de elección y la implicación del cliente, los cuales se explicarán a continuación:
   
    

    .row.justify-content-center.align-items-center.my-lg-4
      .col-lg-5
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/img5.png', alt='Texto que describa la imagen')
              
         
          .tarjeta.bg1(x="50%" y="2%" numero="1")
            .row.justify-content-around.align-items-center.p-4
              .col-2
                figure
                img(src="@/assets/curso/temas/tema2/icono1.svg").img300
              .col-lg-10
                .row.justify-content-between.align-items-center
                  .col-xl-12
                    b.mb-1.text-white La planta física
                    p.text-small.text-white Es considerada el fundamento del producto turístico y está asociado con las instalaciones, lugares y recursos naturales donde funciona el producto. Asimismo, incluye las condiciones ambientales y meteorológicas del destino en cuestión. Este componente puede, en primera instancia, ser el generador de interés por parte del cliente interesado, y por tanto, tiene gran preponderancia en la evaluación que haga el turista del lugar.
            

          .tarjeta.bg2(x="50%" y="16%" numero="2")
           .row.justify-content-around.align-items-center.p-4
            .col-2
              figure
              img(src="@/assets/curso/temas/tema2/icono2.svg").img300   
            .col-lg-10
              .row.justify-content-between.align-items-center
                .col-xl-12        
                  b.mb-1.text-white El servicio: 
                  p.text-small.text-white es lo que le da la usabilidad al producto turístico, es decir, es lo que genera que se pueda generar la experiencia para el cliente. En términos prácticos, está constituido por todas aquellas actividades que se realizan para satisfacer las necesidades de los clientes, por lo que el papel de los colaboradores de la empresa es vital para prestar un buen servicio.

          
          .tarjeta.bg3(x="50%" y="29.2%" numero="3")
           .row.justify-content-around.align-items-center.p-4
            .col-2
              figure
              img(src="@/assets/curso/temas/tema2/icono3.svg").img300
            .col-lg-10
              .row.justify-content-between.align-items-center
                .col-xl-12
                  b.mb-1.text-white La hospitalidad: 
                  p.text-small.text-white esta variable hace alusión a ‘dar la milla extra’, es decir, la hospitalidad se refiere al hecho de ir más allá, de hacer sentir al visitante tan cómodo como si estuviera en su casa. Aquí los colaboradores son protagonistas porque van más allá de prestar el servicio y se enfocan en que los visitantes tengan experiencias memorables, por tanto, esta aplica desde el mismo momento del recibimiento hasta la acogida.

        
          .tarjeta.bg4(x="50%" y="40.5%" numero="4")
           .row.justify-content-around.align-items-center.p-4
            .col-2
              figure
              img(src="@/assets/curso/temas/tema2/icono4.svg").img300
            .col-lg-10
              .row.justify-content-between.align-items-center
                .col-xl-12
                 b.mb-1.text-white La libertad de elección: 
                 p.text-small.text-white se refiere a la disponibilidad de opciones para el turista, que este pueda comparar, analizar y escoger entre las opciones existentes, de modo que al elegir sienta que esta es la opción que mejor cumplirá sus requerimientos. Por supuesto, la capacidad de elección no solo dependerá de la necesidad, sino también de la cantidad de recursos disponibles (presupuesto, tiempo) y de la disponibilidad que brinda el operador turístico, la agencia de viajes o quien haga sus veces, sin embargo, todo producto turístico por principio básico debería poder tener habilitadas varias opciones.

          .tarjeta.bg5(x="50%" y="53.6%" numero="5")
           .row.justify-content-around.align-items-center.p-4
            .col-2
              figure
              img(src="@/assets/curso/temas/tema2/icono5.svg").img300
            .col-lg-10
              .row.justify-content-between.align-items-center
                .col-xl-12
                 b.mb-1.text-white La implicación del cliente:
                 p.text-small.text-white la implicación del cliente se da en la medida en que el cliente se sienta parte del producto turístico, y eso se da a partir de la combinación de los demás componentes (planta física, servicio, hospitalidad y libertad de elección), a la vez que interactúa con otros turistas.

    .row.mt-5
      ol.lista-ol--cuadro.lista-ol--separador
        li 
          .lista-ol--cuadro__vineta
            span 
          b Sustitutos del producto turístico

    p.mt-1 A continuación, se precisa el concepto de producto sustituto en relación con las actividades turísticas. En términos técnicos, un producto sustituto es un producto diferente que satisface la misma necesidad.

    .container.tarjeta.p-3.p-md-3
    SlyderB.ps-4.mb-0(:datos="datosSlyder").imgslider2
      

</template>

<script>
export default {
  components: {},
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Producto sustituto',
        texto:
          'Enfocado en el turismo, se podrían concebir los sustitutos para el producto turístico desde tres puntos de vista: la primera hace alusión a la necesidad que tiene la persona de disfrutar su tiempo libre o de descanso, realizando alguna actividad, el segundo asociado a la elección del producto turístico y el tercero se da una vez ya elegido el producto turístico, donde la aparición de sustitutos y la competencia en sí se da entre los atractivos disponibles.',
        imagen: require('@/assets/curso/temas/tema2/img7.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Disfrutar el tiempo libre',
        texto:
          'En el primer escenario, donde la elección de disfrutar el tiempo libre se da entre el turismo, representado en conocer o visitar un lugar, los sustitutos son eventos culturales, trabajo complementario o la actividad de realizar obras de caridad o solidaridad, es decir, todo aquello que represente el uso del tiempo sin que implique temas turísticos. En este caso, la elección final por parte del usuario está relacionada con sus preferencias, el tiempo y dinero disponible.',
        imagen: require('@/assets/curso/temas/tema2/img8.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Productos turísticos enfocados en naturaleza',
        texto:
          'En el segundo escenario, asociado a la elección del producto turístico, cada uno se vuelve un sustituto del otro, es decir, los productos turísticos enfocados en naturaleza, los relacionados con bienestar, con cultura, con negocios o simplemente con infraestructura física, constituyen un conjunto de opciones disponibles para los interesados.',
        imagen: require('@/assets/curso/temas/tema2/img9.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Atractivos disponibles en el producto turístico',
        texto:
          'El tercer escenario, relacionado con los atractivos disponibles en el producto turístico, está inscrito en la satisfacción de un interés particular y en las características con las que cuenta cada atractivo.',
        imagen: require('@/assets/curso/temas/tema2/img10.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
