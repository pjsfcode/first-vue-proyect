<template>
    <div>
        <h1>Home</h1>
        <h3>Welcome Mr. {{ userStore.userData }}!</h3>
    </div>
</template>

<script setup>
    import {useUserStore} from '../stores/user.js'

    const userStore = useUserStore();

</script>