const c = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\runtime\\components\\error.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\forgotPassword.svelte"),
	() => import("..\\..\\src\\routes\\userReporting.svelte"),
	() => import("..\\..\\src\\routes\\parkinglots.svelte"),
	() => import("..\\..\\src\\routes\\profile.svelte"),
	() => import("..\\..\\src\\routes\\signup.svelte"),
	() => import("..\\..\\src\\routes\\login.svelte"),
	() => import("..\\..\\src\\routes\\lot2A.svelte"),
	() => import("..\\..\\src\\routes\\lot7N.svelte"),
	() => import("..\\..\\src\\routes\\lot3.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/forgotPassword.svelte
	[/^\/forgotPassword\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/userReporting.svelte
	[/^\/userReporting\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/parkinglots.svelte
	[/^\/parkinglots\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/profile.svelte
	[/^\/profile\/?$/, [c[0], c[6]], [c[1]]],

	// src/routes/signup.svelte
	[/^\/signup\/?$/, [c[0], c[7]], [c[1]]],

	// src/routes/login.svelte
	[/^\/login\/?$/, [c[0], c[8]], [c[1]]],

	// src/routes/lot2A.svelte
	[/^\/lot2A\/?$/, [c[0], c[9]], [c[1]]],

	// src/routes/lot7N.svelte
	[/^\/lot7N\/?$/, [c[0], c[10]], [c[1]]],

	// src/routes/lot3.svelte
	[/^\/lot3\/?$/, [c[0], c[11]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];