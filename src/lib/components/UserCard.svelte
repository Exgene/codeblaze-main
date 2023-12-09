<script>
  import { goto } from "$app/navigation";
  import { Button } from "$lib/components/ui/button";
  import * as Card from "$lib/components/ui/card";

  export let productId = "";
</script>

<Card.Root class="m-2 w-2/5 mx-auto mt-40 shadow-lg p-4">
  <Card.Header class="space-y-1">
    <Card.Title class="text-2xl text-center"
      >Product Name : </Card.Title
    >
  </Card.Header>

  <Card.Content class="flex flex-col items-center justify-center gap-4">
    <div class="border w-32 h-32 rounded-lg">
      <img src="" alt="" />
    </div>
    <div class="border w-64"></div>
    <div class="text-center">
      <p class="text-slate-600">Current Bid : <span></span></p>
      <p class="text-slate-600">Time Left : <span></span></p>
      <p class="text-slate-600">End Time : <span></span></p>
    </div>
    <p class="self-start text-gray-300">{productId}</p>
  </Card.Content>
</Card.Root>
