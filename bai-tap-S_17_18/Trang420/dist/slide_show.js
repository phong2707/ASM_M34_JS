import { $, } from "./lib_DOM.js";
import { loadImages, startSlideShow, getToggleHandler } from "./lib_slide_show.js";
document.addEventListener("DOMContentLoaded", () => {
    const slides = [
        { href: "https://res.klook.com/image/upload/w_750,h_469,c_fill,q_85/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/nabd3lsoifdkrmfifqrn.jpg", title: "Deer at Play" },
        { href: "https://www.k12digest.com/wp-content/uploads/2024/03/1-3-550x330.jpg", title: "The Big Horn" },
        { href: "bison.jpg", title: "Roaming Bison" }
    ];
    loadImages(slides);
    const image = $("#image");
    const caption = $("#caption");
    const button = $("#pause_resume");
    button.addEventListener("click", getToggleHandler());
    startSlideShow(image, caption);
});
