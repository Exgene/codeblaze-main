<script>
  import Authcheck from "$lib/components/authcheck.svelte";
  import { called, user, userData, userLoaded } from "$lib/firebase/firebase";
  import "../app.css";
  $user;
  $userData;
</script>

<Authcheck>
  <slot />
</Authcheck>
