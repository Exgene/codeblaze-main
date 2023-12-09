<script>

  import BidCardsHistory from "$lib/components/BidCardsHistory.svelte";
  import { user, userData } from "$lib/firebase/firebase";

  export let data;
  const value = data.body;
</script>

{#if $userData?.isAdmin}
  <div class="flex flex-wrap gap-8 justify-center mt-8">
    {#each value.products as bid}
      {#if bid.flag === 1}
        <BidCardsHistory
          dbMaxBid={bid.maxValue}
          dbMinBid={bid.minValue}
          currentBid={bid.curBid}
          time={bid.time}
          productName={bid.name}
          imageURL={bid.Imageurl}
        />
      {/if}
    {/each}
  </div>
{:else}
  <div class="flex flex-wrap gap-8 justify-center mt-8">
    {#each value.products as bid}
     {#if bid.flag === 1}
        <BidCardsHistory
          dbMaxBid={bid.maxValue}
          dbMinBid={bid.minValue}
          currentBid={bid.curBid}
          time={bid.time}
          productName={bid.name}
          imageURL={bid.Imageurl}
        />
      {/if}
    {/each}
    <!-- <BidCards />
    <BidCards />
    <BidCards />
    <BidCards /> -->
  </div>
{/if}
