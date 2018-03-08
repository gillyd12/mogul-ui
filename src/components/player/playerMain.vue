<template>
  <div id="player">
    <div id="filter">
      <div class="matches">
        <h6 class="title is-6">{{this.$data.players.length}} Matches</h6>
      </div>
      <div class="line"></div>
      <div class="matches">
        <h6 class="title is-6">Position</h6>
        <div class="position">
          <div class="offense">
            <h6 class="">Offense</h6>
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
          <div class="pitching">
            <h6 class="">Pitching</h6>
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
              <tr class="empty-row">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
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
              <tr class="empty-row">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
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
              <tr class="empty-row">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
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
        /* eslint-disable */
        this.players = [
          {
            "name": "Wilson, Jeremy",
            "age": "26",
            "height": "6'3\"",
            "weight": "200 lbs",
            "year_born": "2052",
            "position": "SP",
            "bats": "L",
            "throws": "L",
            "draft_year": "2070",
            "debut_date": "--",
            "debut_age": "--",
            "salary": "$25,800,000",
            "years": "5",
            "arbitration": "No",
            "free_agency": "Yes",
            "organizational_roster": "ATL",
            "player_option": "None",
            "team_option": "None",
            "no_trade": "No",
            "seeking": "--",
            "simYear": "2078",
            "simNumber": "8",
            "peak_at_draft": "97",
            "overall": "95",
            "peak": "95",
            "upside": "--",
            "health": "82",
            "happiness": "-47",
            "scouting": "9.8",
            "injury_time": 0,
            "years_played": "6",
            "mlb_service": "6 years, 44 days",
            "roster": "Starter #2",
            "contact": "55",
            "o_power": "58",
            "speed": "60",
            "eye": "62",
            "bunt": "75",
            "arm": "65",
            "range": "60",
            "fielding": "81",
            "handling": "36",
            "defense": "43",
            "endurance": "72",
            "control": "97",
            "p_power": "86",
            "movement": "98",
            "mph": "92",
            "pitch_1": "Curve",
            "pitch_2": "Fastball",
            "pitch_3": "Change",
            "pitch_4": "Slider",
            "pitch_5": "--",
            "createdAt": "2018-02-27T02:16:31.665Z",
            "updatedAt": "2018-02-27T02:16:31.665Z",
            "id": "5a94bf7fdfcaf8a3070b2b81"
          },
          {
            "name": "Tonnochy, Johnny",
            "age": "26",
            "height": "6'1\"",
            "weight": "200 lbs",
            "year_born": "2052",
            "position": "SP",
            "bats": "R",
            "throws": "R",
            "draft_year": "2070",
            "debut_date": "--",
            "debut_age": "--",
            "salary": "$500,000",
            "years": "Arb '78",
            "arbitration": "Yes",
            "free_agency": "No",
            "organizational_roster": "CHC",
            "player_option": "None",
            "team_option": "None",
            "no_trade": "No",
            "seeking": "$21.4M for 7 yrs",
            "simYear": "2078",
            "simNumber": "8",
            "peak_at_draft": "97",
            "overall": "94",
            "peak": "95",
            "upside": "1",
            "health": "87",
            "happiness": "-92",
            "scouting": "9.8",
            "injury_time": 0,
            "years_played": "4",
            "mlb_service": "3 years, 11 days",
            "roster": "Starter #3",
            "contact": "49",
            "o_power": "55",
            "speed": "65",
            "eye": "67",
            "bunt": "86",
            "arm": "80",
            "range": "74",
            "fielding": "73",
            "handling": "37",
            "defense": "49",
            "endurance": "85",
            "control": "83",
            "p_power": "89",
            "movement": "95",
            "mph": "93",
            "pitch_1": "Fastball",
            "pitch_2": "Cutter",
            "pitch_3": "Slider",
            "pitch_4": "Curve",
            "pitch_5": "--",
            "createdAt": "2018-02-27T02:16:53.772Z",
            "updatedAt": "2018-02-27T02:16:53.772Z",
            "id": "5a94bf95dfcaf8a3070b2c42"
          },
          {
            "name": "Cranstoun, Mike",
            "age": "30",
            "height": "6'1\"",
            "weight": "210 lbs",
            "year_born": "2047",
            "position": "SP",
            "bats": "R",
            "throws": "R",
            "draft_year": "2068",
            "debut_date": "--",
            "debut_age": "--",
            "salary": "$35,000,000",
            "years": "7",
            "arbitration": "No",
            "free_agency": "Yes",
            "organizational_roster": "LAD",
            "player_option": "None",
            "team_option": "None",
            "no_trade": "No",
            "seeking": "--",
            "simYear": "2078",
            "simNumber": "8",
            "peak_at_draft": "88",
            "overall": "94",
            "peak": "94",
            "upside": "--",
            "health": "85",
            "happiness": "-35",
            "scouting": "9.8",
            "injury_time": 0,
            "years_played": "7",
            "mlb_service": "7 years, 123 days",
            "roster": "Starter #1",
            "contact": "49",
            "o_power": "50",
            "speed": "65",
            "eye": "61",
            "bunt": "70",
            "arm": "66",
            "range": "64",
            "fielding": "79",
            "handling": "36",
            "defense": "45",
            "endurance": "70",
            "control": "91",
            "p_power": "79",
            "movement": "93",
            "mph": "89",
            "pitch_1": "Two-Seamer",
            "pitch_2": "Slider",
            "pitch_3": "Fastball",
            "pitch_4": "Change",
            "pitch_5": "--",
            "createdAt": "2018-02-27T02:18:03.598Z",
            "updatedAt": "2018-02-27T02:18:03.598Z",
            "id": "5a94bfdbdfcaf8a3070b2eb9"
          },
          {
            "name": "William, Tom",
            "age": "28",
            "height": "6'3\"",
            "weight": "213 lbs",
            "year_born": "2049",
            "position": "SP",
            "bats": "R",
            "throws": "R",
            "draft_year": "2066",
            "debut_date": "--",
            "debut_age": "--",
            "salary": "$18,600,000",
            "years": "5",
            "arbitration": "No",
            "free_agency": "Yes",
            "organizational_roster": "ATL",
            "player_option": "None",
            "team_option": "None",
            "no_trade": "No",
            "seeking": "--",
            "simYear": "2078",
            "simNumber": "8",
            "peak_at_draft": "96",
            "overall": "93",
            "peak": "93",
            "upside": "--",
            "health": "83",
            "happiness": "11",
            "scouting": "9.8",
            "injury_time": 0,
            "years_played": "6",
            "mlb_service": "6 years, 60 days",
            "roster": "Starter #1",
            "contact": "51",
            "o_power": "50",
            "speed": "63",
            "eye": "62",
            "bunt": "72",
            "arm": "71",
            "range": "64",
            "fielding": "71",
            "handling": "36",
            "defense": "44",
            "endurance": "86",
            "control": "89",
            "p_power": "88",
            "movement": "97",
            "mph": "90",
            "pitch_1": "Curve",
            "pitch_2": "Cutter",
            "pitch_3": "Change",
            "pitch_4": "Fastball",
            "pitch_5": "--",
            "createdAt": "2018-02-27T02:16:31.653Z",
            "updatedAt": "2018-02-27T02:16:31.653Z",
            "id": "5a94bf7fdfcaf8a3070b2b7e"
          },
          {
            "name": "Audley, Marc",
            "age": "23",
            "height": "6'5\"",
            "weight": "210 lbs",
            "year_born": "2054",
            "position": "SP",
            "bats": "R",
            "throws": "R",
            "draft_year": "2071",
            "debut_date": "--",
            "debut_age": "--",
            "salary": "$500,000",
            "years": "Arb '80",
            "arbitration": "No",
            "free_agency": "No",
            "organizational_roster": "ATL",
            "player_option": "None",
            "team_option": "None",
            "no_trade": "No",
            "seeking": "$1.7M for 1 yr",
            "simYear": "2078",
            "simNumber": "8",
            "peak_at_draft": "91",
            "overall": "93",
            "peak": "94",
            "upside": "1",
            "health": "74",
            "happiness": "-68",
            "scouting": "9.8",
            "injury_time": 2,
            "years_played": "Rookie",
            "mlb_service": "125 days",
            "roster": "Starter #3",
            "contact": "52",
            "o_power": "53",
            "speed": "61",
            "eye": "63",
            "bunt": "72",
            "arm": "55",
            "range": "57",
            "fielding": "76",
            "handling": "36",
            "defense": "47",
            "endurance": "70",
            "control": "95",
            "p_power": "79",
            "movement": "96",
            "mph": "89",
            "pitch_1": "Fastball",
            "pitch_2": "Change",
            "pitch_3": "Cutter",
            "pitch_4": "Curve",
            "pitch_5": "--",
            "createdAt": "2018-02-27T02:16:32.272Z",
            "updatedAt": "2018-02-27T02:16:32.272Z",
            "id": "5a94bf80dfcaf8a3070b2b84"
          },
          {
            "name": "Montehgudo, Angelo",
            "age": "27",
            "height": "6'3\"",
            "weight": "225 lbs",
            "year_born": "2050",
            "position": "SP",
            "bats": "R",
            "throws": "R",
            "draft_year": "2070",
            "debut_date": "--",
            "debut_age": "--",
            "salary": "$10,500,000",
            "years": "1",
            "arbitration": "Yes",
            "free_agency": "No",
            "organizational_roster": "ATL",
            "player_option": "None",
            "team_option": "None",
            "no_trade": "No",
            "seeking": "$12.2M for 1 yr",
            "simYear": "2078",
            "simNumber": "8",
            "peak_at_draft": "85",
            "overall": "93",
            "peak": "93",
            "upside": "--",
            "health": "78",
            "happiness": "-38",
            "scouting": "9.8",
            "injury_time": 0,
            "years_played": "3",
            "mlb_service": "3 years, 123 days",
            "roster": "Starter #4",
            "contact": "50",
            "o_power": "49",
            "speed": "64",
            "eye": "62",
            "bunt": "70",
            "arm": "70",
            "range": "67",
            "fielding": "81",
            "handling": "37",
            "defense": "44",
            "endurance": "86",
            "control": "85",
            "p_power": "97",
            "movement": "97",
            "mph": "93",
            "pitch_1": "Fastball",
            "pitch_2": "Curve",
            "pitch_3": "Slider",
            "pitch_4": "Cutter",
            "pitch_5": "Change",
            "createdAt": "2018-02-27T02:16:32.274Z",
            "updatedAt": "2018-02-27T02:16:32.274Z",
            "id": "5a94bf80dfcaf8a3070b2b86"
          },
          {
            "name": "Carter, James",
            "age": "29",
            "height": "5'10\"",
            "weight": "180 lbs",
            "year_born": "2048",
            "position": "SP",
            "bats": "L",
            "throws": "L",
            "draft_year": "2068",
            "debut_date": "--",
            "debut_age": "--",
            "salary": "$13,500,000",
            "years": "5",
            "arbitration": "No",
            "free_agency": "Yes",
            "organizational_roster": "BAL",
            "player_option": "None",
            "team_option": "None",
            "no_trade": "No",
            "seeking": "--",
            "simYear": "2078",
            "simNumber": "8",
            "peak_at_draft": "88",
            "overall": "93",
            "peak": "93",
            "upside": "--",
            "health": "75",
            "happiness": "94",
            "scouting": "9.8",
            "injury_time": 0,
            "years_played": "7",
            "mlb_service": "7 years, 120 days",
            "roster": "Starter #1",
            "contact": "55",
            "o_power": "55",
            "speed": "61",
            "eye": "63",
            "bunt": "75",
            "arm": "67",
            "range": "62",
            "fielding": "73",
            "handling": "36",
            "defense": "42",
            "endurance": "86",
            "control": "91",
            "p_power": "93",
            "movement": "94",
            "mph": "94",
            "pitch_1": "Fastball",
            "pitch_2": "Change",
            "pitch_3": "Cutter",
            "pitch_4": "Slider",
            "pitch_5": "--",
            "createdAt": "2018-02-27T02:16:37.767Z",
            "updatedAt": "2018-02-27T02:16:37.767Z",
            "id": "5a94bf85dfcaf8a3070b2bb6"
          },
          {
            "name": "Bertot, Roberto",
            "age": "29",
            "height": "6'1\"",
            "weight": "206 lbs",
            "year_born": "2048",
            "position": "SP",
            "bats": "L",
            "throws": "L",
            "draft_year": "2066",
            "debut_date": "--",
            "debut_age": "--",
            "salary": "$16,200,000",
            "years": "5",
            "arbitration": "No",
            "free_agency": "Yes",
            "organizational_roster": "BOS",
            "player_option": "None",
            "team_option": "None",
            "no_trade": "No",
            "seeking": "--",
            "simYear": "2078",
            "simNumber": "8",
            "peak_at_draft": "86",
            "overall": "93",
            "peak": "93",
            "upside": "--",
            "health": "89",
            "happiness": "89",
            "scouting": "9.8",
            "injury_time": 0,
            "years_played": "5",
            "mlb_service": "5 years, 138 days",
            "roster": "Starter #2",
            "contact": "55",
            "o_power": "54",
            "speed": "67",
            "eye": "62",
            "bunt": "83",
            "arm": "84",
            "range": "75",
            "fielding": "82",
            "handling": "37",
            "defense": "42",
            "endurance": "83",
            "control": "96",
            "p_power": "81",
            "movement": "96",
            "mph": "88",
            "pitch_1": "Sinker",
            "pitch_2": "Curve",
            "pitch_3": "Fastball",
            "pitch_4": "Slider",
            "pitch_5": "Circle Change",
            "createdAt": "2018-02-27T02:16:46.417Z",
            "updatedAt": "2018-02-27T02:16:46.417Z",
            "id": "5a94bf8edfcaf8a3070b2c02"
          },
          {
            "name": "Edmunds, Rod",
            "age": "24",
            "height": "6'3\"",
            "weight": "204 lbs",
            "year_born": "2053",
            "position": "SP",
            "bats": "R",
            "throws": "R",
            "draft_year": "2070",
            "debut_date": "--",
            "debut_age": "--",
            "salary": "$11,000,000",
            "years": "1",
            "arbitration": "Yes",
            "free_agency": "No",
            "organizational_roster": "BOS",
            "player_option": "None",
            "team_option": "None",
            "no_trade": "No",
            "seeking": "$11.5M for 1 yr",
            "simYear": "2078",
            "simNumber": "8",
            "peak_at_draft": "94",
            "overall": "93",
            "peak": "93",
            "upside": "--",
            "health": "72",
            "happiness": "-18",
            "scouting": "9.8",
            "injury_time": 0,
            "years_played": "4",
            "mlb_service": "4 years, 59 days",
            "roster": "Starter #1",
            "contact": "50",
            "o_power": "50",
            "speed": "63",
            "eye": "63",
            "bunt": "79",
            "arm": "67",
            "range": "65",
            "fielding": "78",
            "handling": "36",
            "defense": "41",
            "endurance": "88",
            "control": "84",
            "p_power": "85",
            "movement": "95",
            "mph": "92",
            "pitch_1": "Sinker",
            "pitch_2": "Fastball",
            "pitch_3": "Slider",
            "pitch_4": "Circle Change",
            "pitch_5": "--",
            "createdAt": "2018-02-27T02:16:46.418Z",
            "updatedAt": "2018-02-27T02:16:46.418Z",
            "id": "5a94bf8edfcaf8a3070b2c03"
          },
          {
            "name": "Salas, Max",
            "age": "28",
            "height": "6'2\"",
            "weight": "220 lbs",
            "year_born": "2049",
            "position": "SP",
            "bats": "R",
            "throws": "R",
            "draft_year": "2067",
            "debut_date": "--",
            "debut_age": "--",
            "salary": "$14,000,000",
            "years": "1",
            "arbitration": "No",
            "free_agency": "Yes",
            "organizational_roster": "CHW",
            "player_option": "None",
            "team_option": "None",
            "no_trade": "No",
            "seeking": "$16.1M for 1 yr",
            "simYear": "2078",
            "simNumber": "8",
            "peak_at_draft": "97",
            "overall": "93",
            "peak": "93",
            "upside": "--",
            "health": "88",
            "happiness": "24",
            "scouting": "9.8",
            "injury_time": 0,
            "years_played": "6",
            "mlb_service": "6 years, 0 days",
            "roster": "Starter #1",
            "contact": "51",
            "o_power": "57",
            "speed": "62",
            "eye": "63",
            "bunt": "81",
            "arm": "67",
            "range": "65",
            "fielding": "78",
            "handling": "36",
            "defense": "41",
            "endurance": "88",
            "control": "82",
            "p_power": "86",
            "movement": "94",
            "mph": "92",
            "pitch_1": "Slider",
            "pitch_2": "Fastball",
            "pitch_3": "Curve",
            "pitch_4": "Two-Seamer",
            "pitch_5": "--",
            "createdAt": "2018-02-27T02:17:02.323Z",
            "updatedAt": "2018-02-27T02:17:02.323Z",
            "id": "5a94bf9edfcaf8a3070b2c8e"
          },
          {
            "name": "Smith, Homer",
            "age": "35",
            "height": "6'1\"",
            "weight": "215 lbs",
            "year_born": "2043",
            "position": "SP",
            "bats": "R",
            "throws": "R",
            "draft_year": "2064",
            "debut_date": "--",
            "debut_age": "--",
            "salary": "$13,600,000",
            "years": "3",
            "arbitration": "No",
            "free_agency": "Yes",
            "organizational_roster": "OAK",
            "player_option": "None",
            "team_option": "None",
            "no_trade": "No",
            "seeking": "--",
            "simYear": "2078",
            "simNumber": "8",
            "peak_at_draft": "92",
            "overall": "93",
            "peak": "93",
            "upside": "--",
            "health": "76",
            "happiness": "87",
            "scouting": "9.8",
            "injury_time": 0,
            "years_played": "11",
            "mlb_service": "11 years, 111 days",
            "roster": "Starter #1",
            "contact": "54",
            "o_power": "53",
            "speed": "63",
            "eye": "62",
            "bunt": "73",
            "arm": "71",
            "range": "67",
            "fielding": "82",
            "handling": "37",
            "defense": "43",
            "endurance": "84",
            "control": "97",
            "p_power": "81",
            "movement": "95",
            "mph": "93",
            "pitch_1": "Change",
            "pitch_2": "Cutter",
            "pitch_3": "Fastball",
            "pitch_4": "Splitter",
            "pitch_5": "--",
            "createdAt": "2018-02-27T02:18:46.674Z",
            "updatedAt": "2018-02-27T02:18:46.674Z",
            "id": "5a94c006dfcaf8a3070b3031"
          },
          {
            "name": "Verastequi, Victor",
            "age": "30",
            "height": "6'0\"",
            "weight": "200 lbs",
            "year_born": "2048",
            "position": "SP",
            "bats": "R",
            "throws": "R",
            "draft_year": "2067",
            "debut_date": "--",
            "debut_age": "--",
            "salary": "$21,000,000",
            "years": "6",
            "arbitration": "No",
            "free_agency": "Yes",
            "organizational_roster": "OAK",
            "player_option": "None",
            "team_option": "None",
            "no_trade": "No",
            "seeking": "--",
            "simYear": "2078",
            "simNumber": "8",
            "peak_at_draft": "93",
            "overall": "93",
            "peak": "93",
            "upside": "--",
            "health": "84",
            "happiness": "-61",
            "scouting": "9.8",
            "injury_time": 0,
            "years_played": "7",
            "mlb_service": "7 years, 123 days",
            "roster": "Starter #2",
            "contact": "51",
            "o_power": "52",
            "speed": "63",
            "eye": "62",
            "bunt": "72",
            "arm": "70",
            "range": "66",
            "fielding": "75",
            "handling": "36",
            "defense": "43",
            "endurance": "91",
            "control": "81",
            "p_power": "91",
            "movement": "90",
            "mph": "95",
            "pitch_1": "Fastball",
            "pitch_2": "Cutter",
            "pitch_3": "Curve",
            "pitch_4": "Slider",
            "pitch_5": "--",
            "createdAt": "2018-02-27T02:18:46.742Z",
            "updatedAt": "2018-02-27T02:18:46.742Z",
            "id": "5a94c006dfcaf8a3070b3032"
          },
          {
            "name": "Devlin, Nathan",
            "age": "29",
            "height": "6'5\"",
            "weight": "235 lbs",
            "year_born": "2048",
            "position": "SP",
            "bats": "R",
            "throws": "R",
            "draft_year": "2067",
            "debut_date": "--",
            "debut_age": "--",
            "salary": "$18,000,000",
            "years": "5",
            "arbitration": "No",
            "free_agency": "Yes",
            "organizational_roster": "PHI",
            "player_option": "None",
            "team_option": "None",
            "no_trade": "No",
            "seeking": "--",
            "simYear": "2078",
            "simNumber": "8",
            "peak_at_draft": "94",
            "overall": "93",
            "peak": "93",
            "upside": "--",
            "health": "90",
            "happiness": "45",
            "scouting": "9.8",
            "injury_time": 0,
            "years_played": "6",
            "mlb_service": "6 years, 71 days",
            "roster": "Starter #3",
            "contact": "51",
            "o_power": "54",
            "speed": "63",
            "eye": "63",
            "bunt": "69",
            "arm": "73",
            "range": "65",
            "fielding": "73",
            "handling": "36",
            "defense": "48",
            "endurance": "74",
            "control": "88",
            "p_power": "76",
            "movement": "93",
            "mph": "88",
            "pitch_1": "Two-Seamer",
            "pitch_2": "Change",
            "pitch_3": "Fastball",
            "pitch_4": "Curve",
            "pitch_5": "--",
            "createdAt": "2018-02-27T02:18:53.232Z",
            "updatedAt": "2018-02-27T02:18:53.232Z",
            "id": "5a94c00ddfcaf8a3070b306d"
          },
          {
            "name": "Hadleman, Nathan",
            "age": "28",
            "height": "6'2\"",
            "weight": "210 lbs",
            "year_born": "2050",
            "position": "SP",
            "bats": "R",
            "throws": "R",
            "draft_year": "2070",
            "debut_date": "--",
            "debut_age": "--",
            "salary": "$9,900,000",
            "years": "1",
            "arbitration": "Yes",
            "free_agency": "No",
            "organizational_roster": "PHI",
            "player_option": "None",
            "team_option": "None",
            "no_trade": "No",
            "seeking": "$8.8M for 1 yr",
            "simYear": "2078",
            "simNumber": "8",
            "peak_at_draft": "93",
            "overall": "93",
            "peak": "93",
            "upside": "--",
            "health": "76",
            "happiness": "-75",
            "scouting": "9.8",
            "injury_time": 0,
            "years_played": "4",
            "mlb_service": "4 years, 38 days",
            "roster": "Starter #4",
            "contact": "55",
            "o_power": "54",
            "speed": "62",
            "eye": "63",
            "bunt": "72",
            "arm": "73",
            "range": "65",
            "fielding": "73",
            "handling": "36",
            "defense": "48",
            "endurance": "67",
            "control": "94",
            "p_power": "79",
            "movement": "95",
            "mph": "88",
            "pitch_1": "Splitter",
            "pitch_2": "Fastball",
            "pitch_3": "Slider",
            "pitch_4": "Change",
            "pitch_5": "--",
            "createdAt": "2018-02-27T02:18:53.388Z",
            "updatedAt": "2018-02-27T02:18:53.388Z",
            "id": "5a94c00ddfcaf8a3070b306f"
          },
          {
            "name": "Carolino, Damian",
            "age": "30",
            "height": "6'7\"",
            "weight": "236 lbs",
            "year_born": "2047",
            "position": "SP",
            "bats": "L",
            "throws": "L",
            "draft_year": "2067",
            "debut_date": "--",
            "debut_age": "--",
            "salary": "$12,000,000",
            "years": "4",
            "arbitration": "No",
            "free_agency": "Yes",
            "organizational_roster": "SDP",
            "player_option": "None",
            "team_option": "None",
            "no_trade": "No",
            "seeking": "--",
            "simYear": "2078",
            "simNumber": "8",
            "peak_at_draft": "85",
            "overall": "93",
            "peak": "93",
            "upside": "--",
            "health": "80",
            "happiness": "10",
            "scouting": "9.8",
            "injury_time": 0,
            "years_played": "7",
            "mlb_service": "7 years, 123 days",
            "roster": "Starter #1",
            "contact": "51",
            "o_power": "59",
            "speed": "59",
            "eye": "63",
            "bunt": "72",
            "arm": "59",
            "range": "57",
            "fielding": "72",
            "handling": "35",
            "defense": "41",
            "endurance": "81",
            "control": "87",
            "p_power": "82",
            "movement": "94",
            "mph": "90",
            "pitch_1": "Slider",
            "pitch_2": "Fastball",
            "pitch_3": "Circle Change",
            "pitch_4": "Cutter",
            "pitch_5": "Curve",
            "createdAt": "2018-02-27T02:19:06.640Z",
            "updatedAt": "2018-02-27T02:19:06.640Z",
            "id": "5a94c01adfcaf8a3070b30e3"
          },
          {
            "name": "Abberley, Andrew",
            "age": "28",
            "height": "6'1\"",
            "weight": "195 lbs",
            "year_born": "2050",
            "position": "SP",
            "bats": "L",
            "throws": "L",
            "draft_year": "2071",
            "debut_date": "Jun 13, 2076",
            "debut_age": "26",
            "salary": "$12,900,000",
            "years": "4",
            "arbitration": "No",
            "free_agency": "Yes",
            "organizational_roster": "SEA",
            "player_option": "None",
            "team_option": "None",
            "no_trade": "No",
            "seeking": "--",
            "simYear": "2078",
            "simNumber": "8",
            "peak_at_draft": "94",
            "overall": "93",
            "peak": "93",
            "upside": "--",
            "health": "80",
            "happiness": "-34",
            "scouting": "9.8",
            "injury_time": 0,
            "years_played": "5",
            "mlb_service": "5 years, 61 days",
            "roster": "Starter #3",
            "contact": "51",
            "o_power": "49",
            "speed": "61",
            "eye": "62",
            "bunt": "70",
            "arm": "65",
            "range": "59",
            "fielding": "81",
            "handling": "36",
            "defense": "48",
            "endurance": "70",
            "control": "79",
            "p_power": "87",
            "movement": "93",
            "mph": "93",
            "pitch_1": "Fastball",
            "pitch_2": "Curve",
            "pitch_3": "Cutter",
            "pitch_4": "Slider",
            "pitch_5": "Circle Change",
            "createdAt": "2018-02-27T02:19:22.971Z",
            "updatedAt": "2018-02-27T02:19:22.971Z",
            "id": "5a94c02adfcaf8a3070b3173"
          },
          {
            "name": "Gabbard, James",
            "age": "30",
            "height": "6'6\"",
            "weight": "230 lbs",
            "year_born": "2048",
            "position": "SP",
            "bats": "R",
            "throws": "R",
            "draft_year": "2068",
            "debut_date": "--",
            "debut_age": "--",
            "salary": "$14,600,000",
            "years": "6",
            "arbitration": "No",
            "free_agency": "Yes",
            "organizational_roster": "STL",
            "player_option": "None",
            "team_option": "None",
            "no_trade": "No",
            "seeking": "--",
            "simYear": "2078",
            "simNumber": "8",
            "peak_at_draft": "84",
            "overall": "93",
            "peak": "93",
            "upside": "--",
            "health": "78",
            "happiness": "90",
            "scouting": "9.8",
            "injury_time": 0,
            "years_played": "7",
            "mlb_service": "7 years, 79 days",
            "roster": "Starter #1",
            "contact": "47",
            "o_power": "54",
            "speed": "62",
            "eye": "59",
            "bunt": "83",
            "arm": "67",
            "range": "66",
            "fielding": "78",
            "handling": "36",
            "defense": "48",
            "endurance": "85",
            "control": "92",
            "p_power": "86",
            "movement": "93",
            "mph": "95",
            "pitch_1": "Fastball",
            "pitch_2": "Cutter",
            "pitch_3": "Curve",
            "pitch_4": "Change",
            "pitch_5": "--",
            "createdAt": "2018-02-27T02:19:29.278Z",
            "updatedAt": "2018-02-27T02:19:29.278Z",
            "id": "5a94c031dfcaf8a3070b31ac"
          },
          {
            "name": "Verdogo, Manuel",
            "age": "33",
            "height": "6'1\"",
            "weight": "213 lbs",
            "year_born": "2044",
            "position": "SP",
            "bats": "R",
            "throws": "R",
            "draft_year": "2062",
            "debut_date": "--",
            "debut_age": "--",
            "salary": "$15,000,000",
            "years": "1",
            "arbitration": "No",
            "free_agency": "Yes",
            "organizational_roster": "WSN",
            "player_option": "None",
            "team_option": "None",
            "no_trade": "No",
            "seeking": "$26.5M for 5 yrs",
            "simYear": "2078",
            "simNumber": "8",
            "peak_at_draft": "89",
            "overall": "93",
            "peak": "93",
            "upside": "--",
            "health": "87",
            "happiness": "-64",
            "scouting": "9.8",
            "injury_time": 0,
            "years_played": "11",
            "mlb_service": "11 years, 37 days",
            "roster": "Starter #1",
            "contact": "49",
            "o_power": "46",
            "speed": "65",
            "eye": "59",
            "bunt": "69",
            "arm": "58",
            "range": "56",
            "fielding": "79",
            "handling": "35",
            "defense": "40",
            "endurance": "71",
            "control": "90",
            "p_power": "75",
            "movement": "91",
            "mph": "89",
            "pitch_1": "Fastball",
            "pitch_2": "Circle Change",
            "pitch_3": "Curve",
            "pitch_4": "Two-Seamer",
            "pitch_5": "--",
            "createdAt": "2018-02-27T02:19:53.830Z",
            "updatedAt": "2018-02-27T02:19:53.830Z",
            "id": "5a94c049dfcaf8a3070b3284"
          },
          {
            "name": "Miamo, Jose",
            "age": "30",
            "height": "6'3\"",
            "weight": "212 lbs",
            "year_born": "2048",
            "position": "SP",
            "bats": "R",
            "throws": "R",
            "draft_year": "2068",
            "debut_date": "--",
            "debut_age": "--",
            "salary": "$500,000",
            "years": "Arb '78",
            "arbitration": "Yes",
            "free_agency": "No",
            "organizational_roster": "CHW",
            "player_option": "None",
            "team_option": "None",
            "no_trade": "No",
            "seeking": "$7.3M for 1 yr",
            "simYear": "2078",
            "simNumber": "8",
            "peak_at_draft": "91",
            "overall": "92",
            "peak": "92",
            "upside": "--",
            "health": "85",
            "happiness": "-42",
            "scouting": "9.7",
            "injury_time": 0,
            "years_played": "3",
            "mlb_service": "3 years, 72 days",
            "roster": "Starter #2",
            "contact": "53",
            "o_power": "56",
            "speed": "61",
            "eye": "63",
            "bunt": "79",
            "arm": "64",
            "range": "67",
            "fielding": "76",
            "handling": "36",
            "defense": "41",
            "endurance": "70",
            "control": "82",
            "p_power": "76",
            "movement": "89",
            "mph": "89",
            "pitch_1": "Fastball",
            "pitch_2": "Cutter",
            "pitch_3": "Circle Change",
            "pitch_4": "Slider",
            "pitch_5": "--",
            "createdAt": "2018-02-27T02:17:02.780Z",
            "updatedAt": "2018-02-27T02:17:02.780Z",
            "id": "5a94bf9edfcaf8a3070b2c92"
          },
          {
            "name": "Agee, Adam",
            "age": "31",
            "height": "6'0\"",
            "weight": "207 lbs",
            "year_born": "2046",
            "position": "SP",
            "bats": "R",
            "throws": "R",
            "draft_year": "2066",
            "debut_date": "--",
            "debut_age": "--",
            "salary": "$15,000,000",
            "years": "2",
            "arbitration": "No",
            "free_agency": "Yes",
            "organizational_roster": "CIN",
            "player_option": "None",
            "team_option": "None",
            "no_trade": "No",
            "seeking": "--",
            "simYear": "2078",
            "simNumber": "8",
            "peak_at_draft": "90",
            "overall": "92",
            "peak": "92",
            "upside": "--",
            "health": "83",
            "happiness": "16",
            "scouting": "9.7",
            "injury_time": 0,
            "years_played": "8",
            "mlb_service": "8 years, 5 days",
            "roster": "Starter #2",
            "contact": "48",
            "o_power": "46",
            "speed": "66",
            "eye": "61",
            "bunt": "67",
            "arm": "76",
            "range": "71",
            "fielding": "78",
            "handling": "37",
            "defense": "41",
            "endurance": "93",
            "control": "95",
            "p_power": "77",
            "movement": "92",
            "mph": "89",
            "pitch_1": "Fastball",
            "pitch_2": "Curve",
            "pitch_3": "Cutter",
            "pitch_4": "Slider",
            "pitch_5": "Circle Change",
            "createdAt": "2018-02-27T02:17:09.778Z",
            "updatedAt": "2018-02-27T02:17:09.778Z",
            "id": "5a94bfa5dfcaf8a3070b2cd3"
          }
        ]
//        this.players = []
//        let paramStr = this._buildQueryString()
//        let query = this.$data.rootQuery
//        if (paramStr) {
//          query = query + '?' + paramStr
//        }
//        let url = process.env.LOCAL_HOST + query
//        fetch(url)
//          .then(stream => stream.json())
//          // eslint-disable-next-line
//          .then(data => {
//            this.players = data
//          })
//          .catch(error => console.error(error))
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
      prev = Number(a.salary.replace(/[^0-9\.-]+/g,''))
      // eslint-disable-next-line
      next = Number(b.salary.replace(/[^0-9\.-]+/g,''))
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

