<script>
    import Map from '../maps/2A_Map.svelte';
    import { getDoc, doc, collection, deleteDoc} from "firebase/firestore";
    import { session } from "$app/stores";
    import { db } from "$lib/firebase";
    var checkedIn = false;
    getDoc(doc(db, "Lot 2A", $session.user.uid)).then(docSnap => {
            if (docSnap.exists()) {
                checkedIn = true;
            } else {
                console.log("No such document!");
            }
         });
    function checkOut(){
        alert("Checked Out");
        return deleteDoc(doc(db, "Lot 2A", $session.user.uid));
        
    }
</script>

<svelte:head>
	<script defer async
	src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB7JRxMXgvVfLQd8K-Mg5f2dxYpzbMN8Ec&callback=initMap">
	</script>
</svelte:head>
<body>
    <div id="title">
        <br>
        <h1>Parking Lot 2A</h1>
        <p>This is lot 2A</p>
        {#if checkedIn == true}
            <div id="CheckedIn">
                <button on:click={checkOut}>Check Out</button>
            </div>
        {/if}
        <br>
    </div>
    <div id="map">
        <Map />
    </div>
</body>

<style lang="postcss">
    #title{ text-align: center; font-weight: 700;  background-color: #ce2c76; }
    h1{
        @apply font-semibold text-xl; 
    }
    button{
        @apply rounded-lg bg-pink-600 text-white w-full py-2 mt-2;
    }
    #map{ 
        width: 100vw;
        height: 100vh; 
        background-color: pink;
    }
    :global(body) {
	    padding: 0;
    }
    
</style>