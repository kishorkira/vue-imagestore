<template>

<div class="ui secondary pointing menu">
    <router-link tag="a" to="/" class="active item">
        Image Store
    </router-link>
    
    <div class="right menu">
        <div v-if="isLoggedIn" class="horizontal">  
            <router-link tag="a" to="/"  class="ui item" >Galleries</router-link>
           
            <router-link tag="a" to="/Upload" class="ui item">Upload</router-link>

            <a class="ui item" href="#" @click="logout">
            Logout
            </a>
        </div>
        <a v-else class="ui item" href="#" @click="login">
        Login
        </a>
    </div>
</div>


</template>
<script>
import {mapActions, mapGetters} from 'vuex';
export default {
    name:'AppHeader',
    methods:mapActions(['login','logout']),
    computed: mapGetters(['isLoggedIn'])
}
</script>
<style scoped>
    .horizontal{
        display: flex;
        flex-direction: row;
    }
</style>
