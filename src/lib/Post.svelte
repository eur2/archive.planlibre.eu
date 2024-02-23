<script>
    let { post } = $props();
    let visible = $state();
    let hovering = $state();
    function handleToggle() {
        visible = !visible;
    }
    function enter() {
        hovering = true;
    }
    function leave() {
        hovering = false;
    }
</script>

<article>
    <header
        onclick={handleToggle}
        onkeydown={handleToggle}
        onmouseenter={enter}
        onmouseleave={leave}
        role="button"
        tabindex="0"
    >
        <h2 class="flex1">PL {post.acf.num}</h2>
        <h2 class="flex2">
            {#if post.acf.title === ""}*****{:else}{post.acf.title}{/if}
        </h2>
        <h2 class="flex2">{post.acf.date}</h2>
        <h2 class="flex0">
            <a rel="noreferrer" target="_blank" href={post.acf.pdf}>PDF</a>
        </h2>
    </header>
    {#if hovering}
        {#if post.acf.cover}
            <div class="w50 z10 jc-center ai-center absolute flex">
                <img
                    src={post.acf.cover.sizes.thumbnail}
                    width="300"
                    alt="PL{post.acf.num}"
                />
            </div>
        {/if}
    {/if}
    {#if visible}
        <div>
            <slot />
        </div>
    {/if}
</article>
