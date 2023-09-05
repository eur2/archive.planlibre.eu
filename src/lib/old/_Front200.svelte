<script>
	let visible = true;
	function handleToggle() {
		visible = !visible;
	}
	let randomPost = '';
	const posts = [
		{
			path: './01_PL200_COUVERTURE.jpg'
		},
		{
			path: './02_PL200_ARTICLE.jpg'
		},
		{
			path: './03_PL200_ARCHIVES.jpg'
		},
		{
			path: './04_PL200_ANALYSE_DE_DONNEES.jpg'
		},
		{
			path: './05_PL200_RECUEIL.jpg'
		},
		{
			path: './06_PL200_4E_COUVERTURE.jpg'
		},
		{
			path: './07_PL200_COFFRET.jpg'
		}
	];
	import { onMount } from 'svelte';
	onMount(() => {
		randomPost = posts[Math.floor(Math.random() * 7)];
	});
</script>

<div class="pointer" on:click={handleToggle} on:keydown={handleToggle}>
	{#if visible}
		<div class="fixed z100 t0 l0 r0 b0 flex jc-center ai-center column">
			<div
				class="center bg-white"
				style="width: 800px;max-width: 100%;border:1px solid black;padding:.25em;
			"
			>
				<i>200 Plan Libre: Anatomie d’un journal d’architecture</i><br /><a
					rel="noreferrer"
					target="_blank"
					class="color"
					href="https://www.helloasso.com/associations/maison-de-l-architecture-occitanie-pyrenees/collectes/200-plan-libre-anatomie-d-un-journal-d-architecture-en-prevente 
			"
				>
					{'-> maintenant disponible en prévente <-'}
				</a>
			</div>
			<img src={randomPost.path} width="800" height="600" alt="200 plan libre maop" />
		</div>
	{/if}
</div>
