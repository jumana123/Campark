<script>
    export let message;
    export let Spot;
    import { getDoc, doc, collection, setDoc} from "firebase/firestore";
    import { session } from "$app/stores";
    import { db } from "$lib/firebase";
    let userType, username, estimate;
    getDoc(doc(db, "users", $session.user.uid)).then(docSnap => {
        if (docSnap.exists()) {
            userType = docSnap.get("userType");
            username = docSnap.get("username");
            return userType, username;
        } else {
            console.log("No such document!");
        }
    });
    let checkExists = false;
    getDoc(doc(db, message, $session.user.uid)).then(docSnap2 => {
        if (docSnap2.exists()) {
            checkExists = true;
            return checkExists;
        } else {
            console.log("No such document!");
        }
    });
    const checkIn = async () => {
       // alert("Hi")
        await setDoc(doc(collection(db, message), $session.user.uid), { //("Spot"+ Spot)
            userType: userType,
            username: username,
            Spot: Spot,
            checkedIn: true,
            estimateTime: estimate,
        });
        if (message == "Lot 3"){ window.location.replace("/lot3"); }
        else if(message == "Lot 7N"){ window.location.replace("/lot7N"); }
        else if(message == "Lot 2A"){ window.location.replace("/lot2A"); }
    };
 </script>
     <div id="main">
        <h1>Parking Spot</h1>
        <p id="spot">{message} Parking Spot {Spot}</p>
    </div> 
    {#if message == "Lot 3"}
        {#if (userType == "faculty" || userType == "Guest" || userType == "Admin") && checkExists == false}
            <p id="pa1">Expected Check Out Time:</p><input type="time" id="timeEst" name="estimate" min="07:00:00" max="22:00:00" bind:value={estimate} />
            <button on:click={checkIn}>Check In</button>
        {:else if checkExists == true}
            <br><p id="Warn">You already checked into a spot! Check out first!</p><br>
        {:else}
            <br><p id="Warn">You cannot park here! You are a {userType}!</p><br>
        {/if}
    {:else if message == "Lot 7N"}
        {#if checkExists == false}
            <br><p id="Warn">You can park here! You are a {userType}!</p><br>
            <p id="pa1">Expected Check Out Time:</p><input type="time" id="timeEst" name="estimate" min="07:00" max="22:00" bind:value={estimate} />
            <button on:click={checkIn}>Check In</button>
        {:else if checkExists == true}
            <br><p id="Warn">You already checked into a spot! Check out first!</p><br>
        {:else}
            <br><p id="Warn">You cannot park here! You are a {userType}!</p><br>
        {/if}
    {/if}

<style lang="postcss">
    button{
        @apply rounded-lg bg-pink-600 text-white w-full py-2 mt-2;
    } 
    h1{
        @apply font-semibold text-xl;
    }
    #main, #Warn{
        text-align: center;
    }
    #spot{
        font-weight: 400; font-style: italic;
    }
    #pa1{
        order: 1;
    }
    
</style>