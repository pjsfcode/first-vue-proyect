<template>
	<nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
		<div class="container-fluid">
			<router-link class="navbar-brand" to="/">Home</router-link>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav me-auto">
					<li class="nav-item">
						<router-link class="nav-link" to="/">Home</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/login">Login</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/register">Register</router-link>
					</li>
                    
				</ul>
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
						<button class="btn btn-outline-light ">Logout</button>
					</li>
                </ul>
			</div>
		</div>
	</nav>
</template>

<script setup></script>

<style></style>
