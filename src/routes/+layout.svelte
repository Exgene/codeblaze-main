<script>
  import Authcheck from "$lib/components/authcheck.svelte";
  import Navbar from "$lib/components/navbar.svelte";
  import { called, user, userData, userLoaded } from "$lib/firebase/firebase";
  import "../app.css";
  $user;
  $userData;
</script>

<Authcheck>
  <Navbar />
  <slot />
</Authcheck>
