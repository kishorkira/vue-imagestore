<template>
    <div>
      <img v-for="image in allImages" :key="image.id" :src="image.link" alt="">
    </div>
</template>

<script>
import {mapActions,mapGetters} from "vuex";
export default {    
    name:'ImageList',
    methods:mapActions(['fetchImages']),
    computed:mapGetters(['allImages']),
    created(){
        this.fetchImages();
    }

}
</script>
