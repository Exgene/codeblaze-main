<script>
  import { page } from "$app/stores";
  import UserCard from "$lib/components/UserCard.svelte";
  let data = $page.params.productId;
</script>

<div class="">
  <UserCard productId={data} />
</div>
