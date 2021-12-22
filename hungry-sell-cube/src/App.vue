<template>
  <div id="app">
    <Header :seller="seller"></Header>
    <header-detail :seller="seller"></header-detail>
  </div>
</template>

<script>
import Header from 'components/Header'
import HeaderDetail from 'components/header-detail'
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
    HeaderDetail
  }
}
</script>

<style lang="stylus">

</style>
