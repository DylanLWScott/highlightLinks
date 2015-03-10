var a = document.getElementsByTagName('a');
var aL = a.length,
    lM = [],
    total;
for (var i = 0; i < aL; i++) {
    a[i].insertAdjacentHTML('afterbegin', '<span class="hl" style="background-color:yellow;font-size:18px">' + i + '</span>');
    lM[i] = a[i];
}

var seq = [],
    timer;
document.onkeydown = function(e) {
    if (e.keyCode == 27) {
        seq = [];
        lM = [];
        Array.prototype.forEach.call(document.querySelectorAll('span.hl'), function(a) {
            a.remove()
        });
        if (timer) {
            window.clearTimeout(timer);
        };
        return;
    }
    seq.push(e.keyCode);
    if (timer) {
        window.clearTimeout(timer);
    }

    var total = seq.map(function(a) {
        return String.fromCharCode(a);
    });

    timer = window.setTimeout(function() {
        seq = [];
        var aa = lM[parseInt(total.join(''), 10)];
        if (aa) {
            aa.click();
        }
    }, 650);
}
