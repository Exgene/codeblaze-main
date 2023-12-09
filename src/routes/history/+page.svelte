<script>
  import BidCards from "$lib/components/BidCards.svelte";
  import { user, userData } from "$lib/firebase/firebase";
  import { checkAdmin } from "$lib/utils/checkadmin";
  export let data;
  const value = data.body;
</script>

{#if $userData?.isAdmin}
  <div class="flex flex-wrap gap-8 justify-center mt-8">
    {#each value.products as bid}
      {#if bid.flag === 1}
        <BidCards
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
        <BidCards
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
