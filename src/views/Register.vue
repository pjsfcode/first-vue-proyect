<template>
    <div>
        <h1>Register</h1>
        <button @click="userStore.registerUser('Pepito')" class="btn btn-outline-success">Registrar usuario</button>
    </div>
</template>

<script setup>
    import {useUserStore} from '../stores/user.js'

    const userStore = useUserStore();
</script>