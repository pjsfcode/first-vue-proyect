<template>
	<div>
		<h1>Register</h1>

        <!-- <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div> -->

		<form  @submit.prevent="handleSubmit">
			<div class="mb-3">
				<label for="email-input" class="form-label">Email address</label>
				<input
					id="email-input"
					type="email"
					placeholder="Enter email"
					class="form-control"
                    v-model.trim="email"
				/>
			</div>
			<div class="mb-3">
				<label for="password-input" class="form-label">Password</label>
				<input
					id="password-input"
					type="password"
					placeholder="Enter password"
					class="form-control"
                    v-model.trim="password"
				/>
			</div>
            <button class="btn btn-success" type="submit">Create user</button>
		</form>
	</div>
</template>

<script setup>
    import { ref } from 'vue';
    import { useUserStore } from '../stores/user.js';
    import { useRouter } from 'vue-router';

    const router = useRouter();
    const userStore = useUserStore();

    const email = ref('')
    const password = ref('')

    const handleSubmit = async () => {
        if(!email.value || password.value.length < 5){
            return alert("You must enter email and password")
        }
        
        await userStore.registerUser(email.value, password.value);
        router.push('/login');
    }

</script>
