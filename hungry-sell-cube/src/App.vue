<template>
  <div id="app">
    <Header :seller="seller"></Header>
    <div class="tab-box">
      <tab :tabs="tabs" :initialIndex='0'></tab>
    </div>
  </div>
</template>

<script>
import Header from 'components/Header'
import Goods from 'components/goods'
import Sellers from 'components/sellers'
import Ratings from 'components/ratings'
import Tab from 'components/tab'
import { getSeller } from 'api'

export default {
  name: 'App',
  data() {
    return {
      seller: {}
    }
  },
  computed: {
    tabs() {
      return [{
        label: '商品',
        component: Goods,
        data: {
          seller: this.seller
        }
      }, {
        label: '评价',
        component: Ratings,
        data: {
          seller: this.seller
        }
      }, {
        label: '商家',
        component: Sellers,
        data: {
          seller: this.seller
        }
      }]
    }
  },
  created() {
    this._getSeller()
  },
  methods: {
    _getSeller() {
      getSeller().then((seller) => {
        this.seller = seller
      })
    }
  },
  components: {
    Header,
    Tab
  }
}
</script>

<style lang="stylus">
  .tab-box
    position fixed
    top 160px
    left 0
    right 0
    bottom 0
</style>
