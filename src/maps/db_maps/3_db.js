import { getDocs, doc, collection, setDoc} from "firebase/firestore";
import { session } from "$app/stores";
import { db } from "$lib/firebase";

//console.log(spotPark);
// db.Collection("Lot 3").get().then(function(querySnapshot) {
//     querySnapshot.forEach(function(doc) {
//         // doc.data() is never undefined for query doc snapshots
//         console.log(doc.id, " => ", doc.data());
//     });
// });
// getDoc(doc(db, "Lot 3", $session.user.uid)).then(docSnap => {
//     if (docSnap.exists()) {
//         check = docSnap.get("checkedIn");
//         return check;
//     } else {
//         console.log("No such document!");
//     }
// });
export let Parked = [];
let spotPark;
getDocs(collection(db, "Lot 3")).then(querySnapshot => {
    querySnapshot.forEach((doc) => {
        //console.log(doc.id, " => ", doc.data());
        // let checkCheck = doc.get("checkedIn");
        // if (checkCheck == true){ 
        //     spotPark = "Spot" + doc.get("Spot"); 
        //     //console.log(doc.id, " => ", doc.data(), spotPark);
        //     Parked.push(spotPark);
        //     console.log(Parked);
        //     return Parked;
        // }
    });
    console.log(Parked);
    return Parked;
});
