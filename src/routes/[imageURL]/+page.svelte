<script>
  import { page } from "$app/stores";
  import UserCard from "$lib/components/UserCard.svelte";
  export let data;
  const value = data.body;
</script>

<div class="">
  <UserCard  />
</div>
