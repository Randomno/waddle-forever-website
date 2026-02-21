<script lang="ts">
  import { page } from '$app/state';
</script>

<div>
  <h1>{page.status}</h1>
  <p>{page.error?.message}</p>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  h1 {
    font-size: 5em;
  }
  p {
    font-size: 1.5em;
  }
</style>