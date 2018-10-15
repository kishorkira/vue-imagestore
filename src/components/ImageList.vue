<template>
    <div>
        <div v-if="isLoggedIn" class="image-container">
            <img v-for="image in allImages" :key="image.id" :src="image.link" alt="">
        </div>
        <h2 v-else>login to get Started</h2>
    </div>
</template>

<script>
import {mapActions,mapGetters} from "vuex";
export default {    
    name:'ImageList',
    methods:mapActions(['fetchImages']),
    computed:mapGetters(['allImages','isLoggedIn']),
    created(){
        this.fetchImages();
    }

}
</script>
<style scoped>
    .image-container{
        column-count: 3;
        column-gap: 0;
    }
    img{
        max-width: 100%;
        padding: 5px;
    }
</style>
