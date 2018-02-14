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
            <input class='position-filter' type="checkbox" v-on:click='_filter' value="1B"> 1B
          </label>
          <label class="checkbox">
            <input class='position-filter' type="checkbox" v-on:click='_filter' value="LF"> LF
          </label>
          <label class="checkbox">
            <input class='position-filter' type="checkbox" v-on:click='_filter' value="SP"> SP
          </label>
        </div>
        <div class="control">
          <label class="checkbox">
            <input class='position-filter' type="checkbox" v-on:click='_filter' value="2B"> 2B
          </label>
          <label class="checkbox">
            <input class='position-filter' type="checkbox" v-on:click='_filter' value="CF"> CF
          </label>
          <label class="checkbox">
            <input class='position-filter' type="checkbox" v-on:click='_filter' value="RP"> RP
          </label>
        </div>
        <div class="control">
          <label class="checkbox">
            <input class='position-filter' type="checkbox" v-on:click='_filter' value="3B"> 3B
          </label>
          <label class="checkbox">
            <input class='position-filter' type="checkbox" v-on:click='_filter' value="RF"> RF
          </label>
        </div>
        <div class="control">
          <label class="checkbox">
            <input class='position-filter' type="checkbox" v-on:click='_filter' value="SS"> SS
          </label>
        </div>
        <div class="control">
          <label class="checkbox">
            <input class='position-filter' type="checkbox" v-on:click='_filter' value="C"> C
          </label>
        </div>
      </div>

      <div class="matches">
        <h6 class="title is-6">Bats</h6>
        <div class="control">
          <label class="radio">
            <input class='bats-filter' type="radio" name="bats" v-on:click='_filter' value="L">
            L
          </label>
          <label class="radio">
            <input class='bats-filter' type="radio" name="bats" v-on:click='_filter' value="R">
            R
          </label>
          <label class="radio">
            <input class='bats-filter' type="radio" name="bats" v-on:click='_filter' value="S">
            S
          </label>
        </div>
      </div>

      <div class="matches">
        <h6 class="title is-6">Throws</h6>
        <div class="control">
          <label class="radio">
            <input class='throws-filter' type="radio" name="throws" v-on:click='_filter' value="L">
            L
          </label>
          <label class="radio">
            <input class='throws-filter' type="radio" name="throws" v-on:click='_filter' value="R">
            R
          </label>
        </div>
      </div>

      <div class="matches">
        <h6 class="title is-6">Age</h6>
        <div class="control">
          <label class="checkbox">
            <input class="age-filter" type="checkbox" v-on:click='_filter' value="16">16
          </label>
          <label class="checkbox">
            <input class="age-filter" type="checkbox" v-on:click='_filter' value="17">17
          </label>
          <label class="checkbox">
            <input class="age-filter" type="checkbox" v-on:click='_filter' value="18">18
          </label>
        </div>
        <div class="control">
          <label class="checkbox">
            <input class="age-filter" type="checkbox" v-on:click='_filter' value="19">19
          </label>
          <label class="checkbox">
            <input class="age-filter" type="checkbox" v-on:click='_filter' value="20">20
          </label>
          <label class="checkbox">
            <input class="age-filter" type="checkbox" v-on:click='_filter' value="21">21
          </label>
        </div>
        <div class="control">
          <label class="checkbox">
            <input class="age-filter" type="checkbox" v-on:click='_filter' value="22">22
          </label>
          <label class="checkbox">
            <input class="age-filter" type="checkbox" v-on:click='_filter' value="23">23
          </label>
          <label class="checkbox">
            <input class="age-filter" type="checkbox" v-on:click='_filter' value="24">24
          </label>
        </div>
      </div>
    </div>
    <div id="content">
      <table class="table is-striped is-fullwidth is-bordered">
        <thead class="is-size-7">
        <tr>
          <th>PLAYER</th>
          <th class="has-text-centered">
            <div class="sorted-up"><i class="fa" aria-hidden="true"></i></div>
            <div class="sorted-item" v-on:click='_toggle_sort'>OVR</div>
            <div class="sorted-down"><i class="fa" aria-hidden="true"></i></div>
          </th>
          <th class="has-text-centered">
            <div class="sorted-up"><i class="fa" aria-hidden="true"></i></div>
            <div class="sorted-item" v-on:click='_toggle_sort'>PCK</div>
            <div class="sorted-down"><i class="fa" aria-hidden="true"></i></div>
          </th>
          <th class="has-text-centered">
            <div class="sorted-up"><i class="fa" aria-hidden="true"></i></div>
            <div class="sorted-item" v-on:click='_toggle_sort'>CON</div>
            <div class="sorted-down"><i class="fa" aria-hidden="true"></i></div>
          </th>
          <th class="has-text-centered">
            <div class="sorted-up"><i class="fa" aria-hidden="true"></i></div>
            <div class="sorted-item" v-on:click='_toggle_sort'>POW</div>
            <div class="sorted-down"><i class="fa" aria-hidden="true"></i></div>
          </th>
          <th class="has-text-centered">
            <div class="sorted-up"><i class="fa" aria-hidden="true"></i></div>
            <div class="sorted-item" v-on:click='_toggle_sort'>EYE</div>
            <div class="sorted-down"><i class="fa" aria-hidden="true"></i></div>
          </th>
          <th class="has-text-centered">
            <div class="sorted-up"><i class="fa" aria-hidden="true"></i></div>
            <div class="sorted-item" v-on:click='_toggle_sort'>SPD</div>
            <div class="sorted-down"><i class="fa" aria-hidden="true"></i></div>
          </th>
          <th class="has-text-centered">
            <div class="sorted-up"><i class="fa" aria-hidden="true"></i></div>
            <div class="sorted-item" v-on:click='_toggle_sort'>ARM</div>
            <div class="sorted-down"><i class="fa" aria-hidden="true"></i></div>
          </th>
          <th class="has-text-centered">
            <div class="sorted-up"><i class="fa" aria-hidden="true"></i></div>
            <div class="sorted-item" v-on:click='_toggle_sort'>RNG</div>
            <div class="sorted-down"><i class="fa" aria-hidden="true"></i></div>
          </th>
          <th class="has-text-centered">
            <div class="sorted-up"><i class="fa" aria-hidden="true"></i></div>
            <div class="sorted-item" v-on:click='_toggle_sort'>FLD</div>
            <div class="sorted-down"><i class="fa" aria-hidden="true"></i></div>
          </th>
          <th class="has-text-centered">
            <div class="sorted-up"><i class="fa" aria-hidden="true"></i></div>
            <div class="sorted-item" v-on:click='_toggle_sort'>DEF</div>
            <div class="sorted-down"><i class="fa" aria-hidden="true"></i></div>
          </th>
          <th class="has-text-centered">
            <div class="sorted-up"><i class="fa" aria-hidden="true"></i></div>
            <div class="sorted-item" v-on:click='_toggle_sort'>HTH</div>
            <div class="sorted-down"><i class="fa" aria-hidden="true"></i></div>
          </th>
          <th class="has-text-centered">
            <div class="sorted-up"><i class="fa" aria-hidden="true"></i></div>
            <div class="sorted-item" v-on:click='_toggle_sort'>SCT</div>
            <div class="sorted-down"><i class="fa" aria-hidden="true"></i></div>
          </th>
        </tr>
        </thead>
        <tbody>
        <tr tr v-for="player in players" class="player-data">
          <td class="player is-size-7">
            <span class="has-text-weight-bold is-size-7half">{{player.name}}</span>
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
          <td class="ovr has-text-centered">{{player.overall}}</td>
          <td class="pck has-text-centered">{{player.peak}}</td>
          <td class="con has-text-centered">{{player.contact}}</td>
          <td class="pow has-text-centered">{{player.o_power}}</td>
          <td class="eye has-text-centered">{{player.eye}}</td>
          <td class="spd has-text-centered">{{player.speed}}</td>

          <td class="arm has-text-centered">{{player.arm}}</td>
          <td class="rng has-text-centered">{{player.range}}</td>
          <td class="fld has-text-centered">{{player.fielding}}</td>
          <td class="def has-text-centered">{{player.defense}}</td>
          <td class="hth has-text-centered">{{player.health}}</td>
          <td class="sct has-text-centered">{{player.scouting}}</td>
        </tr>
        </tbody>
      </table>
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
        filteredAges: [],
        filteredThrows: [],
        filteredBats: [],
        filteredPosition: [],
        filteredYear: []
      }
    },
    created () {
      this.getPlayers()
    },
    updated () {
      console.log('called updated')
    },
    computed: {},
    methods: {
      getPlayers: function () {
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
        if (this.$data.filteredAges.length > 0) {
          parsed.age = _.map(this.$data.filteredAges).join(',')
        }
        if (this.$data.filteredThrows.length > 0) {
          parsed.throws = _.map(this.$data.filteredThrows).join(',')
        }
        if (this.$data.filteredBats.length > 0) {
          parsed.bats = _.map(this.$data.filteredBats).join(',')
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
        if (event.target.previousElementSibling.firstChild.classList.contains('fa-sort-up')) {
          this.players.sort(function (a, b) {
            let obj = sortModel(a, b, category)
            return parseFloat(obj.next) - parseFloat(obj.prev)
          })
          removeAllClasses('fa-sort-up')
          removeAllClasses('fa-sort-down')
          removeAllClasses('sorted-cell')
          event.target.nextElementSibling.firstChild.classList.add('fa-sort-down')
        } else {
          this.players.sort(function (a, b) {
            let obj = sortModel(a, b, category)
            return parseFloat(obj.prev) - parseFloat(obj.next)
          })
          removeAllClasses('fa-sort-up')
          removeAllClasses('fa-sort-down')
          removeAllClasses('sorted-cell')
          event.target.previousElementSibling.firstChild.classList.add('fa-sort-up')
        }
        addClass(category)
        this.$data.sort = categoryToModelName(category)
      },
      _filter: function (event) {
        let ages = document.querySelectorAll('.age-filter')
        for (let c = 0; c < ages.length; c++) {
          let item = ages[c]
          if (item.checked) {
            addItem(this.$data.filteredAges, item)
          } else {
            removeItem(this.$data.filteredAges, item)
          }
        }

        let throws = document.querySelectorAll('.throws-filter')
        for (let c = 0; c < throws.length; c++) {
          let item = throws[c]
          if (item.checked) {
            addItem(this.$data.filteredThrows, item)
          } else {
            removeItem(this.$data.filteredThrows, item)
          }
        }

        let bats = document.querySelectorAll('.bats-filter')
        for (let c = 0; c < bats.length; c++) {
          let item = bats[c]
          if (item.checked) {
            addItem(this.$data.filteredBats, item)
          } else {
            removeItem(this.$data.filteredBats, item)
          }
        }

        let pos = document.querySelectorAll('.position-filter')
        for (let c = 0; c < pos.length; c++) {
          let item = pos[c]
          if (item.checked) {
            addItem(this.$data.filteredPosition, item)
          } else {
            removeItem(this.$data.filteredPosition, item)
          }
        }

        this.getPlayers()
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

  function removeItem (array, item) {
    var index = array.indexOf(item.value)
    if (index !== -1) {
      array.splice(index, 1)
    }
  }

  function addItem (array, item) {
    if (array.indexOf(item.value) === -1) {
      array.push(item.value)
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
