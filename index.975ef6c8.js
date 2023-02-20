// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
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
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
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
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"jC2qd":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lqZg":[function(require,module,exports) {
var _uiJs = require("./ui.js");
var _storageJs = require("./storage.js");
var _autocompleteJs = require("./autocomplete.js");
const storage = new (0, _storageJs.Storage)("virtual-clicker-2");
// Version
const VERSION = "2.0";
document.querySelectorAll("span.version").forEach((element)=>{
    element.innerHTML = VERSION;
});
// Modals
const modals = {
    "symbols": ()=>{
        _uiJs.show(document.getElementById("symbols-modal"), "Symbols", [
            new _uiJs.ModalButton("Close", true)
        ]);
    },
    "code": ()=>{
        document.getElementById("code-input").value = storage.get("code") || "";
        _uiJs.show(document.getElementById("code-modal"), "Seat Code", [
            new _uiJs.ModalButton("Cancel", true),
            new _uiJs.ModalButton("Save", false, saveCode)
        ]);
    },
    "code-help": ()=>{
        _uiJs.show(document.getElementById("code-help-modal"), "Seat Code", [
            new _uiJs.ModalButton("Close", true)
        ]);
    },
    "settings": ()=>{
        _uiJs.show(document.getElementById("settings-modal"), "Settings", [
            new _uiJs.ModalButton("Close", true)
        ]);
    },
    "theme": ()=>{
        _uiJs.show(document.getElementById("theme-modal"), "Theme", [
            new _uiJs.ModalButton("Close", true)
        ]);
    },
    "storage": ()=>{
        _uiJs.show(document.getElementById("storage-modal"), "Storage", [
            new _uiJs.ModalButton("Close", true)
        ]);
    },
    "history": ()=>{
        _uiJs.show(document.getElementById("history-modal"), "History", [
            new _uiJs.ModalButton("Close", true)
        ]);
    }
};
document.querySelectorAll("[data-show-modal]").forEach((button)=>{
    button.addEventListener("click", (e)=>{
        modals[e.target.getAttribute("data-show-modal")]();
    });
});
// Seat code
if (!storage.get("code")) modals["code"]();
else updateCode();
document.getElementById("code-input").addEventListener("input", (e)=>{
    e.target.value = parseInt(e.target.value) || "";
});
document.getElementById("code-input").addEventListener("keydown", (e)=>{
    if (e.key == "Enter") {
        e.preventDefault();
        saveCode();
    }
});
function saveCode() {
    const input = document.getElementById("code-input").value;
    const regex = /^[1-9][1-6][1-5]$/;
    if (regex.test(input)) {
        storage.set("code", input);
        updateCode();
        document.getElementById("code-modal").close();
    } else _uiJs.alert("Error", "Seat code isn't possible");
}
function updateCode() {
    if (storage.get("code")) {
        document.querySelectorAll("span.code").forEach((element)=>{
            element.innerHTML = storage.get("code");
        });
        document.title = `Virtual Clicker (${storage.get("code")})`;
    }
}
for(let col = 1; col <= 5; col++)for(let row = 6; row > 0; row--)document.getElementById("seat-grid").append(new _uiJs.Element("button", "", ()=>{
    const period = document.getElementById("period-input").value;
    const code = period + row.toString() + col.toString();
    document.getElementById("code-input").value = code;
    document.getElementById("code-help-modal").close();
}).element);
// Clicker
const questionInput = document.getElementById("question-input");
const answerInput = document.getElementById("answer-input");
questionInput.focus();
document.getElementById("submit-button").addEventListener("click", (e)=>{
    const question = questionInput.value?.trim();
    const answer = answerInput.value?.trim();
    console.log(question, answer);
    if (storage.get("code")) {
        if (question && answer) {
            submitClick(storage.get("code"), question, answer);
            resetInputs();
        }
        if (!question) {
            questionInput.classList.add("attention");
            questionInput.focus();
        }
        if (!answer) answerInput.classList.add("attention");
    } else modals["code"]();
});
questionInput.addEventListener("input", (e)=>{
    e.target.classList.remove("attention");
});
answerInput.addEventListener("input", (e)=>{
    e.target.classList.remove("attention");
});
function submitClick(code, question, answer) {
    const fields = {
        "entry.1896388126": code,
        "entry.1232458460": question,
        "entry.1065046570": answer
    };
    const params = new URLSearchParams(fields).toString();
    const url = "https://docs.google.com/forms/d/e/1FAIpQLSfwDCxVqO2GuB4jhk9iAl7lzoA2TsRlX6hz052XkEHbLrbryg/formResponse?";
    fetch(url + params, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    });
    storeClick(code, question, answer);
}
function resetInputs() {
    questionInput.value = "";
    answerInput.value = "";
    questionInput.focus();
}
// Multiple choice
const descriptions = {
    "a": [
        "Agree",
        "True",
        "Yes"
    ],
    "b": [
        "Disagree",
        "False",
        "No"
    ],
    "c": [
        "Both",
        "Always"
    ],
    "d": [
        "Neither",
        "Never"
    ],
    "e": [
        "Sometimes",
        "Cannot be determined"
    ]
};
document.querySelectorAll("[data-multiple-choice]").forEach((button)=>{
    button.addEventListener("click", (e)=>{
        const question = questionInput.value?.trim();
        const choice = e.target.getAttribute("data-multiple-choice");
        const body = `<p>Are you sure? This is the same as</p>\n${_uiJs.createList(false, descriptions[choice])}`;
        if (storage.get("code")) {
            if (question) _uiJs.modal(`Submit choice ${choice.toUpperCase()}`, body, [
                new _uiJs.ModalButton("Cancel", true),
                new _uiJs.ModalButton("Submit", true, ()=>{
                    submitClick(storage.get("code"), question, `CHOICE ${choice.toUpperCase()}`);
                    questionInput.focus();
                })
            ]);
            if (!question) {
                answerInput.classList.remove("attention");
                questionInput.classList.add("attention");
                questionInput.focus();
            }
        } else modals["code"]();
    });
});
// History
updateHistory();
function storeClick(code, question, answer) {
    const history = storage.get("history") || [];
    const timestamp = Date.now();
    history.push({
        "code": code,
        "question": question,
        "answer": answer,
        "timestamp": timestamp
    });
    storage.set("history", history);
    updateHistory();
}
function updateHistory() {
    const history = storage.get("history") || [];
    const feed = document.getElementById("history-feed");
    if (history.length != 0) {
        feed.innerHTML = "";
        history.forEach((item)=>{
            const button = document.createElement("button");
            button.innerHTML = `<p><b>${item.question}.</b> ${timeToString(item.timestamp)} (${item.code})</p>\n<p>${item.answer}</p>`;
            feed.prepend(button);
            button.addEventListener("click", (e)=>{
                questionInput.value = item.question;
                answerInput.value = item.answer;
                answerInput.dispatchEvent(new Event("input"));
                document.getElementById("history-modal").close();
                questionInput.focus();
            });
        });
    } else feed.innerHTML = "<p>Submitted clicks will show up here!</p>";
}
function timeToString(timestamp) {
    let date = new Date(timestamp);
    if (timestamp) {
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let hours = date.getHours();
        let minutes = date.getMinutes().toString().padStart(2, "0");
        let period;
        if (hours >= 12) {
            hours %= 12;
            period = "PM";
        } else period = "AM";
        if (hours == 0) hours = 12;
        return `${month}/${day} ${hours}:${minutes} ${period}`;
    }
}
// Symbols
new (0, _autocompleteJs.Autocomplete)(answerInput, answerInput.nextElementSibling);
const symbols = require("2b4f5566238bb3ed");
const uniqueSymbols = [
    ...new Set(Object.values(symbols))
];
document.querySelectorAll("[data-insert-symbol]").forEach((button)=>{
    const index = button.getAttribute("data-insert-symbol");
    const symbol = Object.values(symbols)[index];
    button.innerHTML = symbol;
    button.addEventListener("click", (e)=>{
        insertSymbol(symbol);
    });
});
uniqueSymbols.forEach((symbol)=>{
    document.querySelector("#symbols-modal>div").append(new _uiJs.Element("button", symbol, ()=>{
        document.getElementById("symbols-modal").close();
        insertSymbol(symbol);
    }).element);
});
function insertSymbol(symbol) {
    answerInput.setRangeText(symbol, answerInput.selectionStart, answerInput.selectionEnd, "end");
    answerInput.dispatchEvent(new Event("input"));
    answerInput.focus();
}
// Themes
const themes = [
    "classic",
    "abyss",
    "graphite",
    "blizzard",
    "sage",
    "dune",
    "rose",
    "lavender"
];
document.body.setAttribute("data-theme", storage.get("theme") || "");
themes.forEach((theme)=>{
    const button = document.createElement("button");
    button.setAttribute("data-theme", theme);
    button.innerHTML = theme;
    button.addEventListener("click", (e)=>{
        document.body.setAttribute("data-theme", theme);
        storage.set("theme", theme);
    });
    document.querySelector("#theme-modal>div").append(button);
});
// Storage
const resets = {
    "theme": ()=>{
        document.body.removeAttribute("data-theme");
        storage.delete("theme");
    },
    "history": ()=>{
        _uiJs.prompt("Are you sure?", "Click history will be lost forever! (A long time!)", [
            new _uiJs.ModalButton("Cancel", true),
            new _uiJs.ModalButton("Clear", true, ()=>{
                storage.delete("history");
            })
        ]);
    },
    "all": ()=>{
        _uiJs.prompt("Are you sure?", "All saved data will be erased, this cannot be reversed", [
            new _uiJs.ModalButton("Cancel", true),
            new _uiJs.ModalButton("Reset", true, ()=>{
                storage.obliterate();
            })
        ]);
    }
};
document.querySelectorAll("[data-reset]").forEach((button)=>{
    button.addEventListener("click", (e)=>{
        resets[e.target.getAttribute("data-reset")]();
    });
});
// Keyboard shortcuts
document.addEventListener("keydown", (e)=>{
    const anyDialogOpen = Array.from(document.querySelectorAll("dialog")).some((dialog)=>dialog.open);
    if (e.ctrlKey) {
        if (e.key == "Enter" && !anyDialogOpen) document.getElementById("submit-button").click();
        if (e.key == "," && !anyDialogOpen) modals["settings"]();
        if (e.key == "." && !anyDialogOpen) modals["history"]();
    } else if (e.altKey) {
        if (/[1-9]/.test(e.key)) {
            e.preventDefault();
            insertSymbol(uniqueSymbols[parseInt(e.key) - 1]);
        }
    }
});

},{"./ui.js":"h5UjH","./storage.js":"bkDau","./autocomplete.js":"hhzyT","2b4f5566238bb3ed":"8tRKQ"}],"h5UjH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "alert", ()=>alert);
parcelHelpers.export(exports, "prompt", ()=>prompt);
parcelHelpers.export(exports, "modal", ()=>modal);
parcelHelpers.export(exports, "show", ()=>show);
parcelHelpers.export(exports, "ModalButton", ()=>ModalButton);
parcelHelpers.export(exports, "Element", ()=>Element);
parcelHelpers.export(exports, "createList", ()=>createList);
function alert(title, body, callback, blur) {
    modal(title, new Element("p", body).element.outerHTML, [
        new ModalButton("Okay", true, callback)
    ], blur);
}
function prompt(title, body, buttons, blur) {
    modal(title, new Element("p", body).element.outerHTML, buttons, blur);
}
function modal(title, body, buttons, blur) {
    const dialog = document.createElement("dialog");
    const buttonContainer = document.createElement("div");
    buttons.forEach((button)=>{
        buttonContainer.append(new Element("button", button.text, ()=>{
            button.close && dialog.close();
            button.callback && button.callback();
        }).element);
    });
    dialog.append(new Element("h2", title).element);
    dialog.innerHTML += body;
    dialog.append(buttonContainer);
    document.body.append(dialog);
    dialog.showModal();
    blur && buttonContainer.querySelectorAll("button").forEach((button)=>button.blur());
    dialog.addEventListener("close", ()=>{
        dialog.remove();
    });
}
function show(dialog, title, buttons, blur) {
    const titleElement = new Element("h2", title).element;
    const buttonContainer = document.createElement("div");
    buttons.forEach((button)=>{
        buttonContainer.append(new Element("button", button.text, ()=>{
            button.close && dialog.close();
            button.callback && button.callback();
        }).element);
    });
    dialog.open && dialog.close();
    dialog.prepend(titleElement);
    dialog.append(buttonContainer);
    dialog.showModal();
    blur && buttonContainer.querySelectorAll("button").forEach((button)=>button.blur());
    dialog.addEventListener("close", ()=>{
        titleElement.remove();
        buttonContainer.remove();
    });
}
class ModalButton {
    constructor(text, close, callback){
        this.text = text;
        this.close = close;
        this.callback = callback;
    }
}
class Element {
    constructor(tag, text, onclick){
        this.tag = tag;
        this.text = text;
        this.onclick = onclick;
    }
    get element() {
        const element = document.createElement(this.tag);
        element.textContent = this.text;
        this.onclick && element.addEventListener("click", this.onclick);
        return element;
    }
}
function createList(ordered, items) {
    const list = document.createElement(ordered ? "ol" : "ul");
    items.forEach((item)=>{
        list.append(new Element("li", item).element);
    });
    return list.outerHTML;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"bkDau":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Storage", ()=>Storage);
class Storage {
    constructor(id){
        this.id = id;
    }
    set(key, value) {
        let temp = this.object;
        temp[key] = value;
        localStorage.setItem(this.id, JSON.stringify(temp));
        return this;
    }
    get(key) {
        return this.object[key];
    }
    delete(key) {
        let temp = this.object;
        delete temp[key];
        localStorage.setItem(this.id, JSON.stringify(temp));
        return this;
    }
    obliterate() {
        localStorage.removeItem(this.id);
    }
    get object() {
        return JSON.parse(localStorage.getItem(this.id)) || {};
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hhzyT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Autocomplete", ()=>Autocomplete);
const symbols = require("5bc46ed07357a4a");
class Autocomplete {
    #start = 0;
    #end = 0;
    #query = "";
    constructor(input, result){
        this.input = input;
        this.result = result;
        this.input.addEventListener("keydown", (e)=>{
            if (e.key == "Tab" && this.matches.length != 0) {
                e.preventDefault();
                e.target.setRangeText(symbols[this.matches[0]], this.#start, this.#end, "end");
                this.#start = e.target.selectionEnd;
                this.#query = e.target.value.substring(this.#start, this.#end + 1);
            }
            if (e.key == "Escape") {
                this.#start = e.target.selectionEnd;
                this.#query = e.target.value.substring(this.#start, this.#end + 1);
            }
            if (this.#start > this.#end) this.#start = this.#end;
            this.#updateResult();
        });
        this.input.addEventListener("input", (e)=>{
            this.#end = e.target.selectionEnd;
            this.#query = e.target.value.substring(this.#start, this.#end + 1);
            this.#updateResult();
        // console.log(this.#start, this.#end, this.#query, e.target.selectionEnd, this.matches);
        });
    }
    get matches() {
        if (this.#query?.trim()) return Object.keys(symbols).filter((string)=>string.startsWith(this.#query));
        else return [];
    }
    #updateResult() {
        if (this.matches.length != 0) this.result.innerHTML = `Press tab to insert ${symbols[this.matches[0]]} or press escape to cancel`;
        else this.result.innerHTML = "";
    }
}

},{"5bc46ed07357a4a":"8tRKQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8tRKQ":[function(require,module,exports) {
module.exports = JSON.parse('{"pm":"\xb1","sqrt":"√","inf":"∞","pi":"π","sum":"Σ","theta":"θ","cbrt":"∛","fourthrt":"∜","int":"∫","rightarrow":"→","or":"∨","and":"∧","subset":"⊂","subseteq":"⊆","neq":"≠","in":"∈","all":"∀","some":"∃","del":"∇","delta":"∆","angle":"∢","parallel":"∥","perpendicular":"⟂","intersect":"∩","union":"∪","therefore":"∴","composed":"∘","degrees":"\xb0","infinity":"∞","radical":"√","root":"√"}');

},{}]},["jC2qd","8lqZg"], "8lqZg", "parcelRequirec586")

//# sourceMappingURL=index.975ef6c8.js.map
