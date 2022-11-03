import { App } from './lot7N.svelte';

const app = new App({
	props: {
		ready: false,
	}
});

window.initMap = function ready() {
	app.$set({ ready: true });
}

export default app;