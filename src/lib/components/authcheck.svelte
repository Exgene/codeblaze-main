<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import * as Card from "$lib/components/ui/card";
  import { user } from "$lib/firebase/firebase";
  import SignInOut from "./signin-out.svelte";
</script>

{#if $user}
  <slot />
{:else}
  <Card.Root class="mt-10 w-[500px] mx-auto">
    <Card.Header class="space-y-1">
      <Card.Title class="text-2xl">You aren't logged in</Card.Title>
      <Card.Description
        >You need to be logged in to view this page.
      </Card.Description>
    </Card.Header>

    <Card.Content class="flex flex-row flex-wrap justify-center gap-4">
      <SignInOut />
    </Card.Content>
  </Card.Root>
{/if}
