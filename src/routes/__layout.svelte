<script>
    import "../app.css";
    import Navigation from "../components/navigation.svelte"
    import { session } from "$app/stores";
</script>

<svelte:head>
  <title>Campark</title>
</svelte:head>


{#if $session.user.exists}
    <Navigation />
{/if}

<slot />


<style lang="postcss">
/* 
    :global(h1) {
        @apply font-semibold text-xl;
    }
    :global(button) {
        @apply rounded-lg bg-pink-600 text-white w-full py-2 mt-2;
    }
    :global(body) {
        @apply flex flex-col place-items-center place-content-center h-screen w-screen;
    }
    :global(div) {
        @apply w-full flex flex-col gap-2;
    }
    :global(input) {
        @apply w-full rounded p-1 border border-pink-500;
    } */
</style>
