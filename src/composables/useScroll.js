import { gsap } from 'gsap'
import { onMounted, ref } from 'vue'
import { Observer } from 'gsap/Observer'

export default function useScroll(ScrollElement, param = { initPage: 0, max: 1 }) {
    //注册插件
    gsap.registerPlugin(Observer)
    const currentPage = ref(param.initPage)
    //抽取滚动操作
    onMounted(() => {
        Observer.create({
            target: window,
            type: 'wheel', //这里不监听页面滚动,而是监听滚轮
            onUp(e) {
                if (e.deltaY === -125) {
                    console.log('up')
                    scrollUp()
                }
                console.log(111)
            },
            onDown(e) {
                if (e.deltaY > -125) {
                    scrollDown()
                }

            },
        })
    })


    const scrollUp = () => {
        if (currentPage.value > 0) {
            currentPage.value--
            pageScroll()
        }
    }

    const scrollDown = () => {

        //页面向下滚动的情况分为 ： 页面处于 第一页，也就是索引为 0，二就是页面大于0并且小于总页数
        if (currentPage.value >= 0 && currentPage.value < param.max) {
            currentPage.value++
            pageScroll()
        }
    }
    
    const pageScroll = ()=>{
        gsap.to(ScrollElement.value,{
            y:`-${currentPage.value*100}%`
        })
    }

    //返回相关api

    //当前页面

    return {
        pageScroll,
        scrollUp,
        scrollDown
    }
}