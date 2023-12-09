<script>
  import { goto } from "$app/navigation";
  import { Button } from "$lib/components/ui/button";
  import { userData } from "$lib/firebase/firebase";
</script>

<nav class="border h-20 flex items-center justify-center gap-x-10">
  <div class="lg:text-3xl font-medium absolute left-6 text-base">BidBazaar</div>
  <div class="gap-x-6 flex text-lg font-bold text-slate-500">
    <a href="/" class="hover:text-black duration-150">Current</a>
    <a href="/history" class="hover:text-black duration-150">History</a>
  </div>
  <div>
    {#if $userData?.isAdmin}
      <Button on:click={() => goto("/bids/add")}>Add Bids</Button>
    {/if}
  </div>
</nav>
