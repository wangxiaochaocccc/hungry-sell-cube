<template>
    <div>
        <div class="bubble-box">{{num}}</div>
    </div>
</template>

<script>
export default {
    name: 'bubble',
    props: {
        num: {
            type: Number
        }
    }
}
</script>
<style scoped lang="stylus">
    .bubble-box
        display inline-block
        height 16px
        line-height 16px
        text-align center
        padding 0px 5px
        font-size 12px
        font-weight bold
        font-family: Helvetica
        color #fff
        border-radius 16px
        background: linear-gradient(to right, $color-orange, $color-red)
</style>
