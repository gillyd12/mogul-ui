<template>
  <div id="mogul-navigation">
    <mogul-shelf class="active" type="Research"></mogul-shelf>
    <mogul-shelf type="Dashboard"></mogul-shelf>
    <mogul-shelf type="Analysis"></mogul-shelf>
  </div>

</template>

<script>
  import MogulShelf from './shelf.vue'

  export default {
    components: {MogulShelf},
    name: 'mogul-navigation',
    data () {
      return {
        msg: 'this is my navigation'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #mogul-navigation {
    padding-top: 42px;
  }


</style>
