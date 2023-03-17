<template>
    <div>
        <h1>Login</h1>
        <h3>Welcome user {{userStore.minuscula}}</h3>
        <h3>Welcome user {{textToMayus}}</h3>
    </div>
</template>

<script setup>
    import {useUserStore} from '../stores/user.js'
    import {computed} from 'vue'

    
    const userStore = useUserStore();
    
    const textToMayus = computed(() => userStore.userData.toUpperCase())
</script>