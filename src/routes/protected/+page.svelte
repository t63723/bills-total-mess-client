<script lang="ts">
	import { getProtectedData } from '$lib/protectedService';
	import { onMount } from 'svelte';
	import { navigateTo, isLoggedIn } from '$lib/appService';
	import { logout } from '$lib/authService';

	let message = '';
	let error = '';
	let loading = false;

	async function loadProtectedData() {
		loading = true;
		const result = await getProtectedData();
		loading = false;

		if (result.ok) {
			message = result.data.message;
			error = '';
		} else {
			error = result.data.detail || 'Ошибка получения защищенных данных';
			message = '';
		}
	}

	onMount(() => {
		if ($isLoggedIn) {
			loadProtectedData();
		} else {
			navigateTo('login');
		}
	});

	function handleLogout() {
		logout();
	}
</script>

<main class="container">
	<section class="section">
		<h1 class="title">Защищенная страница</h1>
		{#if loading}
			<p>Загрузка...</p>
		{:else if error}
			<div class="notification is-danger">{error}</div>
		{:else if message}
			<div class="notification is-success">{message}</div>
		{/if}
		<button class="button is-warning" on:click={handleLogout}>Выйти</button>
	</section>
</main>
