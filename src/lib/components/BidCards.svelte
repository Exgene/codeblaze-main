<script lang="ts">
  import { goto } from "$app/navigation";
  import { Button } from "$lib/components/ui/button";
  import * as Card from "$lib/components/ui/card";
  import { Input } from "$lib/components/ui/input";
  import { db, user } from "$lib/firebase/firebase";
  import { collection, doc, updateDoc } from "firebase/firestore";
  import type { fromJSON } from "postcss";
  export let productId = "";
  export let imageURL = "";
  export let productName = "";
  export let currentBid;
  export let dbMinBid;
  export let dbMaxBid;
  export let time = "";
  let bidAmt = 0;

  async function handleSubmit() {
    if (bidAmt <= currentBid || bidAmt > dbMaxBid) {
      alert("Please enter a valid bid");
      return;
    }
    const ref = doc(db, "products", productName);
    await updateDoc(ref, {
      curBid: bidAmt,
      userID: $user?.uid,
    });
    setTimeout(() => {
      alert("Bid Placed");
    }, 0);
    location.reload();
    if (bidAmt == dbMaxBid) {
      alert("You have won the bid");
      await updateDoc(ref, {
        flag: 1,
      });
      location.reload();
    }
  }
</script>

<button>
  <Card.Root class="m-2 w-[350px] cursor-pointer shadow-lg">
    <Card.Header class="space-y-1">
      <Card.Title class="text-2xl text-center"
        >Product Name : {productName}</Card.Title
      >
    </Card.Header>

    <Card.Content class="flex flex-col items-center justify-center gap-4">
      <div class="border w-32 h-32 rounded-lg">
        <img src={imageURL} alt="" />
      </div>
      <div class="border w-64"></div>
      <div class="text-center">
        <p class="text-slate-600">Current Bid : <span>{currentBid}</span></p>
        <p class="text-slate-600">Maximum Bid : <span>{dbMaxBid}</span></p>
        <p class="text-slate-600">Minimum Bid : <span>{dbMinBid}</span></p>
        <p class="text-slate-600">Time : <span>{time}</span></p>
      </div>
      <form
        on:submit|preventDefault={() => {
          handleSubmit();
        }}
      >
        <Input type="number" bind:value={bidAmt}/>
        <p>{bidAmt}</p>
        <Button type="submit">Submit</Button>
      </form>
    </Card.Content>
  </Card.Root>
</button>
