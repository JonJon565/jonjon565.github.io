window.log = console.log;
if (!localStorage.logs) {
  (function () {
    Object.keys(console).forEach(function (iíìiíïì) {
      const iïìïííï = console[iíìiíïì];
      console[iíìiíïì] = () => {};
      console[iíìiíïì].toString = console[iíìiíïì].toString.bind(iïìïííï);
    });
  })();
}
var iiiíìîï = function () {
  var iiîiïíí = import.meta.url;
  return function (iiîíiii) {
    iiîíiii = iiîíiii || {};
    null;
    var iiîíiii = typeof iiîíiii !== "undefined" ? iiîíiii : {};
    var iïiïiìí;
    var iíìiiîì;
    iiîíiii.ready = new Promise(function (iíïïiiì, iíììiiî) {
      iïiïiìí = iíïïiiì;
      iíìiiîì = iíììiiî;
    });
    var iïîiìïï = {};
    var iìîìîií;
    for (iìîìîií in iiîíiii) {
      if (iiîíiii.hasOwnProperty(iìîìîií)) {
        iïîiìïï[iìîìîií] = iiîíiii[iìîìîií];
      }
    }
    var iiììîíí = [];
    function iiiïïïi(iîìïïìî, iiïìïìî) {
      throw iiïìïìî;
    }
    var iîiììií = true;
    var iîíiìïî = false;
    var iìííìïï = "";
    var iiíïìii;
    var iïîíîïí;
    var iiììiiî;
    var iiìïïiî;
    if (iîiììií || iîíiìïî) {
      if (iîíiìïî) {
        iìííìïï = self.location.href;
      } else if (typeof document !== "undefined" && document.currentScript) {
        iìííìïï = document.currentScript.src;
      }
      if (iiîiïíí) {
        iìííìïï = iiîiïíí;
      }
      if (iìííìïï.indexOf("blob:") !== 0) {
        iìííìïï = iìííìïï.substr(0, iìííìïï.lastIndexOf("/") + 1);
      } else {
        iìííìïï = "";
      }
      {
        iiíïìii = function (iíîíìïî) {
          var iìììíìï = new XMLHttpRequest();
          iìììíìï.open("GET", iíîíìïî, false);
          iìììíìï.send(null);
          return iìììíìï.responseText;
        };
        if (iîíiìïî) {
          iiììiiî = function (iïìììïî) {
            var iìîîïií = new XMLHttpRequest();
            iìîîïií.open("GET", iïìììïî, false);
            iìîîïií.responseType = "arraybuffer";
            iìîîïií.send(null);
            return new Uint8Array(iìîîïií.response);
          };
        }
        iïîíîïí = function (iìiïíîí, iìîïiîi, iìïîiîí) {
          var iïíìiií = new XMLHttpRequest();
          iïíìiií.open("GET", iìiïíîí, true);
          iïíìiií.responseType = "arraybuffer";
          iïíìiií.onload = function () {
            if (iïíìiií.status == 200 || iïíìiií.status == 0 && iïíìiií.response) {
              iìîïiîi(iïíìiií.response);
              return;
            }
            iìïîiîí();
          };
          iïíìiií.onerror = iìïîiîí;
          iïíìiií.send(null);
        };
      }
      iiìïïiî = function (iíïïîïi) {
        document.title = iíïïîïi;
      };
    } else {}
    var iììîïïí = console.log.bind(console);
    var iìïîîii = console.warn.bind(console);
    for (iìîìîií in iïîiìïï) {
      if (iïîiìïï.hasOwnProperty(iìîìîií)) {
        iiîíiii[iìîìîií] = iïîiìïï[iìîìîií];
      }
    }
    iïîiìïï = null;
    var iïîïíïì = 0;
    function iïïïíîï(iïíìîíí) {
      iïîïíïì = iïíìîíí;
    }
    var iîïiìïì;
    var iïiíïíì = true;
    if (typeof WebAssembly !== "object") {
      iïíîììì("no native wasm support detected");
    }
    var iìiìîìï;
    var iiìíîií = false;
    var iïîïììî;
    var iíîìiií = typeof TextDecoder !== "undefined" ? new TextDecoder("utf8") : undefined;
    function iiïíìîì(iíiíîíí, iíïíìîï, iìîïîîí) {
      var iìììiìî = iíïíìîï + iìîïîîí;
      var iíiíîiî = iíïíìîï;
      while (iíiíîíí[iíiíîiî] && !(iíiíîiî >= iìììiìî)) {
        ++iíiíîiî;
      }
      if (iíiíîiî - iíïíìîï > 16 && iíiíîíí.subarray && iíîìiií) {
        return iíîìiií.decode(iíiíîíí.subarray(iíïíìîï, iíiíîiî));
      } else {
        var iîiïíîï = "";
        while (iíïíìîï < iíiíîiî) {
          var iíìîîíi = iíiíîíí[iíïíìîï++];
          if (!(iíìîîíi & 128)) {
            iîiïíîï += String.fromCharCode(iíìîîíi);
            continue;
          }
          var iíïìïîì = iíiíîíí[iíïíìîï++] & 63;
          if ((iíìîîíi & 224) == 192) {
            iîiïíîï += String.fromCharCode((iíìîîíi & 31) << 6 | iíïìïîì);
            continue;
          }
          var iíiìîïi = iíiíîíí[iíïíìîï++] & 63;
          if ((iíìîîíi & 240) == 224) {
            iíìîîíi = (iíìîîíi & 15) << 12 | iíïìïîì << 6 | iíiìîïi;
          } else {
            iíìîîíi = (iíìîîíi & 7) << 18 | iíïìïîì << 12 | iíiìîïi << 6 | iíiíîíí[iíïíìîï++] & 63;
          }
          if (iíìîîíi < 65536) {
            iîiïíîï += String.fromCharCode(iíìîîíi);
          } else {
            var iîiïíií = iíìîîíi - 65536;
            iîiïíîï += String.fromCharCode(iîiïíií >> 10 | 55296, iîiïíií & 1023 | 56320);
          }
        }
      }
      return iîiïíîï;
    }
    function iíîîîiì(iïîîiïi, iïìîîìí) {
      if (iïîîiïi) {
        return iiïíìîì(iiìíïïî, iïîîiïi, iïìîîìí);
      } else {
        return "";
      }
    }
    function iììiìîï(iïïìîìï, iîìiîïî, iïìíìîï, iïììiîï) {
      if (!(iïììiîï > 0)) {
        return 0;
      }
      var iíïìiíî = iïìíìîï;
      var iììïîìï = iïìíìîï + iïììiîï - 1;
      for (var iiííïìï = 0; iiííïìï < iïïìîìï.length; ++iiííïìï) {
        var iíîíïiî = iïïìîìï.charCodeAt(iiííïìï);
        if (iíîíïiî >= 55296 && iíîíïiî <= 57343) {
          var iìíìïíí = iïïìîìï.charCodeAt(++iiííïìï);
          iíîíïiî = 65536 + ((iíîíïiî & 1023) << 10) | iìíìïíí & 1023;
        }
        if (iíîíïiî <= 127) {
          if (iïìíìîï >= iììïîìï) {
            break;
          }
          iîìiîïî[iïìíìîï++] = iíîíïiî;
        } else if (iíîíïiî <= 2047) {
          if (iïìíìîï + 1 >= iììïîìï) {
            break;
          }
          iîìiîïî[iïìíìîï++] = iíîíïiî >> 6 | 192;
          iîìiîïî[iïìíìîï++] = iíîíïiî & 63 | 128;
        } else if (iíîíïiî <= 65535) {
          if (iïìíìîï + 2 >= iììïîìï) {
            break;
          }
          iîìiîïî[iïìíìîï++] = iíîíïiî >> 12 | 224;
          iîìiîïî[iïìíìîï++] = iíîíïiî >> 6 & 63 | 128;
          iîìiîïî[iïìíìîï++] = iíîíïiî & 63 | 128;
        } else {
          if (iïìíìîï + 3 >= iììïîìï) {
            break;
          }
          iîìiîïî[iïìíìîï++] = iíîíïiî >> 18 | 240;
          iîìiîïî[iïìíìîï++] = iíîíïiî >> 12 & 63 | 128;
          iîìiîïî[iïìíìîï++] = iíîíïiî >> 6 & 63 | 128;
          iîìiîïî[iïìíìîï++] = iíîíïiî & 63 | 128;
        }
      }
      iîìiîïî[iïìíìîï] = 0;
      return iïìíìîï - iíïìiíî;
    }
    function iïiïiií(iîiïìiî, iìîïíîï, iïïìïìï) {
      return iììiìîï(iîiïìiî, iiìíïïî, iìîïíîï, iïïìïìï);
    }
    function iiíïïïî(iíííîìi) {
      var iìiíîiì = 0;
      for (var iïïïìïí = 0; iïïïìïí < iíííîìi.length; ++iïïïìïí) {
        var iïìïìiï = iíííîìi.charCodeAt(iïïïìïí);
        if (iïìïìiï >= 55296 && iïìïìiï <= 57343) {
          iïìïìiï = 65536 + ((iïìïìiï & 1023) << 10) | iíííîìi.charCodeAt(++iïïïìïí) & 1023;
        }
        if (iïìïìiï <= 127) {
          ++iìiíîiì;
        } else if (iïìïìiï <= 2047) {
          iìiíîiì += 2;
        } else if (iïìïìiï <= 65535) {
          iìiíîiì += 3;
        } else {
          iìiíîiì += 4;
        }
      }
      return iìiíîiì;
    }
    var iíìíìïí = typeof TextDecoder !== "undefined" ? new TextDecoder("utf-16le") : undefined;
    function iiíîìîì(iíîíîïí, iïíìiìï) {
      var iiíïîíí = iíîíîïí;
      var iïìîììì = iiíïîíí >> 1;
      var iîiiiîì = iïìîììì + iïíìiìï / 2;
      while (!(iïìîììì >= iîiiiîì) && iiiîííì[iïìîììì]) {
        ++iïìîììì;
      }
      iiíïîíí = iïìîììì << 1;
      if (iiíïîíí - iíîíîïí > 32 && iíìíìïí) {
        return iíìíìïí.decode(iiìíïïî.subarray(iíîíîïí, iiíïîíí));
      } else {
        var iììiîiî = "";
        for (var iîîïïîì = 0; !(iîîïïîì >= iïíìiìï / 2); ++iîîïïîì) {
          var iiiìíîì = iìíiíïî[iíîíîïí + iîîïïîì * 2 >> 1];
          if (iiiìíîì == 0) {
            break;
          }
          iììiîiî += String.fromCharCode(iiiìíîì);
        }
        return iììiîiî;
      }
    }
    function iiíîîìi(iiíïiiï, iìïîïïï, iîìíïîi = 2147483647) {
      if (iîìíïîi < 2) {
        return 0;
      }
      iîìíïîi -= 2;
      var iîìîíiì = iìïîïïï;
      var iìîïiíï = iîìíïîi < iiíïiiï.length * 2 ? iîìíïîi / 2 : iiíïiiï.length;
      for (var iiìîîïì = 0; iiìîîïì < iìîïiíï; ++iiìîîïì) {
        var iíïiîïì = iiíïiiï.charCodeAt(iiìîîïì);
        iìíiíïî[iìïîïïï >> 1] = iíïiîïì;
        iìïîïïï += 2;
      }
      iìíiíïî[iìïîïïï >> 1] = 0;
      return iìïîïïï - iîìîíiì;
    }
    function iíïíiìi(iïiiìiî) {
      return iïiiìiî.length * 2;
    }
    function iïìíìïï(iïiïìií, iîiïìïí) {
      var iiîïìií = 0;
      var iíîîîìï = "";
      while (!(iiîïìií >= iîiïìïí / 4)) {
        var iïíïïìî = iííîìïî[iïiïìií + iiîïìií * 4 >> 2];
        if (iïíïïìî == 0) {
          break;
        }
        ++iiîïìií;
        if (iïíïïìî >= 65536) {
          var iîìïíîî = iïíïïìî - 65536;
          iíîîîìï += String.fromCharCode(iîìïíîî >> 10 | 55296, iîìïíîî & 1023 | 56320);
        } else {
          iíîîîìï += String.fromCharCode(iïíïïìî);
        }
      }
      return iíîîîìï;
    }
    function iiíîíîî(iiïìiíì, iïïíiïï, iíïìïíï = 2147483647) {
      if (iíïìïíï < 4) {
        return 0;
      }
      var iììïîíï = iïïíiïï;
      var iíîíïìî = iììïîíï + iíïìïíï - 4;
      for (var iïïiiìi = 0; iïïiiìi < iiïìiíì.length; ++iïïiiìi) {
        var iíìïiiï = iiïìiíì.charCodeAt(iïïiiìi);
        if (iíìïiiï >= 55296 && iíìïiiï <= 57343) {
          var iììiìií = iiïìiíì.charCodeAt(++iïïiiìi);
          iíìïiiï = 65536 + ((iíìïiiï & 1023) << 10) | iììiìií & 1023;
        }
        iííîìïî[iïïíiïï >> 2] = iíìïiiï;
        iïïíiïï += 4;
        if (iïïíiïï + 4 > iíîíïìî) {
          break;
        }
      }
      iííîìïî[iïïíiïï >> 2] = 0;
      return iïïíiïï - iììïîíï;
    }
    function iïîïîïí(iìiíìíí) {
      var iîìîìîï = 0;
      for (var iïìïïiì = 0; iïìïïiì < iìiíìíí.length; ++iïìïïiì) {
        var iîiíïii = iìiíìíí.charCodeAt(iïìïïiì);
        if (iîiíïii >= 55296 && iîiíïii <= 57343) {
          ++iïìïïiì;
        }
        iîìîìîï += 4;
      }
      return iîìîìîï;
    }
    function iìiiìïì(iíìîiii, iîííïií) {
      if (iíìîiii % iîííïií > 0) {
        iíìîiii += iîííïií - iíìîiii % iîííïií;
      }
      return iíìîiii;
    }
    var iîìíîîi;
    var iìiiîìî;
    var iiìíïïî;
    var iìíiíïî;
    var iiiîííì;
    var iííîìïî;
    var iìîîïîí;
    var iíïîíìì;
    var iîïìiïì;
    function iìïiìii(iïîìîïï) {
      iîìíîîi = iïîìîïï;
      iiîíiii.HEAP8 = iìiiîìî = new Int8Array(iïîìîïï);
      iiîíiii.HEAP16 = iìíiíïî = new Int16Array(iïîìîïï);
      iiîíiii.HEAP32 = iííîìïî = new Int32Array(iïîìîïï);
      iiîíiii.HEAPU8 = iiìíïïî = new Uint8Array(iïîìîïï);
      iiîíiii.HEAPU16 = iiiîííì = new Uint16Array(iïîìîïï);
      iiîíiii.HEAPU32 = iìîîïîí = new Uint32Array(iïîìîïï);
      iiîíiii.HEAPF32 = iíïîíìì = new Float32Array(iïîìîïï);
      iiîíiii.HEAPF64 = iîïìiïì = new Float64Array(iïîìîïï);
    }
    var iîiîiîï;
    var iîïîíiì = [];
    var iîïìîîï = [];
    var iîíiiïì = [];
    var iïíïìíí = [];
    var iîìiîíí = false;
    var iïîîiìï = false;
    function iiiííii() {
      iîííiíï(iîïîíiì);
    }
    function iíîïîií() {
      iîìiîíí = true;
      iîííiíï(iîïìîîï);
    }
    function iíiííìì() {
      iîííiíï(iîíiiïì);
    }
    function iíîííîi() {
      iïîîiìï = true;
    }
    function iìíììiì() {
      iîííiíï(iïíïìíí);
    }
    function iïîiiïì(iìííìîi) {
      iîïìîîï.unshift(iìííìîi);
    }
    var iííììïì = 0;
    var iíîííìí = null;
    var iìiíiîi = null;
    function iíïíïìí(iíîiíîî) {
      iííììïì++;
    }
    function iîíîíïî(iìììiíì) {
      iííììïì--;
      if (iííììïì == 0) {
        if (iíîííìí !== null) {
          clearInterval(iíîííìí);
          iíîííìí = null;
        }
        if (iìiíiîi) {
          var iiìiíiî = iìiíiîi;
          iìiíiîi = null;
          iiìiíiî();
        }
      }
    }
    iiîíiii.preloadedImages = {};
    iiîíiii.preloadedAudios = {};
    function iïíîììì(iiîïïíî) {
      iiîïïíî += "";
      iìïîîii(iiîïïíî);
      iiìíîií = true;
      iïîïììî = 1;
      iiîïïíî = "abort(" + iiîïïíî + "). Build with -s ASSERTIONS=1 for more info.";
      var iïiíiii = new WebAssembly.RuntimeError(iiîïïíî);
      iíìiiîì(iïiíiii);
      throw iïiíiii;
    }
    var iïïiíîi = "data:application/octet-stream;base64,";
    function iîîiíìì(iîïïîíï) {
      return iîïïîíï.startsWith(iïïiíîi);
    }
    var iîîiïïï = new URL("./loader-gMjrc.wasm?t=1749128135436", import.meta.url).toString();
    function iïïìïiï(iiîïîíì) {
      try {
        if (iiîïîíì == iîîiïïï && iîïiìïì) {
          return new Uint8Array(iîïiìïì);
        }
        if (iiììiiî) {
          return iiììiiî(iiîïîíì);
        } else {
          throw "both async and sync fetching of the wasm failed";
        }
      } catch (iïîîííì) {
        iïíîììì(iïîîííì);
      }
    }
    function iïîìíïï() {
      if (!iîïiìïì && (iîiììií || iîíiìïî)) {
        if (typeof fetch === "function") {
          return fetch(iîîiïïï, {
            credentials: "same-origin"
          }).then(function (iîìïiîî) {
            if (!iîìïiîî.ok) {
              throw "failed to load wasm binary file at '" + iîîiïïï + "'";
            }
            return iîìïiîî.arrayBuffer();
          }).catch(function () {
            return iïïìïiï(iîîiïïï);
          });
        }
      }
      return Promise.resolve().then(function () {
        return iïïìïiï(iîîiïïï);
      });
    }
    function iiîîíìi() {
      var iïíìíìî = {
        a: iiîïïìì
      };
      function iïííiìi(iiïíiíì, iiìîïìî) {
        var iïìíïii = iiïíiíì.exports;
        iiîíiii.asm = iïìíïii;
        iìiìîìï = iiîíiii.asm.S;
        iìïiìii(iìiìîìï.buffer);
        iîiîiîï = iiîíiii.asm.U;
        iïîiiïì(iiîíiii.asm.T);
        iîíîíïî("wasm-instantiate");
      }
      iíïíïìí("wasm-instantiate");
      function iïíiìïî(iìïïíïi) {
        iïííiìi(iìïïíïi.instance);
      }
      function iìïíiîì(iíìiîîî) {
        return iïîìíïï().then(function (iïíìïíï) {
          var iíîîìiï = WebAssembly.instantiate(iïíìïíï, iïíìíìî);
          return iíîîìiï;
        }).then(iíìiîîî, function (iííìïíi) {
          iìïîîii("failed to asynchronously prepare wasm: " + iííìïíi);
          iïíîììì(iííìïíi);
        });
      }
      function iiïiíìî() {
        if (!iîïiìïì && typeof WebAssembly.instantiateStreaming === "function" && !iîîiíìì(iîîiïïï) && typeof fetch === "function") {
          return fetch(iîîiïïï, {
            credentials: "same-origin"
          }).then(function (iîíîïíï) {
            var iiiiíìi = WebAssembly.instantiateStreaming(iîíîïíï, iïíìíìî);
            return iiiiíìi.then(iïíiìïî, function (iïïiíïi) {
              iìïîîii("wasm streaming compile failed: " + iïïiíïi);
              iìïîîii("falling back to ArrayBuffer instantiation");
              return iìïíiîì(iïíiìïî);
            });
          });
        } else {
          return iìïíiîì(iïíiìïî);
        }
      }
      if (iiîíiii.instantiateWasm) {
        try {
          var iìíííîì = iiîíiii.instantiateWasm(iïíìíìî, iïííiìi);
          return iìíííîì;
        } catch (iïìïìîì) {
          iìïîîii("Module.instantiateWasm callback failed with error: " + iïìïìîì);
          return false;
        }
      }
      iiïiíìî().catch(iíìiiîì);
      return {};
    }
    var iiïíííí = {
      138468: function () {
        delete document.getElementById;
      },
      138504: function (iiîìíii) {
        document.getElementById("loadingBg1").innerHTML += iíîîîiì(iiîìíii);
      },
      138577: function () {
        delete document.getElementById;
      },
      138613: function () {
        delete Element.prototype.appendChild;
      },
      138653: function () {
        try {
          return iiîíiii.__Z01dynCall_fifjv();
        } catch (iiîìiïí) {
          return iiîíiii.__Z01dynCall_fiffv(iiîìiïí);
        }
      },
      138752: function (iïiíìïi) {
        let iíìíïîí = iïiíìïi;
        iíìíïîí = iíìíïîí + 123;
        return iíìíïîí;
      },
      138811: function (iìîìîïì) {
        let iïìïîìi = iìîìîïì;
        iïìïîìi = iïìïîìi - 456;
        return iïìïîìi;
      },
      138870: function () {
        return 8;
      },
      138884: function (iìiïíiî) {
        let iíìîííí = iìiïíiî;
        iíìîííí = iíìîííí ^ 22136;
        return iíìîííí;
      },
      138946: function (iíííiïí) {
        let iîíïíîi = iíííiïí;
        iîíïíîi = iîíïíîi ^ 4660;
        return iîíïíîi;
      },
      139008: function () {
        return 10;
      }
    };
    function iîííiíï(iìîiïíï) {
      while (iìîiïíï.length > 0) {
        var iíìiiíí = iìîiïíï.shift();
        if (typeof iíìiiíí == "function") {
          iíìiiíí(iiîíiii);
          continue;
        }
        var iïîíiîï = iíìiiíí.func;
        if (typeof iïîíiîï === "number") {
          if (iíìiiíí.arg === undefined) {
            iîiîiîï.get(iïîíiîï)();
          } else {
            iîiîiîï.get(iïîíiîï)(iíìiiíí.arg);
          }
        } else {
          iïîíiîï(iíìiiíí.arg === undefined ? null : iíìiiíí.arg);
        }
      }
    }
    var iiiíiíï = 0;
    function iiïiíîì() {
      return iïiíïíì || iiiíiíï > 0;
    }
    var iíîïîíi = {
      DESTRUCTOR_OFFSET: 0,
      REFCOUNT_OFFSET: 4,
      TYPE_OFFSET: 8,
      CAUGHT_OFFSET: 12,
      RETHROWN_OFFSET: 13,
      SIZE: 16
    };
    function iïììììì(iïîíîíî) {
      return iíiììií(iïîíîíî + iíîïîíi.SIZE) + iíîïîíi.SIZE;
    }
    function iîîíïìì(iîìiiïï) {
      this.excPtr = iîìiiïï;
      this.ptr = iîìiiïï - iíîïîíi.SIZE;
      this.set_type = function (iiiíìiî) {
        iííîìïî[this.ptr + iíîïîíi.TYPE_OFFSET >> 2] = iiiíìiî;
      };
      this.get_type = function () {
        return iííîìïî[this.ptr + iíîïîíi.TYPE_OFFSET >> 2];
      };
      this.set_destructor = function (iíïìïii) {
        iííîìïî[this.ptr + iíîïîíi.DESTRUCTOR_OFFSET >> 2] = iíïìïii;
      };
      this.get_destructor = function () {
        return iííîìïî[this.ptr + iíîïîíi.DESTRUCTOR_OFFSET >> 2];
      };
      this.set_refcount = function (iîìíïîì) {
        iííîìïî[this.ptr + iíîïîíi.REFCOUNT_OFFSET >> 2] = iîìíïîì;
      };
      this.set_caught = function (iïìiîïï) {
        iïìiîïï = iïìiîïï ? 1 : 0;
        iìiiîìî[this.ptr + iíîïîíi.CAUGHT_OFFSET >> 0] = iïìiîïï;
      };
      this.get_caught = function () {
        return iìiiîìî[this.ptr + iíîïîíi.CAUGHT_OFFSET >> 0] != 0;
      };
      this.set_rethrown = function (iïïìiii) {
        iïïìiii = iïïìiii ? 1 : 0;
        iìiiîìî[this.ptr + iíîïîíi.RETHROWN_OFFSET >> 0] = iïïìiii;
      };
      this.get_rethrown = function () {
        return iìiiîìî[this.ptr + iíîïîíi.RETHROWN_OFFSET >> 0] != 0;
      };
      this.init = function (iìiîîíî, iiíîiiî) {
        this.set_type(iìiîîíî);
        this.set_destructor(iiíîiiî);
        this.set_refcount(0);
        this.set_caught(false);
        this.set_rethrown(false);
      };
      this.add_ref = function () {
        var iîíiìiï = iííîìïî[this.ptr + iíîïîíi.REFCOUNT_OFFSET >> 2];
        iííîìïî[this.ptr + iíîïîíi.REFCOUNT_OFFSET >> 2] = iîíiìiï + 1;
      };
      this.release_ref = function () {
        var iîiíiïi = iííîìïî[this.ptr + iíîïîíi.REFCOUNT_OFFSET >> 2];
        iííîìïî[this.ptr + iíîïîíi.REFCOUNT_OFFSET >> 2] = iîiíiïi - 1;
        return iîiíiïi === 1;
      };
    }
    var iiíîîìî = 0;
    var iïiìîiî = 0;
    function iiíìîìî(iìïìîìì, iïiîiïî, iïiiîií) {
      var iíìiiiî = new iîîíïìì(iìïìîìì);
      iíìiiiî.init(iïiîiïî, iïiiîií);
      iiíîîìî = iìïìîìì;
      iïiìîiî++;
      throw iìïìîìì;
    }
    function iïíiïîì(iïîîíìï, iïîìíií, iîïíîíî, iììiiïï, iíìïiìí) {}
    function iíïìïiï(iìïíìií) {
      switch (iìïíìií) {
        case 1:
          return 0;
        case 2:
          return 1;
        case 4:
          return 2;
        case 8:
          return 3;
        default:
          throw new TypeError("Unknown type size: " + iìïíìií);
      }
    }
    function iìììíïí() {
      var iíîîiii = new Array(256);
      for (var iiiîîìí = 0; iiiîîìí < 256; ++iiiîîìí) {
        iíîîiii[iiiîîìí] = String.fromCharCode(iiiîîìí);
      }
      iïíîïìi = iíîîiii;
    }
    var iïíîïìi = undefined;
    function iiiïìïï(iïïííiì) {
      var iìîìïìï = "";
      var iìííìïî = iïïííiì;
      while (iiìíïïî[iìííìïî]) {
        iìîìïìï += iïíîïìi[iiìíïïî[iìííìïî++]];
      }
      return iìîìïìï;
    }
    var iïïíiîï = {};
    var iïíïíii = {};
    var iiïîïíï = {};
    var iïiîîìì = 48;
    var iîîíïïí = 57;
    function iïíiiîí(iîiïîïï) {
      if (iîiïîïï === undefined) {
        return "_unknown";
      }
      iîiïîïï = iîiïîïï.replace(/[^a-zA-Z0-9_]/g, "$");
      var iíîîîii = iîiïîïï.charCodeAt(0);
      if (iíîîîii >= iïiîîìì && iíîîîii <= iîîíïïí) {
        return "_" + iîiïîïï;
      } else {
        return iîiïîïï;
      }
    }
    function iîîiììi(iìíiîïï, iïiîíii) {
      iìíiîïï = iïíiiîí(iìíiîïï);
      return new Function("body", "return function " + iìíiîïï + "() {\n    \"use strict\";    return body.apply(this, arguments);\n};\n")(iïiîíii);
    }
    function iîiïîìî(iìîìïîî, iíììíìí) {
      var iììïiîí = iîîiììi(iíììíìí, function (iïiïïií) {
        this.name = iíììíìí;
        this.message = iïiïïií;
        var iïiïïíî = new Error(iïiïïií).stack;
        if (iïiïïíî !== undefined) {
          this.stack = this.toString() + "\n" + iïiïïíî.replace(/^Error(:[^\n]*)?\n/, "");
        }
      });
      iììïiîí.prototype = Object.create(iìîìïîî.prototype);
      iììïiîí.prototype.constructor = iììïiîí;
      iììïiîí.prototype.toString = function () {
        if (this.message === undefined) {
          return this.name;
        } else {
          return this.name + ": " + this.message;
        }
      };
      return iììïiîí;
    }
    var iîìïiïí = undefined;
    function iiììïii(iììîíìï) {
      throw new iîìïiïí(iììîíìï);
    }
    var iíïíííî = undefined;
    function iìïìïìi(iiîîîìì) {
      throw new iíïíííî(iiîîîìì);
    }
    function iìiíìîí(iìîíiìì, iiîïïîì, iíìïïïî) {
      iìîíiìì.forEach(function (iiîíiìï) {
        iiïîïíï[iiîíiìï] = iiîïïîì;
      });
      function iiìîïïì(iîiìíìî) {
        var iììîîíì = iíìïïïî(iîiìíìî);
        if (iììîîíì.length !== iìîíiìì.length) {
          iìïìïìi("Mismatched type converter count");
        }
        for (var iíïîîiî = 0; iíïîîiî < iìîíiìì.length; ++iíïîîiî) {
          iîïiiïî(iìîíiìì[iíïîîiî], iììîîíì[iíïîîiî]);
        }
      }
      var iííïíìì = new Array(iiîïïîì.length);
      var iììîìïî = [];
      var iïííìíî = 0;
      iiîïïîì.forEach(function (iìïíîìì, iiïìîïî) {
        if (iïíïíii.hasOwnProperty(iìïíîìì)) {
          iííïíìì[iiïìîïî] = iïíïíii[iìïíîìì];
        } else {
          iììîìïî.push(iìïíîìì);
          if (!iïïíiîï.hasOwnProperty(iìïíîìì)) {
            iïïíiîï[iìïíîìì] = [];
          }
          iïïíiîï[iìïíîìì].push(function () {
            iííïíìì[iiïìîïî] = iïíïíii[iìïíîìì];
            ++iïííìíî;
            if (iïííìíî === iììîìïî.length) {
              iiìîïïì(iííïíìì);
            }
          });
        }
      });
      if (iììîìïî.length === 0) {
        iiìîïïì(iííïíìì);
      }
    }
    function iîïiiïî(iîiííïï, iìiîîìî, iïiîïïì) {
      iïiîïïì = iïiîïïì || {};
      if (!("argPackAdvance" in iìiîîìî)) {
        throw new TypeError("registerType registeredInstance requires argPackAdvance");
      }
      var iïïíííï = iìiîîìî.name;
      if (!iîiííïï) {
        iiììïii("type \"" + iïïíííï + "\" must have a positive integer typeid pointer");
      }
      if (iïíïíii.hasOwnProperty(iîiííïï)) {
        if (iïiîïïì.ignoreDuplicateRegistrations) {
          return;
        } else {
          iiììïii("Cannot register type '" + iïïíííï + "' twice");
        }
      }
      iïíïíii[iîiííïï] = iìiîîìî;
      delete iiïîïíï[iîiííïï];
      if (iïïíiîï.hasOwnProperty(iîiííïï)) {
        var iiíïìíi = iïïíiîï[iîiííïï];
        delete iïïíiîï[iîiííïï];
        iiíïìíi.forEach(function (iïíîîîì) {
          iïíîîîì();
        });
      }
    }
    function iîïîíìï(iíiïìiï, iíîïïii, iíïìiìî, iííîiíì, iîìiiií) {
      var iììiíîï = iíïìïiï(iíïìiìî);
      iíîïïii = iiiïìïï(iíîïïii);
      iîïiiïî(iíiïìiï, {
        name: iíîïïii,
        fromWireType: function (iïíïíïì) {
          return !!iïíïíïì;
        },
        toWireType: function (iíïiíìí, iïiïíii) {
          if (iïiïíii) {
            return iííîiíì;
          } else {
            return iîìiiií;
          }
        },
        argPackAdvance: 8,
        readValueFromPointer: function (iiíîiìï) {
          var iïiîííí;
          if (iíïìiìî === 1) {
            iïiîííí = iìiiîìî;
          } else if (iíïìiìî === 2) {
            iïiîííí = iìíiíïî;
          } else if (iíïìiìî === 4) {
            iïiîííí = iííîìïî;
          } else {
            throw new TypeError("Unknown boolean type size: " + iíîïïii);
          }
          return this.fromWireType(iïiîííí[iiíîiìï >> iììiíîï]);
        },
        destructorFunction: null
      });
    }
    var iîïiïíi = [];
    var iîïïîîì = [{}, {
      value: undefined
    }, {
      value: null
    }, {
      value: true
    }, {
      value: false
    }];
    function iìííiìì(iiîïîìí) {
      if (iiîïîìí > 4 && --iîïïîîì[iiîïîìí].refcount === 0) {
        iîïïîîì[iiîïîìí] = undefined;
        iîïiïíi.push(iiîïîìí);
      }
    }
    function iïíiiíï() {
      var iïïììîì = 0;
      for (var iïïìíiï = 5; iïïìíiï < iîïïîîì.length; ++iïïìíiï) {
        if (iîïïîîì[iïïìíiï] !== undefined) {
          ++iïïììîì;
        }
      }
      return iïïììîì;
    }
    function iíîïiiì() {
      for (var iìiïìïí = 5; iìiïìïí < iîïïîîì.length; ++iìiïìïí) {
        if (iîïïîîì[iìiïìïí] !== undefined) {
          return iîïïîîì[iìiïìïí];
        }
      }
      return null;
    }
    function iííîìîi() {
      iiîíiii.count_emval_handles = iïíiiíï;
      iiîíiii.get_first_emval = iíîïiiì;
    }
    function iiîîiìï(iîíìîìì) {
      switch (iîíìîìì) {
        case undefined:
          {
            return 1;
          }
        case null:
          {
            return 2;
          }
        case true:
          {
            return 3;
          }
        case false:
          {
            return 4;
          }
        default:
          {
            var iïîiîíì = iîïiïíi.length ? iîïiïíi.pop() : iîïïîîì.length;
            iîïïîîì[iïîiîíì] = {
              refcount: 1,
              value: iîíìîìì
            };
            return iïîiîíì;
          }
      }
    }
    function iiîìiíi(iîíìiîî) {
      return this.fromWireType(iìîîïîí[iîíìiîî >> 2]);
    }
    function iìïìîìî(iîiïíiî, iíïiïìi) {
      iíïiïìi = iiiïìïï(iíïiïìi);
      iîïiiïî(iîiïíiî, {
        name: iíïiïìi,
        fromWireType: function (iïïîììì) {
          var iiïìiïí = iîïïîîì[iïïîììì].value;
          iìííiìì(iïïîììì);
          return iiïìiïí;
        },
        toWireType: function (iîïîìîï, iîîìíïï) {
          return iiîîiìï(iîîìíïï);
        },
        argPackAdvance: 8,
        readValueFromPointer: iiîìiíi,
        destructorFunction: null
      });
    }
    function iîìiìïi(iìiíiií) {
      if (iìiíiií === null) {
        return "null";
      }
      var iíiîîiì = typeof iìiíiií;
      if (iíiîîiì === "object" || iíiîîiì === "array" || iíiîîiì === "function") {
        return iìiíiií.toString();
      } else {
        return "" + iìiíiií;
      }
    }
    function iiïiìïî(iiîïiiï, iíîïìïí) {
      switch (iíîïìïí) {
        case 2:
          return function (iiïiìîí) {
            return this.fromWireType(iíïîíìì[iiïiìîí >> 2]);
          };
        case 3:
          return function (iïïîìïì) {
            return this.fromWireType(iîïìiïì[iïïîìïì >> 3]);
          };
        default:
          throw new TypeError("Unknown float type: " + iiîïiiï);
      }
    }
    function iìiiïíï(iììíííi, iiìíííí, iïîïìiï) {
      var iììïìîî = iíïìïiï(iïîïìiï);
      iiìíííí = iiiïìïï(iiìíííí);
      iîïiiïî(iììíííi, {
        name: iiìíííí,
        fromWireType: function (iíiíîîì) {
          return iíiíîîì;
        },
        toWireType: function (iiíiììí, iiiîïiî) {
          if (typeof iiiîïiî !== "number" && typeof iiiîïiî !== "boolean") {
            throw new TypeError("Cannot convert \"" + iîìiìïi(iiiîïiî) + "\" to " + this.name);
          }
          return iiiîïiî;
        },
        argPackAdvance: 8,
        readValueFromPointer: iiïiìïî(iiìíííí, iììïìîî),
        destructorFunction: null
      });
    }
    function iìiíîìi(iïîïíií, iïiïîii) {
      if (!(iïîïíií instanceof Function)) {
        throw new TypeError("new_ called with constructor type " + typeof iïîïíií + " which is not a function");
      }
      var iïiïïiî = iîîiììi(iïîïíií.name || "unknownFunctionName", function () {});
      iïiïïiî.prototype = iïîïíií.prototype;
      var iììíîìî = new iïiïïiî();
      var iiíïìíî = iïîïíií.apply(iììíîìî, iïiïîii);
      if (iiíïìíî instanceof Object) {
        return iiíïìíî;
      } else {
        return iììíîìî;
      }
    }
    function iïìïííì(iiìíìîi) {
      while (iiìíìîi.length) {
        var iïììííí = iiìíìîi.pop();
        var iiiiiîî = iiìíìîi.pop();
        iiiiiîî(iïììííí);
      }
    }
    function iííiîiï(iíììììî, iíiììíí, iiìíìîì, iiïìîîî, iîïïïìí) {
      var iiìiìîí = iíiììíí.length;
      if (iiìiìîí < 2) {
        iiììïii("argTypes array size mismatch! Must at least get return value and 'this' types!");
      }
      var iiíïììî = iíiììíí[1] !== null && iiìíìîì !== null;
      var iîiîiìì = false;
      for (var iiììíií = 1; iiììíií < iíiììíí.length; ++iiììíií) {
        if (iíiììíí[iiììíií] !== null && iíiììíí[iiììíií].destructorFunction === undefined) {
          iîiîiìì = true;
          break;
        }
      }
      var iïiîiîì = iíiììíí[0].name !== "void";
      var iíïíiîi = "";
      var iiìïìïï = "";
      for (var iiììíií = 0; iiììíií < iiìiìîí - 2; ++iiììíií) {
        iíïíiîi += (iiììíií !== 0 ? ", " : "") + "arg" + iiììíií;
        iiìïìïï += (iiììíií !== 0 ? ", " : "") + "arg" + iiììíií + "Wired";
      }
      var iîiiíîí = "return function " + iïíiiîí(iíììììî) + "(" + iíïíiîi + ") {\nif (arguments.length !== " + (iiìiìîí - 2) + ") {\nthrowBindingError('function " + iíììììî + " called with ' + arguments.length + ' arguments, expected " + (iiìiìîí - 2) + " args!');\n}\n";
      if (iîiîiìì) {
        iîiiíîí += "var destructors = [];\n";
      }
      var iiíïìií = iîiîiìì ? "destructors" : "null";
      var iiííìîì = ["throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"];
      var iíîiíìî = [iiììïii, iiïìîîî, iîïïïìí, iïìïííì, iíiììíí[0], iíiììíí[1]];
      if (iiíïììî) {
        iîiiíîí += "var thisWired = classParam.toWireType(" + iiíïìií + ", this);\n";
      }
      for (var iiììíií = 0; iiììíií < iiìiìîí - 2; ++iiììíií) {
        iîiiíîí += "var arg" + iiììíií + "Wired = argType" + iiììíií + ".toWireType(" + iiíïìií + ", arg" + iiììíií + "); // " + iíiììíí[iiììíií + 2].name + "\n";
        iiííìîì.push("argType" + iiììíií);
        iíîiíìî.push(iíiììíí[iiììíií + 2]);
      }
      if (iiíïììî) {
        iiìïìïï = "thisWired" + (iiìïìïï.length > 0 ? ", " : "") + iiìïìïï;
      }
      iîiiíîí += (iïiîiîì ? "var rv = " : "") + "invoker(fn" + (iiìïìïï.length > 0 ? ", " : "") + iiìïìïï + ");\n";
      if (iîiîiìì) {
        iîiiíîí += "runDestructors(destructors);\n";
      } else {
        for (var iiììíií = iiíïììî ? 1 : 2; iiììíií < iíiììíí.length; ++iiììíií) {
          var iíiìïìï = iiììíií === 1 ? "thisWired" : "arg" + (iiììíií - 2) + "Wired";
          if (iíiììíí[iiììíií].destructorFunction !== null) {
            iîiiíîí += iíiìïìï + "_dtor(" + iíiìïìï + "); // " + iíiììíí[iiììíií].name + "\n";
            iiííìîì.push(iíiìïìï + "_dtor");
            iíîiíìî.push(iíiììíí[iiììíií].destructorFunction);
          }
        }
      }
      if (iïiîiîì) {
        iîiiíîí += "var ret = retType.fromWireType(rv);\nreturn ret;\n";
      } else {}
      iîiiíîí += "}\n";
      iiííìîì.push(iîiiíîí);
      var iïïîïii = iìiíîìi(Function, iiííìîì).apply(null, iíîiíìî);
      return iïïîïii;
    }
    function iïííìîì(iîìiïíï, iïïïiìi, iiïïîïï) {
      if (iîìiïíï[iïïïiìi].overloadTable === undefined) {
        var iïiíîîì = iîìiïíï[iïïïiìi];
        iîìiïíï[iïïïiìi] = function () {
          if (!iîìiïíï[iïïïiìi].overloadTable.hasOwnProperty(arguments.length)) {
            iiììïii("Function '" + iiïïîïï + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + iîìiïíï[iïïïiìi].overloadTable + ")!");
          }
          return iîìiïíï[iïïïiìi].overloadTable[arguments.length].apply(this, arguments);
        };
        iîìiïíï[iïïïiìi].overloadTable = [];
        iîìiïíï[iïïïiìi].overloadTable[iïiíîîì.argCount] = iïiíîîì;
      }
    }
    function iiíiííí(iiiïïîï, iïíìîíï, iiíîïîí) {
      if (iiîíiii.hasOwnProperty(iiiïïîï)) {
        if (iiíîïîí === undefined || iiîíiii[iiiïïîï].overloadTable !== undefined && iiîíiii[iiiïïîï].overloadTable[iiíîïîí] !== undefined) {
          iiììïii("Cannot register public name '" + iiiïïîï + "' twice");
        }
        iïííìîì(iiîíiii, iiiïïîï, iiiïïîï);
        if (iiîíiii.hasOwnProperty(iiíîïîí)) {
          iiììïii("Cannot register multiple overloads of a function with the same number of arguments (" + iiíîïîí + ")!");
        }
        iiîíiii[iiiïïîï].overloadTable[iiíîïîí] = iïíìîíï;
      } else {
        iiîíiii[iiiïïîï] = iïíìîíï;
        if (iiíîïîí !== undefined) {
          iiîíiii[iiiïïîï].numArguments = iiíîïîí;
        }
      }
    }
    function iíiîíiì(iïììíìî, iííìííì) {
      var iïìîíìï = [];
      for (var iïîìììi = 0; iïîìììi < iïììíìî; iïîìììi++) {
        iïìîíìï.push(iííîìïî[(iííìííì >> 2) + iïîìììi]);
      }
      return iïìîíìï;
    }
    function iïïïîií(iiïîììí, iîïíííì, iíiïíii) {
      if (!iiîíiii.hasOwnProperty(iiïîììí)) {
        iìïìïìi("Replacing nonexistant public symbol");
      }
      if (iiîíiii[iiïîììí].overloadTable !== undefined && iíiïíii !== undefined) {
        iiîíiii[iiïîììí].overloadTable[iíiïíii] = iîïíííì;
      } else {
        iiîíiii[iiïîììí] = iîïíííì;
        iiîíiii[iiïîììí].argCount = iíiïíii;
      }
    }
    function iiíïíìï(iîíiiïi, iííìîíì, iíììïiï) {
      var iìïiíîî = iiîíiii["dynCall_" + iîíiiïi];
      if (iíììïiï && iíììïiï.length) {
        return iìïiíîî.apply(null, [iííìîíì].concat(iíììïiï));
      } else {
        return iìïiíîî.call(null, iííìîíì);
      }
    }
    function iíiíîîî(iïiïîïí, iîìíìïi, iïììiiï) {
      if (iïiïîïí.includes("j")) {
        return iiíïíìï(iïiïîïí, iîìíìïi, iïììiiï);
      }
      return iîiîiîï.get(iîìíìïi).apply(null, iïììiiï);
    }
    function iííìíîî(iiìiîíï, iîíiíiî) {
      var iiîîîíì = [];
      return function () {
        iiîîîíì.length = arguments.length;
        for (var iïïìîìî = 0; iïïìîìî < arguments.length; iïïìîìî++) {
          iiîîîíì[iïïìîìî] = arguments[iïïìîìî];
        }
        return iíiíîîî(iiìiîíï, iîíiíiî, iiîîîíì);
      };
    }
    function iìïìïii(iíîïíiì, iìíîìii) {
      iíîïíiì = iiiïìïï(iíîïíiì);
      function iîïííií() {
        if (iíîïíiì.includes("j")) {
          return iííìíîî(iíîïíiì, iìíîìii);
        }
        return iîiîiîï.get(iìíîìii);
      }
      var iïïìîíî = iîïííií();
      if (typeof iïïìîíî !== "function") {
        iiììïii("unknown function pointer with signature " + iíîïíiì + ": " + iìíîìii);
      }
      return iïïìîíî;
    }
    var iîìììîï = undefined;
    function iìïiiîí(iìíïiíí) {
      var iîîiîïi = iiìiîïì(iìíïiíí);
      var iìììîiï = iiiïìïï(iîîiîïi);
      iïîiíïí(iîîiîïi);
      return iìììîiï;
    }
    function iììïïíî(iïíiiîi, iíìîïìí) {
      var iiïiïîï = [];
      var iíiiîíî = {};
      function iíîíìiï(iiîiiìi) {
        if (iíiiîíî[iiîiiìi]) {
          return;
        }
        if (iïíïíii[iiîiiìi]) {
          return;
        }
        if (iiïîïíï[iiîiiìi]) {
          iiïîïíï[iiîiiìi].forEach(iíîíìiï);
          return;
        }
        iiïiïîï.push(iiîiiìi);
        iíiiîíî[iiîiiìi] = true;
      }
      iíìîïìí.forEach(iíîíìiï);
      throw new iîìììîï(iïíiiîi + ": " + iiïiïîï.map(iìïiiîí).join([", "]));
    }
    function iiîiíîí(iîiiíîî, iiìiiíí, iìíîïií, iïîíîìi, iíîììïì, iïiìííì) {
      var iiíîïíï = iíiîíiì(iiìiiíí, iìíîïií);
      iîiiíîî = iiiïìïï(iîiiíîî);
      iíîììïì = iìïìïii(iïîíîìi, iíîììïì);
      iiíiííí(iîiiíîî, function () {
        iììïïíî("Cannot call " + iîiiíîî + " due to unbound types", iiíîïíï);
      }, iiìiiíí - 1);
      iìiíìîí([], iiíîïíï, function (iìïïíïï) {
        var iïîïíìï = [iìïïíïï[0], null].concat(iìïïíïï.slice(1));
        iïïïîií(iîiiíîî, iííiîiï(iîiiíîî, iïîïíìï, null, iíîììïì, iïiìííì), iiìiiíí - 1);
        return [];
      });
    }
    function iîíiîïí(iîíiìîí, iïîiîíî, iïïiïïí) {
      switch (iïîiîíî) {
        case 0:
          if (iïïiïïí) {
            return function iíîííiì(iïîïiïï) {
              return iìiiîìî[iïîïiïï];
            };
          } else {
            return function iîìiîîì(iiiííìî) {
              return iiìíïïî[iiiííìî];
            };
          }
        case 1:
          if (iïïiïïí) {
            return function iiîíîíî(iííìîîí) {
              return iìíiíïî[iííìîîí >> 1];
            };
          } else {
            return function iìíîiií(iïiìîîï) {
              return iiiîííì[iïiìîîï >> 1];
            };
          }
        case 2:
          if (iïïiïïí) {
            return function iïìiìîî(iïiííîî) {
              return iííîìïî[iïiííîî >> 2];
            };
          } else {
            return function iíííììí(iíïïîíì) {
              return iìîîïîí[iíïïîíì >> 2];
            };
          }
        default:
          throw new TypeError("Unknown integer type: " + iîíiìîí);
      }
    }
    function iíïïïiì(iiïííìî, iiìîiíi, iíiìììî, iïiïîií, iïíïîïî) {
      iiìîiíi = iiiïìïï(iiìîiíi);
      if (iïíïîïî === -1) {
        iïíïîïî = 4294967295;
      }
      var iîííììì = iíïìïiï(iíiìììî);
      function iíîiííï(iíïîìiì) {
        return iíïîìiì;
      }
      if (iïiïîií === 0) {
        var iííîïíî = 32 - iíiìììî * 8;
        iíîiííï = function (iiïïîìi) {
          return iiïïîìi << iííîïíî >>> iííîïíî;
        };
      }
      var iîîîïîï = iiìîiíi.includes("unsigned");
      iîïiiïî(iiïííìî, {
        name: iiìîiíi,
        fromWireType: iíîiííï,
        toWireType: function (iiiìïïï, iìiïíïì) {
          if (typeof iìiïíïì !== "number" && typeof iìiïíïì !== "boolean") {
            throw new TypeError("Cannot convert \"" + iîìiìïi(iìiïíïì) + "\" to " + this.name);
          }
          if (iìiïíïì < iïiïîií || iìiïíïì > iïíïîïî) {
            throw new TypeError("Passing a number \"" + iîìiìïi(iìiïíïì) + "\" from JS side to C/C++ side to an argument of type \"" + iiìîiíi + "\", which is outside the valid range [" + iïiïîií + ", " + iïíïîïî + "]!");
          }
          if (iîîîïîï) {
            return iìiïíïì >>> 0;
          } else {
            return iìiïíïì | 0;
          }
        },
        argPackAdvance: 8,
        readValueFromPointer: iîíiîïí(iiìîiíi, iîííììì, iïiïîií !== 0),
        destructorFunction: null
      });
    }
    function iîììïìí(iììiíii, iíììïìî, iîììîíì) {
      var iììîìíï = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array];
      var iïîîïìí = iììîìíï[iíììïìî];
      function iïiîiiî(iíîíìïi) {
        iíîíìïi = iíîíìïi >> 2;
        var iïììîii = iìîîïîí;
        var iîîîïií = iïììîii[iíîíìïi];
        var iíïíiiï = iïììîii[iíîíìïi + 1];
        return new iïîîïìí(iîìíîîi, iíïíiiï, iîîîïií);
      }
      iîììîíì = iiiïìïï(iîììîíì);
      iîïiiïî(iììiíii, {
        name: iîììîíì,
        fromWireType: iïiîiiî,
        argPackAdvance: 8,
        readValueFromPointer: iïiîiiî
      }, {
        ignoreDuplicateRegistrations: true
      });
    }
    function iííiïïí(iiïîïìì, iîìîíïi) {
      iîìîíïi = iiiïìïï(iîìîíïi);
      var iïíìïïì = iîìîíïi === "std::string";
      iîïiiïî(iiïîïìì, {
        name: iîìîíïi,
        fromWireType: function (iïîìïiî) {
          var iïìíîìî = iìîîïîí[iïîìïiî >> 2];
          var iïîìïïî;
          if (iïíìïïì) {
            var iîïïïìì = iïîìïiî + 4;
            for (var iíïíïíï = 0; iíïíïíï <= iïìíîìî; ++iíïíïíï) {
              var iîìiïíi = iïîìïiî + 4 + iíïíïíï;
              if (iíïíïíï == iïìíîìî || iiìíïïî[iîìiïíi] == 0) {
                var iîíîííì = iîìiïíi - iîïïïìì;
                var iííïiìì = iíîîîiì(iîïïïìì, iîíîííì);
                if (iïîìïïî === undefined) {
                  iïîìïïî = iííïiìì;
                } else {
                  iïîìïïî += String.fromCharCode(0);
                  iïîìïïî += iííïiìì;
                }
                iîïïïìì = iîìiïíi + 1;
              }
            }
          } else {
            var iííiìïí = new Array(iïìíîìî);
            for (var iíïíïíï = 0; iíïíïíï < iïìíîìî; ++iíïíïíï) {
              iííiìïí[iíïíïíï] = String.fromCharCode(iiìíïïî[iïîìïiî + 4 + iíïíïíï]);
            }
            iïîìïïî = iííiìïí.join("");
          }
          iïîiíïí(iïîìïiî);
          return iïîìïïî;
        },
        toWireType: function (iiîìííí, iiîíìïï) {
          if (iiîíìïï instanceof ArrayBuffer) {
            iiîíìïï = new Uint8Array(iiîíìïï);
          }
          var iîììíïi;
          var iììiîìì = typeof iiîíìïï === "string";
          if (!iììiîìì && !(iiîíìïï instanceof Uint8Array) && !(iiîíìïï instanceof Uint8ClampedArray) && !(iiîíìïï instanceof Int8Array)) {
            iiììïii("Cannot pass non-string to std::string");
          }
          if (iïíìïïì && iììiîìì) {
            iîììíïi = function () {
              return iiíïïïî(iiîíìïï);
            };
          } else {
            iîììíïi = function () {
              return iiîíìïï.length;
            };
          }
          var iììíìiï = iîììíïi();
          var iïíiììï = iíiììií(4 + iììíìiï + 1);
          iìîîïîí[iïíiììï >> 2] = iììíìiï;
          if (iïíìïïì && iììiîìì) {
            iïiïiií(iiîíìïï, iïíiììï + 4, iììíìiï + 1);
          } else if (iììiîìì) {
            for (var iïíìíïì = 0; iïíìíïì < iììíìiï; ++iïíìíïì) {
              var iîìiîïï = iiîíìïï.charCodeAt(iïíìíïì);
              if (iîìiîïï > 255) {
                iïîiíïí(iïíiììï);
                iiììïii("String has UTF-16 code units that do not fit in 8 bits");
              }
              iiìíïïî[iïíiììï + 4 + iïíìíïì] = iîìiîïï;
            }
          } else {
            for (var iïíìíïì = 0; iïíìíïì < iììíìiï; ++iïíìíïì) {
              iiìíïïî[iïíiììï + 4 + iïíìíïì] = iiîíìïï[iïíìíïì];
            }
          }
          if (iiîìííí !== null) {
            iiîìííí.push(iïîiíïí, iïíiììï);
          }
          return iïíiììï;
        },
        argPackAdvance: 8,
        readValueFromPointer: iiîìiíi,
        destructorFunction: function (iîíiiìî) {
          iïîiíïí(iîíiiìî);
        }
      });
    }
    function iiîííîî(iiïïîìí, iííiíïî, iiiìììî) {
      iiiìììî = iiiïìïï(iiiìììî);
      var iííìïîí;
      var iìíîîìï;
      var iiîîïiï;
      var iíìíìiï;
      var iìîíïîi;
      if (iííiíïî === 2) {
        iííìïîí = iiíîìîì;
        iìíîîìï = iiíîîìi;
        iíìíìiï = iíïíiìi;
        iiîîïiï = function () {
          return iiiîííì;
        };
        iìîíïîi = 1;
      } else if (iííiíïî === 4) {
        iííìïîí = iïìíìïï;
        iìíîîìï = iiíîíîî;
        iíìíìiï = iïîïîïí;
        iiîîïiï = function () {
          return iìîîïîí;
        };
        iìîíïîi = 2;
      }
      iîïiiïî(iiïïîìí, {
        name: iiiìììî,
        fromWireType: function (iïííîíí) {
          var iïiîîîi = iìîîïîí[iïííîíí >> 2];
          var iiïïíii = iiîîïiï();
          var iïiììií;
          var iîììíïî = iïííîíí + 4;
          for (var iììíïîî = 0; iììíïîî <= iïiîîîi; ++iììíïîî) {
            var iíìíiìî = iïííîíí + 4 + iììíïîî * iííiíïî;
            if (iììíïîî == iïiîîîi || iiïïíii[iíìíiìî >> iìîíïîi] == 0) {
              var iîiiïií = iíìíiìî - iîììíïî;
              var iîïîìîí = iííìïîí(iîììíïî, iîiiïií);
              if (iïiììií === undefined) {
                iïiììií = iîïîìîí;
              } else {
                iïiììií += String.fromCharCode(0);
                iïiììií += iîïîìîí;
              }
              iîììíïî = iíìíiìî + iííiíïî;
            }
          }
          iïîiíïí(iïííîíí);
          return iïiììií;
        },
        toWireType: function (iìïïìîì, iíííîîi) {
          if (typeof iíííîîi !== "string") {
            iiììïii("Cannot pass non-string to C++ string type " + iiiìììî);
          }
          var iiîîîìî = iíìíìiï(iíííîîi);
          var iííïíîì = iíiììií(4 + iiîîîìî + iííiíïî);
          iìîîïîí[iííïíîì >> 2] = iiîîîìî >> iìîíïîi;
          iìíîîìï(iíííîîi, iííïíîì + 4, iiîîîìî + iííiíïî);
          if (iìïïìîì !== null) {
            iìïïìîì.push(iïîiíïí, iííïíîì);
          }
          return iííïíîì;
        },
        argPackAdvance: 8,
        readValueFromPointer: iiîìiíi,
        destructorFunction: function (iiïììïí) {
          iïîiíïí(iiïììïí);
        }
      });
    }
    function iîïííiî(iïîiíîì, iìiíîïî) {
      iìiíîïî = iiiïìïï(iìiíîïî);
      iîïiiïî(iïîiíîì, {
        isVoid: true,
        name: iìiíîïî,
        argPackAdvance: 0,
        fromWireType: function () {
          return undefined;
        },
        toWireType: function (iîïìîíî, iìííiîï) {
          return undefined;
        }
      });
    }
    function iïííìïi(iiîïiíi) {
      delete iiíïîií.xhrs[iiîïiíi - 1];
    }
    function iiiíîîi(iïíiïîí) {
      if (!iïíiïîí) {
        iiììïii("Cannot use deleted val. handle = " + iïíiïîí);
      }
      return iîïïîîì[iïíiïîí].value;
    }
    function iïîìíìí(iïiíïiî, iíïïìiï) {
      var iíïíîiï = iïíïíii[iïiíïiî];
      if (iíïíîiï === undefined) {
        iiììïii(iíïïìiï + " has unknown type " + iìïiiîí(iïiíïiî));
      }
      return iíïíîiï;
    }
    function iìiíîíì(iìïíîïî, iiîïìiî, iïìïiiî) {
      iìïíîïî = iiiíîîi(iìïíîïî);
      iiîïìiî = iïîìíìí(iiîïìiî, "emval::as");
      var iííiiii = [];
      var iîïïììì = iiîîiìï(iííiiii);
      iííîìïî[iïìïiiî >> 2] = iîïïììì;
      return iiîïìiî.toWireType(iííiiii, iìïíîïî);
    }
    function iîîiiïi(iïííiîi, iiïìîïi) {
      var iíìïíïì = new Array(iïííiîi);
      for (var iïiïîîì = 0; iïiïîîì < iïííiîi; ++iïiïîîì) {
        iíìïíïì[iïiïîîì] = iïîìíìí(iííîìïî[(iiïìîïi >> 2) + iïiïîîì], "parameter " + iïiïîîì);
      }
      return iíìïíïì;
    }
    function iíiïîii(iïîïiií, iìíîîíi, iïiíìiî, iíîîiií) {
      iïîïiií = iiiíîîi(iïîïiií);
      var iiîíïïî = iîîiiïi(iìíîîíi, iïiíìiî);
      var iiîïîîì = new Array(iìíîîíi);
      for (var iîïiìïï = 0; iîïiìïï < iìíîîíi; ++iîïiìïï) {
        var iíïííiì = iiîíïïî[iîïiìïï];
        iiîïîîì[iîïiìïï] = iíïííiì.readValueFromPointer(iíîîiií);
        iíîîiií += iíïííiì.argPackAdvance;
      }
      var iiíïïiï = iïîïiií.apply(undefined, iiîïîîì);
      return iiîîiìï(iiíïïiï);
    }
    function iîiíiíí(iïiìïiî) {
      var iiïííiî = [];
      iííîìïî[iïiìïiî >> 2] = iiîîiìï(iiïííiî);
      return iiïííiî;
    }
    var iïíiiîï = {};
    function iíìïïíì(iîïiïìi) {
      var iíïîiiì = iïíiiîï[iîïiïìi];
      if (iíïîiiì === undefined) {
        return iiiïìïï(iîïiïìi);
      } else {
        return iíïîiiì;
      }
    }
    var iiííïíì = [];
    function iìííiïï(iïîììïì, iïïìïìí, iîîíîíí, iíïìîìî, iìîîíìì) {
      iïîììïì = iiííïíì[iïîììïì];
      iïïìïìí = iiiíîîi(iïïìïìí);
      iîîíîíí = iíìïïíì(iîîíîíí);
      return iïîììïì(iïïìïìí, iîîíîíí, iîiíiíí(iíïìîìî), iìîîíìì);
    }
    function iìíiîïì(iîíîiíî, iíîîíïí, iîìîîïi, iíìiîíî) {
      iîíîiíî = iiííïíì[iîíîiíî];
      iíîîíïí = iiiíîîi(iíîîíïí);
      iîìîîïi = iíìïïíì(iîìîîïi);
      iîíîiíî(iíîîíïí, iîìîîïi, null, iíìiîíî);
    }
    function iïíïïìì(iíîíiiî, iïîííïí) {
      iíîíiiî = iiiíîîi(iíîíiiî);
      iïîííïí = iiiíîîi(iïîííïí);
      return delete iíîíiiî[iïîííïí];
    }
    function iiìîîïî(iïîïííî, iîîiîií) {
      iïîïííî = iiiíîîi(iïîïííî);
      iîîiîií = iiiíîîi(iîîiîií);
      return iïîïííî == iîîiîií;
    }
    function iïíïïïí() {
      if (typeof globalThis === "object") {
        return globalThis;
      }
      return function () {
        return Function;
      }()("return this")();
    }
    function iïíîiíí(iíiììïï) {
      if (iíiììïï === 0) {
        return iiîîiìï(iïíïïïí());
      } else {
        iíiììïï = iíìïïíì(iíiììïï);
        return iiîîiìï(iïíïïïí()[iíiììïï]);
      }
    }
    function iïîîïïî(iïïìíiì) {
      var iíìîìíí = iiííïíì.length;
      iiííïíì.push(iïïìíiì);
      return iíìîìíí;
    }
    function iiiïìiì(iiííiii, iìiíìîì) {
      var iîiîíiî = iîîiiïi(iiííiii, iìiíìîì);
      var iíììîïì = iîiîíiî[0];
      var iiíiíií = iíììîïì.name + "_$" + iîiîíiî.slice(1).map(function (iìïîîïï) {
        return iìïîîïï.name;
      }).join("_") + "$";
      var iíîîììí = ["retType"];
      var iïíïìîì = [iíììîïì];
      var iïïiïíi = "";
      for (var iííïííí = 0; iííïííí < iiííiii - 1; ++iííïííí) {
        iïïiïíi += (iííïííí !== 0 ? ", " : "") + "arg" + iííïííí;
        iíîîììí.push("argType" + iííïííí);
        iïíïìîì.push(iîiîíiî[1 + iííïííí]);
      }
      var iîìïïîi = iïíiiîí("methodCaller_" + iiíiíií);
      var iïìììïi = "return function " + iîìïïîi + "(handle, name, destructors, args) {\n";
      var iïíìîíi = 0;
      for (var iííïííí = 0; iííïííí < iiííiii - 1; ++iííïííí) {
        iïìììïi += "    var arg" + iííïííí + " = argType" + iííïííí + ".readValueFromPointer(args" + (iïíìîíi ? "+" + iïíìîíi : "") + ");\n";
        iïíìîíi += iîiîíiî[iííïííí + 1].argPackAdvance;
      }
      iïìììïi += "    var rv = handle[name](" + iïïiïíi + ");\n";
      for (var iííïííí = 0; iííïííí < iiííiii - 1; ++iííïííí) {
        if (iîiîíiî[iííïííí + 1].deleteObject) {
          iïìììïi += "    argType" + iííïííí + ".deleteObject(arg" + iííïííí + ");\n";
        }
      }
      if (!iíììîïì.isVoid) {
        iïìììïi += "    return retType.toWireType(destructors, rv);\n";
      }
      iïìììïi += "};\n";
      iíîîììí.push(iïìììïi);
      var iiîìììi = iìiíîìi(Function, iíîîììí).apply(null, iïíïìîì);
      return iïîîïïî(iiîìììi);
    }
    function iiîîîìi(iïííîíï) {
      iïííîíï = iíìïïíì(iïííîíï);
      return iiîîiìï(iiîíiii[iïííîíï]);
    }
    function iîiìïîi(iìíííìì, iìiiïìi) {
      iìíííìì = iiiíîîi(iìíííìì);
      iìiiïìi = iiiíîîi(iìiiïìi);
      return iiîîiìï(iìíííìì[iìiiïìi]);
    }
    function iííìiiï(iïìiííì) {
      if (iïìiííì > 4) {
        iîïïîîì[iïìiííì].refcount += 1;
      }
    }
    function iííiïíi(iíïíìíí) {
      var iîíìíîî = "";
      for (var iìîïìíì = 0; iìîïìíì < iíïíìíí; ++iìîïìíì) {
        iîíìíîî += (iìîïìíì !== 0 ? ", " : "") + "arg" + iìîïìíì;
      }
      var iîiìïîì = "return function emval_allocator_" + iíïíìíí + "(constructor, argTypes, args) {\n";
      for (var iìîïìíì = 0; iìîïìíì < iíïíìíí; ++iìîïìíì) {
        iîiìïîì += "var argType" + iìîïìíì + " = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + " + iìîïìíì + "], \"parameter " + iìîïìíì + "\");\nvar arg" + iìîïìíì + " = argType" + iìîïìíì + ".readValueFromPointer(args);\nargs += argType" + iìîïìíì + "['argPackAdvance'];\n";
      }
      iîiìïîì += "var obj = new constructor(" + iîíìíîî + ");\nreturn __emval_register(obj);\n}\n";
      return new Function("requireRegisteredType", "Module", "__emval_register", iîiìïîì)(iïîìíìí, iiîíiii, iiîîiìï);
    }
    var iiìíîïî = {};
    function iìïîïíï(iîíííïí, iíììíïí, iiîîiïï, iíïîîîî) {
      iîíííïí = iiiíîîi(iîíííïí);
      var iîíîiiî = iiìíîïî[iíììíïí];
      if (!iîíîiiî) {
        iîíîiiî = iííiïíi(iíììíïí);
        iiìíîïî[iíììíïí] = iîíîiiî;
      }
      return iîíîiiî(iîíííïí, iiîîiïï, iíïîîîî);
    }
    function iïïííïí(iííiîiî) {
      return iiîîiìï(iíìïïíì(iííiîiî));
    }
    function iìïïiïï() {
      return iiîîiìï({});
    }
    function iiïiìíí(iìiìiíì) {
      iìiìiíì = iiiíîîi(iìiìiíì);
      return !iìiìiíì;
    }
    function iìïïiíì(iïîîiií) {
      var iïìíîïì = iîïïîîì[iïîîiií].value;
      iïìïííì(iïìíîïì);
      iìííiìì(iïîîiií);
    }
    function iíïîiii(iîiíîìî, iïìïíîí, iîîiîîi) {
      iîiíîìî = iiiíîîi(iîiíîìî);
      iïìïíîí = iiiíîîi(iïìïíîí);
      iîîiîîi = iiiíîîi(iîîiîîi);
      iîiíîìî[iïìïíîí] = iîîiîîi;
    }
    function iíiíiïï(iíïiíïî, iïìíììî) {
      iíïiíïî = iïîìíìí(iíïiíïî, "_emval_take_value");
      var iîíiîìï = iíïiíïî.readValueFromPointer(iïìíììî);
      return iiîîiìï(iîíiîìï);
    }
    function iïïïïìï() {
      iïíîììì();
    }
    var iïíiíîï = [];
    function iiîíîïî(iîíiíii, iïiïïîí) {
      iïíiíîï.length = 0;
      var iiíiïiï;
      iïiïïîí >>= 2;
      while (iiíiïiï = iiìíïïî[iîíiíii++]) {
        var iíiîîìî = iiíiïiï < 105;
        if (iíiîîìî && iïiïïîí & 1) {
          iïiïïîí++;
        }
        iïíiíîï.push(iíiîîìî ? iîïìiïì[iïiïïîí++ >> 1] : iííîìïî[iïiïïîí]);
        ++iïiïïîí;
      }
      return iïíiíîï;
    }
    function iîîìîîî(iìííîîï, iííìîîì, iiîîííî) {
      var iïîîíiì = iiîíîïî(iííìîîì, iiîîííî);
      return iiïíííí[iìííîîï].apply(null, iïîîíiì);
    }
    function iïíììíï(iiíiiìi, iîïîìíì, iíîïïií) {
      return iîîìîîî(iiíiiìi, iîïîìíì, iíîïïií);
    }
    function iìííîíí() {
      return !iîíiìïî;
    }
    iiîíiii._emscripten_is_main_browser_thread = iìííîíí;
    function iïíïììî(iïïìîîì, iîîííìï, iïîííïï) {
      iiìíïïî.copyWithin(iïïìîîì, iîîííìï, iîîííìï + iïîííïï);
    }
    function iíìïiìì(iìíiîiï) {
      try {
        iìiìîìï.grow(iìíiîiï - iîìíîîi.byteLength + 65535 >>> 16);
        iìïiìii(iìiìîìï.buffer);
        return 1;
      } catch (iìîiíií) {}
    }
    function iìíîîíï(iïîíïíî) {
      var iïíîiîí = iiìíïïî.length;
      iïîíïíî = iïîíïíî >>> 0;
      var iíïiïîï = 2147483648;
      if (iïîíïíî > iíïiïîï) {
        return false;
      }
      for (var iîíïiïí = 1; iîíïiïí <= 4; iîíïiïí *= 2) {
        var iìîìííï = iïíîiîí * (1 + 0.2 / iîíïiïí);
        iìîìííï = Math.min(iìîìííï, iïîíïíî + 100663296);
        var iìïìiìí = Math.min(iíïiïîï, iìiiìïì(Math.max(iïîíïíî, iìîìííï), 65536));
        var iïïîìiï = iíìïiìì(iìïìiìí);
        if (iïïîìiï) {
          return true;
        }
      }
      return false;
    }
    var iiíïîií = {
      xhrs: [],
      setu64: function (iíîìíii, iiïîîìi) {
        iìîîïîí[iíîìíii >> 2] = iiïîîìi;
        iìîîïîí[iíîìíii + 4 >> 2] = iiïîîìi / 4294967296 | 0;
      },
      openDatabase: function (iííîiîí, iîïíiïî, iiiïííï, iiiïiîï) {
        try {
          var iiiîiïî = indexedDB.open(iííîiîí, iîïíiïî);
        } catch (iïîììïí) {
          return iiiïiîï(iïîììïí);
        }
        iiiîiïî.onupgradeneeded = function (iiiiïîi) {
          var iìîìíìí = iiiiïîi.target.result;
          if (iìîìíìí.objectStoreNames.contains("FILES")) {
            iìîìíìí.deleteObjectStore("FILES");
          }
          iìîìíìí.createObjectStore("FILES");
        };
        iiiîiïî.onsuccess = function (iïììîíì) {
          iiiïííï(iïììîíì.target.result);
        };
        iiiîiïî.onerror = function (iííiìîî) {
          iiiïiîï(iííiìîî);
        };
      },
      staticInit: function () {
        var iíìîìiï = true;
        function iìíìíìï(iìïïïíï) {
          iiíïîií.dbInstance = iìïïïíï;
          if (iíìîìiï) {
            iîíîíïî("library_fetch_init");
          }
        }
        function iíîîiîì() {
          iiíïîií.dbInstance = false;
          if (iíìîìiï) {
            iîíîíïî("library_fetch_init");
          }
        }
        iiíïîií.openDatabase("emscripten_filesystem", 1, iìíìíìï, iíîîiîì);
        if (typeof ENVIRONMENT_IS_FETCH_WORKER === "undefined" || !ENVIRONMENT_IS_FETCH_WORKER) {
          iíïíïìí("library_fetch_init");
        }
      }
    };
    function iììíìíï(iïïíîìî, iíîîïiî, iïìíïîì, iïiííiï, iìiïìîí) {
      var iìîiïîï = iìîîïîí[iïïíîìî + 8 >> 2];
      if (!iìîiïîï) {
        iïìíïîì(iïïíîìî, 0, "no url specified!");
        return;
      }
      var iîíìììî = iíîîîiì(iìîiïîï);
      var iìíiiìi = iïïíîìî + 112;
      var iíìïïïï = iíîîîiì(iìíiiìi);
      if (!iíìïïïï) {
        iíìïïïï = "GET";
      }
      var iîïíìií = iìîîïîí[iïïíîìî + 4 >> 2];
      var iîííìií = iìîîïîí[iìíiiìi + 52 >> 2];
      var iìíîiíi = iìîîïîí[iìíiiìi + 56 >> 2];
      var iïîìïïì = !!iìîîïîí[iìíiiìi + 60 >> 2];
      var iìíîíiì = iìîîïîí[iìíiiìi + 64 >> 2];
      var iïiïïîî = iìîîïîí[iìíiiìi + 68 >> 2];
      var iìiiiii = iìîîïîí[iìíiiìi + 72 >> 2];
      var iiiîïíì = iìîîïîí[iìíiiìi + 76 >> 2];
      var iîîiíìí = iìîîïîí[iìíiiìi + 80 >> 2];
      var iîìîìíï = iìîîïîí[iìíiiìi + 84 >> 2];
      var iiííiìì = iìîîïîí[iìíiiìi + 88 >> 2];
      var iïíïiíì = !!(iîííìií & 1);
      var iìîïìií = !!(iîííìií & 2);
      var iìiiíìï = !!(iîííìií & 64);
      var iîiîìii = iïiïïîî ? iíîîîiì(iïiïïîî) : undefined;
      var iîîíïîî = iìiiiii ? iíîîîiì(iìiiiii) : undefined;
      var iíïíïíí = iîîiíìí ? iíîîîiì(iîîiíìí) : undefined;
      var iìïïîíì = new XMLHttpRequest();
      iìïïîíì.withCredentials = iïîìïïì;
      iìïïîíì.open(iíìïïïï, iîíìììî, !iìiiíìï, iîiîìii, iîîíïîî);
      if (!iìiiíìï) {
        iìïïîíì.timeout = iìíîiíi;
      }
      iìïïîíì.url_ = iîíìììî;
      iìïïîíì.responseType = "arraybuffer";
      if (iîîiíìí) {
        iìïïîíì.overrideMimeType(iíïíïíí);
      }
      if (iiiîïíì) {
        while (true) {
          var iiîííìï = iìîîïîí[iiiîïíì >> 2];
          if (!iiîííìï) {
            break;
          }
          var iiíiiiï = iìîîïîí[iiiîïíì + 4 >> 2];
          if (!iiíiiiï) {
            break;
          }
          iiiîïíì += 8;
          var iiíîíiï = iíîîîiì(iiîííìï);
          var iìïíííí = iíîîîiì(iiíiiiï);
          iìïïîíì.setRequestHeader(iiíîíiï, iìïíííí);
        }
      }
      iiíïîií.xhrs.push(iìïïîíì);
      var iìîìíiï = iiíïîií.xhrs.length;
      iìîîïîí[iïïíîìî + 0 >> 2] = iìîìíiï;
      var iîììíïí = iîìîìíï && iiííiìì ? iiìíïïî.slice(iîìîìíï, iîìîìíï + iiííiìì) : null;
      function iìiìïïí(iíìiîîi) {
        var iïiiìîï = 0;
        var iíïiîìi = 0;
        if (iíìiîîi) {
          iíïiîìi = iìïïîíì.response ? iìïïîíì.response.byteLength : 0;
          iïiiìîï = iíiììií(iíïiîìi);
          iiìíïïî.set(new Uint8Array(iìïïîíì.response), iïiiìîï);
        }
        iìîîïîí[iïïíîìî + 12 >> 2] = iïiiìîï;
        iiíïîií.setu64(iïïíîìî + 16, iíïiîìi);
      }
      iìïïîíì.onload = function (iìíìiîî) {
        iìiìïïí(iïíïiíì && !iìîïìií);
        var iîìïïìï = iìïïîíì.response ? iìïïîíì.response.byteLength : 0;
        iiíïîií.setu64(iïïíîìî + 24, 0);
        if (iîìïïìï) {
          iiíïîií.setu64(iïïíîìî + 32, iîìïïìï);
        }
        iiiîííì[iïïíîìî + 40 >> 1] = iìïïîíì.readyState;
        iiiîííì[iïïíîìî + 42 >> 1] = iìïïîíì.status;
        if (iìïïîíì.statusText) {
          iïiïiií(iìïïîíì.statusText, iïïíîìî + 44, 64);
        }
        if (iìïïîíì.status >= 200 && iìïïîíì.status < 300) {
          if (iíîîïiî) {
            iíîîïiî(iïïíîìî, iìïïîíì, iìíìiîî);
          }
        } else if (iïìíïîì) {
          iïìíïîì(iïïíîìî, iìïïîíì, iìíìiîî);
        }
      };
      iìïïîíì.onerror = function (iîììïií) {
        iìiìïïí(iïíïiíì);
        var iïìîíîì = iìïïîíì.status;
        iiíïîií.setu64(iïïíîìî + 24, 0);
        iiíïîií.setu64(iïïíîìî + 32, iìïïîíì.response ? iìïïîíì.response.byteLength : 0);
        iiiîííì[iïïíîìî + 40 >> 1] = iìïïîíì.readyState;
        iiiîííì[iïïíîìî + 42 >> 1] = iïìîíîì;
        if (iïìíïîì) {
          iïìíïîì(iïïíîìî, iìïïîíì, iîììïií);
        }
      };
      iìïïîíì.ontimeout = function (iîîìïiì) {
        if (iïìíïîì) {
          iïìíïîì(iïïíîìî, iìïïîíì, iîîìïiì);
        }
      };
      iìïïîíì.onprogress = function (iiiîíîì) {
        var iíîîììï = iïíïiíì && iìîïìií && iìïïîíì.response ? iìïïîíì.response.byteLength : 0;
        var iïïïïii = 0;
        if (iïíïiíì && iìîïìií) {
          iïïïïii = iíiììií(iíîîììï);
          iiìíïïî.set(new Uint8Array(iìïïîíì.response), iïïïïii);
        }
        iìîîïîí[iïïíîìî + 12 >> 2] = iïïïïii;
        iiíïîií.setu64(iïïíîìî + 16, iíîîììï);
        iiíïîií.setu64(iïïíîìî + 24, iiiîíîì.loaded - iíîîììï);
        iiíïîií.setu64(iïïíîìî + 32, iiiîíîì.total);
        iiiîííì[iïïíîìî + 40 >> 1] = iìïïîíì.readyState;
        if (iìïïîíì.readyState >= 3 && iìïïîíì.status === 0 && iiiîíîì.loaded > 0) {
          iìïïîíì.status = 200;
        }
        iiiîííì[iïïíîìî + 42 >> 1] = iìïïîíì.status;
        if (iìïïîíì.statusText) {
          iïiïiií(iìïïîíì.statusText, iïïíîìî + 44, 64);
        }
        if (iïiííiï) {
          iïiííiï(iïïíîìî, iìïïîíì, iiiîíîì);
        }
        if (iïïïïii) {
          iïîiíïí(iïïïïii);
        }
      };
      iìïïîíì.onreadystatechange = function (iíïíiìì) {
        iiiîííì[iïïíîìî + 40 >> 1] = iìïïîíì.readyState;
        if (iìïïîíì.readyState >= 2) {
          iiiîííì[iïïíîìî + 42 >> 1] = iìïïîíì.status;
        }
        if (iìiïìîí) {
          iìiïìîí(iïïíîìî, iìïïîíì, iíïíiìì);
        }
      };
      try {
        iìïïîíì.send(iîììíïí);
      } catch (iíììîíì) {
        if (iïìíïîì) {
          iïìíïîì(iïïíîìî, iìïïîíì, iíììîíì);
        }
      }
    }
    function iíiiìíî(iîiîïîí, iiìiïîí) {
      if (iiìíîií) {
        return;
      }
      if (iiìiïîí) {
        iîiîïîí();
        return;
      }
      try {
        iîiîïîí();
      } catch (iiîïiìí) {
        if (iiîïiìí instanceof iìïíïìí) {
          return;
        } else if (iiîïiìí !== "unwind") {
          if (iiîïiìí && typeof iiîïiìí === "object" && iiîïiìí.stack) {
            iìïîîii("exception thrown: " + [iiîïiìí, iiîïiìí.stack]);
          }
          throw iiîïiìí;
        }
      }
    }
    function iìiîíîì(iîìïiíí, iìiíïiì, iìíììiï, iïìïiiï, iîiîîiì) {
      if (!iîìïiíí) {
        iîiîîiì(iìiíïiì, 0, "IndexedDB not available!");
        return;
      }
      var iïïîïíï = iìiíïiì + 112;
      var iíiîììï = iìîîïîí[iïïîïíï + 64 >> 2];
      if (!iíiîììï) {
        iíiîììï = iìîîïîí[iìiíïiì + 8 >> 2];
      }
      var iìíììii = iíîîîiì(iíiîììï);
      try {
        var iìîiiíi = iîìïiíí.transaction(["FILES"], "readwrite");
        var iìììíiï = iìîiiíi.objectStore("FILES");
        var iììîîïi = iìììíiï.put(iìíììiï, iìíììii);
        iììîîïi.onsuccess = function (iiíîîìï) {
          iiiîííì[iìiíïiì + 40 >> 1] = 4;
          iiiîííì[iìiíïiì + 42 >> 1] = 200;
          iïiïiií("OK", iìiíïiì + 44, 64);
          iïìïiiï(iìiíïiì, 0, iìíììii);
        };
        iììîîïi.onerror = function (iìîííìì) {
          iiiîííì[iìiíïiì + 40 >> 1] = 4;
          iiiîííì[iìiíïiì + 42 >> 1] = 413;
          iïiïiií("Payload Too Large", iìiíïiì + 44, 64);
          iîiîîiì(iìiíïiì, 0, iìîííìì);
        };
      } catch (iîîiìîì) {
        iîiîîiì(iìiíïiì, 0, iîîiìîì);
      }
    }
    function iïiíîîí(iîîíïiï, iïìiíìì, iiîîìïí, iiíïïíí) {
      if (!iîîíïiï) {
        iiíïïíí(iïìiíìì, 0, "IndexedDB not available!");
        return;
      }
      var iiîïïïi = iïìiíìì + 112;
      var iíiïíìi = iìîîïîí[iiîïïïi + 64 >> 2];
      if (!iíiïíìi) {
        iíiïíìi = iìîîïîí[iïìiíìì + 8 >> 2];
      }
      var iìïìiïî = iíîîîiì(iíiïíìi);
      try {
        var iiiììïi = iîîíïiï.transaction(["FILES"], "readonly");
        var iîîíïìi = iiiììïi.objectStore("FILES");
        var iiiíïiî = iîîíïìi.get(iìïìiïî);
        iiiíïiî.onsuccess = function (iîiììiî) {
          if (iîiììiî.target.result) {
            var iíììíìï = iîiììiî.target.result;
            var iiîîiií = iíììíìï.byteLength || iíììíìï.length;
            var iìïíìîï = iíiììií(iiîîiií);
            iiìíïïî.set(new Uint8Array(iíììíìï), iìïíìîï);
            iìîîïîí[iïìiíìì + 12 >> 2] = iìïíìîï;
            iiíïîií.setu64(iïìiíìì + 16, iiîîiií);
            iiíïîií.setu64(iïìiíìì + 24, 0);
            iiíïîií.setu64(iïìiíìì + 32, iiîîiií);
            iiiîííì[iïìiíìì + 40 >> 1] = 4;
            iiiîííì[iïìiíìì + 42 >> 1] = 200;
            iïiïiií("OK", iïìiíìì + 44, 64);
            iiîîìïí(iïìiíìì, 0, iíììíìï);
          } else {
            iiiîííì[iïìiíìì + 40 >> 1] = 4;
            iiiîííì[iïìiíìì + 42 >> 1] = 404;
            iïiïiií("Not Found", iïìiíìì + 44, 64);
            iiíïïíí(iïìiíìì, 0, "no data");
          }
        };
        iiiíïiî.onerror = function (iïîiìíí) {
          iiiîííì[iïìiíìì + 40 >> 1] = 4;
          iiiîííì[iïìiíìì + 42 >> 1] = 404;
          iïiïiií("Not Found", iïìiíìì + 44, 64);
          iiíïïíí(iïìiíìì, 0, iïîiìíí);
        };
      } catch (iíîiìîi) {
        iiíïïíí(iïìiíìì, 0, iíîiìîi);
      }
    }
    function iìîiìïí(iïïìíîï, iïiíîîi, iìïïïii, iîiîïíí) {
      if (!iïïìíîï) {
        iîiîïíí(iïiíîîi, 0, "IndexedDB not available!");
        return;
      }
      var iìîïîìî = iïiíîîi + 112;
      var iíîiììì = iìîîïîí[iìîïîìî + 64 >> 2];
      if (!iíîiììì) {
        iíîiììì = iìîîïîí[iïiíîîi + 8 >> 2];
      }
      var iiiïíîí = iíîîîiì(iíîiììì);
      try {
        var iiiîiîì = iïïìíîï.transaction(["FILES"], "readwrite");
        var iiîìíîì = iiiîiîì.objectStore("FILES");
        var iìíìììí = iiîìíîì.delete(iiiïíîí);
        iìíìììí.onsuccess = function (iíìíîiï) {
          var iîiííìï = iíìíîiï.target.result;
          iìîîïîí[iïiíîîi + 12 >> 2] = 0;
          iiíïîií.setu64(iïiíîîi + 16, 0);
          iiíïîií.setu64(iïiíîîi + 24, 0);
          iiíïîií.setu64(iïiíîîi + 32, 0);
          iiiîííì[iïiíîîi + 40 >> 1] = 4;
          iiiîííì[iïiíîîi + 42 >> 1] = 200;
          iïiïiií("OK", iïiíîîi + 44, 64);
          iìïïïii(iïiíîîi, 0, iîiííìï);
        };
        iìíìììí.onerror = function (iìïîíìî) {
          iiiîííì[iïiíîîi + 40 >> 1] = 4;
          iiiîííì[iïiíîîi + 42 >> 1] = 404;
          iïiïiií("Not Found", iïiíîîi + 44, 64);
          iîiîïíí(iïiíîîi, 0, iìïîíìî);
        };
      } catch (iìïiîíí) {
        iîiîïíí(iïiíîîi, 0, iìïiîíí);
      }
    }
    function iíìîiïí(iîíìîìí, iíìîìïi, iîíiïìï, iìîíiiï, iïïìîiî) {
      var iìiiííï = iîíìîìí + 112;
      var iiîìïìî = iíîîîiì(iìiiííï);
      var iîiìiiì = iìîîïîí[iìiiííï + 36 >> 2];
      var iìíîïiì = iìîîïîí[iìiiííï + 40 >> 2];
      var iiìïîíî = iìîîïîí[iìiiííï + 44 >> 2];
      var iîíïìíí = iìîîïîí[iìiiííï + 48 >> 2];
      var iíììïíï = iìîîïîí[iìiiííï + 52 >> 2];
      var iiïìïìì = !!(iíììïíï & 4);
      var iiíiíìi = !!(iíììïíï & 32);
      var iìïïiïì = !!(iíììïíï & 16);
      var iíiiìíí = !!(iíììïíï & 64);
      function iîíìíìi(iíìiiìî, iììïïíi, iìiíïïï) {
        iíiiìíî(function () {
          if (iîiìiiì) {
            iîiîiîï.get(iîiìiiì)(iíìiiìî);
          } else if (iíìîìïi) {
            iíìîìïi(iíìiiìî);
          }
        }, iíiiìíí);
      }
      function iiìîìîï(iííiïîì, iïíííiì, iíîìïîï) {
        iíiiìíî(function () {
          if (iiìïîíî) {
            iîiîiîï.get(iiìïîíî)(iííiïîì);
          } else if (iìîíiiï) {
            iìîíiiï(iííiïîì);
          }
        }, iíiiìíí);
      }
      function iìììïìî(iìïíïïí, iííìïií, iïîîîïî) {
        iíiiìíî(function () {
          if (iìíîïiì) {
            iîiîiîï.get(iìíîïiì)(iìïíïïí);
          } else if (iîíiïìï) {
            iîíiïìï(iìïíïïí);
          }
        }, iíiiìíí);
      }
      function iíìíîìî(iïîîììî, iiîìïìi, iííïïií) {
        iíiiìíî(function () {
          if (iîíïìíí) {
            iîiîiîï.get(iîíïìíí)(iïîîììî);
          } else if (iïïìîiî) {
            iïïìîiî(iïîîììî);
          }
        }, iíiiìíí);
      }
      function iîïììîi(iîîîïíì, iiîïiïì, iiîïîií) {
        iììíìíï(iîîîïíì, iîíìíìi, iìììïìî, iiìîìîï, iíìíîìî);
      }
      function iïiîìîi(iíîììii, iíiïîìí, iïiïíïi) {
        function iîííiîí(iiïìiîî, iîìiïïì, iiîîïiî) {
          iíiiìíî(function () {
            if (iîiìiiì) {
              iîiîiîï.get(iîiìiiì)(iiïìiîî);
            } else if (iíìîìïi) {
              iíìîìïi(iiïìiîî);
            }
          }, iíiiìíí);
        }
        function iíiîíîì(iïíïîii, iíiîïìí, iiiìîîî) {
          iíiiìíî(function () {
            if (iîiìiiì) {
              iîiîiîï.get(iîiìiiì)(iïíïîii);
            } else if (iíìîìïi) {
              iíìîìïi(iïíïîii);
            }
          }, iíiiìíí);
        }
        iìiîíîì(iiíïîií.dbInstance, iíîììii, iíiïîìí.response, iîííiîí, iíiîíîì);
      }
      function iíiiììî(iiiìîíi, iïïîiiï, iîîîîìí) {
        iììíìíï(iiiìîíi, iïiîìîi, iìììïìî, iiìîìîï, iíìíîìî);
      }
      if (iiîìïìî === "EM_IDB_STORE") {
        var iìíìîíì = iìîîïîí[iìiiííï + 84 >> 2];
        iìiîíîì(iiíïîií.dbInstance, iîíìîìí, iiìíïïî.slice(iìíìîíì, iìíìîíì + iìîîïîí[iìiiííï + 88 >> 2]), iîíìíìi, iìììïìî);
      } else if (iiîìïìî === "EM_IDB_DELETE") {
        iìîiìïí(iiíïîií.dbInstance, iîíìîìí, iîíìíìi, iìììïìî);
      } else if (!iìïïiïì) {
        iïiíîîí(iiíïîií.dbInstance, iîíìîìí, iîíìíìi, iiíiíìi ? iìììïìî : iiïìïìì ? iíiiììî : iîïììîi);
      } else if (!iiíiíìi) {
        iììíìíï(iîíìîìí, iiïìïìì ? iïiîìîi : iîíìíìi, iìììïìî, iiìîìîï, iíìíîìî);
      } else {
        return 0;
      }
      return iîíìîìí;
    }
    var iîiìiíï = {
      mappings: {},
      buffers: [null, [], []],
      printChar: function (iiiîiìî, iîiíïìi) {
        var iiììiíi = iîiìiíï.buffers[iiiîiìî];
        if (iîiíïìi === 0 || iîiíïìi === 10) {
          (iiiîiìî === 1 ? iììîïïí : iìïîîii)(iiïíìîì(iiììiíi, 0));
          iiììiíi.length = 0;
        } else {
          iiììiíi.push(iîiíïìi);
        }
      },
      varargs: undefined,
      get: function () {
        iîiìiíï.varargs += 4;
        var iîíîiîî = iííîìïî[iîiìiíï.varargs - 4 >> 2];
        return iîíîiîî;
      },
      getStr: function (iiììiìi) {
        var iïiïîïi = iíîîîiì(iiììiìi);
        return iïiïîïi;
      },
      get64: function (iîìïííï, iîîííií) {
        return iîìïííï;
      }
    };
    function iîîiïïî(iiïíïìi) {
      return 0;
    }
    function iíiiìîî(iiííïïî, iïìiîiì, iîïîiîí, iïìîïíí, iïîiîíï) {}
    function iïíïiïï(iiïìíìi, iïïïiïi, iïïïïìi, iiíîîîï) {
      var iíïîììí = 0;
      for (var iìiìïíí = 0; iìiìïíí < iïïïïìi; iìiìïíí++) {
        var iïíïìïí = iííîìïî[iïïïiïi + iìiìïíí * 8 >> 2];
        var iìíìíïï = iííîìïî[iïïïiïi + (iìiìïíí * 8 + 4) >> 2];
        for (var iíììiîï = 0; iíììiîï < iìíìíïï; iíììiîï++) {
          iîiìiíï.printChar(iiïìíìi, iiìíïïî[iïíïìïí + iíììiîï]);
        }
        iíïîììí += iìíìíïï;
      }
      iííîìïî[iiíîîîï >> 2] = iíïîììí;
      return 0;
    }
    function iíìiíiï(iííìíïï) {
      iïïïíîï(iííìíïï);
    }
    function iïîîiíì(iïiîïìì) {
      var iiîìiìí = Date.now() / 1000 | 0;
      if (iïiîïìì) {
        iííîìïî[iïiîïìì >> 2] = iiîìiìí;
      }
      return iiîìiìí;
    }
    iìììíïí();
    iîìïiïí = iiîíiii.BindingError = iîiïîìî(Error, "BindingError");
    iíïíííî = iiîíiii.InternalError = iîiïîìî(Error, "InternalError");
    iííîìîi();
    iîìììîï = iiîíiii.UnboundTypeError = iîiïîìî(Error, "UnboundTypeError");
    iiíïîií.staticInit();
    var iiîïïìì = {
      R: iïììììì,
      Q: iiíìîìî,
      B: iïíiïîì,
      K: iîïîíìï,
      J: iìïìîìî,
      x: iìiiïíï,
      q: iiîiíîí,
      n: iíïïïiì,
      m: iîììïìí,
      y: iííiïïí,
      t: iiîííîî,
      L: iîïííiî,
      G: iïííìïi,
      j: iìiíîíì,
      v: iíiïîii,
      o: iìííiïï,
      l: iìíiîïì,
      a: iìííiìì,
      P: iïíïïìì,
      k: iiìîîïî,
      d: iïíîiíí,
      i: iiiïìiì,
      z: iiîîîìi,
      c: iîiìïîi,
      f: iííìiiï,
      M: iìïîïíï,
      b: iïïííïí,
      u: iìïïiïï,
      O: iiïiìíí,
      h: iìïïiíì,
      g: iíïîiii,
      e: iíiíiïï,
      s: iïïïïìï,
      r: iïíììíï,
      p: iîîìîîî,
      I: iìííîíí,
      D: iïíïììî,
      E: iìíîîíï,
      H: iíìîiïí,
      F: iîîiïïî,
      A: iíiiìîî,
      w: iïíïiïï,
      C: iíìiíiï,
      N: iïîîiíì
    };
    var iïiìììï = iiîîíìi();
    var iïìïíìì = iiîíiii.___wasm_call_ctors = function () {
      return (iïìïíìì = iiîíiii.___wasm_call_ctors = iiîíiii.asm.T).apply(null, arguments);
    };
    var iíiììií = iiîíiii._malloc = function () {
      return (iíiììií = iiîíiii._malloc = iiîíiii.asm.V).apply(null, arguments);
    };
    var iïîiíïí = iiîíiii._free = function () {
      return (iïîiíïí = iiîíiii._free = iiîíiii.asm.W).apply(null, arguments);
    };
    var iîiíîii = iiîíiii.__Z18__Z01dynCall_fifjvv = function () {
      return (iîiíîii = iiîíiii.__Z18__Z01dynCall_fifjvv = iiîíiii.asm.X).apply(null, arguments);
    };
    var iììììíì = iiîíiii.__Z18__Z01dynCall_fiffvN10emscripten3valE = function () {
      return (iììììíì = iiîíiii.__Z18__Z01dynCall_fiffvN10emscripten3valE = iiîíiii.asm.Y).apply(null, arguments);
    };
    var iiîîìií = iiîíiii._main = function () {
      return (iiîîìií = iiîíiii._main = iiîíiii.asm.Z).apply(null, arguments);
    };
    var iiìiîïì = iiîíiii.___getTypeName = function () {
      return (iiìiîïì = iiîíiii.___getTypeName = iiîíiii.asm._).apply(null, arguments);
    };
    var iïïîììí = iiîíiii.___embind_register_native_and_builtin_types = function () {
      return (iïïîììí = iiîíiii.___embind_register_native_and_builtin_types = iiîíiii.asm.$).apply(null, arguments);
    };
    var iiíîîïí = iiîíiii.dynCall_jiji = function () {
      return (iiíîîïí = iiîíiii.dynCall_jiji = iiîíiii.asm.aa).apply(null, arguments);
    };
    var iîìííïi;
    function iìïíïìí(iiiïïîí) {
      this.name = "ExitStatus";
      this.message = "Program terminated with exit(" + iiiïïîí + ")";
      this.status = iiiïïîí;
    }
    var iììïïiî = false;
    iìiíiîi = function iîìiìïî() {
      if (!iîìííïi) {
        iïïìîii();
      }
      if (!iîìííïi) {
        iìiíiîi = iîìiìïî;
      }
    };
    function iíiiíiï(iììiíïî) {
      var iìiìïíi = iiîíiii._main;
      var iíïîìíi = 0;
      var iiîiiïi = 0;
      try {
        var iìíïiíi = iìiìïíi(iíïîìíi, iiîiiïi);
        iiïìíïi(iìíïiíi, true);
      } catch (iîiîíïí) {
        if (iîiîíïí instanceof iìïíïìí) {
          return;
        } else if (iîiîíïí == "unwind") {
          return;
        } else {
          var iïïìiìî = iîiîíïí;
          if (iîiîíïí && typeof iîiîíïí === "object" && iîiîíïí.stack) {
            iïïìiìî = [iîiîíïí, iîiîíïí.stack];
          }
          iìïîîii("exception thrown: " + iïïìiìî);
          iiiïïïi(1, iîiîíïí);
        }
      } finally {
        iììïïiî = true;
      }
    }
    function iïïìîii(iìííiìî) {
      iìííiìî = iìííiìî || iiììîíí;
      if (iííììïì > 0) {
        return;
      }
      iiiííii();
      if (iííììïì > 0) {
        return;
      }
      function iiîïíîï() {
        if (iîìííïi) {
          return;
        }
        iîìííïi = true;
        iiîíiii.calledRun = true;
        if (iiìíîií) {
          return;
        }
        iíîïîií();
        iíiííìì();
        iïiïiìí(iiîíiii);
        if (iïìiiíi) {
          iíiiíiï(iìííiìî);
        }
        iìíììiì();
      }
      {
        iiîïíîï();
      }
    }
    iiîíiii.run = iïïìîii;
    function iiïìíïi(iïiîïïi, iïìiíii) {
      iïîïììî = iïiîïïi;
      if (iïìiíii && iiïiíîì() && iïiîïïi === 0) {
        return;
      }
      if (iiïiíîì()) {} else {
        iíîííîi();
        iiìíîií = true;
      }
      iiiïïïi(iïiîïïi, new iìïíïìí(iïiîïïi));
    }
    var iïìiiíi = true;
    iïïìîii();
    return iiîíiii.ready;
  };
}();
export default iiiíìîï;
