import Vue from 'vue'

export default Vue.directive( 'v-hilite', {
    update: ( el ) => {
        el.focus()
        el.select()
    }
} )