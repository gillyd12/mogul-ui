<template>
  <div id="player">
    <div id="filter">
      <div class="matches">
        <h6 class="title is-6">{{this.$data.players.length}} Matches</h6>
      </div>
      <div class="line"></div>

      <div class="matches">
        <h6 class="title is-6">Hitting</h6>
        <div class="position">
          <div class="offense">
            <div class="control hitters">
              <label class="checkbox">
                <input class='position-filter hitter' type="checkbox" v-model="filteredPosition" value="1B"> 1B
              </label>
              <label class="checkbox">
                <input class='position-filter hitter' type="checkbox" v-model="filteredPosition" value="LF"> LF
              </label>
              <label class="checkbox">
                <input class='position-filter hitter' type="checkbox" v-model="filteredPosition" value="2B"> 2B
              </label>
              <label class="checkbox">
                <input class='position-filter hitter' type="checkbox" v-model="filteredPosition" value="CF"> CF
              </label>
              <label class="checkbox">
                <input class='position-filter hitter' type="checkbox" v-model="filteredPosition" value="3B"> 3B
              </label>
              <label class="checkbox">
                <input class='position-filter hitter' type="checkbox" v-model="filteredPosition" value="RF"> RF
              </label>
              <label class="checkbox">
                <input class='position-filter hitter' type="checkbox" v-model="filteredPosition" value="SS"> SS
              </label>
              <label class="checkbox">
                <input class='position-filter hitter' type="checkbox" v-model="filteredPosition" value="C"> C
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="matches">
        <h6 class="title is-6">Pitching</h6>
        <div class="position">
          <div class="pitching">
            <div class="control pitchers">
              <label class="checkbox">
                <input class='position-filter pitcher' type="checkbox" v-model="filteredPosition" value="SP"> SP
              </label>
              <label class="checkbox">
                <input class='position-filter pitcher' type="checkbox" v-model="filteredPosition" value="RP"> RP
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="matches">
        <h6 class="title is-6">Bats</h6>
        <div class="control">
          <div class="select is-small">
            <select v-model="filteredBats">
              <option value="">All</option>
              <option value="S">Switch</option>
              <option value="R">Right</option>
              <option value="L">Left</option>
            </select>
          </div>
        </div>
      </div>
      <div class="matches">
        <h6 class="title is-6">Throws</h6>
        <div class="control">
          <div class="select is-small">
            <select v-model="filteredThrows">
              <option value="">All</option>
              <option value="R">Right</option>
              <option value="L">Left</option>
            </select>
          </div>
        </div>
      </div>
      <div class="matches">
        <h6 class="title is-6">Age</h6>
        <div class="control">
          <label class="checkbox">
            <input class="age-filter" type="checkbox" v-model="filteredAges" value="16">16
          </label>
          <label class="checkbox">
            <input class="age-filter" type="checkbox" v-model="filteredAges" value="17">17
          </label>
          <label class="checkbox">
            <input class="age-filter" type="checkbox" v-model="filteredAges" value="18">18
          </label>
        </div>
        <div class="control">
          <label class="checkbox">
            <input class="age-filter" type="checkbox" v-model="filteredAges" value="19">19
          </label>
          <label class="checkbox">
            <input class="age-filter" type="checkbox" v-model="filteredAges" value="20">20
          </label>
          <label class="checkbox">
            <input class="age-filter" type="checkbox" v-model="filteredAges" value="21">21
          </label>
        </div>
        <div class="control">
          <label class="checkbox">
            <input class="age-filter" type="checkbox" v-model="filteredAges" value="22">22
          </label>
          <label class="checkbox">
            <input class="age-filter" type="checkbox" v-model="filteredAges" value="23">23
          </label>
          <label class="checkbox">
            <input class="age-filter" type="checkbox" v-model="filteredAges" value="24">24
          </label>
        </div>
      </div>
    </div>
    <div id="content">
      <div id='all-players' class="table-wrapper" v-if="_emptyFilteredPosition">
        <table class="table is-striped is-fullwidth">
          <tr>
            <th class="large-spacing">Player</th>
            <th class="has-text-centered small-spacing">
              <div class="sorted-up"><i class="fa" aria-hidden="true"></i></div>
              <div class="sorted-item" v-on:click='_toggle_sort'>Overall</div>
              <div class="sorted-down"><i class="fa" aria-hidden="true"></i></div>
            </th>
            <th class="has-text-centered small-spacing">
              <div class="sorted-up"><i class="fa" aria-hidden="true"></i></div>
              <div class="sorted-item" v-on:click='_toggle_sort'>Peak</div>
              <div class="sorted-down"><i class="fa" aria-hidden="true"></i></div>
            </th>
            <th class="has-text-centered small-spacing">
              <div class="sorted-up"><i class="fa" aria-hidden="true"></i></div>
              <div class="sorted-item" v-on:click='_toggle_sort'>Health</div>
              <div class="sorted-down"><i class="fa" aria-hidden="true"></i></div>
            </th>
            <th class="has-text-centered small-spacing">
              <div class="sorted-up"><i class="fa" aria-hidden="true"></i></div>
              <div class="sorted-item" v-on:click='_toggle_sort'>Scouting</div>
              <div class="sorted-down"><i class="fa" aria-hidden="true"></i></div>
            </th>
            <th class="has-text-centered small-spacing">
              <div class="sorted-up"><i class="fa" aria-hidden="true"></i></div>
              <div class="sorted-item" v-on:click='_toggle_sort'>Contract</div>
              <div class="sorted-down"><i class="fa" aria-hidden="true"></i></div>
            </th>
            <th class="has-text-centered small-spacing">
              <div class="sorted-up"><i class="fa" aria-hidden="true"></i></div>
              <div class="sorted-item" v-on:click='_toggle_sort'>Salary</div>
              <div class="sorted-down"><i class="fa" aria-hidden="true"></i></div>
            </th>
            <th class="has-text-centered small-spacing">
              <div class="sorted-up"><i class="fa" aria-hidden="true"></i></div>
              <div class="sorted-item" v-on:click='_toggle_sort'>Happiness</div>
              <div class="sorted-down"><i class="fa" aria-hidden="true"></i></div>
            </th>
            <th class="has-text-centered small-spacing">
              <div class="sorted-up"><i class="fa" aria-hidden="true"></i></div>
              <div class="sorted-item" v-on:click='_toggle_sort'>Injured</div>
              <div class="sorted-down"><i class="fa" aria-hidden="true"></i></div>
            </th>
            <th class="has-text-centered small-spacing">
              <div class="sorted-up"><i class="fa" aria-hidden="true"></i></div>
              <div class="sorted-item" v-on:click='_toggle_sort'>Roster</div>
              <div class="sorted-down"><i class="fa" aria-hidden="true"></i></div>
            </th>
            <th class="has-text-centered small-spacing">
              <div>Dft. Yr.</div>
            </th>
            <th class="has-text-centered small-spacing"></th>
            <th class="has-text-centered small-spacing"></th>
          </tr>
        </table>
        <div class="tBodyContainer scrollable">
          <transition name="fade">
            <table class="table is-striped is-fullwidth" v-if="players.length > 0" key="players">
              <tbody>
              <tr v-for="player in players" class="player-data">
                <td class="player large-spacing">
                  <span class="has-text-weight-bold">{{player.name}}</span>
                  <!--<i class="fa fa-heart-o" aria-hidden="true" v-on:click='_toggle_modal'></i>-->
                  <!--<i class="fa fa-plus" aria-hidden="true" v-on:click='_toggle_modal'></i>-->
                  <!--<i class="fa fa-vcard-o" aria-hidden="true" v-on:click='_toggle_modal'></i>-->
                  <div>
                    <span>B/T: <span class="bats has-text-weight-bold">{{player.bats}}/{{player.throws}}</span></span>
                    <span>Pos: <span class="pos has-text-weight-bold">{{player.position}}</span></span>
                    <span>Age: <span class="age has-text-weight-bold">{{player.age}}</span></span>
                  </div>
                  <!--<div>-->
                  <!--<span>Yr. Drafted: <span class="has-text-weight-bold">{{player.profile.draft_year}}</span></span>-->
                  <!--<span>Birthday: <span class="has-text-weight-bold">{{player.birthday}}</span></span>-->
                  <!--</div>-->
                </td>
                <td class="ovr has-text-centered small-spacing">{{player.overall}}</td>
                <td class="pck has-text-centered small-spacing">{{player.peak}}</td>
                <td class="hth has-text-centered small-spacing">{{player.health}}</td>
                <td class="sct has-text-centered small-spacing">{{player.scouting}}</td>
                <td class="yrs has-text-centered small-spacing">{{player.years}}</td>
                <td class="sal has-text-centered small-spacing">{{player.salary}}</td>
                <td class="hap has-text-centered small-spacing">{{player.happiness}}</td>
                <td class="inj has-text-centered small-spacing">{{player.injury_time}}</td>
                <td class="ros has-text-centered small-spacing">{{player.roster}}</td>
                <td class="dft has-text-centered small-spacing">{{player.draft_year}}</td>
                <td class="ros has-text-centered small-spacing"></td>
                <td class="ros has-text-centered small-spacing"></td>
              </tr>
              </tbody>
            </table>
          </transition>
          <transition name="fade">
            <content-placeholders class="content-placeholders" v-if='players.length === 0' key="playerLoader">
              <!--<content-placeholders-heading :img="true"/>-->
              <content-placeholders-text :lines="30"/>
            </content-placeholders>
          </transition>
        </div>
      </div>
      <div id='offensive-players' class="table-wrapper" v-else-if="_offensivePositionSelected">
        <table class="table is-striped is-fullwidth">
          <tr>
            <th class="large-spacing">Player</th>
            <th class="has-text-centered small-spacing">
              <div class="sorted-up"><i class="fa" aria-hidden="true"></i></div>
              <div class="sorted-item" v-on:click='_toggle_sort'>Overall</div>
              <div class="sorted-down"><i class="fa" aria-hidden="true"></i></div>
            </th>
            <th class="has-text-centered small-spacing">
              <div class="sorted-up"><i class="fa" aria-hidden="true"></i></div>
              <div class="sorted-item" v-on:click='_toggle_sort'>Peak</div>
              <div class="sorted-down"><i class="fa" aria-hidden="true"></i></div>
            </th>
            <th class="has-text-centered small-spacing">
              <div class="sorted-up"><i class="fa" aria-hidden="true"></i></div>
              <div class="sorted-item" v-on:click='_toggle_sort'>Health</div>
              <div class="sorted-down"><i class="fa" aria-hidden="true"></i></div>
            </th>
            <th class="has-text-centered small-spacing">
              <div class="sorted-up"><i class="fa" aria-hidden="true"></i></div>
              <div class="sorted-item" v-on:click='_toggle_sort'>Scouting</div>
              <div class="sorted-down"><i class="fa" aria-hidden="true"></i></div>
            </th>
            <th class="has-text-centered small-spacing">
              <div class="sorted-up"><i class="fa" aria-hidden="true"></i></div>
              <div class="sorted-item" v-on:click='_toggle_sort'>Contact</div>
              <div class="sorted-down"><i class="fa" aria-hidden="true"></i></div>
            </th>
            <th class="has-text-centered small-spacing">
              <div class="sorted-up"><i class="fa" aria-hidden="true"></i></div>
              <div class="sorted-item" v-on:click='_toggle_sort'>Power</div>
              <div class="sorted-down"><i class="fa" aria-hidden="true"></i></div>
            </th>
            <th class="has-text-centered small-spacing">
              <div class="sorted-up"><i class="fa" aria-hidden="true"></i></div>
              <div class="sorted-item" v-on:click='_toggle_sort'>Eye</div>
              <div class="sorted-down"><i class="fa" aria-hidden="true"></i></div>
            </th>
            <th class="has-text-centered small-spacing">
              <div class="sorted-up"><i class="fa" aria-hidden="true"></i></div>
              <div class="sorted-item" v-on:click='_toggle_sort'>Speed</div>
              <div class="sorted-down"><i class="fa" aria-hidden="true"></i></div>
            </th>
            <th class="has-text-centered small-spacing">
              <div class="sorted-up"><i class="fa" aria-hidden="true"></i></div>
              <div class="sorted-item" v-on:click='_toggle_sort'>Arm</div>
              <div class="sorted-down"><i class="fa" aria-hidden="true"></i></div>
            </th>
            <th class="has-text-centered small-spacing">
              <div class="sorted-up"><i class="fa" aria-hidden="true"></i></div>
              <div class="sorted-item" v-on:click='_toggle_sort'>Range</div>
              <div class="sorted-down"><i class="fa" aria-hidden="true"></i></div>
            </th>
            <th class="has-text-centered small-spacing">
              <div class="sorted-up"><i class="fa" aria-hidden="true"></i></div>
              <div class="sorted-item" v-on:click='_toggle_sort'>Fielding</div>
              <div class="sorted-down"><i class="fa" aria-hidden="true"></i></div>
            </th>
            <th class="has-text-centered small-spacing">
              <div class="sorted-up"><i class="fa" aria-hidden="true"></i></div>
              <div class="sorted-item" v-on:click='_toggle_sort'>Defense</div>
              <div class="sorted-down"><i class="fa" aria-hidden="true"></i></div>
            </th>
            <th class="has-text-centered small-spacing"></th>
          </tr>
        </table>
        <div class="tBodyContainer scrollable">
          <transition name="fade">
            <table class="table is-striped is-fullwidth" v-if="players.length > 0" key="players">
              <tbody>
              <tr v-for="player in players" class="player-data">
                <td class="player large-spacing">
                  <span class="has-text-weight-bold">{{player.name}}</span>
                  <!--<i class="fa fa-heart-o" aria-hidden="true" v-on:click='_toggle_modal'></i>-->
                  <!--<i class="fa fa-plus" aria-hidden="true" v-on:click='_toggle_modal'></i>-->
                  <!--<i class="fa fa-vcard-o" aria-hidden="true" v-on:click='_toggle_modal'></i>-->
                  <div>
                    <span>B/T: <span class="bats has-text-weight-bold">{{player.bats}}/{{player.throws}}</span></span>
                    <span>Pos: <span class="pos has-text-weight-bold">{{player.position}}</span></span>
                    <span>Age: <span class="age has-text-weight-bold">{{player.age}}</span></span>
                  </div>
                  <!--<div>-->
                  <!--<span>Yr. Drafted: <span class="has-text-weight-bold">{{player.profile.draft_year}}</span></span>-->
                  <!--<span>Birthday: <span class="has-text-weight-bold">{{player.birthday}}</span></span>-->
                  <!--</div>-->
                </td>
                <td class="ovr has-text-centered small-spacing">{{player.overall}}</td>
                <td class="pck has-text-centered small-spacing">{{player.peak}}</td>
                <td class="hth has-text-centered small-spacing">{{player.health}}</td>
                <td class="sct has-text-centered small-spacing">{{player.scouting}}</td>
                <td class="con has-text-centered small-spacing">{{player.contact}}</td>
                <td class="pow has-text-centered small-spacing">{{player.o_power}}</td>
                <td class="eye has-text-centered small-spacing">{{player.eye}}</td>
                <td class="spd has-text-centered small-spacing">{{player.speed}}</td>
                <td class="arm has-text-centered small-spacing">{{player.arm}}</td>
                <td class="rng has-text-centered small-spacing">{{player.range}}</td>
                <td class="fld has-text-centered small-spacing">{{player.fielding}}</td>
                <td class="def has-text-centered small-spacing">{{player.defense}}</td>
                <td class="def has-text-centered small-spacing"></td>
              </tr>
              </tbody>
            </table>
          </transition>
          <transition name="fade">
            <content-placeholders class="content-placeholders" v-if='players.length === 0' key="playerLoader">
              <!--<content-placeholders-heading :img="true"/>-->
              <content-placeholders-text :lines="30"/>
            </content-placeholders>
          </transition>
        </div>
      </div>
      <div id='non-offensive-players' class="table-wrapper" v-else-if="_pitcherPositionSelected">
        <table class="table is-striped is-fullwidth">
          <tr>
            <th class="large-spacing">Player</th>
            <th class="has-text-centered small-spacing">
              <div class="sorted-up"><i class="fa" aria-hidden="true"></i></div>
              <div class="sorted-item" v-on:click='_toggle_sort'>Overall</div>
              <div class="sorted-down"><i class="fa" aria-hidden="true"></i></div>
            </th>
            <th class="has-text-centered small-spacing">
              <div class="sorted-up"><i class="fa" aria-hidden="true"></i></div>
              <div class="sorted-item" v-on:click='_toggle_sort'>Peak</div>
              <div class="sorted-down"><i class="fa" aria-hidden="true"></i></div>
            </th>
            <th class="has-text-centered small-spacing">
              <div class="sorted-up"><i class="fa" aria-hidden="true"></i></div>
              <div class="sorted-item" v-on:click='_toggle_sort'>Health</div>
              <div class="sorted-down"><i class="fa" aria-hidden="true"></i></div>
            </th>
            <th class="has-text-centered small-spacing">
              <div class="sorted-up"><i class="fa" aria-hidden="true"></i></div>
              <div class="sorted-item" v-on:click='_toggle_sort'>Scouting</div>
              <div class="sorted-down"><i class="fa" aria-hidden="true"></i></div>
            </th>
            <th class="has-text-centered small-spacing">
              <div class="sorted-up"><i class="fa" aria-hidden="true"></i></div>
              <div class="sorted-item" v-on:click='_toggle_sort'>Endurance</div>
              <div class="sorted-down"><i class="fa" aria-hidden="true"></i></div>
            </th>
            <th class="has-text-centered small-spacing">
              <div class="sorted-up"><i class="fa" aria-hidden="true"></i></div>
              <div class="sorted-item" v-on:click='_toggle_sort'>Control</div>
              <div class="sorted-down"><i class="fa" aria-hidden="true"></i></div>
            </th>
            <th class="has-text-centered small-spacing">
              <div class="sorted-up"><i class="fa" aria-hidden="true"></i></div>
              <div class="sorted-item" v-on:click='_toggle_sort'>Power</div>
              <div class="sorted-down"><i class="fa" aria-hidden="true"></i></div>
            </th>
            <th class="has-text-centered small-spacing">
              <div class="sorted-up"><i class="fa" aria-hidden="true"></i></div>
              <div class="sorted-item" v-on:click='_toggle_sort'>Movement</div>
              <div class="sorted-down"><i class="fa" aria-hidden="true"></i></div>
            </th>
            <th class="has-text-centered small-spacing">
              <div class="sorted-up"><i class="fa" aria-hidden="true"></i></div>
              <div class="sorted-item" v-on:click='_toggle_sort'>MPH</div>
              <div class="sorted-down"><i class="fa" aria-hidden="true"></i></div>
            </th>
            <th class="has-text-centered small-spacing">
              <div>Pitch #1</div>
            </th>
            <th class="has-text-centered small-spacing">
              <div>Pitch #2</div>
            </th>
            <th class="has-text-centered small-spacing">
              <div>Pitch #3</div>
            </th>
            <th class="has-text-centered small-spacing"></th>
          </tr>
        </table>
        <div class="tBodyContainer scrollable">
          <transition name="fade">
            <table class="table is-striped is-fullwidth" v-if="players.length > 0" key="players">
              <tbody>
              <tr v-for="player in players" class="player-data">
                <td class="player large-spacing">
                  <span class="has-text-weight-bold">{{player.name}}</span>
                  <!--<i class="fa fa-heart-o" aria-hidden="true" v-on:click='_toggle_modal'></i>-->
                  <!--<i class="fa fa-plus" aria-hidden="true" v-on:click='_toggle_modal'></i>-->
                  <!--<i class="fa fa-vcard-o" aria-hidden="true" v-on:click='_toggle_modal'></i>-->
                  <div>
                    <span>B/T: <span class="bats has-text-weight-bold">{{player.bats}}/{{player.throws}}</span></span>
                    <span>Pos: <span class="pos has-text-weight-bold">{{player.position}}</span></span>
                    <span>Age: <span class="age has-text-weight-bold">{{player.age}}</span></span>
                  </div>
                  <!--<div>-->
                  <!--<span>Yr. Drafted: <span class="has-text-weight-bold">{{player.profile.draft_year}}</span></span>-->
                  <!--<span>Birthday: <span class="has-text-weight-bold">{{player.birthday}}</span></span>-->
                  <!--</div>-->
                </td>
                <td class="ovr has-text-centered small-spacing">{{player.overall}}</td>
                <td class="pck has-text-centered small-spacing">{{player.peak}}</td>
                <td class="hth has-text-centered small-spacing">{{player.health}}</td>
                <td class="sct has-text-centered small-spacing">{{player.scouting}}</td>
                <td class="yrs has-text-centered small-spacing">{{player.endurance}}</td>
                <td class="sal has-text-centered small-spacing">{{player.control}}</td>
                <td class="hap has-text-centered small-spacing">{{player.p_power}}</td>
                <td class="inj has-text-centered small-spacing">{{player.movement}}</td>
                <td class="ros has-text-centered small-spacing">{{player.mph}}</td>
                <td class="ros has-text-centered small-spacing">{{player.pitch_1}}</td>
                <td class="ros has-text-centered small-spacing">{{player.pitch_2}}</td>
                <td class="ros has-text-centered small-spacing">{{player.pitch_3}}</td>
                <td class="ros has-text-centered small-spacing"></td>
              </tr>
              </tbody>
            </table>
          </transition>
          <transition name="fade">
            <content-placeholders class="content-placeholders" v-if='players.length === 0' key="playerLoader">
              <!--<content-placeholders-heading :img="true"/>-->
              <content-placeholders-text :lines="30"/>
            </content-placeholders>
          </transition>
        </div>
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
      </div>
      <button class="modal-close is-large" aria-label="close" v-on:click='_toggle_modal'></button>
    </div>
  </div>
