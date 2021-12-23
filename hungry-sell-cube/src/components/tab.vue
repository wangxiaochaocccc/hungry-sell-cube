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
                <cube-slide-item v-for="(item,index) in tabs" :key="index">
                    <component :is='item.component' :data="item.data"></component>
                </cube-slide-item>
            </cube-slide>
        </div>
    </div>
</template>

<script>
export default {
    name: 'tab',
    props: {
        tabs: {
            type: Array,
            default() {
                return []
            }
        },
        initialIndex: {
            type: Number,
            default() {
                return 0
            }
        }
    },
    data() {
        return {
            index: this.initialIndex,
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
