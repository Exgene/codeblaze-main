<script>
  import { goto } from "$app/navigation";
  import { Button } from "$lib/components/ui/button";
  import * as Card from "$lib/components/ui/card";

  export let imageURL = "";
  export let productName = "";
  export let currentBid = "";
  export let endTime = ""
  export let time = "";
</script>

<Card.Root class="m-2 w-2/5 mx-auto mt-40 shadow-lg p-4">
  <Card.Header class="space-y-1">
    <Card.Title class="text-2xl text-center">Product Name : {productName}</Card.Title>
  </Card.Header>

  <Card.Content class="flex flex-col items-center justify-center gap-4">
    <div class="border w-32 h-32 rounded-lg">
      <img src={imageURL} alt="" /> 
    </div>
    <div class="border w-64"></div>
    <div class="text-center">
      <p class="text-slate-600">Current Bid : <span class="font-medium text-slate-900">{currentBid}</span></p>
      <p class="text-slate-600">Time Left : <span class="text-slate-900 font-medium">{time}</span></p>
      <p class="text-slate-600">End Time : <span class="text-slate-900 font-medium">{endTime}</span></p>
    </div>
  </Card.Content>
</Card.Root>
