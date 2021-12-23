<template>
    <div class="tab-box">
        <cube-tab-bar
            v-model="selectLabel"
            :data="tabs"
            :showSlider=true
            class="border-bottom-1px"
            ref="tabBar"
            :useTransition=false
        >
        </cube-tab-bar>
        <div class="tab-wrapper">
            <cube-slide
                ref="slide"
                :initial-index="index"
                :showDots=false
                :autoPlay=false
                :loop=false
                @scroll="onScroll"
                :options="slideOption"
            >
                <cube-slide-item>
                    <goods></goods>
                </cube-slide-item>
                <cube-slide-item>
                    <sellers></sellers>
                </cube-slide-item>
                <cube-slide-item>
                    <ratings></ratings>
                </cube-slide-item>
            </cube-slide>
        </div>
    </div>
</template>

<script>
import Goods from 'components/goods'
import Sellers from 'components/sellers'
import Ratings from 'components/ratings'
export default {
    name: 'tab',
    data() {
        return {
            index: 0,
            tabs: [{
                label: '商品'
            }, {
                label: '评价'
            }, {
                label: '商家'
            }],
            slideOption: {
                listenScroll: true,
                probeType: 3,
                directionLockThreshold: 0
            }
        }
    },
    computed: {
        selectLabel: {
            get() {
                return this.tabs[this.index].label
            },
            set(newVal) {
                this.index = this.tabs.findIndex(value => {
                    return value.label === newVal
                })
            }
        }
    },
    methods: {
        onScroll(dom) {
            const tabBarWidth = this.$refs.tabBar.$el.clientWidth
            const slideWidth = this.$refs.slide.slide.scrollerWidth
            const shouldTransformX = -dom.x / slideWidth * tabBarWidth
            this.$refs.tabBar.setSliderTransform(shouldTransformX)
        }
    },
    components: {
        Goods,
        Ratings,
        Sellers
    }
}
</script>
<style scoped lang="stylus">
    .tab-box
        display flex
        flex-direction column
        height 100%
        >>> .cube-tab
            padding: 10px 0
        .tab-wrapper
            flex 1
            overflow hidden
</style>
