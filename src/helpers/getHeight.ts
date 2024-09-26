export function getFullHeight () {
    console.log('window.innerHeight', window.innerHeight)
    document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`);
}
