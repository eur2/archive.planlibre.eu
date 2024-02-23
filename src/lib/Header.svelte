<script>
 let { children } = $props();
</script>
<header>
  <div class="absolute z2" style="top: 0.5em; right: 1em;">
    <a href="https://maop.fr/">
      <svg
        data-name="Logo MAOP"
        xmlns="http://www.w3.org/2000/svg"
        width="70.56mm"
        height="70.6mm"
        viewBox="0 0 200 200.12"
      >
        <title>logo-maop</title>
        <path d="M106.51,5.93a6,6,0,0,1-12,0h0a6,6,0,0,1,12,0Z"></path>
        <path d="M63.56,31.38a6,6,0,0,1-12,0h0a6,6,0,0,1,12,0Z"></path>
        <path d="M149.22,31.38a6,6,0,0,1-12,0h0a6,6,0,0,1,12,0Z"></path>
        <path d="M174.29,57.47a6,6,0,0,1-12,0h0a6,6,0,0,1,12,0Z"></path>
        <path d="M200,99.79a6,6,0,0,1-12,0h0a6,6,0,0,1,12,0Z"></path>
        <path d="M173.68,142.29a6,6,0,0,1-12,0v0a6,6,0,0,1,12,0Z"></path>
        <path d="M149.21,167.61a6,6,0,0,1-12,0h0a6,6,0,0,1,12,0Z"></path>
        <path d="M105.52,194.21a6,6,0,0,1-12,0h0a6,6,0,0,1,12,0Z"></path>
        <path d="M63.17,167.61a6,6,0,0,1-12,0h0a6,6,0,0,1,12,0Z"></path>
        <path d="M39,142.3a6,6,0,0,1-12,0h0a6,6,0,0,1,12,0Z"></path>
        <path
          d="M12,99.93a6,6,0,0,1-6,5.91,6,6,0,0,1-6-5.92H0A6,6,0,0,1,6,94a6,6,0,0,1,6,5.92h0"
        ></path>
        <path d="M38.67,57.54a6,6,0,0,1-12,0h0a6,6,0,0,1,12,0Z"></path>
      </svg>
    </a>
  </div>
  <div class="relative z10 p0111">
   {@render children()}
  </div>
</header>
