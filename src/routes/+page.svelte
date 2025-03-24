<script lang="ts">
	import { goto } from '$app/navigation';

	function handleLogin() {
		goto('login/');
	}
</script>

<main class="container">
	<div class="p-3">
		<div class="pt-5">
			<div class="has-text-centered">
				<div class="p-3">
					<p>welcome page</p>
				</div>
			</div>
			<div class="has-text-centered">
				<button type="button" class="button" on:click={handleLogin}>login</button>
			</div>
		</div>
	</div>
</main>
