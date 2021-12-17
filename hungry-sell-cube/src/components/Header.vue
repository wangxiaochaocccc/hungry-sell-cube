<template>
    <div>
        <div class="header">
            <div class="content-wraper">
                <div class="avatar">
                    <img width="64" height="64" src="" alt="">
                </div>
                <div class="shop-info">
                    <div class="name-box">
                        <support-ico :size=1 :type=1></support-ico>
                        <span class="shop-name">无大量粥店</span>
                    </div>
                    <div class="distribution-box">
                        蜂鸟转送/38分钟送达
                    </div>
                    <div class="dicount-box">
                        <div class="left">
                            <span></span>
                            <span class="dicount-price">满29减8</span>
                        </div>
                        <div class="right">
                            <div class="dicount-length">
                                <span>5个</span>
                                <i class="icon-keyboard_arrow_right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="botton-notice">
                <span class="notice-icon">111</span>
                <span class="notice">2222222222222222222222222222222222222222222222222222</span>
                <span class="icon-keyboard_arrow_right"></span>
            </div>
            <div class="background"></div>
        </div>
    </div>
</template>
<script>
    import SupportIco from 'components/support-ico'

    export default {
        name: 'Header',
        components: {
            SupportIco
        }
    }
</script>
<style lang="stylus" scoped>
    @import "~common/stylus/mixin"
    @import "~common/stylus/variable"
    .header
        position: relative
        overflow: hidden
        color: $color-white
        background: $color-background-ss
        .content-wraper
            display: flex
            align-items: center
            padding: 24px 12px 18px 24px
            .shop-info
                width: 100%
                margin-left: 16px
                .name-box
                    margin-bottom: 8px
                    .shop-name
                        font-size: 16px
                        line-height: 18px
                        color: #fff
                        font-weight bold
                .distribution-box
                    font-size: 12px
                    font-weight: 200
                    line-height: 12px
                    color: #FFF
                    margin-bottom: 10px
                .dicount-box
                    position relative
                    .dicount-price
                        font-size: 12px
                        font-weight: 200
                        line-height: 12px
                        color: #FFF
                    .dicount-length
                        position absolute
                        right: 0
                        top: -10px
                        width: 72px
                        height: 32px
                        background-color: rgba(0,0,0,.2)
                        border-radius: 16px
                        text-align center
                        color: #FFF
                        span, i
                            line-height: 32px
                            display inline-block
                            font-size: 14px
                        i
                            margin-left: 2px
                            vertical-align: middle
        .botton-notice
            display flex
            width: 100%
            height: 52px
            align-items: center
            background: $color-background-sss
            padding: 0 8px
            .notice-icon
                width: 22px
                margin-right 4px
            .notice
                flex: 0.95
                overflow hidden
                white-space: nowrap
                text-overflow: ellipsis
            .icon-keyboard_arrow_right
                width: 10px
        .background
            position absolute
            top: 0
            left: 0
            width: 100%
            height: 100%
            z-index: -1
            filter: blur(10px)
</style>
