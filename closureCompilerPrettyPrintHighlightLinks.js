for(var b = document.getElementsByTagName("a"), c = b.length, d = [], i = 0;i < c;i++) {
  b[i].insertAdjacentHTML("afterbegin", '<span class="hl" style="background-color:yellow;font-size:18px">' + i + "</span>"), d[i] = b[i]
}
var e = [], g;
document.onkeydown = function(f) {
  if(27 == f.keyCode) {
    e = [], d = [], Array.prototype.forEach.call(document.querySelectorAll("span.hl"), function(a) {
      a.remove()
    }), g && window.clearTimeout(g)
  }else {
    e.push(f.keyCode);
    g && window.clearTimeout(g);
    var h = e.map(function(a) {
      return String.fromCharCode(a)
    });
    g = window.setTimeout(function() {
      e = [];
      var a = d[parseInt(h.join(""), 10)];
      a && a.click()
    }, 650)
  }
};
