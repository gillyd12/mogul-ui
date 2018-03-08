<template>
  <div id="mogul-brand" class="level">
    <div class="level-left">
      <div class="level-item">
        <div class="is-size-5 has-text-weight-bold">{{ msg }}</div>
      </div>
    </div>
    <div class="level-right">
      <div class="level-item">
        <!--<router-link to="/">Injury Report</router-link>-->
      </div>
      <div class="level-item">
        <!--<router-link to="/players">Players</router-link>-->
      </div>
      <div class="level-item">
        <span><p class="is-italic is-size-7">Latest Sim: Year: {{ details[0].simYear }}, Number: {{ details[0].simNumber }}</p></span>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'mogul-content',
    data () {
      return {
        msg: 'FIRST CLASS MOGUL',
        details: [
          {
            realLifeSimDate: ''
          }
        ]
      }
    },
    created () {
      this.getCurrentSimulation()
    },
    mounted () {
    },
    methods: {
      getCurrentSimulation: function () {
        /* eslint-disable */
        this.details = [
          {
            "simYear": "2078",
            "simNumber": "8",
            "realLifeSimTime": "1519697531003",
            "realLifeSimDate": "Mon Feb 26 2018 20:12:11 GMT-0600 (CST)",
            "createdAt": "2018-02-27T02:12:24.148Z",
            "updatedAt": "2018-02-27T02:12:24.148Z",
            "id": "5a94be88dfcaf8a3070b22dd"
          }
        ]
//        this.$root.$emit('simDetails', this.details)

        let data = '/simulation/getDetails'
        let url = process.env.LOCAL_HOST + data
        fetch(url)
          .then(stream => stream.json())
          // eslint-disable-next-line
          .then(data => {
            this.details = data
            this.$root.$emit('simDetails', this.details)
          })
          .catch(error => console.error(error))
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./brand.scss" lang="scss"></style>
