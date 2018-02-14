<template>
  <!-- Main container -->
  <nav class="level is-mobile mogul-subHeader">
    <!-- Left side -->
    <div class="level-left">
      <div class="level-item">
        <span class="has-text-weight-bold">{{ msg }}</span>
      </div>
    </div>
    <!-- Right side -->
    <div class="level-right">
      <div class="level-item">
        <div class="select is-small">
          <select>
            <option>SIM</option>
            <option v-for="sim in sims" v-bind:selected=selectedSim(sim,details[0].simNumber)>{{sim}}</option>
          </select>
        </div>
      </div>
      <div class="level-item">
        <div class="select is-small">
          <select>
            <option value="YEAR">YEAR</option>
            <option value="2077" selected="true">2077</option>
            <option value="2078">2078</option>
            <option value="2079">2079</option>
          </select>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'mogul-injury',
    data () {
      return {
        msg: 'Research',
        details: [
          {
            simNumber: '',
            simYear: ''
          }
        ],
        sims: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15']
      }
    },
    created () {
      this.getCurrentSimulation()
    },
    mounted () {
    },
    methods: {
      getCurrentSimulation: function () {
        let data = '/simulation/getDetails'
        let url = process.env.LOCAL_HOST + data
        fetch(url)
          .then(stream => stream.json())
          // eslint-disable-next-line
          .then(data => this.details = data)
          .catch(error => console.error(error))
      },
      selectedSim: function (sim, dataSim) {
        if (sim === dataSim) {
          return true
        }
      }
    },
    computed: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./injurySubHeader.scss" lang="scss"></style>
