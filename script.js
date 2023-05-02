// Code created by W3ke
// W3KE TO MARKA SUKO

const delay = ms => new Promise(res => setTimeout(res, ms));


function go_down_1() {
    scrollBy(document.body.scrollHeight/3, 270)
}

async function animateTitle() {
    while (true) {
        let title = document.querySelector('title').innerHTML;
        let new_title = "";
        for (let i = 0; i < title.length; i++) {
            await delay(300)
            new_title = new_title+title[i];
            console.log(new_title)
            document.querySelector('title').innerHTML = new_title;
        }
        await delay(800)
    }
}
animateTitle();

window.onbeforeunload = async function () {
    window.scrollTo(0,0);
};


function scrollBy(distance, duration) {

    var initialY = document.body.scrollTop;
    var y = initialY + distance;
    var baseY = (initialY + y) * 0.5;
    var difference = initialY - baseY;
    var startTime = performance.now();

    function step() {
        var normalizedTime = (performance.now() - startTime) / duration;
        if (normalizedTime > 1) normalizedTime = 1;

        window.scrollTo(0, baseY + difference * Math.cos(normalizedTime * Math.PI));
        if (normalizedTime < 1) window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
}