export function scrollToY(ycord: number) {
    window.scrollTo({
        top: ycord,
        behavior: 'smooth'
    });
}
