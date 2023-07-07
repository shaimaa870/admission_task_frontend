import Vue from "vue"
//make upper case filter
Vue?.filter("upperCase",function(v){
    return v.toUpperCase();
})
//make reverse filter
Vue?.filter("reverse",function(v){
    return v.split("").reverse().join("");
})
//shorten text
Vue?.filter("shorten",function(v,length){
    return v.substring(0,length)+" ...";
})
