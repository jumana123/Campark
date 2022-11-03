<script>
	let container;
	let map;
	let zoom = 19;
    let center = {lat: 40.711540, lng:-73.600837}; //40.715475,-73.602622
    
    import { onMount } from 'svelte';
    
	onMount(async () => {
		map = new google.maps.Map(container, {
            zoom,
            center,
		});
		const FirstCoords = [
			{ lat: 40.715576, lng: -73.602547 }, //40.715576,-73.602547
			{ lat: 40.715556, lng: -73.602536 }, //40.715556,-73.602536
			{ lat: 40.715573, lng: -73.602478 }, //40.715573,-73.602478
			{ lat: 40.715597, lng: -73.602490 }, //40.715597,-73.602490
		];
		const firstSpot = new google.maps.Polygon({
			paths: FirstCoords,
			strokeColor: "#FF0000",
			strokeOpacity: 0.8,
			strokeWeight: 1,
			fillColor: "#FF0000",
			fillOpacity: 0.35,
			clickable: true,
		});

		firstSpot.setMap(map);

		firstSpot.addListener("click", () => {
			map.setZoom(22);
			map.setCenter(firstSpot.getPosition());
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