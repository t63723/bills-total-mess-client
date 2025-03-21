<script lang="ts">
	import { fetchProtectedData } from '$lib/protectedService';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	let message = '';
	let error = '';
	let loading = false;

	async function loadProtectedData() {
		loading = true;
		const result = await fetchProtectedData();
		loading = false;

		if (result.ok) {
			message = result.data.message;
			error = '';
		} else {
			error = result.data.detail || 'Ошибка получения защищенных данных';
			if (result.status === 401) {
				localStorage.removeItem('access_token');
				localStorage.removeItem('refresh_token');
				goto('/auth/login');
			}
			message = '';
		}
	}

	onMount(loadProtectedData);

	function logout() {
		localStorage.removeItem('access_token');
		localStorage.removeItem('refresh_token');
		goto('/auth/login');
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
		<button class="button is-warning" on:click={logout}>Выйти</button>
	</section>
</main>
