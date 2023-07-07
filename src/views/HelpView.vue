<template>
    <div class="help-page">
        <h1>{{ pageName }}</h1>
        <h1>{{ pageDescription }}</h1>
        <div class="container">
            <div class="row">
                <div class="col-md-8">


                       <div class="posts-area" v-for="post in posts" :key="post.id" 
                       
                       >
                    <!-- :title="post.title" :description="post.description"  in another componemt-->

                            <div class="text-center">
                                <h3 >{{ post.title | upperCase}} </h3>
                                <p>{{ post.description }}</p>
                                <!-- post.description|shorten(7) -->
                            </div>
                       </div>
                </div>
                <div class="col-md-4">
                    <div class="sidebar">
                        test sidebar

                    </div>
                </div>

            </div>
        </div>


    </div>
</template>
<script>
import posts from "../json/posts_data.json"
export default{
    name:"help",
    props:["title","description"],
    filters:{
    upperCase:function(v){
     return v.toUpperCase()
    },
    },
    data:function(){
        return {
            pageName:"Help Us",
            pageDescription:"This is our Help Page",
            posts
        }
    }
}
</script>