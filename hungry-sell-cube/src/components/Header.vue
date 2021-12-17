<template>
    <div>
        <div class="header">
            <div class="content-wraper">
                <div class="avatar">
                    <img width="64" height="64" :src="seller.avatar" alt="">
                </div>
                <div class="shop-info">
                    <div class="name-box">
                        <span class="name-icon"></span>
                        <span class="shop-name">{{seller.name}}</span>
                    </div>
                    <div class="distribution-box">
                        {{seller.description}}/预计{{seller.deliveryTime}}分钟送达
                    </div>
                    <div class="dicount-box" v-if="seller.supports">
                        <div class="left">
                            <support-ico :size=1 :type="seller.supports[0].type"></support-ico>
                            <span class="dicount-price">{{seller.description}}</span>
                        </div>
                        <div class="right">
                            <div class="dicount-length">
                                <span>{{seller.supports.length}}个</span>
                                <i class="icon-keyboard_arrow_right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="botton-notice">
                <span class="notice-icon"></span>
                <span class="notice">{{seller.bulletin}}</span>
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
        props: {
            seller: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
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
                    .name-icon
                        display inline-block
                        width: 30px
                        height: 18px
                        bg-image('~assets/header/brand')
                        background-size: cover
                        vertical-align: middle
                        margin-right 5px
                    .shop-name
                        font-size: 16px
                        line-height: 18px
                        color: #fff
                        font-weight bold
                        vertical-align: middle
                .distribution-box
                    font-size: 12px
                    font-weight: 200
                    line-height: 12px
                    color: #FFF
                    margin-bottom: 10px
                .dicount-box
                    position relative
                    span {
                        vertical-align: middle
                    }
                    .dicount-price
                        display inline-block
                        margin-left 4px
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
                height: 12px
                margin-right 4px
                bg-image('~assets/header/bulletin')
                background-size: cover
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
