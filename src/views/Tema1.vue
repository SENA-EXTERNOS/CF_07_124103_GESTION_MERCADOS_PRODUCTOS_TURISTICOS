<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Plataforma estratégica

    .row.mt-5.justify-content-center
      .col-10
        .bloque-texto-g.color-primario.tarjetaimgcar.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.carimg(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img1.png')})`}"
          )
          .bloque-texto-g__texto2.p-4
            .col-10.col-lg-12
              p La plataforma estratégica, o llamada en otros contextos ‘planeación estratégica’, es la piedra angular sobre la cual funcionan las organizaciones; bien dice el dicho popular «quien no sabe para dónde va, cualquier camino le sirve», y es por ello que las empresas con perspectiva de sostenibilidad (es decir, que quieren permanecer en el mercado), realizan su proceso de planeación corporativa para caracterizarse como empresa y proponerse unos objetivos organizacionales, a los cuales cada área o proceso de la compañía debe contribuir.
              p A continuación, se presentan los elementos mínimos de una plataforma estratégica:
      p.mt-5 La plataforma estratégica podrá tener tantos componentes como autores de libros se consulten; sin embargo, parece existir consenso entre los elementos mínimos que debe tener, estos son: la misión, la visión, objetivos corporativos/ metas, política (puede ser de calidad o de servicio al cliente) y hoja de ruta.
      

    .tarjeta.p-4.imgslider
      PasosB.color-acento-contenido
        .row(titulo="")
          .col-md-6.mb-4.mb-md-0
            b Misión
            p.mt-4 La misión es la formalización por parte de una empresa de su razón de ser, por lo que define de manera general y sintetizada qué es aquello que los clientes pueden encontrar en la empresa. Usualmente, la misión está escrita en uno o máximos dos párrafos, en donde se da respuesta a las siguientes preguntas: ¿Quiénes son?, ¿a qué se dedican?, ¿a quién están dirigidos los productos de la compañía? (público objetivo) y ¿cuál es la ventaja competitiva?, es decir, ¿qué hace diferente a la empresa de otras que ofrecen los mismos productos?
            p.mt-3 En lo asociado a su redacción, se redacta en tiempo presente. Según la forma de comunicación de la empresa podrá estar en primera o en tercera persona y debe ser tan clara que cualquier persona que la lea tenga un entendimiento básico de a qué se dedica la empresa y cuál es su propuesta de valor para con los clientes. A nivel organizacional, la misión también es importante, porque alinea la perspectiva de los colaboradores.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img2.png', alt='Texto que describa la imagen')
              
        .row(titulo="")
          .col-md-6.mb-4.mb-md-0
            b Visión
            p.mt-4 La visión de una empresa representa un escenario propicio, retador y real al que espera llegar la empresa en un horizonte de tiempo definido; por ello da una perspectiva de mediano plazo, por lo que al plasmarse por escrito deja por sentado en qué ruta se deben alinear las decisiones estratégicas, en pro de tener un mismo horizonte.
            | Respecto a la forma como se elabora, debe estar redactada en tiempo futuro; se sugiere plantear un período de tiempo específico con el fin de poder hacer seguimiento. Debe dar respuesta a las siguientes preguntas: ¿a dónde se quiere llegar? y ¿cuáles son los recursos básicos con los que cuenta la empresa para lograrlo?

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img4.png', alt='Texto que describa la imagen')
              
        .row(titulo="")
          .col-md-6.mb-4.mb-md-0
            b Objetivos corporativos/metas
            p.mt-4 Si bien los objetivos corporativos y metas son dos conceptos diferentes, no todas las empresas definen ambos, por lo que varios autores han coincido en que basta con tener al menos uno de los dos. Los objetivos corporativos corresponden a aquellos logros que espera tener la empresa, asociados al cumplimiento de la visión, y que deben ser específicos, medibles, alcanzables, realistas y tener un horizonte de tiempo para ejecutarse. Por su parte, las metas son más ambiciosas y suelen ser más pocas, incluso en muchas ocasiones una sola, y en general, está asociada a un tema de negocio. Ejemplo: 
            | Objetivo: acrecentar un 5 % las ventas de paquetes turísticos en Antioquia, la meta podría ser tener 5.000 clientes.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img5.png', alt='Texto que describa la imagen')

        .row(titulo="")
          .col-md-6.mb-4.mb-md-0
            b Políticas
            p.mt-4 Las políticas son lineamientos que establecen las organizaciones para dar guía sobre pautas de comportamiento y actuación. En las empresas usualmente hay dos tipos de políticas, las asociadas a los temas de talento humano y las orientadas al cliente. En esta segunda línea, se tienen dos perspectivas: las políticas de calidad, que definen a nivel general cómo se orienta el protocolo o procedimiento para trabajar en pro de la mejora continua, y las políticas de servicio al cliente, las cuales son una declaración de la empresa sobre cómo orienta su actuar en búsqueda de la satisfacción de los clientes.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img6.png', alt='Texto que describa la imagen')

        .row(titulo="")
          .col-md-6.mb-4.mb-md-0
            b Hoja de ruta
            p.mt-4 Las hojas de ruta son planes que definen estrategias, tácticas o actividades para la consecución de los objetivos y/o metas de la empresa; según cada empresa, puede tener diferentes connotaciones, desde un plan de negocio, un plan de mercadeo, un cuadro de mando integral o un cronograma de actividades con responsables.
            p.mt-4 De manera general, se podría decir entonces que cuando una empresa tiene una plataforma estratégica, tiene definido qué es, qué quiere lograr, cómo define su marco de actuación y la hoja de ruta respectiva.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img7.png', alt='Texto que describa la imagen')
              

       
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
