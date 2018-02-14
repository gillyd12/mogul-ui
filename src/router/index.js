import Vue from 'vue'
import Router from 'vue-router'
// import InjurySubHeader from '@/components/injury/injurySubHeader'
import PlayerSubHeader from '@/components/player/playerSubHeader'
// import InjuryMain from '@/components/injury/injuryMain'
import PlayerMain from '@/components/player/playerMain'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'players',
      components: {
        bannerView: PlayerSubHeader,
        contentView: PlayerMain
      }
      // components: {
      //   bannerView: InjurySubHeader,
      //   contentView: InjuryMain
      // }
    },

    {
      path: '/players',
      name: 'player',
      components: {
        bannerView: PlayerSubHeader,
        contentView: PlayerMain
      }
    }
  ]
})
