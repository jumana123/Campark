<script context="module">
    export const load = async ({ session }) => {
        if (!session.user.exists) return {};
        return {
            status: 302,
            redirect: "/login",
        };
    };
</script>

<script>
    import { auth, db } from "$lib/firebase";
    import {
        createUserWithEmailAndPassword,
        updateProfile,
        getIdToken,
        sendEmailVerification
    } from "firebase/auth";
    import { addDoc, collection, doc, setDoc } from "firebase/firestore";
     
    import { request } from "$lib/fetch.js"
    import {authErrors} from "./../lib/auth-errors"

    let username, email, password, phoneNumber, hofstraID, vehicle, license, userType, question, securityAnswer, errorCode, fullname;

    import { writable } from 'svelte/store';
    import Modal, { bind } from 'svelte-simple-modal';
    import Popup from './../components/popup.svelte';
    const modal = writable(null);
    const showModal = () => modal.set(bind(Popup, { message: errorCode }));

    const signup = async () => {
        const userRecord = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        )
        .catch((error) => {
            for (var key in authErrors){
                if( key == error.code){
                    errorCode = authErrors[key];
                }
            }
           // errorCode = error.desc;
           
           showModal();
        });
        await setDoc(doc(collection(db, "users"), userRecord.user.uid), {
            userType: userType,
            username: username,
            phoneNumber: phoneNumber,
            hofstraID: hofstraID,
            vehicleMakeModelYear: vehicle,
            licenseNumber: license,
            securityQuestion: question,
            securityAnswer: securityAnswer,
            email: email,
            fullname: fullname,
        });
        await updateProfile(userRecord.user, { displayName: username });
        await sendEmailVerification(userRecord.user)
        .then(() => {
            errorCode = "Email Verification sent!";
            showModal();
        });
        const idToken = await getIdToken(userRecord.user, true);
        await request("/auth", "POST", { idToken });
        window.location.replace("/login")
    };
    
    const login = async () => {
        window.location.replace("/login")
    }

    function checkPassword(str)
    {
        // at least one number, one lowercase and one uppercase letter
        // at least six characters
        var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        return re.test(str);
    }


</script>
<body>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <div id="log">
        <h1 id="title">Create an Account</h1>
        <p>Username</p>
        <input type="text" bind:value={username} />
        <p>Full Name</p>
        <input type="text" bind:value={fullname} />
        <p>Email</p>
        <input type="text" placeholder="Hofstra Email" bind:value={email} />
        <p>Password </p>
        <input type="password" bind:value={password} />
        <p id="errorCode" class="error pink-text center-align"></p>
        <p>Phone Number</p>
        <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required 
        maxlength="10" placeholder="123-455-6789" bind:value={phoneNumber} />
        <p>Hofstra ID</p>
        <input type="number" pattern="[0-9]{9}" maxlength="9" placeholder="700222333" bind:value={hofstraID} />
        <p>Vehicle Make, Model, Year</p>
        <input type="text" placeholder="Honda, Civic, 2000" bind:value={vehicle} />
        <p>License Plate Number</p>
        <input type="text" maxlength="10" placeholder="ABC123" bind:value={license} />
        <p>User Type</p>
        <div id="dropdown"><select id="userType" name="userType" bind:value={userType}>
            <option value="student">Student</option>
            <option value="faculty">Faculty</option>
            <option value="guest">Guest</option>
            <option value="admin">Admin</option>
          </select></div>
        {#if userType == "admin"}
        <div id="adminAuth"><input type="text" maxlength="10" placeholder="Provide Valid Security Code"/></div> {/if}
        <p>Security Question</p>
        <div id="dropdown"><select id="question" name="question" bind:value={question}>
            <option value="Maiden name of your mother">Maiden name of your mother</option>
            <option value="The name of your first pet">The name of your first pet</option>
            <option value="In what city were you born?">In what city were you born?</option>
            <option value="The make of your first car">The make of your first car</option>
            <option value="Favorite food as a child">Favorite food as a child</option>
            <option value="Month your best friend born was born">Month your best friend born was born</option>
            <option value="Favorite movie">Favorite movie</option>
            <option value="Something you will never eat">Something you will never eat</option>
            <option value="What was your first job?">What was your first job?</option>
            <option value="What was the make of your first car?">What was the make of your first car?</option>
            <option value="Who is your favorite actor/actress?">Who is your favorite actor/actress?</option>
            <option value="The name of your favorite book?">The name of your favorite book?</option>
          </select></div>
        <input type="text" placeholder="Answer" bind:value={securityAnswer} />
        <button on:click={signup}>Create Account!</button>
        <button on:click={login}>Already have Account</button>
    </div>
    <br><br><br><br><br><br> 
</body>
<Modal show={$modal}>
</Modal>
<style lang="postcss">
    #title{ text-align: center; font-weight: 700; }
    h1{
        @apply font-semibold text-xl;
    }
    button{
        @apply rounded-lg bg-pink-600 text-white w-full py-2 mt-2;
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
    #dropdown{
        @apply w-full rounded p-1 border border-pink-500;
    }
    #log{
        background-color: white; padding: 2%; border-radius: 3%;
    }
    :global(body){
        background-image: url(parking2.jpeg);
        //width: fit-content;
        height: 100%;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>