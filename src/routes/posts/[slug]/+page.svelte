<script>
  import Head from '$lib/components/head.svelte'

  export let data
  let {
    html,
    meta: { date, title },
  } = data
</script>

<Head title={`Post | ${title}`} />

<article class="flex flex-col flex-grow">
  <h1 class="font-bold mb-5 text-5xl">{title}</h1>
  <div class="">
    <p>{new Date(date).toDateString()}</p>
    <article class="all-prose">
      {@html html}
    </article>
  </div>
</article>
