<script>
  export let post
</script>

<article
  class="border border-primary bg-white shadow mb-6 p-5 transition card hover:text-accent-focus first:pt-0"
>
  <a sveltekit:prefetch href={`/posts/${post.slug}`}>
    <div>
      <h2 class="font-semibold mt-5 mb-1 text-3xl">
        {post.title}
      </h2>
      <div class="font-semibold text-accent text-sm mb-4 uppercase">
        <time>{new Date(post.date).toDateString()}</time>
      </div>
    </div>
  </a>
</article>
