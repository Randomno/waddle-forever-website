<script lang="ts">
  import MarkdownViewer from '$lib/components/MarkdownViewer.svelte';

  let { data } = $props();
</script>

<div class="max-w-4xl mx-auto p-6">
  <MarkdownViewer md={data.markdown}/>
</div>