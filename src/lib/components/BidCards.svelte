<script>
  import { goto } from "$app/navigation";
  import { Button } from "$lib/components/ui/button";
  import * as Card from "$lib/components/ui/card";
  export let productId = "123";
  export let imageURL = "";
  export let productName = "";
  export let currentBid = "";
  export let time = "";
</script>

<button on:click={() => goto(`/${productId}`)}>
  <Card.Root class="m-2 w-[350px] cursor-pointer shadow-lg">
    <Card.Header class="space-y-1">
      <Card.Title class="text-2xl text-center"
        >Product Name : {productName}</Card.Title
      >
    </Card.Header>

    <Card.Content class="flex flex-col items-center justify-center gap-4">
      <div class="border w-32 h-32 rounded-lg">
        <img src={imageURL} alt=""/>
      </div>
      <div class="border w-64"></div>
      <div class="text-center">
        <p class="text-slate-600">Current Bid : <span>{currentBid}</span></p>
        <p class="text-slate-600">Time : <span>{time}</span></p>
      </div>
    </Card.Content>
  </Card.Root>
</button>
