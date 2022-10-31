<script>
	export let data;
	const { posts } = data;
	import Front from '$lib/Front.svelte';
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
	import { onMount } from 'svelte';
	onMount(() => {
		randomPost = posts[Math.floor(Math.random() * 20)];
		// var lazyImages = [].slice.call(document.querySelectorAll(".lazy"));
		// if (typeof IntersectionObserver !== "undefined") {
		//   let lazyImageObserver = new IntersectionObserver(function (
		//     entries,
		//     observer
		//   ) {
		//     entries.forEach(function (entry) {
		//       if (entry.isIntersecting) {
		//         let lazyImage = entry.target;
		//         lazyImage.src = lazyImage.dataset.src;
		//         lazyImage.srcset = lazyImage.dataset.srcset;
		//         lazyImage.classList.remove("lazy");
		//         lazyImage.classList.add("loaded");
		//         lazyImageObserver.unobserve(lazyImage);
		//       }
		//     });
		//   });
		//   lazyImages.forEach(function (lazyImage) {
		//     lazyImageObserver.observe(lazyImage);
		//   });
		// }
	});
</script>

<Front>
	{#if randomPost && randomPost.acf.image}
		<!-- <img src="{randomPost.acf.image.sizes.large}" width="800" alt="plan libre" /> -->
		<img
			src={randomPost.acf.image.sizes.large}
			srcset="{randomPost.acf.image.sizes.thumbnail} 400w, {randomPost.acf.image.sizes
				.medium} 800w, {randomPost.acf.image.sizes.large} 1600w"
			width="800"
			height="600"
			alt="plan libre journal"
		/>
	{/if}
</Front>
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
		<Post
			num={post.acf.num}
			title={post.acf.title}
			date={post.acf.date}
			pdf={post.acf.pdf}
			cover={post.acf.cover.sizes.thumbnail}
		>
			<div class="content flex">
				{#if post.acf.image}
					<div class="p flex jc-center flex50">
						<!-- <img
				class="lazy"
				src=""
				data-src={post.acf.image.sizes.large}
				srcset=""
				data-srcset="{post.acf.image.sizes.thumbnail} 400w, {post.acf
				  .image.sizes.medium} 800w, {post.acf.image.sizes.large} 1600w"
				alt="Plan Libre {post.acf.num}"
			  /> -->
						<!-- <img src={post.acf.image.sizes.large} alt="plan libre" /> -->
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
