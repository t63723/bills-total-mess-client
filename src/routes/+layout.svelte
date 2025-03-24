<script>
	import '../app.scss';

	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	function handleHome() {
		goto('/');
	}

	$: isHomePage = $page.url.pathname === '/';
</script>

<div class="container-fluid">
	{#if !isHomePage}
		<div class="container">
			<div class="p-2">
				<div>
					<button type="button" class="button" on:click={handleHome}>home</button>
				</div>
			</div>
		</div>
	{/if}
	<div>
		<slot />
	</div>
</div>
