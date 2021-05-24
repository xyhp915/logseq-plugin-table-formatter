// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1LeZo":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "0bfee61524d7001e2e61c486f9285138";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"23gUJ":[function(require,module,exports) {
require('@logseq/libs');
var _helper = require('./helper');
class MarkdownTableSpliter {
  /**
  * @private
  */
  _splits = [];
  /**
  * @param _input
  */
  constructor(_input) {
    this._input = _input;
    this.parse();
  }
  parse() {
    const input = this._input.trim();
    if (!input) {
      this._splits = [];
    }
    // read line by line
    const lines = input.split(/\r?\n/);
    // group Adjacent table marks
    let s = this._splits;
    this._splits = lines.reduce((acc, line) => {
      const isTableMarkLine = line.trim().includes('|');
      const activeGroup = acc[acc.length - 1];
      if (!activeGroup || isTableMarkLine !== activeGroup.table) {
        acc.push({
          table: isTableMarkLine,
          value: line
        });
      } else {
        activeGroup.value += '\n' + line;
      }
      return acc;
    }, []);
  }
  format() {
    const outputs = this.splits.map(it => {
      if (!it.table) return it.value;
      return MarkdownTableSpliter.parseTableStr(it.value).format();
    });
    return outputs;
  }
  static parseTableStr(str) {
    let valid = true;
    if (!str || !str.trim()) {
      str = '';
      valid = false;
    }
    const lines = str.split(/\r?\n/);
    const rows = lines.map(it => {
      return it.trim().replace(/^\|/, '').replace(/\|$/, '').split('|');
    });
    // 0. validate Head & Head Divider TODO: auto completion
    if (rows.length < 3 || rows[0].length !== rows[1].length || rows[1].some(it => -1 === it.indexOf('---'))) {
      valid = false;
    }
    const headRow = rows[0];
    const SPACE = ' ';
    const format = () => {
      if (!valid) return str;
      let retRows = rows.map(row => [...row]);
      // 1. repeat cols and fill SPACE in field by Max width field
      headRow.forEach((_, col) => {
        const maxWidth = Math.max(...retRows.map(row => {
          const f = row[col] = (row[col] || '').trim();
          return !f ? 0 : _helper.stringWidth(f);
        }));
        // pad SPACE
        retRows.forEach((row, i) => {
          const isDivideRow = i === 1;
          if (isDivideRow) {
            const alignFlagLen = row[col].replace(/-+/g, '').length;
            row[col] = row[col].replace(/-+/, ('-').repeat(Math.max(maxWidth - alignFlagLen, 3)));
          } else {
            row[col] += SPACE.repeat(maxWidth - _helper.stringWidth(row[col]));
          }
        });
      });
      return retRows.map(row => '| ' + row.join(' | ')).join(' |\n') + ' |';
    };
    return {
      format
    };
  }
  get splits() {
    return this._splits;
  }
}
/**
* entry
*/
function main() {
  logseq.Editor.registerSlashCommand('🪄 format table', [['editor/clear-current-slash'], ['editor/hook', async () => {
    const b = await logseq.Editor.getCurrentBlock();
    if (!b?.content) return;
    const output = new MarkdownTableSpliter(b.content).format();
    await logseq.Editor.updateBlock(b.uuid, output.join('\n'));
    logseq.App.showMsg('formatter');
  }]]);
}
// bootstrap
logseq.ready({}).then(main);

},{"@logseq/libs":"tjTSh","./helper":"3bVkf"}],"tjTSh":[function(require,module,exports) {
var define;
var process = require("process");
/*! For license information please see lsplugin.user.js.LICENSE.txt*/
!(function (e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.LSPluginEntry = t() : e.LSPluginEntry = t();
})(self, function () {
  return (() => {
    var e = {
      227: (e, t, n) => {
        (t.formatArgs = function (t) {
          if ((t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors)) return;
          const n = "color: " + this.color;
          t.splice(1, 0, n, "color: inherit");
          let s = 0, r = 0;
          (t[0].replace(/%[a-zA-Z%]/g, e => {
            "%%" !== e && (s++, "%c" === e && (r = s));
          }), t.splice(r, 0, n));
        }, t.save = function (e) {
          try {
            e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug");
          } catch (e) {}
        }, t.load = function () {
          let e;
          try {
            e = t.storage.getItem("debug");
          } catch (e) {}
          return (!e && "undefined" != typeof process && ("env" in process) && (e = undefined), e);
        }, t.useColors = function () {
          return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type && !window.process.__nwjs) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
        }, t.storage = (function () {
          try {
            return localStorage;
          } catch (e) {}
        })(), t.destroy = (() => {
          let e = !1;
          return () => {
            e || (e = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
          };
        })(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t.log = console.debug || console.log || (() => {}), e.exports = n(447)(t));
        const {formatters: s} = e.exports;
        s.j = function (e) {
          try {
            return JSON.stringify(e);
          } catch (e) {
            return "[UnexpectedJSONParseError]: " + e.message;
          }
        };
      },
      447: (e, t, n) => {
        e.exports = function (e) {
          function t(e) {
            let n, r = null;
            function o(...e) {
              if (!o.enabled) return;
              const s = o, r = Number(new Date()), i = r - (n || r);
              (s.diff = i, s.prev = n, s.curr = r, n = r, e[0] = t.coerce(e[0]), "string" != typeof e[0] && e.unshift("%O"));
              let a = 0;
              (e[0] = e[0].replace(/%([a-zA-Z%])/g, (n, r) => {
                if ("%%" === n) return "%";
                a++;
                const o = t.formatters[r];
                if ("function" == typeof o) {
                  const t = e[a];
                  (n = o.call(s, t), e.splice(a, 1), a--);
                }
                return n;
              }), t.formatArgs.call(s, e), (s.log || t.log).apply(s, e));
            }
            return (o.namespace = e, o.useColors = t.useColors(), o.color = t.selectColor(e), o.extend = s, o.destroy = t.destroy, Object.defineProperty(o, "enabled", {
              enumerable: !0,
              configurable: !1,
              get: () => null === r ? t.enabled(e) : r,
              set: e => {
                r = e;
              }
            }), "function" == typeof t.init && t.init(o), o);
          }
          function s(e, n) {
            const s = t(this.namespace + (void 0 === n ? ":" : n) + e);
            return (s.log = this.log, s);
          }
          function r(e) {
            return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*");
          }
          return (t.debug = t, t.default = t, t.coerce = function (e) {
            return e instanceof Error ? e.stack || e.message : e;
          }, t.disable = function () {
            const e = [...t.names.map(r), ...t.skips.map(r).map(e => "-" + e)].join(",");
            return (t.enable(""), e);
          }, t.enable = function (e) {
            let n;
            (t.save(e), t.names = [], t.skips = []);
            const s = ("string" == typeof e ? e : "").split(/[\s,]+/), r = s.length;
            for (n = 0; n < r; n++) s[n] && ("-" === (e = s[n].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")));
          }, t.enabled = function (e) {
            if ("*" === e[e.length - 1]) return !0;
            let n, s;
            for ((n = 0, s = t.skips.length); n < s; n++) if (t.skips[n].test(e)) return !1;
            for ((n = 0, s = t.names.length); n < s; n++) if (t.names[n].test(e)) return !0;
            return !1;
          }, t.humanize = n(824), t.destroy = function () {
            console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
          }, Object.keys(e).forEach(n => {
            t[n] = e[n];
          }), t.names = [], t.skips = [], t.formatters = {}, t.selectColor = function (e) {
            let n = 0;
            for (let t = 0; t < e.length; t++) (n = (n << 5) - n + e.charCodeAt(t), n |= 0);
            return t.colors[Math.abs(n) % t.colors.length];
          }, t.enable(t.load()), t);
        };
      },
      729: e => {
        "use strict";
        var t = Object.prototype.hasOwnProperty, n = "~";
        function s() {}
        function r(e, t, n) {
          (this.fn = e, this.context = t, this.once = n || !1);
        }
        function o(e, t, s, o, i) {
          if ("function" != typeof s) throw new TypeError("The listener must be a function");
          var a = new r(s, o || e, i), c = n ? n + t : t;
          return (e._events[c] ? e._events[c].fn ? e._events[c] = [e._events[c], a] : e._events[c].push(a) : (e._events[c] = a, e._eventsCount++), e);
        }
        function i(e, t) {
          0 == --e._eventsCount ? e._events = new s() : delete e._events[t];
        }
        function a() {
          (this._events = new s(), this._eventsCount = 0);
        }
        (Object.create && (s.prototype = Object.create(null), new s().__proto__ || (n = !1)), a.prototype.eventNames = function () {
          var e, s, r = [];
          if (0 === this._eventsCount) return r;
          for (s in e = this._events) t.call(e, s) && r.push(n ? s.slice(1) : s);
          return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(e)) : r;
        }, a.prototype.listeners = function (e) {
          var t = n ? n + e : e, s = this._events[t];
          if (!s) return [];
          if (s.fn) return [s.fn];
          for (var r = 0, o = s.length, i = new Array(o); r < o; r++) i[r] = s[r].fn;
          return i;
        }, a.prototype.listenerCount = function (e) {
          var t = n ? n + e : e, s = this._events[t];
          return s ? s.fn ? 1 : s.length : 0;
        }, a.prototype.emit = function (e, t, s, r, o, i) {
          var a = n ? n + e : e;
          if (!this._events[a]) return !1;
          var c, l, u = this._events[a], d = arguments.length;
          if (u.fn) {
            switch ((u.once && this.removeListener(e, u.fn, void 0, !0), d)) {
              case 1:
                return (u.fn.call(u.context), !0);
              case 2:
                return (u.fn.call(u.context, t), !0);
              case 3:
                return (u.fn.call(u.context, t, s), !0);
              case 4:
                return (u.fn.call(u.context, t, s, r), !0);
              case 5:
                return (u.fn.call(u.context, t, s, r, o), !0);
              case 6:
                return (u.fn.call(u.context, t, s, r, o, i), !0);
            }
            for ((l = 1, c = new Array(d - 1)); l < d; l++) c[l - 1] = arguments[l];
            u.fn.apply(u.context, c);
          } else {
            var h, p = u.length;
            for (l = 0; l < p; l++) switch ((u[l].once && this.removeListener(e, u[l].fn, void 0, !0), d)) {
              case 1:
                u[l].fn.call(u[l].context);
                break;
              case 2:
                u[l].fn.call(u[l].context, t);
                break;
              case 3:
                u[l].fn.call(u[l].context, t, s);
                break;
              case 4:
                u[l].fn.call(u[l].context, t, s, r);
                break;
              default:
                if (!c) for ((h = 1, c = new Array(d - 1)); h < d; h++) c[h - 1] = arguments[h];
                u[l].fn.apply(u[l].context, c);
            }
          }
          return !0;
        }, a.prototype.on = function (e, t, n) {
          return o(this, e, t, n, !1);
        }, a.prototype.once = function (e, t, n) {
          return o(this, e, t, n, !0);
        }, a.prototype.removeListener = function (e, t, s, r) {
          var o = n ? n + e : e;
          if (!this._events[o]) return this;
          if (!t) return (i(this, o), this);
          var a = this._events[o];
          if (a.fn) a.fn !== t || r && !a.once || s && a.context !== s || i(this, o); else {
            for (var c = 0, l = [], u = a.length; c < u; c++) (a[c].fn !== t || r && !a[c].once || s && a[c].context !== s) && l.push(a[c]);
            l.length ? this._events[o] = 1 === l.length ? l[0] : l : i(this, o);
          }
          return this;
        }, a.prototype.removeAllListeners = function (e) {
          var t;
          return (e ? (t = n ? n + e : e, this._events[t] && i(this, t)) : (this._events = new s(), this._eventsCount = 0), this);
        }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = n, a.EventEmitter = a, e.exports = a);
      },
      824: e => {
        var t = 1e3, n = 60 * t, s = 60 * n, r = 24 * s;
        function o(e, t, n, s) {
          var r = t >= 1.5 * n;
          return Math.round(e / n) + " " + s + (r ? "s" : "");
        }
        e.exports = function (e, i) {
          i = i || ({});
          var a, c, l = typeof e;
          if ("string" === l && e.length > 0) return (function (e) {
            if (!((e = String(e)).length > 100)) {
              var o = (/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i).exec(e);
              if (o) {
                var i = parseFloat(o[1]);
                switch ((o[2] || "ms").toLowerCase()) {
                  case "years":
                  case "year":
                  case "yrs":
                  case "yr":
                  case "y":
                    return 315576e5 * i;
                  case "weeks":
                  case "week":
                  case "w":
                    return 6048e5 * i;
                  case "days":
                  case "day":
                  case "d":
                    return i * r;
                  case "hours":
                  case "hour":
                  case "hrs":
                  case "hr":
                  case "h":
                    return i * s;
                  case "minutes":
                  case "minute":
                  case "mins":
                  case "min":
                  case "m":
                    return i * n;
                  case "seconds":
                  case "second":
                  case "secs":
                  case "sec":
                  case "s":
                    return i * t;
                  case "milliseconds":
                  case "millisecond":
                  case "msecs":
                  case "msec":
                  case "ms":
                    return i;
                  default:
                    return;
                }
              }
            }
          })(e);
          if ("number" === l && isFinite(e)) return i.long ? (a = e, (c = Math.abs(a)) >= r ? o(a, c, r, "day") : c >= s ? o(a, c, s, "hour") : c >= n ? o(a, c, n, "minute") : c >= t ? o(a, c, t, "second") : a + " ms") : (function (e) {
            var o = Math.abs(e);
            return o >= r ? Math.round(e / r) + "d" : o >= s ? Math.round(e / s) + "h" : o >= n ? Math.round(e / n) + "m" : o >= t ? Math.round(e / t) + "s" : e + "ms";
          })(e);
          throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e));
        };
      }
    }, t = {};
    function n(s) {
      if (t[s]) return t[s].exports;
      var r = t[s] = {
        exports: {}
      };
      return (e[s](r, r.exports, n), r.exports);
    }
    (n.n = e => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return (n.d(t, {
        a: t
      }), t);
    }, n.d = (e, t) => {
      for (var s in t) n.o(t, s) && !n.o(e, s) && Object.defineProperty(e, s, {
        enumerable: !0,
        get: t[s]
      });
    }, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.r = e => {
      ("undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      }));
    });
    var s = {};
    return ((() => {
      "use strict";
      function e(e) {
        return e === Object(e) && !Array.isArray(e);
      }
      function t(n, ...s) {
        if (!s.length) return n;
        const r = n;
        if (e(r)) {
          const n = s.length;
          for (let o = 0; o < n; o += 1) {
            const n = s[o];
            if (e(n)) for (const s in n) n.hasOwnProperty(s) && (e(n[s]) ? (r[s] && e(r[s]) || (r[s] = {}), t(r[s], n[s])) : Array.isArray(r[s]) && Array.isArray(n[s]) ? r[s] = Array.from(new Set(r[s].concat(n[s]))) : r[s] = n[s]);
          }
        }
        return r;
      }
      function r(e, t) {
        let n, s, r = !1;
        const o = t => n => {
          (e && clearTimeout(e), t(n), r = !0);
        }, i = new Promise((r, i) => {
          (n = o(r), s = o(i), e && (e = setTimeout(() => s(new Error(`[deferred timeout] ${t}`)), e)));
        });
        return {
          created: Date.now(),
          setTag: e => t = e,
          resolve: n,
          reject: s,
          promise: i,
          get settled() {
            return r;
          }
        };
      }
      (n.r(s), n.d(s, {
        LSPluginUser: () => U,
        setupPluginUserInstance: () => $
      }));
      var o = "application/x-postmate-v1+json", i = 0, a = {
        handshake: 1,
        "handshake-reply": 1,
        call: 1,
        emit: 1,
        reply: 1,
        request: 1
      }, c = function (e, t) {
        return !("string" == typeof t && e.origin !== t || !e.data || "object" == typeof e.data && !(("postmate" in e.data)) || e.data.type !== o || !a[e.data.postmate]);
      }, l = (function () {
        function e(e) {
          var t = this;
          (this.parent = e.parent, this.frame = e.frame, this.child = e.child, this.childOrigin = e.childOrigin, this.events = {}, this.listener = function (e) {
            if (!c(e, t.childOrigin)) return !1;
            var n = ((e || ({})).data || ({})).value || ({}), s = n.data, r = n.name;
            "emit" === e.data.postmate && (r in t.events) && t.events[r].call(t, s);
          }, this.parent.addEventListener("message", this.listener, !1));
        }
        var t = e.prototype;
        return (t.get = function (e) {
          var t = this;
          return new d.Promise(function (n) {
            var s = ++i;
            (t.parent.addEventListener("message", function e(r) {
              r.data.uid === s && "reply" === r.data.postmate && (t.parent.removeEventListener("message", e, !1), n(r.data.value));
            }, !1), t.child.postMessage({
              postmate: "request",
              type: o,
              property: e,
              uid: s
            }, t.childOrigin));
          });
        }, t.call = function (e, t) {
          this.child.postMessage({
            postmate: "call",
            type: o,
            property: e,
            data: t
          }, this.childOrigin);
        }, t.on = function (e, t) {
          this.events[e] = t;
        }, t.destroy = function () {
          (window.removeEventListener("message", this.listener, !1), this.frame.parentNode.removeChild(this.frame));
        }, e);
      })(), u = (function () {
        function e(e) {
          var t = this;
          (this.model = e.model, this.parent = e.parent, this.parentOrigin = e.parentOrigin, this.child = e.child, this.child.addEventListener("message", function (e) {
            if (c(e, t.parentOrigin)) {
              var n = e.data, s = n.property, r = n.uid, i = n.data;
              "call" !== e.data.postmate ? (function (e, t) {
                var n = "function" == typeof e[t] ? e[t]() : e[t];
                return d.Promise.resolve(n);
              })(t.model, s).then(function (t) {
                return e.source.postMessage({
                  property: s,
                  postmate: "reply",
                  type: o,
                  uid: r,
                  value: t
                }, e.origin);
              }) : (s in t.model) && "function" == typeof t.model[s] && t.model[s](i);
            }
          }));
        }
        return (e.prototype.emit = function (e, t) {
          this.parent.postMessage({
            postmate: "emit",
            type: o,
            value: {
              name: e,
              data: t
            }
          }, this.parentOrigin);
        }, e);
      })(), d = (function () {
        function e(e) {
          var t = e.container, n = void 0 === t ? void 0 !== n ? n : document.body : t, s = e.model, r = e.url, o = e.name, i = e.classListArray, a = void 0 === i ? [] : i;
          return (this.parent = window, this.frame = document.createElement("iframe"), this.frame.name = o || "", this.frame.classList.add.apply(this.frame.classList, a), n.appendChild(this.frame), this.child = this.frame.contentWindow || this.frame.contentDocument.parentWindow, this.model = s || ({}), this.sendHandshake(r));
        }
        return (e.prototype.sendHandshake = function (t) {
          var n, s = this, r = (function (e) {
            var t = document.createElement("a");
            t.href = e;
            var n = t.protocol.length > 4 ? t.protocol : window.location.protocol, s = t.host.length ? "80" === t.port || "443" === t.port ? t.hostname : t.host : window.location.host;
            return t.origin || n + "//" + s;
          })(t), i = 0;
          return new e.Promise(function (e, a) {
            s.parent.addEventListener("message", function t(o) {
              return !!c(o, r) && ("handshake-reply" === o.data.postmate ? (clearInterval(n), s.parent.removeEventListener("message", t, !1), s.childOrigin = o.origin, e(new l(s))) : a("Failed handshake"));
            }, !1);
            var u = function () {
              (i++, s.child.postMessage({
                postmate: "handshake",
                type: o,
                model: s.model
              }, r), 5 === i && clearInterval(n));
            }, d = function () {
              (u(), n = setInterval(u, 500));
            };
            (s.frame.attachEvent ? s.frame.attachEvent("onload", d) : s.frame.onload = d, s.frame.src = t);
          });
        }, e);
      })();
      (d.debug = !1, d.Promise = (function () {
        try {
          return window ? window.Promise : Promise;
        } catch (e) {
          return null;
        }
      })(), d.Model = (function () {
        function e(e) {
          return (this.child = window, this.model = e, this.parent = this.child.parent, this.sendHandshakeReply());
        }
        return (e.prototype.sendHandshakeReply = function () {
          var e = this;
          return new d.Promise(function (t, n) {
            e.child.addEventListener("message", function s(r) {
              if (r.data.postmate) {
                if ("handshake" === r.data.postmate) {
                  (e.child.removeEventListener("message", s, !1), r.source.postMessage({
                    postmate: "handshake-reply",
                    type: o
                  }, r.origin), e.parentOrigin = r.origin);
                  var i = r.data.model;
                  return (i && Object.keys(i).forEach(function (t) {
                    e.model[t] = i[t];
                  }), t(new u(e)));
                }
                return n("Handshake Reply Failed");
              }
            }, !1);
          });
        }, e);
      })());
      const h = d;
      var p = n(729), f = n.n(p), m = n(227), g = n.n(m);
      const {importHTML: y, createSandboxContainer: v} = window.QSandbox || ({});
      function C(e, t) {
        return e.startsWith("http") ? fetch(e, t) : (e = e.replace("file://", ""), new Promise(async (t, n) => {
          try {
            const n = await window.apis.doAction(["readFile", e]);
            t({
              text: () => n
            });
          } catch (e) {
            (console.error(e), n(e));
          }
        }));
      }
      class _ extends f() {
        constructor(e) {
          (super(), this._pluginLocal = e, this._loaded = !1, this._unmountFns = [], e._dispose(() => {
            this._unmount();
          }));
        }
        async load() {
          const {name: e, entry: t} = this._pluginLocal.options;
          if (this.loaded || !t) return;
          const {template: n, execScripts: s} = await y(t, {
            fetch: C
          });
          this._mount(n, document.body);
          const r = v(e, {
            elementGetter: () => this._root?.firstChild
          }).instance.proxy;
          (r.__shadow_mode__ = !0, r.LSPluginLocal = this._pluginLocal, r.LSPluginShadow = this, r.LSPluginUser = r.logseq = new U(this._pluginLocal.toJSON(), this._pluginLocal.caller));
          const o = await s(r, !0);
          (this._unmountFns.push(o.unmount), this._loaded = !0);
        }
        _mount(e, t) {
          const n = this._frame = document.createElement("div");
          (n.classList.add("lsp-shadow-sandbox"), n.id = this._pluginLocal.id, this._root = n.attachShadow({
            mode: "open"
          }), this._root.innerHTML = `<div>${e}</div>`, t.appendChild(n), this.emit("mounted"));
        }
        _unmount() {
          for (const e of this._unmountFns) e && e.call(null);
        }
        destroy() {
          this.frame?.parentNode?.removeChild?.(this.frame);
        }
        get loaded() {
          return this._loaded;
        }
        get document() {
          return this._root?.firstChild;
        }
        get frame() {
          return this._frame;
        }
      }
      const w = g()("LSPlugin:caller"), b = "#lspmsg#error#", F = e => `#lspmsg#${e}`;
      class x extends f() {
        constructor(e) {
          (super(), this._pluginLocal = e, this._connected = !1, this._userModel = {});
        }
        async connectToChild() {
          if (this._connected) return;
          const {shadow: e} = this._pluginLocal;
          e ? await this._setupShadowSandbox() : await this._setupIframeSandbox();
        }
        async connectToParent(e = {}) {
          if (this._connected) return;
          const t = this, n = null != this._pluginLocal;
          let s = 0, o = 0;
          const i = new Map(), a = r(), c = this._extendUserModel({
            "#lspmsg#ready#": async () => {
              await a.resolve();
            },
            "#lspmsg#settings#": async ({type: e, payload: n}) => {
              t.emit("settings:changed", n);
            },
            "#lspmsg#": async ({ns: e, type: n, payload: s}) => {
              (w(`[call from host #${this._pluginLocal?.id}]`, e, n, s), e && e.startsWith("hook") ? t.emit(`${e}:${n}`, s) : t.emit(n, s));
            },
            "#lspmsg#reply#": ({_sync: e, result: t}) => {
              if ((w(`sync reply #${e}`, t), i.has(e))) {
                const n = i.get(e);
                n && (t?.hasOwnProperty?.(b) ? n.reject(t[b]) : n.resolve(t), i.delete(e));
              }
            },
            ...e
          });
          if (n) return (await a.promise, JSON.parse(JSON.stringify(this._pluginLocal?.toJSON?.())));
          const l = new h.Model(c);
          return (this._status = "pending", await l.then(e => {
            (this._child = e, this._connected = !0, this._call = async (t, n = {}, s) => {
              if (s) {
                const e = ++o;
                (i.set(e, s), n._sync = e, s.setTag(`async call #${e}`), w("async call #", e));
              }
              return (e.emit(F(c.baseInfo.id), {
                type: t,
                payload: n
              }), s?.promise);
            }, this._callUserModel = async (e, t) => {
              try {
                c[e](t);
              } catch (t) {
                w(`model method #${e} not existed`);
              }
            }, s = setInterval(() => {
              if (i.size > 100) for (const [e, t] of i) t.settled && i.delete(e);
            }, 18e5));
          }).finally(() => {
            this._status = void 0;
          }), await a.promise, c.baseInfo);
        }
        async call(e, t = {}) {
          return (this.emit(e, t), this._call?.call?.(this, e, t));
        }
        async callAsync(e, t = {}) {
          const n = r(1e4);
          return this._call?.call?.(this, e, t, n);
        }
        async callUserModel(e, t = {}) {
          return this._callUserModel?.call?.(this, e, t);
        }
        async _setupIframeSandbox() {
          const e = this._pluginLocal, t = new h({
            container: document.body,
            url: e.options.entry,
            classListArray: ["lsp-iframe-sandbox"],
            model: {
              baseInfo: JSON.parse(JSON.stringify(e.toJSON()))
            }
          });
          let n;
          return (this._status = "pending", new Promise((s, r) => {
            (n = setTimeout(() => {
              r(new Error("handshake Timeout"));
            }, 3e3), t.then(t => {
              (this._parent = t, this._connected = !0, this.emit("connected"), t.frame.setAttribute("id", e.id), t.on(F(e.id), ({type: e, payload: t}) => {
                (w("[call from plugin] ", e, t), this._pluginLocal?.emit?.(e, t || ({})));
              }), this._call = async (...n) => {
                await t.call(F(e.id), {
                  type: n[0],
                  payload: n[1] || ({})
                });
              }, this._callUserModel = async (...e) => {
                await t.call(e[0], e[1] || ({}));
              }, s(null));
            }).catch(e => {
              r(e);
            }).finally(() => {
              clearTimeout(n);
            }));
          }).catch(e => {
            throw (w("iframe sandbox error", e), e);
          }).finally(() => {
            this._status = void 0;
          }));
        }
        async _setupShadowSandbox() {
          const e = this._pluginLocal, t = this._shadow = new _(e);
          try {
            (this._status = "pending", await t.load(), this._connected = !0, this.emit("connected"), this._call = async (e, t = {}, n) => (n && (t.actor = n), this._pluginLocal?.emit?.(e, t), n?.promise), this._callUserModel = async (...e) => {
              const t = e[0], n = e[1] || ({}), s = this._userModel[t];
              "function" == typeof s && await s.call(null, n);
            });
          } catch (e) {
            throw (w("shadow sandbox error", e), e);
          } finally {
            this._status = void 0;
          }
        }
        _extendUserModel(e) {
          return Object.assign(this._userModel, e);
        }
        _getSandboxIframeContainer() {
          return this._parent?.frame;
        }
        _getSandboxShadowContainer() {
          return this._shadow?.frame;
        }
        async destroy() {
          (this._parent && await this._parent.destroy(), this._shadow && this._shadow.destroy());
        }
      }
      var L = function () {
        return (L = Object.assign || (function (e) {
          for (var t, n = 1, s = arguments.length; n < s; n++) for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          return e;
        })).apply(this, arguments);
      };
      function S(e) {
        return e.toLowerCase();
      }
      (Object.create, Object.create);
      var O = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g], k = /[^A-Z0-9]+/gi;
      function M(e, t, n) {
        return t instanceof RegExp ? e.replace(t, n) : t.reduce(function (e, t) {
          return e.replace(t, n);
        }, e);
      }
      const P = g()("LSPlugin:user"), E = {};
      let I = 0;
      const A = {
        registerSlashCommand(e, t) {
          return (P("Register slash command #", this.baseInfo.id, e, t), t = t.map(e => {
            const [t, ...n] = e;
            switch (t) {
              case "editor/hook":
                let s = n[0], r = () => {
                  this.caller?.callUserModel?.(s);
                };
                "function" == typeof s && (r = s);
                const o = `SlashCommandHook${t}${++I}`;
                (e[1] = o, this.Editor["on" + o](r));
            }
            return e;
          }), this.caller?.call?.("api:call", {
            method: "register-plugin-slash-command",
            args: [this.baseInfo.id, [e, t]]
          }), !1);
        },
        registerBlockContextMenu(e, t) {
          if ("function" != typeof t) return !1;
          const n = e, s = e, r = `SimpleCommandHook${e}${++I}`;
          return (this.Editor["on" + r](t), this.caller?.call?.("api:call", {
            method: "register-plugin-simple-command",
            args: [this.baseInfo.id, [{
              key: n,
              label: s,
              type: "block-context-menu"
            }, ["editor/hook", r]]]
          }), !1);
        }
      }, j = {};
      class U extends f() {
        constructor(e, t) {
          (super(), this._baseInfo = e, this._caller = t, this._connected = !1, this._ui = new Map(), t.on("settings:changed", e => {
            const t = Object.assign({}, this.settings), n = Object.assign(this._baseInfo.settings, e);
            this.emit("settings:changed", {
              ...n
            }, t);
          }));
        }
        async ready(e, n) {
          if (!this._connected) try {
            "function" == typeof e && (n = e, e = {});
            let s = await this._caller.connectToParent(e);
            (s = t(this._baseInfo, s), this._connected = !0, n && n.call(this, s));
          } catch (e) {
            console.error("[LSPlugin Ready Error]", e);
          }
        }
        provideModel(e) {
          return (this.caller._extendUserModel(e), this);
        }
        provideTheme(e) {
          return (this.caller.call("provider:theme", e), this);
        }
        provideStyle(e) {
          return (this.caller.call("provider:style", e), this);
        }
        provideUI(e) {
          return (this.caller.call("provider:ui", e), this);
        }
        updateSettings(e) {
          this.caller.call("settings:update", e);
        }
        setMainUIAttrs(e) {
          this.caller.call("main-ui:attrs", e);
        }
        setMainUIInlineStyle(e) {
          this.caller.call("main-ui:style", e);
        }
        hideMainUI() {
          const e = {
            key: 0,
            visible: !1
          };
          (this.caller.call("main-ui:visible", e), this.emit("ui:visible:changed", e), this._ui.set(e.key, e));
        }
        showMainUI() {
          const e = {
            key: 0,
            visible: !0
          };
          (this.caller.call("main-ui:visible", e), this.emit("ui:visible:changed", e), this._ui.set(e.key, e));
        }
        toggleMainUI() {
          const e = this._ui.get(0);
          e && e.visible ? this.hideMainUI() : this.showMainUI();
        }
        get isMainUIVisible() {
          const e = this._ui.get(0);
          return Boolean(e && e.visible);
        }
        get connected() {
          return this._connected;
        }
        get baseInfo() {
          return this._baseInfo;
        }
        get settings() {
          return this.baseInfo?.settings;
        }
        get caller() {
          return this._caller;
        }
        _makeUserProxy(e, t) {
          const n = this, s = this.caller;
          return new Proxy(e, {
            get(e, r, o) {
              const i = e[r];
              return function (...e) {
                if (!i || !1 !== i.apply(n, e)) {
                  if (t) {
                    const n = r.toString().match(/^(once|off|on)/i);
                    if (null != n) {
                      const r = n[0], i = n.input.slice(r.length);
                      return void s[r.toLowerCase()](`hook:${t}:${(o = i, void 0 === a && (a = {}), (function (e, t) {
                        return (void 0 === t && (t = {}), (function (e, t) {
                          void 0 === t && (t = {});
                          for (var n = t.splitRegexp, s = void 0 === n ? O : n, r = t.stripRegexp, o = void 0 === r ? k : r, i = t.transform, a = void 0 === i ? S : i, c = t.delimiter, l = void 0 === c ? " " : c, u = M(M(e, s, "$1\0$2"), o, "\0"), d = 0, h = u.length; "\0" === u.charAt(d); ) d++;
                          for (; "\0" === u.charAt(h - 1); ) h--;
                          return u.slice(d, h).split("\0").map(a).join(l);
                        })(e, L({
                          delimiter: "."
                        }, t)));
                      })(o, L({
                        delimiter: "_"
                      }, a)))}`, e[0]);
                    }
                  }
                  var o, a;
                  return s.callAsync("api:call", {
                    method: r,
                    args: e
                  });
                }
              };
            }
          });
        }
        get App() {
          return this._makeUserProxy(E, "app");
        }
        get Editor() {
          return this._makeUserProxy(A, "editor");
        }
        get DB() {
          return this._makeUserProxy(j);
        }
      }
      function $(e, t) {
        return new U(e, t);
      }
      if (null == window.__LSP__HOST__) {
        const e = new x(null);
        window.logseq = $({}, e);
      }
    })(), s);
  })();
});

},{"process":"7AgFc"}],"7AgFc":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}
(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }
  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();
