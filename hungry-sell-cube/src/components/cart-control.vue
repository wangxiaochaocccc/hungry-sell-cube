<template>
    <div>
        <div class="cart-control">
            <transition name="move">
                <div class="cart-descrease" @click.stop="descrease" v-show="food.count > 0">
                    <span class="inner icon-remove_circle_outline"></span>
                </div>
            </transition>
            <div class="food-num" v-show="food.count > 0">{{food.count}}</div>
            <div class="cart-add icon-add_circle" @click.stop="add"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'cart-control',
    props: {
        food: {
            type: Object
        }
    },
    methods: {
        add() {
            if (!this.food.count) {
                this.$set(this.food, 'count', 1)
            } else {
                this.food.count++
            }
        },
        descrease() {
            if (this.food.count) {
                this.food.count--
            }
        }
    }
}
</script>
<style scoped lang="stylus">
.cart-control
    display flex
    align-items center
    .cart-descrease
        display inline-block
        padding 6px
        .inner
            font-size 24px
            line-height 24px
            color rgb(0,160,220)
        &.move-enter-active,&.move-leave-active
            transition all .4s linear
        &.move-enter,&.move-leave-active
            opacity 0
            transform translate3d(24px, 0, 0)
            .inner
                transform rotate(180deg)
    .food-num
        display inline-block
        width 12px
        font-size 12px
        color rgb(147,153,159)
        text-align center
    .cart-add
        display inline-block
        padding 6px
        font-size 24px
        line-height 24px
        color rgb(0,160,220)
</style>
