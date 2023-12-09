<script>
  import { goto } from "$app/navigation";
  import { Button } from "$lib/components/ui/button";
  import { userData } from "$lib/firebase/firebase";
</script>

<nav class="border h-20 flex items-center justify-center gap-x-10">
  <div class="text-lg font-medium absolute left-6">Logo</div>
  <div class="gap-x-4 flex">
    <a href="/" class="">On-Going Bids</a>
    <a href="/history" class="">Bids History</a>
  </div>
  <div class="text-slate-600">
    Balance : {$userData?.balance}
  </div>
  <div>
    {#if $userData?.isAdmin}
      <Button on:click={() => goto("/bids/add")}>Add Bids</Button>
    {/if}
  </div>
</nav>
