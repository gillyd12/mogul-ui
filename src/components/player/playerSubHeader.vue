<template>
  <!-- Main container -->
  <nav class="level is-mobile mogul-subHeader">
    <!-- Left side -->
    <div class="level-left">
      <div class="level-item">
        <span class="has-text-weight-bold"><h6 class="title is-6">{{ msg }}</h6></span>
      </div>
    </div>
    <div class="level-right">
      <div class="level-item">
        <div class="control">
          <input id='prospectsInput' class='position-filter' type="checkbox" v-model="prospectFilterChecked"> Prospects Only?
        </div>
      </div>
      <div class="level-item">
        <span>Sim Year:</span>
      </div>
      <div class="level-item">
        <div class="select is-small">
          <select v-model="simYearFilter">
            <option>2078</option>
            <option>2077</option>
            <option>2076</option>
          </select>
        </div>
      </div>
      <div class="level-item">
        <!--<i class="fa fa-bar-chart fa-2x" aria-hidden="true" v-on:click='toggle_modal'></i>-->
      </div>
    </div>

    <div class="modal">
      <div class="modal-background"></div>
      <div class="modal-content">
        <article class="message">
          <div class="message-body">
            This feature has not been added yet.
          </div>
        </article>
        <!-- Any other Bulma elements you want -->
      </div>
      <button class="modal-close is-large" aria-label="close" v-on:click='toggle_modal'></button>
    </div>
  </nav>

</template>

<script>
  export default {
    name: 'player-subHeader',
    data () {
      return {
        msg: 'Player Comparison',
        prospectFilterChecked: false,
        simYearFilter: '',
        simNumberFilter: ''
      }
    },
    watch: {
      prospectFilterChecked: function () {
        this.$root.$emit('prospectFilterChecked', this.$data.prospectFilterChecked)
      },
      simYearFilter: function () {
        this.$root.$emit('simYearUpdated', this.$data.simYearFilter)
      }
    },
    methods: {
      toggle_modal: function () {
//        let obj = event.currentTarget.querySelector('i')
//        let i = 0
        let obj = document.querySelector('.modal')
        if (obj.classList.contains('is-active')) {
          obj.classList.remove('is-active')
        } else {
          obj.classList.add('is-active')
        }
      },
      _simulationDetailsLoad: function (value) {
        if (value) {
          this.$data.simNumberFilter = value[0].simNumber
          this.$data.simYearFilter = value[0].simYear
        }
      }
    },
    computed: {},
    mounted () {
      this.$root.$on('simDetails', this._simulationDetailsLoad)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./playerSubHeader.scss" lang="scss" scoped></style>
