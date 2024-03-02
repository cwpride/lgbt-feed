Splitting();

/* ---------------------------------- */

/* Click to re-run */

var lr = document.querySelector('[data-splitting]');
window.addEventListener('click', () => {
    var newone = lr.cloneNode(true);
    lr.parentNode.replaceChild(newone, lr);
    lr = newone;
});

var w = c.width = window.innerWidth,
    h = c.height = window.innerHeight,
    ctx = c.getContext('2d'),

    opts = {

        chars: '1234567890ìqwertyuiopè+asdfghjklòàù<zxcvbnm,.-|!"£$%&/()=?^QWERTYUIOPé*ASDFGHJKLç°§>ZXCVBNM;:_[]@#€{}'.split(''), // every key in the italian keyboard layout. It sucks, we don't even have a backtick!
        font: '15px monospace',
        charSize: 17,
        lineHeight: 17,

        hueSpeed: 1,
        repaintAlpha: .04,

        lightsParXxY: .05
    },

    tick = 0;

ctx.font = opts.font;
ctx.fillStyle = '#111';
ctx.fillRect(0, 0, w, h);

function loop() {

    window.requestAnimationFrame(loop);

    tick += opts.hueSpeed;

    ctx.fillStyle = 'rgba(0,0,0,alp)'.replace('alp', opts.repaintAlpha);
    ctx.fillRect(0, 0, w, h);

    var endX = (w / opts.charSize + 1) | 0,
        endY = (h / opts.lineHeight + 1) | 0,
        sum = w + h,
        num = endX * endY * opts.lightsParXxY;

    for (var i = 0; i < num; ++i) {

        var x = ((Math.random() * endX) | 0) * opts.charSize,
            y = ((Math.random() * endY) | 0) * opts.lineHeight;

        ctx.fillStyle = 'hsl(hue,80%,50%)'.replace('hue', (x + y) / sum * 360 + tick);
        ctx.fillText(opts.chars[(Math.random() * opts.chars.length) | 0], x, y);
    }
}
loop();

window.addEventListener('resize', function() {
    var dpr = window.devicePixelRatio || 1;

    // Adjust canvas size
    w = c.width = window.innerWidth * dpr;
    h = c.height = window.innerHeight * dpr;

    // Scale all drawing operations by the dpr
    ctx.scale(dpr, dpr);

    w = c.width = window.innerWidth;
    h = c.height = window.innerHeight;
    ctx.fillStyle = '#111';
    ctx.fillRect(0, 0, w, h);
    ctx.font = opts.font;
})
