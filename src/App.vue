<template>
  <div id='background-container' class="container is-fluid is-size-7">
    <div id="app" class="container is-fullhd">

      <div id="brand">
        <mogul-brand></mogul-brand>
      </div>

      <div id="banner">
        <router-view name="bannerView"/>
        <!--<mogul-injury></mogul-injury>-->
      </div>

      <div id="content">
        <router-view name="contentView"/>
      </div>

    </div>
  </div>
</template>

<script>
  import '../node_modules/font-awesome/css/font-awesome.min.css'

  import mogulBrand from './components/brand/brand'

  export default {
    name: 'app',
    components: {
      mogulBrand
    }
  }
</script>

<style src="./styles/app.scss" lang="scss"></style>
