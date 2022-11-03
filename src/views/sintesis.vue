<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.justify-content-center
          .col-lg-8.sm-8
            .titulo-sexto.color-acento-contenido
              b Gestión de mercados de productos turísticos
              p Síntesis: viabilizando el mercado turístico

          .col-lg-2
            figure
            img(src="@/assets/curso/temas/g4.svg" width='89,61' height='86,7')
          
    .row.justify-content-center
          .col-lg-10.sm-8.mt-5       
              p Revise la siguiente síntesis, la cual resume las temáticas abordadas en el componente formativo ‘Viabilizando el mercado turístico’.
    .row.justify-content-center.mt-4
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.png", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