function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    // normal enviroments in sane situations
    return setTimeout(fun, 0);
  }
  // if setTimeout wasn't available but was latter defined
  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }
  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}
function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    // normal enviroments in sane situations
    return clearTimeout(marker);
  }
  // if clearTimeout wasn't available but was latter defined
  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }
  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }
  draining = false;
  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }
  if (queue.length) {
    drainQueue();
  }
}
function drainQueue() {
  if (draining) {
    return;
  }
  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;
  while (len) {
    currentQueue = queue;
    queue = [];
    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }
    queueIndex = -1;
    len = queue.length;
  }
  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}
process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }
  queue.push(new Item(fun, args));
  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
};
// v8 likes predictible objects
function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}
Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = '';
// empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function (name) {
  return [];
};
process.binding = function (name) {
  throw new Error('process.binding is not supported');
};
process.cwd = function () {
  return '/';
};
process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};
process.umask = function () {
  return 0;
};

},{}],"3bVkf":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "ansiRegex", function () {
  return ansiRegex;
});
_parcelHelpers.export(exports, "isFullwidthCodePoint", function () {
  return isFullwidthCodePoint;
});
_parcelHelpers.export(exports, "emojiRegex", function () {
  return emojiRegex;
});
_parcelHelpers.export(exports, "stripAnsi", function () {
  return stripAnsi;
});
_parcelHelpers.export(exports, "stringWidth", function () {
  return stringWidth;
});
function ansiRegex({onlyFirst = false} = {}) {
  const pattern = ['[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)', '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))'].join('|');
  return new RegExp(pattern, onlyFirst ? undefined : 'g');
}
function isFullwidthCodePoint(codePoint) {
  if (!Number.isInteger(codePoint)) {
    return false;
  }
  // Code points are derived from:
  // https://unicode.org/Public/UNIDATA/EastAsianWidth.txt
  return codePoint >= 0x1100 && (codePoint <= 0x115F || // Hangul Jamo
  codePoint === 0x2329 || // LEFT-POINTING ANGLE BRACKET
  codePoint === 0x232A || // RIGHT-POINTING ANGLE BRACKET
  // CJK Radicals Supplement .. Enclosed CJK Letters and Months
  0x2E80 <= codePoint && codePoint <= 0x3247 && codePoint !== 0x303F || // Enclosed CJK Letters and Months .. CJK Unified Ideographs Extension A
  0x3250 <= codePoint && codePoint <= 0x4DBF || // CJK Unified Ideographs .. Yi Radicals
  0x4E00 <= codePoint && codePoint <= 0xA4C6 || // Hangul Jamo Extended-A
  0xA960 <= codePoint && codePoint <= 0xA97C || // Hangul Syllables
  0xAC00 <= codePoint && codePoint <= 0xD7A3 || // CJK Compatibility Ideographs
  0xF900 <= codePoint && codePoint <= 0xFAFF || // Vertical Forms
  0xFE10 <= codePoint && codePoint <= 0xFE19 || // CJK Compatibility Forms .. Small Form Variants
  0xFE30 <= codePoint && codePoint <= 0xFE6B || // Halfwidth and Fullwidth Forms
  0xFF01 <= codePoint && codePoint <= 0xFF60 || 0xFFE0 <= codePoint && codePoint <= 0xFFE6 || // Kana Supplement
  0x1B000 <= codePoint && codePoint <= 0x1B001 || // Enclosed Ideographic Supplement
  0x1F200 <= codePoint && codePoint <= 0x1F251 || // CJK Unified Ideographs Extension B .. Tertiary Ideographic Plane
  0x20000 <= codePoint && codePoint <= 0x3FFFD);
}
const emojiRegex = function () {
  // https://mths.be/emoji
  return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD1D\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78\uDD7A-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCB\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
};
function stripAnsi(input) {
  if (typeof input !== 'string') {
    throw new TypeError(`Expected a \`string\`, got \`${typeof input}\``);
  }
  return input.replace(ansiRegex(), '');
}
function stringWidth(input) {
  if (typeof input !== 'string' || input.length === 0) {
    return 0;
  }
  input = stripAnsi(input);
  if (input.length === 0) {
    return 0;
  }
  input = input.replace(emojiRegex(), '  ');
  let width = 0;
  for (let index = 0; index < input.length; index++) {
    const codePoint = input.codePointAt(index);
    // Ignore control characters
    if (codePoint <= 0x1F || codePoint >= 0x7F && codePoint <= 0x9F) {
      continue;
    }
    // Ignore combining characters
    if (codePoint >= 0x300 && codePoint <= 0x36F) {
      continue;
    }
    // Surrogates
    if (codePoint > 0xFFFF) {
      index++;
    }
    width += isFullwidthCodePoint(codePoint) ? 2 : 1;
  }
  return width;
}

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"5gA8y":[function(require,module,exports) {
"use strict";

exports.interopDefault = function (a) {
  return a && a.__esModule ? a : {
    default: a
  };
};

exports.defineInteropFlag = function (a) {
  Object.defineProperty(a, '__esModule', {
    value: true
  });
};

exports.exportAll = function (source, dest) {
  Object.keys(source).forEach(function (key) {
    if (key === 'default' || key === '__esModule') {
      return;
    } // Skip duplicate re-exports when they have the same value.


    if (key in dest && dest[key] === source[key]) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function () {
        return source[key];
      }
    });
  });
  return dest;
};

exports.export = function (dest, destName, get) {
  Object.defineProperty(dest, destName, {
    enumerable: true,
    get: get
  });
};
},{}]},["1LeZo","23gUJ"], "23gUJ", "parcelRequirebb95")

//# sourceMappingURL=index.js.map
