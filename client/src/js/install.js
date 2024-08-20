// let deferredPrompt;
// console.log('deferredPrompt initialized', deferredPrompt);

const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    console.log('beforeinstallprompt event fired');
    event.preventDefault();
    window.deferredPrompt = event;
    console.log('deferredPrompt set:', window.deferredPrompt);
    butInstall.style.display = 'block';
});

// Click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    if (window.deferredPrompt !== undefined) {
        console.log('Prompting install...');
        window.deferredPrompt.prompt();
        const { outcome } = await window.deferredPrompt.userChoice;
        console.log(`User response to the install prompt: ${outcome}`);
        window.deferredPrompt = null;
        butInstall.style.display = 'none';
    } else {
        console.log('deferredPrompt is not defined at click time');
    }
});

// Handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('J.A.T.E was installed.');
});
