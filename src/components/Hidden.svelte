<script>
    //this file was created to hide and show divs through button clicks
    //demonstrated in profile.svelte with numedit,vehicleedit,licenseedit
    import { createEventDispatcher } from 'svelte';

let shown = false;

    let dispatch = createEventDispatcher();

  export function show() {
    shown = !shown;
            dispatch('show', shown);
    }
</script>

{#if shown}
<slot/>
{/if}