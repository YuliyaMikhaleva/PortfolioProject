export function setOverflowHidden (pageYOffset:any) {
    document.documentElement.style.overflow = 'hidden';
    document.documentElement.style.position = 'fixed';
    document.documentElement.style.width = '100%';
    document.documentElement.style.top = '-' + pageYOffset + 'px';
    document.documentElement.style.scrollBehavior = 'unset';
}

export function setOverflowNo () {
    document.documentElement.style.removeProperty('overflow');
    document.documentElement.style.removeProperty('position');
    document.documentElement.style.removeProperty('width');
    document.documentElement.style.removeProperty('scrollBehavior');
}
