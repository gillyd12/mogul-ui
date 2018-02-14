<template>
  <div id="mogul-shelf">
    <span v-if="type === 'Research'"><i class="fa fa-puzzle-piece" aria-hidden="true"></i></span>
    <span v-else-if="type === 'Dashboard'"><i class="fa fa-dashboard" aria-hidden="true"></i></span>
    <span v-else="type === 'Analysis'"><i class="fa fa-cog" aria-hidden="true"></i></span>
    <span>{{ type }}</span>
  </div>
</template>

<script>
  export default {
    name: 'mogul-shelf',
    props: ['type'],
    data () {
      return {
//        msg: '{{title}}'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  div {
    height: 42px;
    color: #B1B1B2;
    padding-left: 20px;
    /*text-align: center;*/
  }

  div span {
    line-height: 42px;
    vertical-align: middle;
    font-weight: bold;
    font-size: 16px;
  }

  .active {
    color: #2EA4A8;
    border-left: 3px solid #2EA4A8;
    background-color: #2A2F35;
    padding-left: 17px;
  }

</style>
