<script>
	export let data;
	const { posts } = data;
	// import Front from '$lib/Front.svelte';
	import Front200 from '$lib/Front200.svelte';
	import Post from '$lib/Post.svelte';
	let randomPost = '';
	let searchTerm = '';
	$: filteredPosts = posts.filter(
		(post) =>
			post.acf.num.toLowerCase().indexOf(searchTerm) !== -1 ||
			post.acf.date.toLowerCase().indexOf(searchTerm) !== -1 ||
			post.acf.title.toLowerCase().indexOf(searchTerm) !== -1 ||
			post.acf.article1.author.toLowerCase().indexOf(searchTerm) !== -1 ||
			post.acf.article1.title.toLowerCase().indexOf(searchTerm) !== -1 ||
			post.acf.article2.author.toLowerCase().indexOf(searchTerm) !== -1 ||
			post.acf.article2.title.toLowerCase().indexOf(searchTerm) !== -1 ||
			post.acf.article3.author.toLowerCase().indexOf(searchTerm) !== -1 ||
			post.acf.article3.title.toLowerCase().indexOf(searchTerm) !== -1 ||
			post.acf.article4.author.toLowerCase().indexOf(searchTerm) !== -1 ||
			post.acf.article4.title.toLowerCase().indexOf(searchTerm) !== -1
	);
	// import { onMount } from 'svelte';
	// onMount(() => {
	// 	randomPost = posts[Math.floor(Math.random() * 20)];
	// });
</script>

<!-- <<Front {randomPost} /> -->

<Front200 />
<nav class="sticky t0 p251251 bg-white flex jc-sb">
	<form role="search">
		<input
			type="text"
			name="search"
			aria-label="Search"
			placeholder="Recherche"
			bind:value={searchTerm}
		/>
	</form>
	<a href="https://www.instagram.com/plan_libre/" rel="noreferrer" target="_blank">Instagram</a>
</nav>
<main>
	{#each filteredPosts as post}
		<Post {post}>
			<div class="content flex">
				{#if post.acf.image}
					<div class="p flex jc-center flex50">
						<img
							src={post.acf.image.sizes.large}
							srcset="{post.acf.image.sizes.thumbnail} 400w, {post.acf.image.sizes
								.medium} 800w, {post.acf.image.sizes.large} 1600w"
							alt="plan libre"
						/>
					</div>
				{/if}
				<div class="p flex wrap jc-sa flex50">
					{#if post.acf.article1.title === ''}
						<div />
					{:else}
						<div class="p flex50 article">
							<a href={post.acf.article1.pdf} rel="noreferrer" target="_blank">
								<div class="center">
									<h4>{post.acf.article1.author}</h4>
									<h3>{post.acf.article1.title}</h3>
								</div>
							</a>
						</div>
					{/if}
					{#if post.acf.article2.title === ''}
						<div />
					{:else}
						<div class="p flex50 article">
							<a href={post.acf.article2.pdf} rel="noreferrer" target="_blank">
								<div class="center">
									<h4>{post.acf.article2.author}</h4>
									<h3>{post.acf.article2.title}</h3>
								</div>
							</a>
						</div>
					{/if}
					{#if post.acf.article3.title === ''}
						<div />
					{:else}
						<div class="p flex50 article">
							<a href={post.acf.article3.pdf} rel="noreferrer" target="_blank">
								<div class="center">
									<h4>{post.acf.article3.author}</h4>
									<h3>{post.acf.article3.title}</h3>
								</div>
							</a>
						</div>
					{/if}
					{#if post.acf.article4.title === ''}
						<div />
					{:else}
						<div class="p flex50 article">
							<a href={post.acf.article4.pdf} rel="noreferrer" target="_blank">
								<div class="center">
									<h4>{post.acf.article4.author}</h4>
									<h3>{post.acf.article4.title}</h3>
								</div>
							</a>
						</div>
					{/if}
				</div>
			</div>
		</Post>
	{/each}
</main>
