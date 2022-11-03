<script context="module">
    export const load = async ({ session }) => {
        if (!session.user.exists) return {};
        return {
            status: 302,
            redirect: "/",
        };
    };
</script>
<script>
    import Select from 'svelte-select';
    import { auth } from "$lib/firebase";                                   ///TODO: link to realtime firebase
    import {
        sendPasswordResetEmail,
        updateProfile,
        getIdToken,
    } from "firebase/auth";   //change to hook to real time
    import { request } from "$lib/fetch.js"                                 ///

    let email, username, securityQChosen, securityAChosen, newPassword;           //added 3 new vars, set user inputs to these vars


    const securityQuestions = [
    {value: 'Maiden name of your mother', label:'Maiden name of your mother', group: 'Family'},
    {value: 'The name of your first pet', label:'The name of your first pet', group: 'Personal'},
    {value: 'In what city were you born?', label: 'In what city were you born?', group: 'Personal'},
    {value: 'The make of your first car', label: 'The make of your first car', group: 'Personal'},
    {value: 'Favorite food as a child', label: 'Favorite food as a child', group: 'Personal'},
    {value: 'Month your best friend born was born', label: 'Month your best friend was born', group: 'Personal'},
    {value: 'Favorite movie', label: 'Favorite movie', group: 'Personal'},
    {value: 'Something you will never eat', label: 'Something you will never eat', group: 'Food'},
    {value: 'What was your first job?', label: 'What was your first job?', group: 'Personal'},
    {value: 'What was the make of your first car?', label: 'What was the make of your first car?', group: 'Personal'},
    {value: 'Who is your favorite actor/actress?', label: 'Who is your favorite actor/actress?', group: 'Personal'},
    {value: 'The name of your favorite book?', label: 'The name of your favorite book?', group: 'Personale'}
    ];
    const groupBy = (question) => question.group;

    const changePass = async () => {
        await sendPasswordResetEmail(    
            auth,                                                   
            email
        )
        .then(() => {
            alert("Password Reset sent!")
        });
        // await updateProfile(userRecord.user, { displayName: username });
        // const idToken = await getIdToken(userRecord.user, true);
        // await request("/auth", "POST", { idToken });
        // window.location.replace("/")    //this line it routing to the homepage (index)

     //make function:If correct securityQuestion and Answer chosen then
     //use Username to change password else make pop up "incorrect Ques & Pass"
     //this function is from sigh up, change to do above task then delete stuff above after groupBy


     

    };
    const goback = async () => {
        window.location.replace("/login")
    }
    
</script>
<body>
    <br><br><br>
    <div id="log">
        
        <button id="back" on:click={goback}>&#10229;</button>
        <h1 id="title">Reset Password</h1>

        <p>Email</p>     
        <input type="text" bind:value={email} />   <!--bind sets the inputted value to variable username-->

        <p>Security Question</p>   
        <div style="width:500px;"><Select items={securityQuestions} {groupBy}></Select> </div>  <!--Dropdown-->

        <p>Answer</p>
        <input type="text" bind:value={securityAChosen} />

        <!-- <p>New Password</p>
        <input type="password" bind:value={newPassword} /> -->
        
        <button on:click={changePass}>RESET</button>     <!--Change to call changePass function-->
    </div>
</body>
<style lang="postcss">
    #title{ text-align: center; font-weight: 700; }
    h1{
        @apply font-semibold text-xl;
    }
    button{
        @apply rounded-lg bg-pink-600 text-white w-full py-2 mt-2;
    }
    body{
        @apply flex flex-col place-items-center place-content-center;
    }
    div{
        @apply w-full max-w-xs flex flex-col gap-2;
    }
    input {
        @apply w-full rounded p-1 border border-pink-500;
    } 
    #back{
        max-width: 2.5rem; padding-top: 0; padding-bottom: 0;
    }
    #log{
        background-color: white; padding: 3%; border-radius: 5%; 
    }
    :global(body){
        background-image: url(parking2.jpeg);
        //width: fit-content;
        height: 100%;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>
