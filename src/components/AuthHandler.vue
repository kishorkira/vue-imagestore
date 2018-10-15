<template>
    <div>
        please wait.....
    </div>
</template>
<script>
import {mapActions} from 'vuex';
export default {
    name: 'AuthHandler',
    methods: mapActions(['finalizeLoggin']),
    created(){
        this.finalizeLoggin(window.location.hash);
    }
}
</script>
