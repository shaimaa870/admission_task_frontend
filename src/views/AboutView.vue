<template>
  <div class="about">
    <h1>This is an about page</h1>
    <DatatableComponent></DatatableComponent>
  </div>
</template>
<script>
import  DatatableComponent  from "@/components/DatatableComponent.vue";
export default{
  name:"about",
  components:{
  DatatableComponent
  }
}
</script>
