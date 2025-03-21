<script lang="ts">
	import { loginUser } from '$lib/authService';
	import { navigateTo } from '$lib/appService';

	let username = '';
	let password = '';
	let error = '';

	async function login() {
		const result = await loginUser(username, password);
		if (result.ok) {
			navigateTo('protected');
		} else {
			error = result.data.detail || 'Неверные учетные данные';
		}
	}

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			// Не вызываем login здесь, так как submit формы обработает Enter
		}
	}
</script>

<main class="container">
	<section class="section">
		<h1 class="title">Вход</h1>
		{#if error}
			<div class="notification is-danger">{error}</div>
		{/if}
		<form on:submit|preventDefault={login}>
			<div class="field">
				<label class="label" for="login-username">Имя пользователя</label>
				<div class="control">
					<input
						class="input"
						type="text"
						placeholder="Введите имя пользователя"
						bind:value={username}
						on:keydown={handleKeyDown}
						id="login-username"
						name="username"
						autocomplete="username"
						required
					/>
				</div>
			</div>
			<div class="field">
				<label class="label" for="login-password">Пароль</label>
				<div class="control">
					<input
						class="input"
						type="password"
						placeholder="Введите пароль"
						bind:value={password}
						on:keydown={handleKeyDown}
						id="login-password"
						name="password"
						autocomplete="current-password"
						required
					/>
				</div>
			</div>
			<div class="field">
				<div class="control">
					<button class="button is-primary" type="submit">Войти</button>
				</div>
			</div>
			<p class="has-text-centered">
				Нет аккаунта?
				<button class="button is-link" on:click={() => navigateTo('register')}>
					Зарегистрироваться
				</button>
			</p>
		</form>
	</section>
</main>
