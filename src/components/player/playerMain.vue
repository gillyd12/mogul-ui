<template>
  <div id="player">
    <div id="filter">
      <div class="matches">
        <h6 class="title is-6">{{this.$data.players.length}} Matches</h6>
        <!--<div class="tags has-addons">-->
        <!--<span class="tag is-white">Draft Class</span>-->
        <!--<a class="tag is-delete is-white"></a>-->
        <!--</div>-->
        <!--&lt;!&ndash;<div class="tags has-addons">&ndash;&gt;-->
        <!--<span class="tag is-white">2077</span>-->
        <!--<a class="tag is-delete is-white"></a>-->
      </div>
      <!--</div>-->
      <div class="line"></div>
      <!--<div class="matches">-->
      <!--<h6 class="title is-6">Year</h6>-->
      <!--<div class="select is-small">-->
      <!--<select class="simYear-filter" v-on:click='_filter'>-->
      <!--&lt;!&ndash;<option value="YEAR">YEAR</option>&ndash;&gt;-->
      <!--<option value="2077">2077</option>-->
      <!--<option value="2078" selected="true">2078</option>-->
      <!--<option value="2079">2079</option>-->
      <!--</select>-->
      <!--</div>-->
      <!--</div>-->

      <!--<div class="matches">-->
      <!--<h6 class="title is-6">Prospects Only?</h6>-->
      <!--<div class="control">-->
      <!--<label class="radio">-->
      <!--<input type="radio" name="prospects">-->
      <!--Yes-->
      <!--</label>-->
      <!--<label class="radio">-->
      <!--<input type="radio" name="prospects">-->
      <!--No-->
      <!--</label>-->
      <!--</div>-->
      <!--</div>-->

      <div class="matches">
        <h6 class="title is-6">Position</h6>
        <div class="control">
          <label class="checkbox">
            <input class='position-filter' type="checkbox" v-model="filteredPosition" value="1B"> 1B
          </label>
          <label class="checkbox">
            <input class='position-filter' type="checkbox" v-model="filteredPosition" value="LF"> LF
          </label>
          <label class="checkbox">
            <input class='position-filter' type="checkbox" v-model="filteredPosition" value="SP"> SP
          </label>
        </div>
        <div class="control">
          <label class="checkbox">
            <input class='position-filter' type="checkbox" v-model="filteredPosition" value="2B"> 2B
          </label>
          <label class="checkbox">
            <input class='position-filter' type="checkbox" v-model="filteredPosition" value="CF"> CF
          </label>
          <label class="checkbox">
            <input class='position-filter' type="checkbox" v-model="filteredPosition" value="RP"> RP
          </label>
        </div>
        <div class="control">
          <label class="checkbox">
            <input class='position-filter' type="checkbox" v-model="filteredPosition" value="3B"> 3B
          </label>
          <label class="checkbox">
            <input class='position-filter' type="checkbox" v-model="filteredPosition" value="RF"> RF
          </label>
        </div>
        <div class="control">
          <label class="checkbox">
            <input class='position-filter' type="checkbox" v-model="filteredPosition" value="SS"> SS
          </label>
        </div>
        <div class="control">
          <label class="checkbox">
            <input class='position-filter' type="checkbox" v-model="filteredPosition" value="C"> C
          </label>
        </div>
      </div>

      <div class="matches">
        <h6 class="title is-6">Bats</h6>
        <div class="control">
          <label class="radio">
            <input class='bats-filter' type="radio" name="bats" v-model="filteredBats" value="L">
            L
          </label>
          <label class="radio">
            <input class='bats-filter' type="radio" name="bats" v-model="filteredBats" value="R">
            R
          </label>
          <label class="radio">
            <input class='bats-filter' type="radio" name="bats" v-model="filteredBats" value="S">
            S
          </label>
        </div>
      </div>

      <div class="matches">
        <h6 class="title is-6">Throws</h6>
        <div class="control">
          <label class="radio">
            <input class='throws-filter' type="radio" name="throws" v-model="filteredThrows" value="L">
            L
          </label>
          <label class="radio">
            <input class='throws-filter' type="radio" name="throws" v-model="filteredThrows" value="R">
            R
          </label>
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
      <div class="table-wrapper">
        <div class="table">
          <div class="thead">
            <div class="tr">
              <div class="th">PLAYER</div>
              <div class="th" v-on:click='_toggle_sort'>
                <div class="sorted-item">OVR</div>
                <i class="fa fa-sort-up" aria-hidden="true"></i>
              </div>
              <div class="th" v-on:click='_toggle_sort'>
                <div class="sorted-item">PCK</div>
                <i class="fa fa-sort-down display-none" aria-hidden="true"></i>
              </div>
              <div class="th" v-on:click='_toggle_sort'>
                <div class="sorted-item">CON</div>
                <i class="fa fa-sort-down display-none" aria-hidden="true"></i>
              </div>
              <div class="th" v-on:click='_toggle_sort'>
                <div class="sorted-item">POW</div>
                <i class="fa fa-sort-down display-none" aria-hidden="true"></i>
              </div>
              <div class="th" v-on:click='_toggle_sort'>
                <div class="sorted-item">EYE</div>
                <i class="fa fa-sort-down display-none" aria-hidden="true"></i>
              </div>
              <div class="th" v-on:click='_toggle_sort'>
                <div class="sorted-item">SPD</div>
                <i class="fa fa-sort-down display-none" aria-hidden="true"></i>
              </div>
              <div class="th" v-on:click='_toggle_sort'>
                <div class="sorted-item">ARM</div>
                <i class="fa fa-sort-down display-none" aria-hidden="true"></i>
              </div>
              <div class="th" v-on:click='_toggle_sort'>
                <div class="sorted-item">RNG</div>
                <i class="fa fa-sort-down display-none" aria-hidden="true"></i>
              </div>
              <div class="th" v-on:click='_toggle_sort'>
                <div class="sorted-item">FLD</div>
                <i class="fa fa-sort-down display-none" aria-hidden="true"></i>
              </div>
              <div class="th" v-on:click='_toggle_sort'>
                <div class="sorted-item">DEF</div>
                <i class="fa fa-sort-down display-none" aria-hidden="true"></i>
              </div>
              <div class="th" v-on:click='_toggle_sort'>
                <div class="sorted-item">HTH</div>
                <i class="fa fa-sort-down display-none" aria-hidden="true"></i>
              </div>
              <div class="th" v-on:click='_toggle_sort'>
                <div class="sorted-item">SCT</div>
                <i class="fa fa-sort-down display-none" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div class="tbody" v-if="players.length > 0" key="players">
            <div class="tr player-data" v-for="player in players">
              <div class="td player-data-column">
                <span class="has-text-weight-bold is-size-7half">{{player.name}}</span>
                <!--<span>B/T: <span class="bats has-text-weight-bold">{{player.bats}}/{{player.throws}}</span></span>-->
                <!--<span>Pos: <span class="pos has-text-weight-bold">{{player.position}}</span></span>-->
                <!--<span>Age: <span class="age has-text-weight-bold">{{player.age}}</span></span>-->
              </div>
              <div class="td">{{player.overall}}</div>
              <div class="td">{{player.peak}}</div>
              <div class="td">{{player.contact}}</div>
              <div class="td">{{player.o_power}}</div>
              <div class="td">{{player.eye}}</div>
              <div class="td">{{player.speed}}</div>
              <div class="td">{{player.arm}}</div>
              <div class="td">{{player.range}}</div>
              <div class="td">{{player.fielding}}</div>
              <div class="td">{{player.defense}}</div>
              <div class="td">{{player.health}}</div>
              <div class="td">{{player.scouting}}</div>
            </div>
          </div>

        </div>
        <!--<transition name="fade">-->
          <!--<content-placeholders class="content-placeholders" v-if='players.length === 0' key="playerLoader">-->
            <!--&lt;!&ndash;<content-placeholders-heading :img="true"/>&ndash;&gt;-->
            <!--<content-placeholders-text :lines="30"/>-->
          <!--</content-placeholders>-->
        <!--</transition>-->
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
      this.$root.$on('prospectFilterChecked', this._updateProspectFilter)
      this.$root.$on('simYearUpdated', this._updateSimYear)

      this.getPlayers()
    },
    computed: {},
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
      filteredPosition: function () {
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
          console.log('setting sim number to draft')
          this.$data.simNumber = 'draft'
        } else {
          this.$data.simNumber = ''
        }
      },
      _updateSimYear: function (value) {
        console.log('setting sim year')
        if (value === 'All') {
          this.$data.simYear = 'All'
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
        parsed.sort = this.$data.sort

        return queryString.stringify(parsed)
      },
      _toggle_sort: function (event) {
        let category = event.target.innerHTML.toLowerCase()
        if (event.target.nextElementSibling.classList.contains('fa-sort-up')) {
          this.players.sort(function (a, b) {
            let obj = sortModel(a, b, category)
            return parseFloat(obj.prev) - parseFloat(obj.next)
          })
//          removeAllClasses('fa-sort-up')
//          removeAllClasses('fa-sort-down')
          removeAllClasses('sorted-cell')
          event.target.nextElementSibling.classList.add('fa-sort-down')
          event.target.nextElementSibling.classList.remove('display-none')
          event.target.nextElementSibling.classList.remove('fa-sort-up')
        } else {
          this.players.sort(function (a, b) {
            let obj = sortModel(a, b, category)
            return parseFloat(obj.next) - parseFloat(obj.prev)
          })
//          removeAllClasses('fa-sort-up')
//          removeAllClasses('fa-sort-down')
          removeAllClasses('sorted-cell')
          event.target.nextElementSibling.classList.add('fa-sort-up')
          event.target.nextElementSibling.classList.remove('display-none')
          event.target.nextElementSibling.classList.remove('fa-sort-down')
        }
        addClass(category)
        this.$data.sort = categoryToModelName(category)
      }
    }
  }

  function addClass (category) {
    let items = document.querySelectorAll('.' + category)
    for (let i = 0; i < items.length; i++) {
      items[i].classList.add('sorted-cell')
    }
  }

  function removeAllClasses (name) {
    let items = document.querySelectorAll('.' + name)
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove(name)
    }
  }

  function categoryToModelName (category) {
    if (category === 'ovr') {
      return 'overall'
    } else if (category === 'pck') {
      return 'peak'
    } else if (category === 'con') {
      return 'contact'
    } else if (category === 'pow') {
      return 'o_power'
    } else if (category === 'eye') {
      return 'eye'
    } else if (category === 'spd') {
      return 'speed'
    } else if (category === 'arm') {
      return 'arm'
    } else if (category === 'rng') {
      return 'range'
    } else if (category === 'fld') {
      return 'fielding'
    } else if (category === 'def') {
      return 'defense'
    } else if (category === 'hth') {
      return 'health'
    } else if (category === 'sct') {
      return 'scouting'
    }
  }

  function sortModel (a, b, category) {
    let prev
    let next
    if (category === 'ovr') {
      prev = a.overall
      next = b.overall
    } else if (category === 'pck') {
      prev = a.peak
      next = b.peak
    } else if (category === 'con') {
      prev = a.contact
      next = b.contact
    } else if (category === 'pow') {
      prev = a.o_power
      next = b.o_power
    } else if (category === 'eye') {
      prev = a.eye
      next = b.eye
    } else if (category === 'spd') {
      prev = a.speed
      next = b.speed
    } else if (category === 'arm') {
      prev = a.arm
      next = b.arm
    } else if (category === 'rng') {
      prev = a.range
      next = b.range
    } else if (category === 'fld') {
      prev = a.fielding
      next = b.fielding
    } else if (category === 'def') {
      prev = a.defense
      next = b.defense
    } else if (category === 'hth') {
      prev = a.health
      next = b.health
    } else if (category === 'sct') {
      prev = a.scouting
      next = b.scouting
    }
    return {prev, next}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./playerMain.scss" lang="scss" scoped>


</style>
