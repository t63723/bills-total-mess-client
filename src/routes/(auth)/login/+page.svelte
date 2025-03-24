<script lang="ts">
	let username = '';
	let password = '';
	let error = '';

	async function login() {}

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			// Не вызываем login здесь, так как submit формы обработает Enter
		}
	}
</script>

<main class="container">
	<div class="p-3">
		<div class="has-text-centered">
			<p class="title">login form</p>
		</div>

		{#if error}
			<div class="notification is-danger">{error}</div>
		{/if}

		<form on:submit|preventDefault={login}>
			<div class="field">
				<label class="label" for="login-username">login</label>
				<div class="control">
					<input
						class="input"
						type="text"
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
				<label class="label" for="login-password">password</label>
				<div class="control">
					<input
						class="input"
						type="password"
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
					<button class="button" type="submit">login</button>
				</div>
			</div>
		</form>
	</div>
</main>
