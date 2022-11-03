
<!-- <script context="module">
    export const load = async ({ session }) => {
        if (session.user.exists) return {};
        return {
            status: 302,
            redirect: "/login",
        };
    };
</script> -->
<script>
    import "../app.css";
    import { session } from "$app/stores";
    import { request } from "$lib/fetch";

    const signOutUser = async () => {
        await request("/auth", "DELETE");
        window.location.replace("/login")
    };
    const navigation = [
		{
			href: '/',
			name: 'Home',
		},
		{
			href: '/profile',
			name: 'Profile',
		},
        {
			href: '/parkinglots',
			name: 'Parking Lots',
		},
		{
			href: '/userReporting',
			name: 'Report',
		}
	];
</script>
<header>
	<nav class="container mx-auto">
		<div class="w-full py-4 flex items-center justify-around">
			<div class="flex items-center">
				<div class="ml-10 space-x-8">
					{#each navigation as link}
						<a href={link.href} class="text-lg font-medium text-white hover:text-pink-50">
							{link.name}
						</a>
					{/each}
				</div>
			</div>
			<div class="ml-10 space-x-4">
					<button on:click={signOutUser}
						class="inline-block bg-pink-400 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
					> Sign out </button>
			</div>
		</div>
	</nav>
</header>
<!-- <header>
    <nav>
        <div class="w-full py-4 flex items-center justify-between">
			<div class="flex items-center">
				<div class="ml-10 space-x-8">
					<a href="/">Home</a>
                    <a href="/">Profile</a>
				</div>
			</div>
			<div class="ml-10 space-x-4">
				<button on:click={signOutUser} id="button">Signout</button>
			</div>
		</div>
    </nav>
</header> -->

    <!-- <header>
        <nav>
            <div>
                <a href="/">Home</a>
                <a href="/">Profile</a>
                <button on:click={signOutUser} id="button">Signout</button>
            </div>
        </nav>
    </header> -->

    <style lang="postcss">
       header{
           /* max-width: 100%; display: inline; flex: content; justify-content:space-between;  */
           background-color: #ce2c76; 
       }
       /* button{
        @apply rounded-lg bg-pink-600 text-white w-full py-2 mt-2;
    } */
        
    </style>