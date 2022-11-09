<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Distribución turística

    .row.justify-content-center.align-items-center
          .col-3.mb-5
            figure
              img(src='@/assets/curso/temas/tema3/img1.svg' ).imagen-deco
          .col-lg-8.mb-5.sm-8
            p.mt-1 La distribución turística hace relación a la forma que se emplea para asegurar que el productor turístico llegue a manos de los turistas/viajeros. Así, y guardando relación con la definición de canales de distribución usados en el mercadeo, se cuenta en el sector turismo con los siguientes canales: los principales, mayoristas, minoristas y clientes (usuarios). En el siguiente esquema se representa la cadena de distribución turística y cómo los principales son transversales a los demás distribuidores.
    
    .row.justify-content-around.align-items-center
          .col-lg-6.mt-3
            figure
              img(src='@/assets/curso/temas/tema3/img2.png', alt='Texto que describa la imagen')


    TabsA.color-acento-contenido.mb-5.mt-5
      .tarjeta.imgpestanas.p-4(titulo="Distribuidores principales:")
        .row
          .col-xl-2.mb-4
            figure
            img(src='@/assets/curso/temas/tema3/img5.svg').img3

          .col-xl-10
            h4 Distribuidores principales:
            p Son aquellos que están separados de un producto de viaje, por lo cual suelen venderse por separado. En este elemento de la distribución turística se encuentran los proveedores de alojamiento, los prestadores de servicio de transporte, las atracciones para visitantes y los servicios auxiliares, entendidos como seguros, alquiler de vehículos o entradas para espectáculos, entre otros.
            
      .tarjeta.imgpestanas.p-4(titulo="Distribuidores mayoristas:")
        .row
          .col-xl-2.mb-4
            figure
            img(src='@/assets/curso/temas/tema3/img6.svg' width='110px' height='110px').img3

          .col-xl-10
            h4 Distribuidores mayoristas:
            p Son aquellos que venden sus servicios a los distribuidores minoristas. En este sentido, los mayoristas por excelencia son los Operadores Turísticos (OT), quienes recopilan varios componentes de la experiencia de viaje y crean el producto turístico, con el fin de que sea comercializado posteriormente por la agencia de viajes.
            p Asociado a los distribuidores mayoristas, también están los Sistemas de Distribución Global, más conocidos como GDS, los cuales constituyen sistemas de información que publican y custodian el registro de las disponibilidades de aerolíneas y hoteles; en este sentido, los minoristas tienen la facilidad para ingresar y realizar reservas directamente haciendo uso de este sistema de información.

      .tarjeta.imgpestanas.p-4(titulo="Distribuidores minoristas:")
        .row
          .col-xl-2.mb-4
            figure
            img(src='@/assets/curso/temas/tema3/img7.svg' width='110px' height='110px').img3
          .col-xl-10
            h4 Distribuidores minoristas:
            p Son aquellas empresas que venden directamente el producto turístico al cliente final. En esta línea están incluidas las agencias de viajes tradicionales (física), las agencias de viaje #[i online] y los operadores turísticos que comercializan al consumidor.

      .tarjeta.imgpestanas.p-4(titulo="Clientes/usuarios:")
        .row
          .col-xl-2.mb-4
            figure
            img(src='@/assets/curso/temas/tema3/img8.svg' width='110px' height='110px').img3
          .col-xl-10
            h4 Clientes/usuarios:
            p Son aquellos que requieren del producto turístico. Usualmente, se clasifican en viajeros de negocios, turistas vacacionales y viajeros sociales/ familiares.


</template>

<script>
export default {
  name: 'Tema3',
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