</template>

<script>
  import _ from 'lodash'
  import queryString from 'query-string'

  export default {
    name: 'player',
    components: {},
    data () {
      return {
        msg: 'Player page',
        rootQuery: '/player/',
        sort: 'overall',
        limit: '10000',
        players: [],
        prospectFilter: '',
        simNumber: '',
        simYear: '',
        filteredThrows: '',
        filteredBats: '',
        filteredPosition: [],
        filteredAges: []
      }
    },
    created () {
//      this.getPlayers()
    },
    mounted () {
      this.$root.$on('prospectFilterChecked', this._updateProspectFilter)
      this.$root.$on('simYearUpdated', this._updateSimYear)
    },
    computed: {
      _emptyFilteredPosition: function () {
        let value = false
        if (this.$data.filteredPosition.length === 0) {
          value = true
        }
        return value
      },
      _offensivePositionSelected: function () {
        let value = false
        if (this.$data.filteredPosition && this.$data.filteredPosition.length > 0) {
          if ((this.$data.filteredPosition.indexOf('SP') === -1) && (this.$data.filteredPosition.indexOf('RP') === -1)) {
            value = true
          }
        }
        return value
      },
      _pitcherPositionSelected: function () {
        let value = false
        if (this.$data.filteredPosition && this.$data.filteredPosition.length > 0) {
          if ((this.$data.filteredPosition.indexOf('SP') === 0) || (this.$data.filteredPosition.indexOf('RP') === 0)) {
            value = true
          }
        }
        return value
      }
    },
    watch: {
      filteredBats: function () {
        this.getPlayers()
      },
      filteredThrows: function () {
        this.getPlayers()
      },
      filteredAges: function () {
        this.getPlayers()
      },
      filteredPosition: function (event) {
        this._updateFilteredDisplay(event)
        this.getPlayers()
      },
      simNumber: function () {
        this.getPlayers()
      },
      simYear: function () {
        this.getPlayers()
      }
    },
    methods: {
      getPlayers: function () {
        this.players = []
        let paramStr = this._buildQueryString()
        let query = this.$data.rootQuery
        if (paramStr) {
          query = query + '?' + paramStr
        }
        let url = process.env.LOCAL_HOST + query
        fetch(url)
          .then(stream => stream.json())
          // eslint-disable-next-line
          .then(data => {
            this.players = data
          })
          .catch(error => console.error(error))
      },
      _updateProspectFilter: function (value) {
        if (value) {
          this.$data.simNumber = 'draft'
        } else {
          this.$data.simNumber = ''
        }
      },
      _updateSimYear: function (value) {
        if (value === 'All') {
          this.$data.simYear = ''
        } else {
          this.$data.simYear = value
        }
      },
      _toggle_modal: function () {
        let obj = document.querySelector('.modal')
        if (obj.classList.contains('is-active')) {
          obj.classList.remove('is-active')
        } else {
          obj.classList.add('is-active')
        }
      },
      _updateFilteredDisplay: function (event) {
        if (this.$data.filteredPosition.length > 0) {
          if (this.$data.filteredPosition.indexOf('SP') === 0 || this.$data.filteredPosition.indexOf('RP') === 0) {
            let hitters = document.querySelectorAll('.hitter')
            for (let i = 0; i < hitters.length; i++) {
              hitters[i].disabled = true
            }
            document.querySelector('.hitters').classList.add('disable')
          } else {
            let pitchers = document.querySelectorAll('.pitcher')
            for (let i = 0; i < pitchers.length; i++) {
              pitchers[i].disabled = true
            }
            document.querySelector('.pitchers').classList.add('disable')
          }
        } else {
          let hitters = document.querySelectorAll('.hitter')
          for (let i = 0; i < hitters.length; i++) {
            hitters[i].disabled = false
          }
          document.querySelector('.hitters').classList.remove('disable')
          let pitchers = document.querySelectorAll('.pitcher')
          for (let i = 0; i < pitchers.length; i++) {
            pitchers[i].disabled = false
          }
          document.querySelector('.pitchers').classList.remove('disable')
        }
      },
      _buildQueryString: function () {
        const parsed = queryString.parse(location.search)
        if (this.$data.filteredThrows !== '') {
          parsed.throws = this.$data.filteredThrows
        }
        if (this.$data.filteredBats !== '') {
          parsed.bats = this.$data.filteredBats
        }
        if (this.$data.simNumber !== '') {
          parsed.simNumber = this.$data.simNumber
        }
        if (this.$data.simYear !== 'All' && this.$data.simYear !== '') {
          parsed.simYear = this.$data.simYear
        }
        if (this.$data.filteredAges.length > 0) {
          parsed.age = _.map(this.$data.filteredAges).join(',')
        }
        if (this.$data.filteredPosition.length > 0) {
          parsed.position = _.map(this.$data.filteredPosition).join(',')
        }
        parsed.limit = this.$data.limit
//        parsed.limit = 30
        parsed.sort = this.$data.sort

        return queryString.stringify(parsed)
      },
      _toggle_sort: function (event) {
        let category = event.target.innerHTML.toLowerCase()
        if (event.target.previousElementSibling.firstChild.classList.contains('fa-sort-up')) {
          this.players.sort(function (a, b) {
            let obj = sortModel(a, b, category)
            return parseFloat(obj.prev) - parseFloat(obj.next)
          })
          removeAllClasses('fa-sort-up')
          removeAllClasses('fa-sort-down')
          removeAllClasses('sorted-cell')
          event.target.nextElementSibling.firstChild.classList.add('fa-sort-down')
        } else {
          this.players.sort(function (a, b) {
            let obj = sortModel(a, b, category)
            return parseFloat(obj.next) - parseFloat(obj.prev)
          })
          removeAllClasses('fa-sort-up')
          removeAllClasses('fa-sort-down')
          removeAllClasses('sorted-cell')
          event.target.previousElementSibling.firstChild.classList.add('fa-sort-up')
        }
//        addClass(category)
        this.$data.sort = categoryToModelName(category)
      }
    }
  }

  //  function addClass (category) {
  //    let items = document.querySelectorAll('.' + category)
  //    for (let i = 0; i < items.length; i++) {
  //      items[i].classList.add('sorted-cell')
  //    }
  //  }

  function removeAllClasses (name) {
    let items = document.querySelectorAll('.' + name)
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove(name)
    }
  }

  function categoryToModelName (category) {
    if (category === 'overall') {
      return 'overall'
    } else if (category === 'peak') {
      return 'peak'
    } else if (category === 'contact') {
      return 'contact'
    } else if (category === 'power') {
      return 'o_power'
    } else if (category === 'eye') {
      return 'eye'
    } else if (category === 'speed') {
      return 'speed'
    } else if (category === 'arm') {
      return 'arm'
    } else if (category === 'range') {
      return 'range'
    } else if (category === 'fielding') {
      return 'fielding'
    } else if (category === 'defense') {
      return 'defense'
    } else if (category === 'health') {
      return 'health'
    } else if (category === 'scouting') {
      return 'scouting'
    } else if (category === 'salary') {
      return 'salary'
    } else if (category === 'happiness') {
      return 'happiness'
    } else if (category === 'contract') {
      return 'contract'
    } else if (category === 'injured') {
      return 'injured'
    } else if (category === 'roster') {
      return 'roster'
    } else if (category === 'dft. yr.') {
      return 'dft. yr.'
    } else if (category === 'endurance') {
      return 'endurance'
    } else if (category === 'control') {
      return 'control'
    } else if (category === 'power') {
      return 'power'
    } else if (category === 'movement') {
      return 'movement'
    } else if (category === 'mph') {
      return 'mph'
    } else if (category === 'pitch #1') {
      return 'pitch #1'
    } else if (category === 'pitch #2') {
      return 'pitch #2'
    } else if (category === 'pitch #3') {
      return 'pitch #3'
    }
  }

  function sortModel (a, b, category) {
    let prev
    let next
    if (category === 'overall') {
      prev = a.overall
      next = b.overall
    } else if (category === 'peak') {
      prev = a.peak
      next = b.peak
    } else if (category === 'contact') {
      prev = a.contact
      next = b.contact
    } else if (category === 'power') {
      prev = a.o_power
      next = b.o_power
    } else if (category === 'eye') {
      prev = a.eye
      next = b.eye
    } else if (category === 'speed') {
      prev = a.speed
      next = b.speed
    } else if (category === 'arm') {
      prev = a.arm
      next = b.arm
    } else if (category === 'range') {
      prev = a.range
      next = b.range
    } else if (category === 'fielding') {
      prev = a.fielding
      next = b.fielding
    } else if (category === 'defense') {
      prev = a.defense
      next = b.defense
    } else if (category === 'health') {
      prev = a.health
      next = b.health
    } else if (category === 'scouting') {
      prev = a.scouting
      next = b.scouting
    } else if (category === 'salary') {
      // eslint-disable-next-line
      prev = Number(a.salary.replace(/[^0-9\.-]+/g, ''))
      // eslint-disable-next-line
      next = Number(b.salary.replace(/[^0-9\.-]+/g, ''))
    } else if (category === 'happiness') {
      prev = a.happiness
      next = b.happiness
    } else if (category === 'contract') {
      prev = a.years
      next = b.years
    } else if (category === 'injured') {
      prev = a.injury_time
      next = b.injury_time
    } else if (category === 'roster') {
      prev = a.roster
      next = b.roster
    } else if (category === 'dft. yr.') {
      prev = a.draft_year
      next = b.draft_year
    } else if (category === 'endurance') {
      prev = a.endurance
      next = b.endurance
    } else if (category === 'control') {
      prev = a.control
      next = b.control
    } else if (category === 'power') {
      prev = a.p_power
      next = b.p_power
    } else if (category === 'movement') {
      prev = a.movement
      next = b.movement
    } else if (category === 'mph') {
      prev = a.mph
      next = b.mph
    } else if (category === 'pitch #1') {
      prev = a.pitch_1
      next = b.pitch_1
    } else if (category === 'pitch #2') {
      prev = a.pitch_2
      next = b.pitch_2
    } else if (category === 'pitch #3') {
      prev = a.pitch_3
      next = b.pitch_3
    }
    return {prev, next}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./playerMain.scss" lang="scss" scoped></style>

