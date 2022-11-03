<script context="module">
    export const load = async ({ session }) => {
        if (session.user.exists) return {};
        return {
            status: 302,
            redirect: "/login",
        };
    };
</script>

<script>
    import { session } from "$app/stores";
      
    import Geolocation from "svelte-geolocation";

    let getPosition = false;
</script>


<body>
    <div>
        <div id="content">
            <br><br><br>
            <h1>Welcome, {$session.user.name}!</h1>
            <p>Your email is {$session.user.email}</p><br>
            <button on:click="{() => (getPosition = true)}"> Find my Location </button> <br><br><br>
        
        <Geolocation
          getPosition="{getPosition}"
          let:coords
          let:loading
          let:success
          let:error
          let:notSupported
        >
          {#if notSupported}
            Your browser does not support the Geolocation API.
          {:else}
            {#if loading}
              Loading...
            {/if}
            {#if success}
              {JSON.stringify(coords)}
            {/if}
            {#if error}
              An error occurred. {error.code} {error.message}
            {/if}
          {/if}
        </Geolocation>
      </div>
    </div>
</body>

<style lang="postcss">
    body{
        display: block; 
    }
    div{
        display: block; max-width: 100% !important; flex: none; margin-left: 0%; margin-top: 1rem;
    }
    h1{
        @apply font-semibold text-xl;
    }
    #content{
        text-align: center;
    }
    button{
        @apply rounded-lg max-w-xs bg-pink-600 text-white w-full py-2 mt-2;
    }
    /* :global(body){
        background-image: url(images.png);
        width: fit-content;
        height: 100%;
        background-repeat: no-repeat;
        background-size: cover;
    } */
</style>
