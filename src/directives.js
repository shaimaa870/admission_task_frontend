import Vue from 'vue'

// make bold custom directive
Vue?.directive('bold',{
    bind:function(el){
        el.style.fontWeight='bold'; //v-bold for element ,bind only once but update with every component update

    }
}

)
// make dynamic font size
Vue?.directive('font',{
    bind:function(el,binding){
        el.style.fontSize=binding.value+'px'; //v-font='60'

    }
}

)
// make dynamic font size
Vue?.directive('format',{
    bind:function(el,binding){
        el.style.fontSize=binding.value+'px'; //v-font.bold='60'
        if(binding.modifiers.bold){
            el.style.fontWeight='bold';
        }
        if(binding.modifiers.orange){//v-font.bold.orange='60'
            el.style.color='orange';
        }

    }
}

)
