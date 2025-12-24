
interface Slide {
    href: string;
    title: string;
}

interface Nodes {
    image: HTMLImageElement | null;
    caption: HTMLElement | null;
}

interface ImageCache {
    cache: HTMLImageElement[];
    counter: number;
}

let timer: number | null = null;
let running: boolean = true;
let speed: number = 2000;

const nodes: Nodes = {
    image: null,
    caption: null
};

const img: ImageCache = {
    cache: [],
    counter: 0
};

function stopSlideShow(): void {
    if (timer !== null) {
        clearInterval(timer);
    }
}

function displayNextImage(): void {
    if (!nodes.image || !nodes.caption) return;

    img.counter = ++img.counter % img.cache.length;
    const image = img.cache[img.counter];

    nodes.image.src = image.src;
    nodes.image.alt = image.alt;
    nodes.caption.textContent = image.alt;
}
export function loadImages(slides: Slide[]): void {
    for (const slide of slides) {
        const image = new Image();
        image.src = `images/${slide.href}`;
        image.alt = slide.title;
        img.cache.push(image);
    }
}
export function startSlideShow(
    image: HTMLImageElement,
    caption: HTMLElement
): void {
    nodes.image = image;
    nodes.caption = caption;

    displayNextImage();
    timer = window.setInterval(displayNextImage, speed);
}
export function getToggleHandler() {
    return (evt: Event) => {
        const button = evt.currentTarget as HTMLInputElement;

        if (running) {
            stopSlideShow();
        } else {
            startSlideShow(nodes.image!, nodes.caption!);
        }

        button.value = running ? "Resume" : "Pause";
        running = !running;
    };
}
