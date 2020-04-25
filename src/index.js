import Vue from 'vue'

export default Vue.directive('v-hilite', {
    inserted: (el) => {
        el['v-hilite'] = el.value
    },
    update: (el) => {
        if(el.style.display === 'none') return
        
        const oldLength = el['v-hilite'].length
        // console.log(oldLength + ':' + el.value.length)

        if(oldLength + 1 === el.value.length || oldLength - 1 === el.value.length) {
            // console.log('Don\'t stop')
        } else if (el.value.length - 1 === 0) {
            el['v-hilite'] = el.value
        } else {
            el.focus()
            el.select()
        }

        el['v-hilite'] = el.value
    }
})