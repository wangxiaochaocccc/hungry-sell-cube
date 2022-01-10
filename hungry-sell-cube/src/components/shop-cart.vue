<template>
    <div>
        <div class="shop-cart">
            <div class="content-l">
                <div class="shop-circle">
                    <div class="logo" :class="{'highlight': totalPrice > 0}">
                        <i class="icon-shopping_cart"></i>
                    </div>
                    <div class="num" v-show="totalPrice > 0">
                        <bubble :num="totalCount"></bubble>
                    </div>
                </div>
                <div class="price" :class="{'highlight': totalPrice > 0}">￥{{totalPrice}}</div>
                <div class="line"></div>
                <div class="distribution">另需配送费￥{{deliveryPrice}}元</div>
            </div>
            <div class="content-r" :class="payClass">
                {{payDesc}}
            </div>
        </div>
    </div>
</template>

<script>
import bubble from 'components/bubble'
export default {
    name: 'shop-cart',
    props: {
        minPrice: {
            type: Number,
            default: 0
        },
        deliveryPrice: {
            type: Number,
            default: 0
        },
        selectFoods: {
            type: Array,
            default() {
                return []
            }
        }
    },
    computed: {
        totalPrice() {
            let total = 0
            this.selectFoods.forEach(food => {
                total += food.price * food.count
            })
            return total
        },
        payDesc() {
            if (this.totalPrice === 0) {
                return `￥${this.minPrice}起送`
            } else if (this.totalPrice < this.minPrice) {
                let midPrice = this.minPrice - this.totalPrice
                return `还差￥${midPrice}起送`
            } else {
                return '去结算'
            }
        },
        payClass() {
            if (this.totalPrice > this.minPrice) {
                return 'enough'
            } else {
                return 'not-enough'
            }
        },
        totalCount() {
            let count = 0
            this.selectFoods.forEach(food => {
                count += food.count
            })
            return count
        }
    },
    components: {
        bubble
    }
}
</script>
<style scoped lang="stylus">
    @import "~common/stylus/variable.styl"
    .shop-cart
        display flex
        width 100%
        height 48px
        background-color #141b27
        .content-l
            display flex
            align-items center
            flex 1
            .shop-circle
                position relative
                width 46px
                height 46px
                background-color $color-background
                border-radius 50%
                margin-left 18px
                margin-top -10px
                padding 6px
                margin-right 18px
                .logo
                    // width 44px
                    height 44px
                    line-height 44px
                    border-radius 50%
                    font-size 24px
                    color rgba(255, 255, 255, .4)
                    background-color $color-dark-grey
                    text-align center
                    &.highlight
                        background-color $color-blue
                        color #fff
                .num
                    position absolute
                    top 0
                    right 0
            .price
                line-height 48px
                font-size 16px
                color rgba(255, 255, 255, .4)
                font-weight bold
                margin-right 12px
                &.highlight
                    color #fff
            .line
                background rgba(255, 255, 255, .4)
                height 30px
                width 1px
                margin-right 12px
            .distribution
                line-height 48px
                font-size 12px
                color rgba(255, 255, 255, .4)
                font-weight 400
        .content-r
            flex 0 0 105px
            width 105px
            line-height 48px
            background rgba(44, 51, 58, 1)
            color rgba(255, 255, 255, .4)
            font-weight bold
            text-align center
        .enough
            background-color $color-blue
            color #fff
</style>
