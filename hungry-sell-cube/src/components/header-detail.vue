<template>
    <transition name="fade">
        <div class="header-detail">
            <h1>{{seller.name}}</h1>
            <star :size=48 :score="seller.score"></star>
            <div class="title-box">
                <div class="line"></div>
                <div class="text">优惠信息</div>
                <div class="line"></div>
            </div>
            <ul>
                <li v-for="item in seller.supports" :key="item.id">
                    <support-ico :size="2" :type="item.type"></support-ico><span class="li-cont">{{item.description}}</span>
                </li>
            </ul>
            <div class="title-box">
                <div class="line"></div>
                <div class="text">优惠信息</div>
                <div class="line"></div>
            </div>
            <div class="notice">
                <div class="cont">{{seller.bulletin}}</div>
            </div>
            <div class="cancle-btn">
                <span class="icon-close"></span>
            </div>
        </div>
    </transition>
</template>

<script>
import SupportIco from 'components/support-ico'
import Star from 'components/star'

export default {
    name: 'header-detail',
    props: ['seller'],
    components: {
        SupportIco,
        Star
    }

}
</script>
<style lang="stylus" scoped>
    @import "~common/stylus/mixin"
    @import "~common/stylus/variable"
    .header-detail
        position fixed
        top 0
        left 0
        right 0
        bottom 0
        width 100%
        height 100%
        overflow  auto
        opacity 1
        color $color-white
        background $color-background-s
        backdrop-filter blur(10px)
        &.fade-enter-active, &.fade-leave-active
            transition: all 0.5s
        &.fade-enter, &.fade-leave-active
            opacity: 0
            background: $color-background
        h1
            font-size 16px
            line-height 16px
            color #fff
            text-align center
            margin-top 64px
            margin-bottom 16px
        .star
            margin-bottom 28px
        .title-box
            display flex
            align-items: center
            width 80%
            margin 0 auto 24px
            .line
                flex 1
                height 1px
                width 112px
                background-color rgba(255,255,255,.2)
            .text
                padding 0 24px
        ul
            margin-left 48px
            margin-bottom 28px
            li
                display flex
                align-items: center
                margin-bottom 12px
                height 22px
                .li-cont
                    margin-left 6px
                span
                    line-height 22px
        .notice
            width: 80%
            margin: 0 auto
            .cont
                padding 0 12px
                font-size 12px
                line-height 24px
                font-weight 200
                color #fff
        .cancle-btn
            position absolute
            bottom 32px
            left 170px
            width: 30px
            height: 30px
            clear: both
            font-size: 32px
</style>
