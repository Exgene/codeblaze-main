<script lang="ts">
	import { Button } from '$lib/components/ui/button';

	import { auth } from '$lib/firebase/firebase';
	import { user } from '$lib/firebase/firebase';

	import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

	async function signInWithGoogle() {
		const provider = new GoogleAuthProvider();
		await signInWithPopup(auth, provider);
	}

	async function signOutSSR() {
		await signOut(auth);
	}
</script>

{#if $user}
	<Button variant="ghost" on:click={signOutSSR}>Sign out</Button>
{:else}
	<Button variant="ghost" on:click={signInWithGoogle}>
		Login
	</Button>
{/if}