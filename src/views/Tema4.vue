<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Estudios de mercado

    .row.justify-content-center.align-items-center
          .col-3.mb-5.sm-8
             figure
               img(src='@/assets/curso/temas/tema4/img1.png', alt='Texto que describa la imagen').imagen-deco
          .col-lg-5.mb-5.sm-8
            p.mt-1 Un estudio de mercado es una investigación que se realiza antes de que una empresa entre a un nuevo mercado o plaza. Es por ello que para comprender el concepto de estudio de mercado debe conocerse y apreciarse el de investigación de mercados, el cual es el insumo para realizar dichos estudios.

    .row.mt-3.justify-content-center
      .col-10.col-lg-8
        b Kotler, P. 
        p (1996), define la investigación de mercados como: 
        
        .bloque-texto-b.color-acento-contenido.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p la planeación, recopilación y análisis de la información relevante para la toma de decisiones en las estrategias de marketing de las organizaciones
            i.fas.fa-quote-right
            p  (p. 21).

      .col-10.col-lg-8
        p Por su parte, #[b Kinnear & Taylor] (1998) la interpretan como: 

        .bloque-texto-b.color-cajon.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p un enfoque sistemático y objetivo del desarrollo y la provisión de información aplicable al proceso de toma de decisiones en la gerencia de mercadeo
            i.fas.fa-quote-right
            p (p. 13).

    .row.mt-5.justify-content-center
      .col-lg-10
        p Complementando estas definiciones, podría decirse que las investigaciones tienen por fin la entrega de información que permita conocer sobre un tema de interés de forma oportuna, es decir, en el momento en que se requiere y cuando es aplicada a un estudio de mercado, la finalidad será proporcionar información valiosa que permita a una empresa tomar la decisión de si es conveniente o no ingresar a un nuevo mercado, entendido como una nueva plaza o geografía.

      p Para comprender el proceso de la investigación de mercados, este se resumirá en los siguientes pasos: 

    .row.mt-5
      ol.lista-ol--cuadro.lista-ol--separador
        li 
          .lista-ol--cuadro__vineta
            span 
          b Proceso de realización de una investigación de mercados

    .row.justify-content-center.mb-5
    .col-lg-11.position-relative
      .avatar
        figure
        img(src="@/assets/curso/temas/tema4/img14.png", alt="alt").img250
      .tarjeta.imgpestanaborder.p-4(titulo="Planeación")
        .row
          .col-1
            figure
            img(src='@/assets/curso/temas/tema4/icono1.svg' width='110px' height='110px')

          .col-9
            h4 Planeación
            p Es el momento en el que se define el objetivo de investigación, alcance, tiempo estimado y presupuesto. En el caso de un estudio de mercado, el fin es obtener información valiosa sobre un determinado mercado.
      
      .tarjeta.imgpestanas2.p-4(titulo="Diseño")
        .row
          .col-1
            figure
            img(src='@/assets/curso/temas/tema4/icono2.svg' width='110px' height='110px')

          .col-9
            h4 Diseño
            p Consiste en definir qué tipo de metodología se aplicará y a través de qué instrumento de recopilación de datos se realizará.

      .tarjeta.imgpestana.p-4(titulo="Trabajo de campo")
        .row
          .col-1
            figure
            img(src='@/assets/curso/temas/tema4/icono3.svg' width='110px' height='110px')

          .col-9
            h4 Diseño
            p Se refiere al levantamiento de información con el público objetivo del estudio.
      

      .tarjeta.imgpestanas2.p-4(titulo="Procesamiento y análisis")
        .row
          .col-1
            figure
            img(src='@/assets/curso/temas/tema4/icono4.svg' width='110px' height='110px')

          .col-9
            h4 Procesamiento y análisis
            p Consiste en convertir todos los datos recogidos en información, para lo cual se utilizan aplicaciones informáticas que pueden ser tan sencillas como Excel, o tan especializadas como los paquetes estadísticos. 

      .tarjeta.imgpestana.p-4(titulo="Elaborar el informe")
        .row
          .col-1
            figure
            img(src='@/assets/curso/temas/tema4/icono5.svg' width='110px' height='110px')

          .col-9
            h4 Elaborar el informe
            p Se estructura todo, contendrá imágenes, gráficos, tablas y texto que permitan mostrar de forma clara lo recopilado. Y sexto, aunque no menos importante.

      .tarjeta.imgpestanaborder2.p-4(titulo="Presentación de resultados")
        .row
          .col-1
            figure
            img(src='@/assets/curso/temas/tema4/icono6.svg' width='110px' height='110px')

          .col-9
            h4 Presentación de resultados
            p Constituye el momento de verdad entre quien presenta la investigación y quien la solicitó, y es aquel instante donde se exponen los resultados obtenidos al realizar la investigación. Cuando se ha hecho un estudio para viabilizar un mercado, el informe deberá dar claras señales de si es conveniente o no para la empresa ingresar al nuevo mercado. 
      
        

      p.mt-5 Se detalla el proceso para la realización de una investigación de mercados con un ejemplo.

    .row.mt-5
      ol.lista-ol--cuadro.lista-ol--separador
        li 
          .lista-ol--cuadro__vineta
            span 
          b Ejemplo del proceso para la realización de una investigación de mercados

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Hotel La Mejor Estancia" :icono="require('@/assets/curso/temas/tema4/img2.svg')")
        .row
          .col-lg-2.mb-5
             figure
               img(src='@/assets/curso/temas/tema4/img3.png', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            h4 Hoten La Mejor Estancia
            p Los directivos del Hotel La Mejor Estancia desean conocer si es viable abrir un nuevo hotel en el Valle del Cauca. Para ello, el gerente le solicita al equipo de mercadeo que realice una investigación de mercados.                 
      
      .py-4.py-md-5(titulo="Gustos, necesidades y expectativas de los huéspedes" :icono="require('@/assets/curso/temas/tema4/img4.png')")
        .row
          .col-lg-2.mb-5
             figure
               img(src='@/assets/curso/temas/tema4/img5.png', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            h4 Gustos, necesidades y expectativas de los huéspedes
            p El director de mercadeo reúne a su equipo de trabajo y define que requieren realizar un estudio para conocer cuáles son los gustos, necesidades y expectativas de los huéspedes en el Valle del Cauca, así como para entender el potencial de demanda que tendría el hotel; para ello les indica que espera realizar unas encuestas representativas. Este primer momento es entonces la planeación. 
          .col-md-6.mb-4.mb-md-0
            .tira_1
      
      .py-4.py-md-5(titulo="Diseño de la investigación" :icono="require('@/assets/curso/temas/tema4/img6.png')")
        .row
          .col-lg-2.mb-5
             figure
               img(src='@/assets/curso/temas/tema4/img7.png', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            h4 Diseño de la investigación
            p Posteriormente, el equipo de mercadeo decide que va a realizar 400 encuestas y procede a realizar el cuestionario respectivo, esto es lo que se denomina ‘diseño de la investigación’. Una vez se capacitan los encuestadores y estos comienzan a realizar las encuestas, se indica entonces que comenzó el trabajo de campo.
          .col-md-6.mb-4.mb-md-0
            .tira_2

      .py-4.py-md-5(titulo="Presentación de resultados" :icono="require('@/assets/curso/temas/tema4/img8.png')")
        .row
          .col-lg-2.mb-5
             figure
               img(src='@/assets/curso/temas/tema4/img9.png', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            h4 Presentación de resultados
            p Cuando las 400 encuestas son realizadas y se entregan al estadístico del equipo para que las procese y genere las tablas y gráficos, el proceso se encuentra en etapa de procesamiento y análisis, y cuando se entrega al analista de mercadeo para que estructure el informe que se presentará a la junta directiva, se está realizando la elaboración del informe. Dos semanas después, cuando el gerente de mercadeo lleva el informe a la reunión de directivos, se finaliza el proceso con la presentación de resultados.
          .col-md-6.mb-4.mb-md-0
            .tira_3

    separador

    #t_4_1.titulo-segundo.color-acento-contenido.mt-5
      h2 4.1  Estudios cualitativos

    .row
      .col
          figure
            img(src='@/assets/curso/temas/tema4/img10.png', alt='Texto que describa la imagen')
      
      p.mt-5 Se basa en la ‘cualificación y caracterización’, suele tener un carácter exploratorio y descriptivo, y dar respuesta a preguntas como cuáles, cómo, en dónde, para qué, por qué y quiénes, por lo que en algunos casos se suele entender como centrada en la fenomenología y la comprensión, lo que conlleva a volúmenes de información considerables; aunque como consecuencia de esto también puede generar información subjetiva. Los resultados de la aplicación de esta metodología son funcionales solo para los participantes en el estudio, por tanto, no pueden generalizarse para la población (a diferencia de la metodología cuantitativa).
      p No obstante, tiene como ventaja que la información posee un alto nivel de detalle y profundidad, por lo que permite entender fenómenos o situaciones que a simple vista no se detectan. En la metodología cualitativa se tienen muchas técnicas a disposición, ya que el mercadeo ha tomado de la antropología y la psicología varias de ellas para aplicarlas con fines de estudios de mercados; este tipo de técnicas requieren un alto nivel de formación y capacitación, por lo que comúnmente son realizadas por personal profesional/ licenciado.

    .row.justify-content-around.align-items-centerrd.mt-5
          .col-10
            .tarjeta.bg8.mt-2.p-3
              .row.justify-content-around.align-items-center
                .col-lg-1.mb-3
                  img(src="@/assets/curso/temas/tema4/img11.svg" width='200px' height='100px')
                .col-11
                  .row.justify-content-between.align-items-center
                    .col.mb-4.mb-sm-0
                      h4.mb-1.text-white Técnicas de investigación cualitativa
                      p.text-small.text-white Para ampliar la información, lo invitamos a ver el Anexo 1. Técnicas de investigación cualitativa, en el cual se describen las técnicas más utilizadas como, por ejemplo, la observación, entrevista en profundidad, técnicas proyectivas, grupos focales, estudios etnográficos, entre otros.  
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Anexo 1. CF07 Tecnicas de investigación cualitativa.pdf')" target="_blank")
                        span Descargar
                        i.fas.fa-file-download

    #t_4_2.titulo-segundo.color-acento-contenido.mt-5
      h2 4.2  Estudios cuantitavios

    .row.mt-5.justify-content-center
      .col-10
        .bloque-texto-g.color-primario.tarjetaimgcar.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.carimg(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img12.png')})`}"
          )
          .bloque-texto-g__texto2.p-4
            .col-10.col-lg-12
              p Se basa en cálculos estadísticos y matemáticos, es decir, numéricos. Se utiliza principalmente cuando se requiere conocer la respuesta al ‘cuánto’ o ‘qué cantidad’; es decir, siempre que se trabaje con esta metodología los resultados deberán expresarse en números. Esta medición es controlada, ya que las preguntas están enfocadas en obtener respuestas específicas, por tanto, se tiene un alcance objetivo y se tiene claro que al momento de ver los resultados deberán encontrarse porcentajes a lo largo de la presentación. Es importante mencionar que, al partir de ejercicios estadísticos, los resultados que se obtienen van más allá de los datos, es decir, es posible extraer conclusiones no solo para los encuestados sino para la población que cumple con las características del estudio (esto se denomina técnicamente inferencias), por lo que en muchos casos este tipo de investigaciones son confirmatorias.

      .video.mt-5
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption   VIDEO

    .row.justify-content-center.mt-5
      .col-lg-8.sm-8
        .cajon.color-acento-contenido.p-4
          p Cabe mencionar que una buena encuesta debe cumplir dos características fundamentales: fiabilidad, donde se evalúa si esta, en igualdad de condiciones, proporciona iguales resultados, es decir, es precisa y se entiende lo mismo cada vez que se aplica, y validez, la cual consiste en que mida lo que tiene que medir.
      
    .row.justify-content-around.align-items-center.mt-5
          .col-lg-2.col-sm-10
            figure
              img(src='@/assets/curso/temas/tema4/img13.svg', alt='Texto que describa la imagen').imagen-deco
          .col-lg-10.col-sm-10
            p.mt-1 En resumen, no se puede afirmar que una metodología sea mejor que otra; la aplicabilidad de cada una de ellas dependerá de cuál es el objetivo de la investigación y los recursos disponibles. De hecho, los investigadores de mercados sugieren que la ‘opción ideal’ es realizar estudios mixtos, es decir, donde se apliquen ambas metodologías (cualitativa y cuantitativa). En algunos casos, se recomienda comenzar con la cualitativa para entender y acotar y continuar con la cuantitativa para tener resultados globales, en otros, por el contrario, se recomienda comenzar con un estudio cuantitativo y continuar con la metodología cualitativa para profundizar en los temas de interés; no obstante, cuando se van a realizar estudios de mercado para determinar la viabilidad de un mercado, siempre se deberá incluir la metodología cuantitativa con el fin de obtener cifras estadísticas y representativas.
    

    

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
