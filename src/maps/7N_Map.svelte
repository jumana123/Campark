<script>
    import {Coord1, Coord2, Coord3, Coord4, Coord5, Coord6, Coord7, Coord8, Coord9, Coord10,
        Coord11, Coord12, Coord13, Coord14, Coord15, Coord16, Coord17, Coord18, Coord19, Coord20,
        Coord21, Coord22, Coord23, Coord24, Coord25, Coord26, Coord27, Coord28, Coord29, Coord30, 
        Coord31, Coord32, Coord33, Coord34, Coord35, Coord36, Coord37, Coord38, Coord39, Coord40,
        Coord41, Coord42, Coord43, Coord44, Coord45, Coord46, Coord47, Coord48, Coord49, Coord50,
        Coord51, Coord52, Coord53, Coord54, Coord55, Coord56, Coord57, Coord58, Coord59, Coord60,
        Coord61, Coord62, Coord63, Coord64, Coord65, Coord66, Coord67, Coord68, Coord69, Coord70,
        Coord71, Coord72, Coord73, Coord74, Coord75, Coord76, Coord77, Coord78, Coord79, Coord80,
        Coord81, Coord82, Coord83, Coord84, Coord85, Coord86, Coord87, Coord88, Coord89, Coord90,
        Coord91, Coord92, Coord93, Coord94, Coord95, Coord96, Coord97, Coord98, Coord99, Coord100,
        Coord101, Coord102, Coord103, Coord104, Coord105, Coord106, Coord107, Coord108, Coord109, Coord110,
        Coord111, Coord112, Coord113, Coord114, Coord115, Coord116, Coord117, Coord118, Coord119, Coord120,
        Coord121, Coord122, Coord123, Coord124, Coord125, Coord126, Coord127, Coord128, Coord129, Coord130, 
        Coord131, Coord132, Coord133, Coord134, Coord135, Coord136, Coord137, Coord138, Coord139, Coord140,
        Coord141, Coord142, Coord143, Coord144, Coord145, Coord146, Coord147, Coord148, Coord149, Coord150,
        Coord151,
    } from "./PolyCoords/7N_Coords";
	let container;
	let map;
	let zoom = 20;
    let center = {lat: 40.71636377390962, lng:-73.60325247372715}; //40.71636377390962, -73.60325247372715
    
    import { onMount } from 'svelte';
	//modal
    let x = 0;
    let lot = "Lot 7N";
    import { writable } from 'svelte/store';
	import Modal, { bind } from 'svelte-simple-modal';
    import Popup from './../components/popup2.svelte';
    const modal = writable(null);
    const showModal = () => modal.set(bind(Popup, {message: lot, Spot: x }));

	import { getDocs, doc, collection, setDoc} from "firebase/firestore";
    import { session } from "$app/stores";
    import { db } from "$lib/firebase";
    
	onMount(async () => {
		map = new google.maps.Map(container, {
            zoom,
            center,
		});

        let spotPark; 

        function Park(Spot_){
            return Spot_.setOptions({strokeColor: "#585858", fillColor: "#585858", clickable: false});
        }   

        getDocs(collection(db, "Lot 7N")).then(querySnapshot => {
            querySnapshot.forEach((doc) => {
                let checkCheck = doc.get("checkedIn");
                if (checkCheck == true){ 
                    spotPark = "Spot" + doc.get("Spot");
                    switch (spotPark){
                        case "Spot1": Park(Spot1); break; case "Spot2": Park(Spot2); break;
                        case "Spot3": Park(Spot3); break; case "Spot4": Park(Spot4); break;
                        case "Spot5": Park(Spot5); break; case "Spot6": Park(Spot6); break;
                        case "Spot7": Park(Spot7); break; case "Spot8": Park(Spot8); break;
                        case "Spot9": Park(Spot9); break; case "Spot10": Park(Spot10); break;
                        case "Spot11": Park(Spot11); break; case "Spot12": Park(Spot12); break;
                        case "Spot13": Park(Spot13); break; case "Spot14": Park(Spot14); break;
                        case "Spot15": Park(Spot15); break; case "Spot16": Park(Spot16); break;
                        case "Spot17": Park(Spot17); break; case "Spot18": Park(Spot18); break;
                        case "Spot19": Park(Spot19); break; case "Spot20": Park(Spot20); break;
                        case "Spot21": Park(Spot21); break; case "Spot22": Park(Spot22); break;
                        case "Spot23": Park(Spot23); break; case "Spot24": Park(Spot24); break;
                        case "Spot25": Park(Spot25); break; case "Spot26": Park(Spot26); break;
                        case "Spot27": Park(Spot27); break; case "Spot28": Park(Spot28); break;
                        case "Spot29": Park(Spot29); break; case "Spot30": Park(Spot30); break;
                        case "Spot31": Park(Spot31); break; case "Spot32": Park(Spot32); break;
                        case "Spot33": Park(Spot33); break; case "Spot34": Park(Spot34); break;
                        case "Spot35": Park(Spot35); break; case "Spot36": Park(Spot36); break;
                        case "Spot37": Park(Spot37); break; case "Spot38": Park(Spot38); break;
                        case "Spot39": Park(Spot39); break; case "Spot40": Park(Spot40); break;
                        case "Spot41": Park(Spot41); break; case "Spot42": Park(Spot42); break;
                        case "Spot43": Park(Spot43); break; case "Spot44": Park(Spot44); break;
                        case "Spot45": Park(Spot45); break; case "Spot46": Park(Spot46); break;
                        case "Spot47": Park(Spot47); break; case "Spot48": Park(Spot48); break;
                        case "Spot49": Park(Spot49); break; case "Spot50": Park(Spot50); break;
                        case "Spot51": Park(Spot51); break; case "Spot52": Park(Spot52); break;
                        case "Spot53": Park(Spot53); break; case "Spot54": Park(Spot54); break;
                        case "Spot55": Park(Spot55); break; case "Spot56": Park(Spot56); break;
                        case "Spot57": Park(Spot57); break; case "Spot58": Park(Spot58); break;
                        case "Spot59": Park(Spot59); break; case "Spot60": Park(Spot60); break;
                        case "Spot61": Park(Spot61); break; case "Spot62": Park(Spot62); break;
                        case "Spot63": Park(Spot63); break; case "Spot64": Park(Spot64); break;
                        case "Spot65": Park(Spot65); break; case "Spot66": Park(Spot66); break;
                        case "Spot67": Park(Spot67); break; case "Spot68": Park(Spot68); break;
                        case "Spot69": Park(Spot69); break; case "Spot70": Park(Spot70); break;
                        case "Spot71": Park(Spot71); break; case "Spot72": Park(Spot72); break;
                        case "Spot73": Park(Spot73); break; case "Spot74": Park(Spot74); break;
                        case "Spot75": Park(Spot75); break; case "Spot76": Park(Spot76); break;
                        case "Spot77": Park(Spot77); break; case "Spot78": Park(Spot78); break;
                        case "Spot79": Park(Spot79); break; case "Spot80": Park(Spot80); break;
                        case "Spot81": Park(Spot81); break; case "Spot82": Park(Spot82); break;
                        case "Spot83": Park(Spot83); break; case "Spot84": Park(Spot84); break;
                        case "Spot85": Park(Spot85); break; case "Spot86": Park(Spot86); break;
                        case "Spot87": Park(Spot87); break; case "Spot88": Park(Spot88); break;
                        case "Spot89": Park(Spot89); break; case "Spot90": Park(Spot90); break;
                        case "Spot91": Park(Spot91); break; case "Spot92": Park(Spot92); break;
                        case "Spot93": Park(Spot93); break; case "Spot94": Park(Spot94); break;
                        case "Spot95": Park(Spot95); break; case "Spot96": Park(Spot96); break;
                        case "Spot97": Park(Spot97); break; case "Spot98": Park(Spot98); break;
                        case "Spot99": Park(Spot99); break; case "Spot100": Park(Spot100); break;
                        case "Spot101": Park(Spot101); break; case "Spot102": Park(Spot102); break;
                        case "Spot103": Park(Spot103); break; case "Spot104": Park(Spot104); break;
                        case "Spot105": Park(Spot105); break; case "Spot106": Park(Spot106); break;
                        case "Spot107": Park(Spot107); break; case "Spot108": Park(Spot108); break;
                        case "Spot109": Park(Spot109); break; case "Spot110": Park(Spot110); break;
                        case "Spot111": Park(Spot111); break; case "Spot112": Park(Spot112); break;
                        case "Spot113": Park(Spot113); break; case "Spot114": Park(Spot114); break;
                        case "Spot115": Park(Spot115); break; case "Spot116": Park(Spot116); break;
                        case "Spot117": Park(Spot117); break; case "Spot118": Park(Spot118); break;
                        case "Spot119": Park(Spot119); break; case "Spot120": Park(Spot120); break;
                        case "Spot121": Park(Spot121); break; case "Spot122": Park(Spot122); break;
                        case "Spot123": Park(Spot123); break; case "Spot124": Park(Spot124); break;
                        case "Spot125": Park(Spot125); break; case "Spot126": Park(Spot126); break;
                        case "Spot127": Park(Spot127); break; case "Spot128": Park(Spot128); break;
                        case "Spot129": Park(Spot129); break; case "Spot130": Park(Spot130); break;
                        case "Spot131": Park(Spot131); break; case "Spot132": Park(Spot132); break;
                        case "Spot133": Park(Spot133); break; case "Spot134": Park(Spot134); break;
                        case "Spot135": Park(Spot135); break; case "Spot136": Park(Spot136); break;
                        case "Spot137": Park(Spot137); break; case "Spot138": Park(Spot138); break;
                        case "Spot139": Park(Spot139); break; case "Spot140": Park(Spot140); break;
                        case "Spot141": Park(Spot141); break; case "Spot142": Park(Spot142); break;
                        case "Spot143": Park(Spot143); break; case "Spot144": Park(Spot144); break;
                        case "Spot145": Park(Spot145); break; case "Spot146": Park(Spot146); break;
                        case "Spot147": Park(Spot147); break; case "Spot148": Park(Spot148); break;
                        case "Spot149": Park(Spot149); break; case "Spot150": Park(Spot150); break;
                        case "Spot151": Park(Spot151);
                        default: break;
                    }
                }
            });
        });
        
		const Spot1 = new google.maps.Polygon({ paths: Coord1, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot1.setMap(map);
		Spot1.addListener("click", () => {
			x = 1;
            if (Spot1.clickable){showModal();};
		});
        
        const Spot2 = new google.maps.Polygon({ paths: Coord2, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot2.setMap(map);
		Spot2.addListener("click", () => {
			x = 2;
            if (Spot2.clickable){showModal();};
		});
        const Spot3 = new google.maps.Polygon({ paths: Coord3, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot3.setMap(map);
		Spot3.addListener("click", () => {
            x = 3;
            if (Spot3.clickable){showModal();};
		});

        const Spot4 = new google.maps.Polygon({ paths: Coord4, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot4.setMap(map);
		Spot4.addListener("click", () => {
            x = 4;
            if (Spot4.clickable){showModal();};
		});
        
        const Spot5 = new google.maps.Polygon({ paths: Coord5, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot5.setMap(map);
		Spot5.addListener("click", () => {
            x = 5;
            if (Spot5.clickable){showModal();};
		});
        const Spot6 = new google.maps.Polygon({ paths: Coord6, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot6.setMap(map);
		Spot6.addListener("click", () => {
            x = 6;
            if (Spot6.clickable){showModal();};
		});
        const Spot7 = new google.maps.Polygon({ paths: Coord7, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot7.setMap(map);
		Spot7.addListener("click", () => {
            x = 7;
            if (Spot7.clickable){showModal();};
		});
        const Spot8 = new google.maps.Polygon({ paths: Coord8, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot8.setMap(map);
		Spot8.addListener("click", () => {
            x = 8;
            if (Spot8.clickable){showModal();};
		});
        const Spot9 = new google.maps.Polygon({ paths: Coord9, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot9.setMap(map);
		Spot9.addListener("click", () => {
            x = 9;
            if (Spot9.clickable){showModal();};
		});
        const Spot10 = new google.maps.Polygon({ paths: Coord10, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot10.setMap(map);
		Spot10.addListener("click", () => {
            x = 10;
            if (Spot10.clickable){showModal();};
		});
        const Spot11 = new google.maps.Polygon({ paths: Coord11, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot11.setMap(map); //Parked(Spot11);
		Spot11.addListener("click", () => {
            x = 11;
            if (Spot11.clickable){showModal();};
		});
        const Spot12 = new google.maps.Polygon({ paths: Coord12, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot12.setMap(map);
		Spot12.addListener("click", () => {
            x = 12;
            if (Spot12.clickable){showModal();};
		});
        const Spot13 = new google.maps.Polygon({ paths: Coord13, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot13.setMap(map);
		Spot13.addListener("click", () => {
            x = 13;
            if (Spot13.clickable){showModal();};
		});
        const Spot14 = new google.maps.Polygon({ paths: Coord14, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot14.setMap(map);
		Spot14.addListener("click", () => {
            x = 14;
            if (Spot14.clickable){showModal();};
		});
        const Spot15 = new google.maps.Polygon({ paths: Coord15, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot15.setMap(map);
		Spot15.addListener("click", () => {
            x = 15;
            if (Spot15.clickable){showModal();};
		});
        const Spot16 = new google.maps.Polygon({ paths: Coord16, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot16.setMap(map);
		Spot16.addListener("click", () => {
            x = 16;
            if (Spot16.clickable){showModal();};
		});
        const Spot17 = new google.maps.Polygon({ paths: Coord17, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot17.setMap(map);
		Spot17.addListener("click", () => {
            x = 17;
            if (Spot17.clickable){showModal();};
		});
        const Spot18 = new google.maps.Polygon({ paths: Coord18, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot18.setMap(map);
		Spot18.addListener("click", () => {
            x = 18;
            if (Spot18.clickable){showModal();};
		});
        const Spot19 = new google.maps.Polygon({ paths: Coord19, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot19.setMap(map);
		Spot19.addListener("click", () => {
            x = 19;
            if (Spot19.clickable){showModal();};
		});
        const Spot20 = new google.maps.Polygon({ paths: Coord20, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot20.setMap(map);
		Spot20.addListener("click", () => {
            x = 20;
            if (Spot20.clickable){showModal();};
		});
        const Spot21 = new google.maps.Polygon({ paths: Coord21, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot21.setMap(map);
		Spot21.addListener("click", () => {
            x = 21;
            if (Spot21.clickable){showModal();};
		});
        const Spot22 = new google.maps.Polygon({ paths: Coord22, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot22.setMap(map);
		Spot22.addListener("click", () => {
            x = 22;
            if (Spot22.clickable){showModal();};
		});
        const Spot23 = new google.maps.Polygon({ paths: Coord23, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot23.setMap(map);
		Spot23.addListener("click", () => {
            x = 23;
            if (Spot23.clickable){showModal();};
		});
        const Spot24 = new google.maps.Polygon({ paths: Coord24, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot24.setMap(map);
		Spot24.addListener("click", () => {
            x = 24;
            if (Spot24.clickable){showModal();};
		});
        const Spot25 = new google.maps.Polygon({ paths: Coord25, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot25.setMap(map);
		Spot25.addListener("click", () => {
            x = 25;
            if (Spot25.clickable){showModal();};
		});
        const Spot26 = new google.maps.Polygon({ paths: Coord26, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot26.setMap(map);
		Spot26.addListener("click", () => {
            x = 26;
            if (Spot26.clickable){showModal();};
		});
        const Spot27 = new google.maps.Polygon({ paths: Coord27, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot27.setMap(map);
		Spot27.addListener("click", () => {
            x = 27;
            if (Spot27.clickable){showModal();};
		});
        const Spot28 = new google.maps.Polygon({ paths: Coord28, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot28.setMap(map);
		Spot28.addListener("click", () => {
            x = 28;
            if (Spot28.clickable){showModal();};
		});
        const Spot29 = new google.maps.Polygon({ paths: Coord29, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot29.setMap(map);
		Spot29.addListener("click", () => {
            x = 29;
            if (Spot29.clickable){showModal();};
		});
        const Spot30 = new google.maps.Polygon({ paths: Coord30, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot30.setMap(map);
		Spot30.addListener("click", () => {
            x = 30;
            if (Spot30.clickable){showModal();};
        });
        const Spot31 = new google.maps.Polygon({ paths: Coord31, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot31.setMap(map);
		Spot31.addListener("click", () => {
            x = 31;
            if (Spot31.clickable){showModal();};
        });
        const Spot32 = new google.maps.Polygon({ paths: Coord32, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot32.setMap(map);
		Spot32.addListener("click", () => {
            x = 32;
            if (Spot32.clickable){showModal();};
        });
        const Spot33 = new google.maps.Polygon({ paths: Coord33, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot33.setMap(map);
		Spot33.addListener("click", () => {
            x = 33;
            if (Spot33.clickable){showModal();};
		});
        const Spot34 = new google.maps.Polygon({ paths: Coord34, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot34.setMap(map);
		Spot34.addListener("click", () => {
            x = 34;
            if (Spot34.clickable){showModal();};
		});
        const Spot35 = new google.maps.Polygon({ paths: Coord35, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot35.setMap(map);
		Spot35.addListener("click", () => {
            x = 35;
            if (Spot35.clickable){showModal();};
		});
        const Spot36 = new google.maps.Polygon({ paths: Coord36, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot36.setMap(map);
		Spot36.addListener("click", () => {
            x = 36;
            if (Spot36.clickable){showModal();};
		});
        const Spot37 = new google.maps.Polygon({ paths: Coord37, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot37.setMap(map);
		Spot37.addListener("click", () => {
            x = 37;
            if (Spot37.clickable){showModal();};
		});
        const Spot38 = new google.maps.Polygon({ paths: Coord38, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot38.setMap(map);
		Spot38.addListener("click", () => {
            x = 38;
            if (Spot38.clickable){showModal();};
		});
        const Spot39 = new google.maps.Polygon({ paths: Coord39, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot39.setMap(map);
		Spot39.addListener("click", () => {
            x = 39;
            if (Spot39.clickable){showModal();};
		});
        const Spot40 = new google.maps.Polygon({ paths: Coord40, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot40.setMap(map);
		Spot40.addListener("click", () => {
            x = 40;
            if (Spot40.clickable){showModal();};
        });
        const Spot41 = new google.maps.Polygon({ paths: Coord41, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot41.setMap(map);
		Spot41.addListener("click", () => {
            x = 41;
            if (Spot41.clickable){showModal();};
        });
        const Spot42 = new google.maps.Polygon({ paths: Coord42, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot42.setMap(map);
		Spot42.addListener("click", () => {
            x = 42;
            if (Spot42.clickable){showModal();};
        });
        const Spot43 = new google.maps.Polygon({ paths: Coord43, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot43.setMap(map);
		Spot43.addListener("click", () => {
            x = 43;
            if (Spot43.clickable){showModal();};
		});
        const Spot44 = new google.maps.Polygon({ paths: Coord44, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot44.setMap(map);
		Spot44.addListener("click", () => {
            x = 44;
            if (Spot44.clickable){showModal();};
		});
        const Spot45 = new google.maps.Polygon({ paths: Coord45, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot45.setMap(map);
		Spot45.addListener("click", () => {
            x = 45;
            if (Spot45.clickable){showModal();};
		});
        const Spot46 = new google.maps.Polygon({ paths: Coord46, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot46.setMap(map);
		Spot46.addListener("click", () => {
            x = 46;
            if (Spot46.clickable){showModal();};
		});
        const Spot47 = new google.maps.Polygon({ paths: Coord47, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot47.setMap(map);
		Spot47.addListener("click", () => {
            x = 47;
            if (Spot47.clickable){showModal();};
		});
        const Spot48 = new google.maps.Polygon({ paths: Coord48, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot48.setMap(map);
		Spot48.addListener("click", () => {
            x = 48;
            if (Spot48.clickable){showModal();};
		});
        const Spot49 = new google.maps.Polygon({ paths: Coord49, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot49.setMap(map);
		Spot49.addListener("click", () => {
            x = 49;
            if (Spot49.clickable){showModal();};
		});
        const Spot50 = new google.maps.Polygon({ paths: Coord50, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot50.setMap(map);
		Spot50.addListener("click", () => {
            x = 50;
            if (Spot50.clickable){showModal();};
        });
        const Spot51 = new google.maps.Polygon({ paths: Coord51, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot51.setMap(map);
		Spot51.addListener("click", () => {
            x = 51;
            if (Spot51.clickable){showModal();};
        });
        const Spot52 = new google.maps.Polygon({ paths: Coord52, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot52.setMap(map);
		Spot52.addListener("click", () => {
            x = 52;
            if (Spot52.clickable){showModal();};
        });
        const Spot53 = new google.maps.Polygon({ paths: Coord53, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot53.setMap(map);
		Spot53.addListener("click", () => {
            x = 53;
            if (Spot53.clickable){showModal();};
		});
        const Spot54 = new google.maps.Polygon({ paths: Coord54, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot54.setMap(map);
		Spot54.addListener("click", () => {
            x = 54;
            if (Spot54.clickable){showModal();};
		});
        const Spot55 = new google.maps.Polygon({ paths: Coord55, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot55.setMap(map);
		Spot55.addListener("click", () => {
            x = 55;
            if (Spot55.clickable){showModal();};
		});
        const Spot56 = new google.maps.Polygon({ paths: Coord56, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot56.setMap(map);
		Spot56.addListener("click", () => {
            x = 56;
            if (Spot56.clickable){showModal();};
		});
        const Spot57 = new google.maps.Polygon({ paths: Coord57, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot57.setMap(map);
		Spot57.addListener("click", () => {
            x = 57;
            if (Spot57.clickable){showModal();};
		});
        const Spot58 = new google.maps.Polygon({ paths: Coord58, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot58.setMap(map);
		Spot58.addListener("click", () => {
            x = 58;
            if (Spot58.clickable){showModal();};
		});
        const Spot59 = new google.maps.Polygon({ paths: Coord59, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot59.setMap(map);
		Spot59.addListener("click", () => {
            x = 59;
            if (Spot59.clickable){showModal();};
		});
        const Spot60 = new google.maps.Polygon({ paths: Coord60, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot60.setMap(map);
		Spot60.addListener("click", () => {
            x = 60;
            if (Spot60.clickable){showModal();};
        });
        const Spot61 = new google.maps.Polygon({ paths: Coord61, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot61.setMap(map);
		Spot61.addListener("click", () => {
            x = 61;
            if (Spot61.clickable){showModal();};
        });
        const Spot62 = new google.maps.Polygon({ paths: Coord62, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot62.setMap(map);
		Spot62.addListener("click", () => {
            x = 62;
            if (Spot62.clickable){showModal();};
        });
        const Spot63 = new google.maps.Polygon({ paths: Coord63, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot63.setMap(map);
		Spot63.addListener("click", () => {
            x = 63;
            if (Spot63.clickable){showModal();};
		});
        const Spot64 = new google.maps.Polygon({ paths: Coord64, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot64.setMap(map);
		Spot64.addListener("click", () => {
            x = 64;
            if (Spot64.clickable){showModal();};
		});
        const Spot65 = new google.maps.Polygon({ paths: Coord65, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot65.setMap(map);
		Spot65.addListener("click", () => {
            x = 65;
            if (Spot65.clickable){showModal();};
		});
        const Spot66 = new google.maps.Polygon({ paths: Coord66, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot66.setMap(map);
		Spot66.addListener("click", () => {
            x = 66;
            if (Spot66.clickable){showModal();};
		});
        const Spot67 = new google.maps.Polygon({ paths: Coord67, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot67.setMap(map);
		Spot67.addListener("click", () => {
            x = 67;
            if (Spot67.clickable){showModal();};
		});
        const Spot68 = new google.maps.Polygon({ paths: Coord68, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot68.setMap(map);
		Spot68.addListener("click", () => {
            x = 68;
            if (Spot68.clickable){showModal();};
		});
        const Spot69 = new google.maps.Polygon({ paths: Coord69, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot69.setMap(map);
		Spot69.addListener("click", () => {
            x = 69;
            if (Spot69.clickable){showModal();};
		});
        const Spot70 = new google.maps.Polygon({ paths: Coord70, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot70.setMap(map);
		Spot70.addListener("click", () => {
            x = 70;
            if (Spot70.clickable){showModal();};
        });
        const Spot71 = new google.maps.Polygon({ paths: Coord71, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot71.setMap(map);
		Spot71.addListener("click", () => {
            x = 71;
            if (Spot71.clickable){showModal();};
        });
        const Spot72 = new google.maps.Polygon({ paths: Coord72, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot72.setMap(map);
		Spot72.addListener("click", () => {
            x = 72;
            if (Spot72.clickable){showModal();};
        });
        const Spot73 = new google.maps.Polygon({ paths: Coord73, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot73.setMap(map);
		Spot73.addListener("click", () => {
            x = 73;
            if (Spot73.clickable){showModal();};
		});
        const Spot74 = new google.maps.Polygon({ paths: Coord74, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot74.setMap(map);
		Spot74.addListener("click", () => {
            x = 74;
            if (Spot74.clickable){showModal();};
		});
        const Spot75 = new google.maps.Polygon({ paths: Coord75, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot75.setMap(map);
		Spot75.addListener("click", () => {
            x = 75;
            if (Spot75.clickable){showModal();};
		});
        const Spot76 = new google.maps.Polygon({ paths: Coord76, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot76.setMap(map);
		Spot76.addListener("click", () => {
            x = 76;
            if (Spot76.clickable){showModal();};
		});
        const Spot77 = new google.maps.Polygon({ paths: Coord77, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot77.setMap(map);
		Spot77.addListener("click", () => {
            x = 77;
            if (Spot77.clickable){showModal();};
		});
        const Spot78 = new google.maps.Polygon({ paths: Coord78, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot78.setMap(map);
		Spot78.addListener("click", () => {
            x = 78;
            if (Spot78.clickable){showModal();};
		});
        const Spot79 = new google.maps.Polygon({ paths: Coord79, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot79.setMap(map);
		Spot79.addListener("click", () => {
            x = 79;
            if (Spot79.clickable){showModal();};
		});
        const Spot80 = new google.maps.Polygon({ paths: Coord80, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot80.setMap(map);
		Spot80.addListener("click", () => {
            x = 80;
            if (Spot80.clickable){showModal();};
        });
        const Spot81 = new google.maps.Polygon({ paths: Coord81, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot81.setMap(map);
		Spot81.addListener("click", () => {
            x = 81;
            if (Spot81.clickable){showModal();};
        });
        const Spot82 = new google.maps.Polygon({ paths: Coord82, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot82.setMap(map);
		Spot82.addListener("click", () => {
            x = 82;
            if (Spot82.clickable){showModal();};
        });
        const Spot83 = new google.maps.Polygon({ paths: Coord83, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot83.setMap(map);
		Spot83.addListener("click", () => {
            x = 83;
            if (Spot83.clickable){showModal();};
		});
        const Spot84 = new google.maps.Polygon({ paths: Coord84, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot84.setMap(map);
		Spot84.addListener("click", () => {
            x = 84;
            if (Spot84.clickable){showModal();};
		});
        const Spot85 = new google.maps.Polygon({ paths: Coord85, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot85.setMap(map);
		Spot85.addListener("click", () => {
            x = 85;
            if (Spot85.clickable){showModal();};
		});
        const Spot86 = new google.maps.Polygon({ paths: Coord86, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot86.setMap(map);
		Spot86.addListener("click", () => {
            x = 86;
            if (Spot86.clickable){showModal();};
		});
        const Spot87 = new google.maps.Polygon({ paths: Coord87, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot87.setMap(map);
		Spot87.addListener("click", () => {
            x = 87;
            if (Spot87.clickable){showModal();};
		});
        const Spot88 = new google.maps.Polygon({ paths: Coord88, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot88.setMap(map);
		Spot88.addListener("click", () => {
            x = 88;
            if (Spot88.clickable){showModal();};
		});
        const Spot89 = new google.maps.Polygon({ paths: Coord89, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot89.setMap(map);
		Spot89.addListener("click", () => {
            x = 89;
            if (Spot89.clickable){showModal();};
		});
        const Spot90 = new google.maps.Polygon({ paths: Coord90, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot90.setMap(map);
		Spot90.addListener("click", () => {
            x = 90;
            if (Spot90.clickable){showModal();};
        });
        const Spot91 = new google.maps.Polygon({ paths: Coord91, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot91.setMap(map);
		Spot91.addListener("click", () => {
            x = 91;
            if (Spot91.clickable){showModal();};
        });
        const Spot92 = new google.maps.Polygon({ paths: Coord92, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot92.setMap(map);
		Spot92.addListener("click", () => {
            x = 92;
            if (Spot92.clickable){showModal();};
        });
        const Spot93 = new google.maps.Polygon({ paths: Coord93, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot93.setMap(map);
		Spot93.addListener("click", () => {
            x = 93;
            if (Spot93.clickable){showModal();};
		});
        const Spot94 = new google.maps.Polygon({ paths: Coord94, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot94.setMap(map);
		Spot94.addListener("click", () => {
            x = 94;
            if (Spot94.clickable){showModal();};
		});
        const Spot95 = new google.maps.Polygon({ paths: Coord95, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot95.setMap(map);
		Spot95.addListener("click", () => {
            x = 95;
            if (Spot95.clickable){showModal();};
		});
        const Spot96 = new google.maps.Polygon({ paths: Coord96, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot96.setMap(map);
		Spot96.addListener("click", () => {
            x = 96;
            if (Spot96.clickable){showModal();};
		});
        const Spot97 = new google.maps.Polygon({ paths: Coord97, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot97.setMap(map);
		Spot97.addListener("click", () => {
            x = 97;
            if (Spot97.clickable){showModal();};
		});
        const Spot98 = new google.maps.Polygon({ paths: Coord98, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot98.setMap(map);
		Spot98.addListener("click", () => {
            x = 98;
            if (Spot98.clickable){showModal();};
		});
        const Spot99 = new google.maps.Polygon({ paths: Coord99, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot99.setMap(map);
		Spot99.addListener("click", () => {
            x = 99;
            if (Spot99.clickable){showModal();};
		});
        const Spot100 = new google.maps.Polygon({ paths: Coord100, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot100.setMap(map);
		Spot100.addListener("click", () => {
            x = 100;
            if (Spot100.clickable){showModal();};
		});
        const Spot101 = new google.maps.Polygon({ paths: Coord101, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot101.setMap(map);
		Spot101.addListener("click", () => {
			x = 101;
            if (Spot101.clickable){showModal();};
		});
        
        const Spot102 = new google.maps.Polygon({ paths: Coord102, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot102.setMap(map);
		Spot102.addListener("click", () => {
			x = 102;
            if (Spot102.clickable){showModal();};
		});
        const Spot103 = new google.maps.Polygon({ paths: Coord103, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot103.setMap(map);
		Spot103.addListener("click", () => {
            x = 103;
            if (Spot103.clickable){showModal();};
		});

        const Spot104 = new google.maps.Polygon({ paths: Coord104, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot104.setMap(map);
		Spot104.addListener("click", () => {
            x = 104;
            if (Spot104.clickable){showModal();};
		});
        
        const Spot105 = new google.maps.Polygon({ paths: Coord105, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot105.setMap(map);
		Spot105.addListener("click", () => {
            x = 105;
            if (Spot105.clickable){showModal();};
		});
        const Spot106 = new google.maps.Polygon({ paths: Coord106, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot106.setMap(map);
		Spot106.addListener("click", () => {
            x = 106;
            if (Spot106.clickable){showModal();};
		});
        const Spot107 = new google.maps.Polygon({ paths: Coord107, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot107.setMap(map);
		Spot107.addListener("click", () => {
            x = 107;
            if (Spot107.clickable){showModal();};
		});
        const Spot108 = new google.maps.Polygon({ paths: Coord108, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot108.setMap(map);
		Spot108.addListener("click", () => {
            x = 108;
            if (Spot108.clickable){showModal();};
		});
        const Spot109 = new google.maps.Polygon({ paths: Coord109, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot109.setMap(map);
		Spot109.addListener("click", () => {
            x = 109;
            if (Spot109.clickable){showModal();};
		});
        const Spot110 = new google.maps.Polygon({ paths: Coord110, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot110.setMap(map);
		Spot110.addListener("click", () => {
            x = 110;
            if (Spot110.clickable){showModal();};
		});
        const Spot111 = new google.maps.Polygon({ paths: Coord111, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot111.setMap(map); //Parked(Spot11);
		Spot111.addListener("click", () => {
            x = 111;
            if (Spot111.clickable){showModal();};
		});
        const Spot112 = new google.maps.Polygon({ paths: Coord112, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot112.setMap(map);
		Spot112.addListener("click", () => {
            x = 112;
            if (Spot112.clickable){showModal();};
		});
        const Spot113 = new google.maps.Polygon({ paths: Coord113, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot113.setMap(map);
		Spot113.addListener("click", () => {
            x = 113;
            if (Spot113.clickable){showModal();};
		});
        const Spot114 = new google.maps.Polygon({ paths: Coord114, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot114.setMap(map);
		Spot114.addListener("click", () => {
            x = 114;
            if (Spot114.clickable){showModal();};
		});
        const Spot115 = new google.maps.Polygon({ paths: Coord115, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot115.setMap(map);
		Spot115.addListener("click", () => {
            x = 115;
            if (Spot115.clickable){showModal();};
		});
        const Spot116 = new google.maps.Polygon({ paths: Coord116, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot116.setMap(map);
		Spot116.addListener("click", () => {
            x = 116;
            if (Spot116.clickable){showModal();};
		});
        const Spot117 = new google.maps.Polygon({ paths: Coord117, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot117.setMap(map);
		Spot117.addListener("click", () => {
            x = 117;
            if (Spot117.clickable){showModal();};
		});
        const Spot118 = new google.maps.Polygon({ paths: Coord118, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot118.setMap(map);
		Spot118.addListener("click", () => {
            x = 118;
            if (Spot118.clickable){showModal();};
		});
        const Spot119 = new google.maps.Polygon({ paths: Coord119, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot119.setMap(map);
		Spot119.addListener("click", () => {
            x = 119;
            if (Spot119.clickable){showModal();};
		});
        const Spot120 = new google.maps.Polygon({ paths: Coord120, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot120.setMap(map);
		Spot120.addListener("click", () => {
            x = 120;
            if (Spot120.clickable){showModal();};
		});
        const Spot121 = new google.maps.Polygon({ paths: Coord121, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot121.setMap(map);
		Spot121.addListener("click", () => {
            x = 121;
            if (Spot121.clickable){showModal();};
		});
        const Spot122 = new google.maps.Polygon({ paths: Coord122, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot122.setMap(map);
		Spot122.addListener("click", () => {
            x = 122;
            if (Spot122.clickable){showModal();};
		});
        const Spot123 = new google.maps.Polygon({ paths: Coord123, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot123.setMap(map);
		Spot123.addListener("click", () => {
            x = 123;
            if (Spot123.clickable){showModal();};
		});
        const Spot124 = new google.maps.Polygon({ paths: Coord124, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot124.setMap(map);
		Spot124.addListener("click", () => {
            x = 124;
            if (Spot124.clickable){showModal();};
		});
        const Spot125 = new google.maps.Polygon({ paths: Coord125, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot125.setMap(map);
		Spot125.addListener("click", () => {
            x = 125;
            if (Spot125.clickable){showModal();};
		});
        const Spot126 = new google.maps.Polygon({ paths: Coord126, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot126.setMap(map);
		Spot126.addListener("click", () => {
            x = 126;
            if (Spot126.clickable){showModal();};
		});
        const Spot127 = new google.maps.Polygon({ paths: Coord127, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot127.setMap(map);
		Spot127.addListener("click", () => {
            x = 127;
            if (Spot127.clickable){showModal();};
		});
        const Spot128 = new google.maps.Polygon({ paths: Coord128, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot128.setMap(map);
		Spot128.addListener("click", () => {
            x = 128;
            if (Spot128.clickable){showModal();};
		});
        const Spot129 = new google.maps.Polygon({ paths: Coord129, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot129.setMap(map);
		Spot129.addListener("click", () => {
            x = 129;
            if (Spot129.clickable){showModal();};
		});
        const Spot130 = new google.maps.Polygon({ paths: Coord130, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot130.setMap(map);
		Spot130.addListener("click", () => {
            x = 130;
            if (Spot130.clickable){showModal();};
        });
        const Spot131 = new google.maps.Polygon({ paths: Coord131, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot131.setMap(map);
		Spot131.addListener("click", () => {
            x = 131;
            if (Spot131.clickable){showModal();};
        });
        const Spot132 = new google.maps.Polygon({ paths: Coord132, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot132.setMap(map);
		Spot132.addListener("click", () => {
            x = 132;
            if (Spot132.clickable){showModal();};
        });
        const Spot133 = new google.maps.Polygon({ paths: Coord133, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot133.setMap(map);
		Spot133.addListener("click", () => {
            x = 133;
            if (Spot133.clickable){showModal();};
		});
        const Spot134 = new google.maps.Polygon({ paths: Coord134, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot134.setMap(map);
		Spot134.addListener("click", () => {
            x = 134;
            if (Spot134.clickable){showModal();};
		});
        const Spot135 = new google.maps.Polygon({ paths: Coord135, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot135.setMap(map);
		Spot135.addListener("click", () => {
            x = 135;
            if (Spot135.clickable){showModal();};
		});
        const Spot136 = new google.maps.Polygon({ paths: Coord136, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot136.setMap(map);
		Spot136.addListener("click", () => {
            x = 136;
            if (Spot136.clickable){showModal();};
		});
        const Spot137 = new google.maps.Polygon({ paths: Coord137, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot137.setMap(map);
		Spot137.addListener("click", () => {
            x = 137;
            if (Spot137.clickable){showModal();};
		});
        const Spot138 = new google.maps.Polygon({ paths: Coord138, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot138.setMap(map);
		Spot138.addListener("click", () => {
            x = 138;
            if (Spot138.clickable){showModal();};
		});
        const Spot139 = new google.maps.Polygon({ paths: Coord139, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot139.setMap(map);
		Spot139.addListener("click", () => {
            x = 139;
            if (Spot139.clickable){showModal();};
		});
        const Spot140 = new google.maps.Polygon({ paths: Coord140, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot140.setMap(map);
		Spot140.addListener("click", () => {
            x = 140;
            if (Spot140.clickable){showModal();};
        });
        const Spot141 = new google.maps.Polygon({ paths: Coord141, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot141.setMap(map);
		Spot141.addListener("click", () => {
            x = 141;
            if (Spot141.clickable){showModal();};
        });
        const Spot142 = new google.maps.Polygon({ paths: Coord142, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot142.setMap(map);
		Spot142.addListener("click", () => {
            x = 142;
            if (Spot142.clickable){showModal();};
        });
        const Spot143 = new google.maps.Polygon({ paths: Coord143, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot143.setMap(map);
		Spot143.addListener("click", () => {
            x = 143;
            if (Spot143.clickable){showModal();};
		});
        const Spot144 = new google.maps.Polygon({ paths: Coord144, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot144.setMap(map);
		Spot144.addListener("click", () => {
            x = 144;
            if (Spot144.clickable){showModal();};
		});
        const Spot145 = new google.maps.Polygon({ paths: Coord145, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot145.setMap(map);
		Spot145.addListener("click", () => {
            x = 145;
            if (Spot145.clickable){showModal();};
		});
        const Spot146 = new google.maps.Polygon({ paths: Coord146, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot146.setMap(map);
		Spot146.addListener("click", () => {
            x = 146;
            if (Spot146.clickable){showModal();};
		});
        const Spot147 = new google.maps.Polygon({ paths: Coord147, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot147.setMap(map);
		Spot147.addListener("click", () => {
            x = 147;
            if (Spot147.clickable){showModal();};
		});
        const Spot148 = new google.maps.Polygon({ paths: Coord148, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot148.setMap(map);
		Spot148.addListener("click", () => {
            x = 148;
            if (Spot148.clickable){showModal();};
		});
        const Spot149 = new google.maps.Polygon({ paths: Coord149, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot149.setMap(map);
		Spot149.addListener("click", () => {
            x = 149;
            if (Spot149.clickable){showModal();};
		});
        const Spot150 = new google.maps.Polygon({ paths: Coord150, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot150.setMap(map);
		Spot150.addListener("click", () => {
            x = 150;
            if (Spot150.clickable){showModal();};
        });
        const Spot151 = new google.maps.Polygon({ paths: Coord151, strokeColor: "#29589c", strokeOpacity: 0.8, strokeWeight: 1, fillColor: "#29589c", fillOpacity: 0.35, clickable: true, });
		Spot151.setMap(map);
		Spot151.addListener("click", () => {
            x = 151;
            if (Spot151.clickable){showModal();};
        });
	});
</script>

<style>
.full-screen {
    width: 100vw;
    height: 100vh;
}
</style>

<div class="full-screen" bind:this={container}></div>
<Modal show={$modal}>
</Modal>