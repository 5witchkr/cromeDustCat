import { writable } from "svelte/store";


export let miseState = writable(0);
export let chomiseState = writable(0);
export let success = writable(false);
export let loading = writable(true);

