for(var a = document.getElementsByTagName("a"), b = a.length, c = [], i = 0;i < b;i++) {
  a[i].insertAdjacentHTML("afterbegin", '<span class="hl" style="background-color:yellow;font-size:18px">' + i + "</span>"), c[i] = a[i]
}
var d = [], g;
document.onkeydown = function(f) {
  if(27 == f.keyCode) {
    d = [], c = [], Array.prototype.forEach.call(document.querySelectorAll("span.hl"), function(e) {
      e.remove()
    }), g && window.clearTimeout(g)
  }else {
    d.push(f.keyCode);
    g && window.clearTimeout(g);
    var h = d.map(function(e) {
      return String.fromCharCode(e)
    });
    g = window.setTimeout(function() {
      d = [];
      c[parseInt(h.join(""), 10)].click()
    }, 650)
  }
};