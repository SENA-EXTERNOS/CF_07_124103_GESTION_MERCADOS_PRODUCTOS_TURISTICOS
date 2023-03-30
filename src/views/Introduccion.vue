<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-around.align-items-center.mt-5.mb-5
      .row.justify-content-around.align-items-center
        .col-lg-7
          p Estimado aprendiz, bienvenido a este componente formativo, donde conocerá los aspectos claves de la viabilidad del mercado turístico, aprenderá sobre cómo recopilar información a partir de estudios de mercados con enfoque cuantitativo (cuánto o cuántos) y cualitativo (cuáles, cómo, dónde, para qué, por qué, quiénes), en los cuales se precisan variables y condiciones que impactan en el mercado, lo que a su vez, permite identificar ventajas y desventajas, buscando  minimizar los niveles de incertidumbre y aumentando probabilidades de éxitos de ingreso a nuevos mercados; por otra parte, mediante la revisión de las temáticas relacionadas con las plataformas estratégicas, el mercadeo análogo y el mercadeo digital, conocerá los factores que inciden en el ingreso al mercado, con el fin de identificar posibilidades de promoción de productos y servicios nuevos o existentes en el sector turístico. Igualmente, en este recurso se describen los aspectos a considerar en la distribución de productos turísticos y sus sustitutos.
          p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.
        .col-lg-5
          figure
            img(src='@/assets/curso/temas/Introduccion/img1.png', alt='Texto que describa la imagen').imagen-deco

      .col-lg-6.mt-4
       figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/L4pYAj-sfu4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption   VIDEO
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
