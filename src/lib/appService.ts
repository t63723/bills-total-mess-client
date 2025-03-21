// Исправленный appService.ts
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type Page = 'home' | 'login' | 'register' | 'protected';

export const currentPage = writable<Page>('home');

export function navigateTo(page: Page) {
    currentPage.set(page);
}

let initialLoggedIn = false;
if (browser) {
    initialLoggedIn = !!localStorage.getItem('access_token');
}

export const isLoggedIn = writable<boolean>(initialLoggedIn);

export function setLoggedIn(value: boolean) {
    isLoggedIn.set(value);
    if (!value) {
        navigateTo('login');
    }
}
