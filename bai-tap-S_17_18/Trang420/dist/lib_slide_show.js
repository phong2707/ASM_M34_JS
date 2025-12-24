let timer = null;
let running = true;
let speed = 2000;
const nodes = {
    image: null,
    caption: null
};
const img = {
    cache: [],
    counter: 0
};
function stopSlideShow() {
    if (timer !== null) {
        clearInterval(timer);
    }
}
function displayNextImage() {
    if (!nodes.image || !nodes.caption)
        return;
    img.counter = ++img.counter % img.cache.length;
    const image = img.cache[img.counter];
    nodes.image.src = image.src;
    nodes.image.alt = image.alt;
    nodes.caption.textContent = image.alt;
}
export function loadImages(slides) {
    for (const slide of slides) {
        const image = new Image();
        image.src = `images/${slide.href}`;
        image.alt = slide.title;
        img.cache.push(image);
    }
}
export function startSlideShow(image, caption) {
    nodes.image = image;
    nodes.caption = caption;
    displayNextImage();
    timer = window.setInterval(displayNextImage, speed);
}
export function getToggleHandler() {
    return (evt) => {
        const button = evt.currentTarget;
        if (running) {
            stopSlideShow();
        }
        else {
            startSlideShow(nodes.image, nodes.caption);
        }
        button.value = running ? "Resume" : "Pause";
        running = !running;
    };
}
