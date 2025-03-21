<script lang="ts">
	import { navigateTo } from '$lib/appService';
</script>

<div class="container">
	<nav class="navbar" aria-label="main navigation">
		<div class="navbar-brand">
			<button class="navbar-item" on:click={() => navigateTo('home')}>home</button>
			<button class="navbar-item" on:click={() => navigateTo('login')}>login</button>
			<button class="navbar-item" on:click={() => navigateTo('register')}>register</button>
			<button class="navbar-item" on:click={() => navigateTo('protected')}>protected</button>
		</div>
	</nav>
	<slot />
</div>
