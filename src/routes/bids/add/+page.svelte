<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import * as Card from "$lib/components/ui/card";

  import Input from "$lib/components/ui/input/input.svelte";
  import { Label } from "$lib/components/ui/label";
  import TextArea from "$lib/components/ui/textarea/textarea.svelte";
  import { db, storage, user, userData, userID } from "$lib/firebase/firebase";
  import {
    collection,
    doc,
    getDoc,
    setDoc,
    updateDoc,
    writeBatch,
  } from "firebase/firestore";
  import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

  let name = "";
  let time = 0;
  let maxValue: number = 0;
  let minValue: number = 0;
  let previewURL = "";
  let uploading = false;
  let description = "";
  let g_url="";

  async function upload(e: any) {
    uploading = true;
    const file = e.target.files[0];
    const maxSize = 1024 * 512;
    if (file.size > maxSize) {
      // alert('The file is too large. Please upload a file smaller than 512kB.');
      alert("The file is too large. Please upload a file smaller than 512kB.");
      uploading = false;
      return;
    } else {
      previewURL = URL.createObjectURL(file);
      const storageRef = ref(storage, `products/${name}/profile.png`);
      const result = await uploadBytes(storageRef, file);

      const url = await getDownloadURL(result.ref);
      console.log(url);
      //   await updateDoc(doc(db, "products", $userID!.user), { imageURL: url });
      // alert('Your profile photo has been updated!');
      alert("Photo Uploaded");
      uploading = false;
      g_url= url;
    }
  }

  async function submit(e: any) {
    const ref = doc(db, "bids", name);
    const exists = await getDoc(ref).then((doc) => doc.exists());

    const batch = writeBatch(db);
    const bidRef = doc(db, "products", name);
    batch.set(bidRef, {
      id: $user?.uid,
      name: name,
      description: description,
      flag: 0,
      curBid: minValue,
      userID: null,
      time: time,
      startTime: new Date().getTime(),
      endTime: new Date().getTime() + time * 1000,
      maxValue: maxValue,
      minValue: minValue,
      Imageurl: g_url
    });
    await batch.commit();
    alert("Bid added successfully");
  }
</script>

<div class="m-2 flex min-h-screen items-center justify-center">
  <Card.Root class="max-w-3xl">
    <Card.Header class="space-y-1">
      <Card.Title class="text-3xl">Enter your product details</Card.Title>
      <h2 class="card-title">Welcome, {$user?.displayName}</h2>
    </Card.Header>

    <form on:submit|preventDefault={submit}>
      <Card.Content>
        <div>
          <Label class="text-xl" for="name">Name</Label>
          <Input
            type="text"
            id="name"
            placeholder="Name of your products"
            bind:value={name}
            required
          />
          <p class="mt-1 text-sm text-muted-foreground">Name of the product</p>
        </div>
        <div>
          <Label class="text-xl" for="name">Name</Label>
          <TextArea
            placeholder="Description"
            bind:value={description}
            required
          />
          <p class="mt-1 text-sm text-muted-foreground">
            Short Description for your product
          </p>
        </div>

        <div class="mt-6">
          <Label for="username" class="mt-10 text-xl">Enter the timer</Label>
          <Input
            type="text"
            id="username"
            placeholder="Timer"
            bind:value={time}
            required
          />
          <p class="mt-1 text-sm text-muted-foreground">Time in seconds</p>
        </div>
        <div class="mt-6">
          <Label for="username" class="mt-10 text-xl">Enter Minimum Value</Label
          >
          <Input
            type="text"
            id="username"
            placeholder="10"
            bind:value={minValue}
            required
          />
          <p class="mt-1 text-sm text-muted-foreground">Minimum bid amount</p>
        </div>
        <div class="mt-6">
          <Label for="username" class="mt-10 text-xl">Enter Maximum value</Label
          >
          <Input
            type="text"
            id="username"
            placeholder="300"
            bind:value={maxValue}
            required
          />
          <p class="mt-1 text-sm text-muted-foreground">Maximum bid amount</p>
        </div>
      </Card.Content>
      <Input type="file" on:change={upload}>Drive</Input>
      <Card.Footer>
        <Button class="w-full" type="submit">Submit</Button>
      </Card.Footer>
    </form>
  </Card.Root>
</div>
