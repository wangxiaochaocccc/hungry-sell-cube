<template>
  <div id="app">
    <Header :seller="seller"></Header>
    <tab></tab>
  </div>
</template>

<script>
import Header from 'components/Header'
import Tab from 'components/tab'
import { getSeller } from 'api'

export default {
  name: 'App',
  data() {
    return {
      seller: {}
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

</style>
