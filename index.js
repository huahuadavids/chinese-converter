var Buffer = require("buffer").Buffer,
    fs = require("fs");

var jianti = fs.readFileSync(__dirname + "/zh.txt", "utf8"),
    fanti = fs.readFileSync(__dirname + "/zh-tw.txt", "utf8");

var HanZi = Object.create(null);

/**
 * @简体转繁体
 * @param str
 * @returns {string}
 */
HanZi.s2t = function(str) {
  var ret = "", i, len, idx;
  str = str || this;
  for(i=0,len=str.length; i<len; i++) {
    idx = jianti.indexOf(str.charAt(i));
    ret += (idx === -1 ) ? str.charAt(i): fanti.charAt(idx);
  }
  return ret;
}

/**
 * @繁体转简体 
 * @param str
 * @returns {string}
 */
HanZi.t2s = function(str) {
  var ret = "", i, len, idx;
  str = str || this;
  for(i=0,len=str.length; i<len; i++) {
    idx = fanti.indexOf(str.charAt(i));
    ret += (idx === -1) ? str.charAt(i) : jianti.charAt(idx);
  }
  return ret;
}

HanZi.attach = function() {
  ["s2t", "t2s"].forEach(function(name, i) {
    if(!String.prototype[name]) {
      String.prototype[name] = SimpleBig[name];
    }
  });
}

module.exports = HanZi;