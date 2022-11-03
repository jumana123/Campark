<script context="module">
    //import {goto} from '$app/navigation'
    export const load = async ({ session }) => {
        if (!session.user.exists) return {};
        return {
            status: 302,
            redirect: "/",
        };
    };
</script>

<script>
    import { auth } from "$lib/firebase";
    import { signInWithEmailAndPassword } from "firebase/auth";
    import { request } from "$lib/fetch.js"

    let email, password;

    const login = async () => {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        )
        .catch((error) => {
            const errorCode = error.code;
            alert(errorCode)
        });
        const idToken = userCredential._tokenResponse.idToken;
        await request("/auth", "POST", { idToken });
        window.location.replace("/")
    };
    const register = async () => {
        window.location.replace("/signup")
    }
    const forgotPass = async () => {
        window.location.replace("/forgotPassword")
    }
</script>
<body>
    <div class="log">
        <h1 id="ProjectTitle">  WELCOME TO CAMPARK </h1><br>
        <h1 id="title">Login</h1>
        <p>Email</p>
        <input type="text" bind:value={email} />
        <p>Password</p>
        <input type="password" bind:value={password} />
        <button on:click={login}>Log me in!</button>
        <button on:click={forgotPass}>Forgot Password!</button>
        <button on:click={register}>Register me!</button> 
    </div>
</body>
<style lang="postcss">
    #title{ text-align: center; font-weight: 600; }
    #ProjectTitle{ text-align: center; font-weight: 600; color: #ce2c76; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif}
    h1{
        @apply font-semibold text-xl;
    }
    button{
        @apply rounded-lg bg-pink-600 text-white w-full py-2;
    }
    body{
        @apply flex flex-col place-items-center place-content-center h-screen w-screen;
    }
    div{
        @apply w-full max-w-xs flex flex-col gap-2;
    }
    input {
        @apply w-full rounded p-1 border border-pink-500;
    } 
    .log{
        background-color: white; padding: 2%; border-radius: 5%;
    }
    :global(body){
        background-image: url(parking2.jpeg);
        width: fit-content;
        height: 100%;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>
