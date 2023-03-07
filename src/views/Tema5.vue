<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Mercadeo 


    p Mercadeo o #[em marketing] en inglés, es el nombre con el cual se conoce al conjunto de estrategias, tácticas y actividades que diseña e implementa una empresa para que su portafolio llegue de manera exitosa a los clientes; de hecho, Kotler y Armstrong (2007), definen el mercadeo como:

   
    .row.mt-3.justify-content-center
      .col-9
        .bloque-texto-b.color-acento-contenido.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p El proceso mediante el cual las compañías crean valor para los clientes y establecen relaciones estrechas con ellos, para recibir a cambio valor de los clientes
            i.fas.fa-quote-right
          p.mt-1.px-3.px-md-5.text-center (p. 4).  


      p.mt-2 De acuerdo con lo anterior, el mercadeo es un proceso que cada vez cobra más relevancia dentro de las organizaciones, ya que toda la empresa, sin importar su actividad económica o tamaño (micro, pequeña, mediana o grande), necesita que su portafolio sea adquirido por los clientes y siempre será necesario cuando una empresa viabiliza un mercado y quiere llegar a él. 

      p.mb-4 Acorde con la definición de mercadeo, este cumple varias funciones en una organización:

  
      .row.justify-content-center.mb-4
        .col-lg-4
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema5/img1.png", alt="alt").imagen-deco
        .col-lg-8
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
            .row(titulo="Plantear acciones")
              .col-12
                p.mb-0 Cumple un rol estratégico al plantear acciones que propendan por la sostenibilidad de la empresa en el mediano y largo plazo.

            .row(titulo="Rol operativo")
              .col-12
                p.mb-0 Ejerce un rol operativo, porque entregan al proceso comercial las herramientas necesarias para asegurar la colocación (venta) del portafolio.

            .row(titulo="Identificar nuevos gustos")
              .col-12
                p.mb-0 Tiene la capacidad de identificar nuevos gustos o expectativas en los clientes, y con base en ello, plantear mejoras a los productos existentes o incluso llegar a pensar en la posibilidad de crear nuevos bienes o servicios.

            .row(titulo="Comunica la marca")
              .col-12
                p.mb-0 Comunica la marca y los productos de la empresa. A través de las acciones de mercadeo se puede hacer que el producto sea conocido en diferentes lugares de forma simultánea.


    .row.mt-5.mb-0
      ol.lista-ol--cuadro.lista-ol--separador
        li 
          .lista-ol--cuadro__vineta
            span 
          h4.mb-0 Mercadeo análogo

    .row
      .col-lg-12.mb-4
        p El mercadeo análogo, llamado también en otros espacios mercadeo tradicional, es aquel que se basa en las herramientas del entorno presencial para llegar a los clientes. 

    .row.justify-content-center.mb-4
      .col-10
        .bloque-texto-g.color-primario.tarjetaimgcar.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.carimg(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img2.png')})`}"
          )
          .bloque-texto-g__texto2.p-4
            .col-10.col-lg-12
              p Y es en este contexto del mercadeo tradicional donde surge la mezcla de mercadeo (#[i marketing] mix en inglés) o las famosas cuatro P’s (producto, precio, plaza y promoción), las cuales representan la base conceptual para la implementación de las estrategias de mercadeo. Este concepto es atribuido a #[b Jerome McCarthy], alrededor del año 1970, y está compuesto por cuatro variables sobre las cuales se fundamenta el qué hacer del proceso de mercadeo dentro de las empresas. En este sentido, el reto para las personas de mercadeo es encontrar la mejor combinación posible, asegurando que las cuatro P’s se incorporen en el día a día de la gestión comercial de la compañía.

    .row.justify-content-around.align-items-center
      .col-lg-2.col-sm-10
        figure
          img(src='@/assets/curso/temas/tema5/img3.svg', alt='Texto que describa la imagen').imagen-deco
      .col-lg-10.col-sm-10.mt-4
        p En relación a la mezcla de mercadeo, es importante aclarar que estas variables constituyen lo mínimo que debe asegurar una empresa, y dado que el mercadeo ha ido evolucionando, algunos autores mencionan las 7P’s como una vista más integral en un enfoque de mercadeo. 

        p De acuerdo con lo anterior, las tres variables que complementan las tradicionales 4P’s son: personas, procesos y posicionamiento.

    .row.mt-5
      ol.lista-ol--cuadro.lista-ol--separador
        li 
          .lista-ol--cuadro__vineta
            span 
          h4 Representación esquemática de las 7P’s del mercadeo 
    
    p A continuación, se presentan las variables que conforman la mezcla de mercadeo:
    
    .row.justify-content-center.align-items-center.my-lg-4
      .col-lg-6
        ImagenInfografica.color-acento-botones.tema5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema5/img4.png', alt='Texto que describa la imagen')
              
        
          .tarjeta.color-acento-botones.p-4(x="58%" y="27%" numero="")
            .row.align-items-center
              .col-4
                figure
                img(src="@/assets/curso/temas/tema5/icono1.svg" )  

              .col-lg-8
                b.mb-1 Producto:
                p Aquello que la empresa ofrece al mercado. 

          .tarjeta.color-acento-botones.p-3(x="71%" y="40%" numero="") 
            .row.align-items-center
              .col-4
                figure
                img(src="@/assets/curso/temas/tema5/icono2.svg" )       
              .col-8      
                b Precio:
                p Es el valor monetario de la transacción, es decir, es lo que paga el cliente a cambio de obtener el producto que requiere.

          .tarjeta.color-acento-botones.p-3(x="69%" y="61.2%" numero="")
            .row.align-items-center
              .col-4
                figure
                img(src="@/assets/curso/temas/tema5/icono3.svg")       
              .col-8.p-2
                b Promoción (comunicación): 
                p Está relacionada con aquellas tácticas enfocadas en la marca y en la comunicación de la oferta de valor.

          .tarjeta.color-acento-botones.p-3(x="51%" y="73.5%" numero="")
            .row.align-items-center
              .col-4
                figure
                img(src="@/assets/curso/temas/tema5/icono4.svg" )       
              .col-8
                b Plaza:
                p Está asociada a los canales de distribución y cómo se asegura que el producto llegue a manos del cliente.

          .tarjeta.color-acento-botones.p-3(x="36%" y="68%" numero="")
            .row.align-items-center
              .col-lg-4
                figure
                img(src="@/assets/curso/temas/tema5/icono5.svg" )       
              .col-lg-8
                b Personas:
                p Los colaboradores de la empresa son los que pueden realmente hacer que las cosas sucedan; es por ello que se convierten en protagonistas dentro de las estrategias de mercadeo. Asimismo, son las personas las que generalmente van a interactuar con los clientes y generarán en ellos percepciones positivas o negativas de la marca.

          .tarjeta.color-acento-botones.p-3(x="28%" y="48%" numero="")
            .row.align-items-center
              .col-lg-4
                figure
                img(src="@/assets/curso/temas/tema5/icono6.svg" )       
              .col-lg-8
                b Procesos:
                p Para que las diferentes acciones de mercadeo se lleven a cabo de la mejor manera posible, deben existir procesos que permitan que, de cara al cliente, todo tenga estructura y un paso a paso claro y sencillo para interactuar con la empresa en el momento de gestionar sus requerimientos.

          .tarjeta.color-acento-botones.p-3(x="38%" y="29%" numero="")
            .row.align-items-center
              .col-lg-4
                figure
                img(src="@/assets/curso/temas/tema5/icono7.svg" )       
              .col-lg-8
                b Posicionamiento:
                p Estar posicionado es estar en la mente del cliente, es por esto que las empresas diseñan cada vez más tácticas que permitan llegar a los clientes y quedar de primero en sus pensamientos, y luego en su corazón cuando piensan en una categoría.


    .row.justify-content-center.mt-5
      .col-lg-10.sm-8
        .cajon.color-acento-contenido.p-4
          p.mb-0 En resumen, las empresas que requieren implementar un mercadeo con sentido en su organización necesitan tener un producto que ofrecer al mercado. Dichos productos, bienes o servicios serán adquiridos por los clientes a un determinado precio, sin embargo, para que el producto llegue a manos del cliente se requiere contar con canales de distribución (plaza) y por supuesto, para que los clientes sepan que la marca existe, esta debe ser promocionada. Bajo esta perspectiva, las 4P’s seguirán existiendo porque son la base sobre la cual se fundamenta el accionar comercial. Asimismo, en el enfoque moderno contar con buenos procesos, una marca posicionada y colaboradores comprometidos (personas) será un #[em mix] perfecto para llegar con una fórmula retadora al mercado y poder hacer frente a un entorno tan competitivo como el actual.


    .row.mt-5
      ol.lista-ol--cuadro.lista-ol--separador
        li 
          .lista-ol--cuadro__vineta
            span 
          h4.mb-0 Mercadeo digital 


    .row.justify-content-center.align-items-center
          .col-3.mb-5.sm-8
            figure
              img(src='@/assets/curso/temas/tema5/img5.png', alt='Texto que describa la imagen')
          .col-lg-7.mb-5.sm-8
            p.mt-1 El mercadeo digital (en inglés #[em digital marketing]) es el mercadeo que utilizan los canales o medios #[em online] para darse a conocer, es decir, se aprovecha del uso de la tecnología para realizar sus actividades. Es un término muy utilizado dado que, debido al Covid-19, durante un tiempo se convirtió en la única forma de generar contacto con sus clientes y dar a conocer la oferta para muchas empresas.

    .row
      .col-lg-12.mb-5
        p El mercadeo digital ofrece un sin número de oportunidades para las empresas, aunque también tiene algunas limitantes. Con el fin de dar mejores perspectivas de este tema, a continuación se muestran las principales ventajas que trae el mercado digital:

    .row.justify-content-center
      .col-lg-8
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--verde")
          .row(titulo="Menores costos")
            .col-12
              p Representa menores costos en su implementación: el mercadeo tradicional se caracteriza por tener costos elevados; a través del internet es posible implementar acciones con bajo costo, e incluso gratuitas en algunos casos.

          .row(titulo="Mediciones")
            .col-12
              p El mercadeo digital permite obtener métricas (indicadores) de desempeño en tiempo real, en el mercadeo tradicional es muy difícil obtener esta información.

          .row(titulo="Flexibilidad para realizar ajustes")
            .col-12
              p Dado que en tiempo real se tienen métricas, para las empresas es relativamente fácil cambiar de tácticas o de actividad en caso de que lo que se está realizando no esté funcionando de la manera esperada.
   
          .row(titulo="Audiencias")
            .col-12
              p Permite llegar a audiencias (públicos) muy jóvenes, dado que son el grupo más conectado y cercano a la tecnología.

      .col-lg-4.d-none.d-lg-flex
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema5/img6.png", alt="alt").imagen-deco

    
    
    .row
      ol.lista-ol--cuadro.lista-ol--separador
        li 
          .lista-ol--cuadro__vineta
            span 
          h4.mb-0 Las 4C´s del mercadeo digital

    p En el mercadeo digital, las 4P’s del tradicional son reemplazadas por las 4C para hacer más hincapié al relacionamiento con los clientes; en este sentido, se definen las C del mercadeo digital como: Consumidor, Comunicación, Costo y Conveniencia (Shum, 2019). 

    p.mb-4 A continuación, se menciona brevemente el enfoque de cada una de estas variables:      

    .row.justify-content-center.align-items-center.my-lg-4
      .col-lg-5
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema5/img7.png', alt='Texto que describa la imagen')

          .tarjeta.color-acento-botones.p-4(x="50%" y="21%" numero="1")
            .col-lg-12  
              b.mb-1 Consumidor (cliente o usuario): 
              p Es el centro de la estrategia de una empresa, por ello, a medida que crece la audiencia, la marca puede detallar más y más sobre las necesidades, deseos y expectativas de sus clientes actuales o potenciales.

          .tarjeta.color-acento-contenido.p-4(x="79%" y="50%" numero="2")
            .col-lg-12  
              b.mb-1 Comunicación:
              p Promover la marca, la esencia, los objetivos, la visión y los valores de una empresa son elementos claves en la interacción con la audiencia; por ello la comunicación constante es una clave para generar confianza, a fin de poder capitalizar el tiempo que el cliente (potencial o actual) dedica a prestar atención al contenido enviado.

          .tarjeta.color-primario.p-4(x="50%" y="79%" numero="3")
            .col-lg-12  
              b.mb-1 Costo:
              p Es un factor importante para que el cliente pueda decidir si adquirir o no el producto, depende mucho de la cantidad a invertir y el poder adquisitivo del público objetivo de la marca, por ello siempre deberá tenerse en el radar esta variable a la hora de interactuar con los clientes.

          .tarjeta.color-secundario.p-4(x="21%" y="50%" numero="4")
            .col-lg-12  
              b.mb-1 Conveniencia:
              p Hacer la vida más fácil, simple y rápida para obtener una respuesta y concretar la compra sin complicaciones; debe ser una variable importante dentro de los elementos digitales que tenga la empresa. La comodidad del cliente debe ser una prioridad de la marca y es uno de los atributos más valorados por los clientes actualmente.

    .row.justify-content-around.align-items-centerrd.mt-5
          .col-10
            .tarjeta.bg8.mt-2.p-3
              .row.justify-content-around.align-items-center
                .col-lg-1.mb-3
                  img(src="@/assets/curso/temas/tema4/img11.svg" width="200px" height="100px")
                .col-11
                  .row.justify-content-between.align-items-center
                    .col.mb-4.mb-sm-0
                      h4.mb-1.text-white Medios digitales
                      p.text-white Para ampliar la información, lo invitamos a ver el #[b Anexo 2. Medios digitales], en el cual se detallan aspectos relacionados con los medios en mercadeo digital propios, pagos y ganados.   
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Anexo 2. CF07 Medios digitales.pdf')" target="_blank")
                        span Descargar
                        i.fas.fa-file-download

    .row.justify-content-center.mt-5
      .col-lg-8.sm-8
        .cajon.color-acento-contenido.p-4
          p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo. Para ello diríjase al menú principal, en donde encontrará la síntesis, la actividad didáctica, material complementario, entre otros.
      



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
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
