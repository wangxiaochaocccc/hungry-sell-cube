<template>
    <div class="goods">
        <div class="good-main">
            <cube-scroll-nav
                :side=true
                :data="goods"
                :options="scrollOptions"
                v-if="goods.length"
            >
                <cube-scroll-nav-panel
                    v-for="item in goods"
                    :key="item.name"
                    :label="item.name"
                    :title="item.name"
                >
                    <ul>
                        <li v-for="(food, index) in item.foods" :key="index" class="food-item">
                            <div class="icon">
                                <img width="57" height="57" :src="food.icon">
                            </div>
                            <div class="content">
                                <h2 class="name">{{food.name}}</h2>
                                <p class="desc">{{food.description}}</p>
                                <div class="extra">
                                    <span class="count">月售{{food.sellCount}}份</span><span>好评率{{food.rating}}%</span>
                                </div>
                                <div class="price">
                                    <span class="now">￥{{food.price}}</span>
                                    <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                                </div>
                                <div class="cart-control-wrapper">
                                    <cart-control :food="food"></cart-control>
                                </div>
                            </div>
                        </li>
                    </ul>
                </cube-scroll-nav-panel>
            </cube-scroll-nav>
        </div>
        <div class="shop-cart-wrapper">
            <shop-cart
                :min-price="seller.minPrice"
                :delivery-price="seller.deliveryPrice"
            ></shop-cart>
        </div>
    </div>
</template>

<script>
    import { getGoods } from 'api'
    import shopCart from 'components/shop-cart'
    import cartControl from 'components/cart-control'
    export default {
        name: 'goods',
        props: {
            data: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data() {
            return {
                goods: [],
                scrollOptions: {
                    click: false, // 有效防止二次点击 代替了e.stopPropagation
                    directionLockThreshold: 0
                }
            }
        },
        computed: {
            seller() {
                return this.data.seller
            },
            selectFoods() {
                let food = []
                this.goods.forEach(good => {
                    good.foods.forEach(foods => {
                        if (foods.count) {
                            food.push(foods)
                        }
                    })
                })
                return food
            }
        },
        methods: {
            fetch() {
                getGoods().then(goods => {
                    this.goods = goods
                })
            }
        },
        components: {
            shopCart,
            cartControl
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~common/stylus/variable"
    .goods
        position relative
        height 100%
        .good-main
            width 100%
            position absolute
            top: 0
            left: 0
            bottom: 48px
        >>> .cube-scroll-nav-bar
            width: 80px
            white-space: normal
            overflow: hidden
        >>> .cube-scroll-nav-bar-item
            padding: 0 10px
            display: flex
            align-items: center
            height: 56px
            line-height: 14px
            font-size: $fontsize-small
            background: $color-background-ssss
        >>> .cube-scroll-nav-bar-item_active
            background: $color-white
            color: $color-dark-grey
        >>> .cube-scroll-nav-panel-title
            padding-left: 14px
            height: 26px
            line-height: 26px
            border-left: 2px solid $color-col-line
            font-size: $fontsize-small
            color: $color-grey
            background: $color-background-ssss
        .food-item
            display: flex
            margin: 18px
            padding-bottom: 18px
            position: relative
            &:last-child
                border-none()
                margin-bottom: 0
            .icon
                flex: 0 0 57px
                margin-right: 10px
                img
                    height: auto
            .content
                position relative
                flex: 1
                .name
                    margin: 2px 0 8px 0
                    height: 14px
                    line-height: 14px
                    font-size: $fontsize-medium
                    color: $color-dark-grey
                .desc, .extra
                    line-height: 10px
                    font-size: $fontsize-small-s
                    color: $color-light-grey
                .desc
                    line-height: 12px
                    margin-bottom: 8px
                .extra
                    .count
                        margin-right: 12px
                .price
                    font-weight: 700
                    line-height: 24px
                    .now
                        margin-right: 8px
                        font-size: $fontsize-medium
                        color: $color-red
                    .old
                        text-decoration: line-through
                        font-size: $fontsize-small-s
                        color: $color-light-grey
                .cart-control-wrapper
                    position absolute
                    right -14px
                    bottom -8px
        .shop-cart-wrapper
            position: absolute
            left: 0
            bottom: 0
            z-index: 50
            width: 100%
            height: 48px
</style>
