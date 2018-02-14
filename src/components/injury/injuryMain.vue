<template>
  <div id="mogul-content">
    <div class="table-wrapper">
      <div class='level table-filter'>

        <!-- Left side -->
        <div class="level-left">
          <div class="level-item">
            <span class="table-title">{{msg}}</span>
          </div>
        </div>
        <!-- Right side -->
        <div class="level-right">
          <div class="level-item">
            <div class="select is-small">
              <select v-model="teamSelected">
                <option>Team</option>
                <option v-for="team in teams">{{team.short_name}}</option>
              </select>
            </div>
          </div>
          <div class="level-item">
            <div class="select is-small">
              <select v-model="positionSelected">
                <option>Position</option>
                <option>C</option>
                <option>SP</option>
                <option>RP</option>
                <option>1B</option>
                <option>2B</option>
                <option>SS</option>
                <option>3B</option>
                <option>LF</option>
                <option>CF</option>
                <option>RF</option>
                <option>DH</option>
              </select>
            </div>
          </div>
          <div class="level-item">
            <div class="select is-small">
              <select v-model="rosterSelected">
                <option>Roster</option>
                <option>C</option>
                <option>SP</option>
                <option>RP</option>
                <option>1B</option>
                <option>2B</option>
                <option>SS</option>
                <option>3B</option>
                <option>LF</option>
                <option>CF</option>
                <option>RF</option>
                <option>DH</option>
                <option>Bench</option>
                <option>Closer</option>
                <option>Setup</option>
                <option>Short</option>
                <option>Middle</option>
                <option>Long</option>
                <option>Starter #1</option>
                <option>Starter #2</option>
                <option>Starter #3</option>
                <option>Starter #4</option>
                <option>Starter #5</option>
                <option>(AAA)</option>
                <option>(AA)</option>
                <option>(A)</option>
                <option>(A/R)</option>
                <option>(DL)</option>
              </select>
            </div>
          </div>
          <div class="level-item">
            <button class="button is-small is-warning" v-on:click='checkedMI'>
              <span class="icon is-small">
                <i class="fa fa-square-o"></i>
              </span>
              <span>Major Injury</span>
            </button>
          </div>
          <div class="level-item">
            <button class="button is-small is-danger" v-on:click='checkedOI'>
              <span class="icon is-small">
                <i class="fa fa-square-o"></i>
              </span>
              <span>Out Indefinitely</span>
            </button>
          </div>

        </div>

      </div>
      <transition name="fade">
        <table class="table is-striped is-fullwidth is-bordered" v-if="injuries.length > 0" key="injury">
          <thead>
          <tr>
            <th>TEAM</th>
            <th>POS</th>
            <th>PLAYER</th>
            <th>ROSTER</th>
            <th>DAYS</th>
            <th>RETURNING</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="injured in injuries" v-show="(teamSelected === 'Team' || teamSelected === injured.currentTeam) &&
                                                  (positionSelected === 'Position' || positionSelected === injured.profile.position) &&
                                                  (rosterSelected === 'Roster' || rosterSelected === injured.statuses[0].roster)">
            <td v-bind:class="highlighted(injured.expectedReturn.outForSeason, injured.expectedReturn.days)">
              {{injured.currentTeam}}
            </td>
            <td v-bind:class="highlighted(injured.expectedReturn.outForSeason, injured.expectedReturn.days)">
              {{injured.profile.position}}
            </td>
            <td v-bind:class="highlighted(injured.expectedReturn.outForSeason, injured.expectedReturn.days)">
              {{injured.name}}
            </td>
            <td v-bind:class="highlighted(injured.expectedReturn.outForSeason, injured.expectedReturn.days)">
              {{injured.statuses[0].roster}}
            </td>
            <td v-bind:class="highlighted(injured.expectedReturn.outForSeason, injured.expectedReturn.days)">
              {{injured.expectedReturn.days}}
            </td>
            <td v-if="injured.expectedReturn.outForSeason"
                v-bind:class="highlighted(injured.expectedReturn.outForSeason, injured.expectedReturn.days)">
              Out Indefinitely
            </td>
            <td v-else v-bind:class="highlighted(injured.expectedReturn.outForSeason, injured.expectedReturn.days)">
              SIM {{injured.expectedReturn.expectedReturn}}
            </td>
          </tr>
          </tbody>
        </table>
      </transition>
      <transition name="fade">
        <content-placeholders class="content-placeholders" v-if='injuries.length === 0' key="injuryLoader">
          <!--<content-placeholders-heading :img="true"/>-->
          <content-placeholders-text :lines="20"/>
        </content-placeholders>
      </transition>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'mogul-content',
    data () {
      return {
        msg: 'Injury Report',
        teams: [],
        injuries: [],
        teamSelected: 'Team',
        positionSelected: 'Position',
        rosterSelected: 'Roster'
      }
    },
    created () {
      this.getTeams()
      this.getInjuryReport()
    },
    computed: {},
    methods: {
      getTeams: function () {
        let data = '/team?sort=full_name ASC'
        let url = process.env.LOCAL_HOST + data
        fetch(url)
          .then(stream => stream.json())
          // eslint-disable-next-line
          .then(data => this.teams = data)
          .catch(error => console.error(error))
      },
      getInjuryReport: function () {
        let data = '/statuses/injuryReport'
        let url = process.env.LOCAL_HOST + data
        fetch(url)
          .then(stream => stream.json())
          // eslint-disable-next-line
          .then(data => {
            this.injuries = data
          })
          .catch(error => console.error(error))
      },
      checkedMI: function (event) {
        let obj = event.currentTarget.querySelector('i')
        let i = 0
        let arr = document.querySelectorAll('.isWarning')
        if (obj.classList.contains('fa-check-square-o')) {
          obj.classList.remove('fa-check-square-o')
          obj.classList.add('fa-square-o')

          for (i = 0; i < arr.length; i++) {
            arr[i].classList.remove('is-warning')
          }
        } else {
          obj.classList.remove('fa-square-o')
          obj.classList.add('fa-check-square-o')

          for (i = 0; i < arr.length; i++) {
            arr[i].classList.add('is-warning')
          }
        }
      },
      checkedOI: function (event) {
        let obj = event.currentTarget.querySelector('i')
        let i = 0
        let arr = document.querySelectorAll('.isDanger')
        if (obj.classList.contains('fa-check-square-o')) {
          obj.classList.remove('fa-check-square-o')
          obj.classList.add('fa-square-o')

          for (i = 0; i < arr.length; i++) {
            arr[i].classList.remove('is-danger')
          }
        } else {
          obj.classList.remove('fa-square-o')
          obj.classList.add('fa-check-square-o')

          for (i = 0; i < arr.length; i++) {
            arr[i].classList.add('is-danger')
          }
        }
      },
      highlighted: function (out, injuryTime) {
        let styleClass = ''
        if (out) {
          styleClass = 'isDanger'
        } else if (injuryTime > 14) {
          styleClass = 'isWarning'
        }
        return styleClass
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

  #mogul-content {
    /*padding-top: 10px;*/
  }

  #injuryData {
    opacity: 0;
  }

  .table-wrapper {
    background-color: #FEFEFE;
    box-shadow: 2px 2px 3px grey;
    /*padding-left: 20px;*/
  }

  /*.loader-wrapper {*/
  /*width: calc(100vw - 300px)*/
  /*}*/

  .content-placeholders {
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 10px;
    padding-top: 20px;
  }

  .table-wrapper table {
    padding-left: 0px;
  }

  .table-filter {
    line-height: 51px;
    vertical-align: middle;
    margin-bottom: 0px;
    padding-left: 20px;
    padding-right: 20px;
    /*padding-top: 16px;*/
    /*padding-left: 20px;*/
    /*padding-top: 12px;*/
    /*padding-bottom: 12px;*/
    /*height: 52px;*/
    /*!*font-weight: bold;*!*/
    /*font-size: 12pt;*/
    /*color: #2A2F35;*/
    /*border-bottom: solid #dbdbdb 2px;*/
  }

  .table-title {
    font-weight: bold;
  }

  table thead:first-child th {
    border-left: 0;
    border-right: 0;
  }

  table tr:first-child td {
    border-top: 0;
  }

  table tr:last-child td {
    border-bottom: 0;
  }

  table tr td:first-child {
    border-left: 0;
  }

  table tr td:last-child {
    border-right: 0;
  }

  /*.filter {*/
  /*padding-right: 12px;*/
  /*}*/

  .major-injury {
    padding-right: 64px;
  }

  th {
    font-weight: bold;
    font-size: 9pt;
  }

  td {
    font-weight: normal;
    font-size: 9pt;
  }

  /*table {*/
  /*font-family: arial, sans-serif;*/
  /*border-collapse: collapse;*/
  /*width: 100%;*/
  /*height: 100%;*/
  /*}*/

  /*td, th {*/
  /*!*border: 1px solid #dddddd;*!*/
  /*text-align: left;*/
  /*padding: 8px;*/
  /*}*/

  /*tr:nth-child(even) {*/
  /*background-color: #dddddd;*/
  /*}*/

  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity 1s ease;
  }

  .fade-leave-active {
    transition: opacity 1s ease;
  }

  .fade-leave-to {
    opacity: 0;
  }

</style>
