<script lang="ts">
	import { registerUser } from '$lib/authService';
	import { goto } from '$app/navigation';

	let username = '';
	let email = '';
	let password = '';
	let error = '';

	async function register() {
		const result = await registerUser(username, email, password);
		if (result.ok) {
			goto('/auth/login');
		} else {
			error = result.data.detail || 'Ошибка регистрации';
		}
	}
</script>

<main class="container">
	<section class="section">
		<h1 class="title">Регистрация</h1>
		{#if error}
			<div class="notification is-danger">{error}</div>
		{/if}
		<form on:submit|preventDefault={register}>
			<div class="field">
				<label class="label" for="register-username">Имя пользователя</label>
				<div class="control">
					<input
						class="input"
						type="text"
						placeholder="Введите имя пользователя"
						bind:value={username}
						id="register-username"
						name="username"
						autocomplete="username"
						required
					/>
				</div>
			</div>
			<div class="field">
				<label class="label" for="register-email">Email</label>
				<div class="control">
					<input
						class="input"
						type="email"
						placeholder="Введите ваш email"
						bind:value={email}
						id="register-email"
						name="email"
						autocomplete="email"
						required
					/>
				</div>
			</div>
			<div class="field">
				<label class="label" for="register-password">Пароль</label>
				<div class="control">
					<input
						class="input"
						type="password"
						placeholder="Введите пароль"
						bind:value={password}
						id="register-password"
						name="password"
						autocomplete="new-password"
						required
					/>
				</div>
			</div>
			<div class="field">
				<div class="control">
					<button class="button is-primary" type="submit">Зарегистрироваться</button>
				</div>
			</div>
			<p class="has-text-centered">Уже есть аккаунт? <a href="/auth/login">Войти</a></p>
		</form>
	</section>
</main>
