<template>
  <div id="app">
    <Header :seller="seller"></Header>
  </div>
</template>

<script>
import Header from 'components/Header'
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
    Header
  }
}
</script>

<style lang="stylus">

</style>
