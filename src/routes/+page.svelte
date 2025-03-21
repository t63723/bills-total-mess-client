<script lang="ts">
	import { currentPage } from '$lib/appService';
	import LoginPage from './auth/login/+page.svelte';
	import RegisterPage from './auth/register/+page.svelte';
	import ProtectedPage from './protected/+page.svelte';
</script>

<main class="container">
	<section class="section">
		{#if $currentPage === 'home'}
			<p>Вы находитесь на главной странице</p>
		{:else if $currentPage === 'login'}
			<LoginPage />
		{:else if $currentPage === 'register'}
			<RegisterPage />
		{:else if $currentPage === 'protected'}
			<ProtectedPage />
		{/if}
	</section>
</main>
