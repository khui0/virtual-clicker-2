function e(e,n,o,r){t(e,new s("p",n).element.outerHTML,o,r)}function t(e,t,n,o){const r=document.createElement("dialog"),a=document.createElement("div");n.forEach((e=>{a.append(new s("button",e.text,(()=>{e.close&&r.close(),e.callback&&e.callback()})).element)})),r.append(new s("h2",e).element),r.innerHTML+=t,r.append(a),document.body.append(r),r.showModal(),o&&a.querySelectorAll("button").forEach((e=>e.blur())),r.addEventListener("close",(()=>{r.remove()}))}function n(e,t,n,o){const r=new s("h2",t).element,a=document.createElement("div");n.forEach((t=>{a.append(new s("button",t.text,(()=>{t.close&&e.close(),t.callback&&t.callback()})).element)})),e.open&&e.close(),e.prepend(r),e.append(a),e.showModal(),o&&a.querySelectorAll("button").forEach((e=>e.blur())),e.addEventListener("close",(()=>{r.remove(),a.remove()}))}class o{constructor(e,t,n){this.text=e,this.close=t,this.callback=n}}class s{constructor(e,t,n){this.tag=e,this.text=t,this.onclick=n}get element(){const e=document.createElement(this.tag);return e.textContent=this.text,this.onclick&&e.addEventListener("click",this.onclick),e}}var r;r=JSON.parse('{"pm":"±","sqrt":"√","inf":"∞","pi":"π","sum":"Σ","theta":"θ","cbrt":"∛","fourthrt":"∜","int":"∫","rightarrow":"→","or":"∨","and":"∧","subset":"⊂","subseteq":"⊆","neq":"≠","in":"∈","all":"∀","some":"∃","del":"∇","delta":"∆","angle":"∢","parallel":"∥","perpendicular":"⟂","intersect":"∩","union":"∪","therefore":"∴","composed":"∘","degrees":"°","infinity":"∞","radical":"√","root":"√"}');const a=new class{constructor(e){this.id=e}set(e,t){let n=this.object;return n[e]=t,localStorage.setItem(this.id,JSON.stringify(n)),this}get(e){return this.object[e]}delete(e){let t=this.object;return delete t[e],localStorage.setItem(this.id,JSON.stringify(t)),this}obliterate(){localStorage.removeItem(this.id)}get object(){return JSON.parse(localStorage.getItem(this.id))||{}}}("virtual-clicker-2");document.querySelectorAll("span.version").forEach((e=>{e.innerHTML="2.1.0"}));const c={symbols:()=>{n(document.getElementById("symbols-modal"),"Symbols",[new o("Close",!0)])},code:()=>{document.getElementById("code-input").value=a.get("code")||"",n(document.getElementById("code-modal"),"Seat Code",[new o("Cancel",!0),new o("Save",!1,i)])},"code-help":()=>{n(document.getElementById("code-help-modal"),"Seat Code",[new o("Close",!0)])},settings:()=>{n(document.getElementById("settings-modal"),"Settings",[new o("Close",!0)])},theme:()=>{n(document.getElementById("theme-modal"),"Theme",[new o("Close",!0)])},storage:()=>{n(document.getElementById("storage-modal"),"Storage",[new o("Close",!0)])},history:()=>{n(document.getElementById("history-modal"),"History",[new o("Close",!0)])}};function i(){const e=document.getElementById("code-input").value;var n,r;/^[1-9][1-6][1-5]$/.test(e)?(a.set("code",e),l(),document.getElementById("code-modal").close()):t("Error",new s("p","Seat code isn't possible").element.outerHTML,[new o("Okay",!0,n)],r)}function l(){a.get("code")&&(document.querySelectorAll("span.code").forEach((e=>{e.innerHTML=a.get("code")})),document.title=`Virtual Clicker (${a.get("code")})`)}document.querySelectorAll("[data-show-modal]").forEach((e=>{e.addEventListener("click",(e=>{c[e.target.getAttribute("data-show-modal")]()}))})),a.get("code")?l():c.code(),document.getElementById("code-input").addEventListener("input",(e=>{e.target.value=parseInt(e.target.value)||""})),document.getElementById("code-input").addEventListener("keydown",(e=>{"Enter"==e.key&&(e.preventDefault(),i())}));for(let e=1;e<=5;e++)for(let t=6;t>0;t--)document.getElementById("seat-grid").append(new s("button","",(()=>{const n=document.getElementById("period-input").value+t.toString()+e.toString();document.getElementById("code-input").value=n,document.getElementById("code-help-modal").close()})).element);const d=document.getElementById("question-input"),u=document.getElementById("answer-input"),m=new class{#e=0;#t=0;#n="";constructor(e,t){this.input=e,this.suggestion=t,this.input.addEventListener("keydown",(e=>{"Tab"==e.key&&0!=this.matches.length&&(e.preventDefault(),e.target.setRangeText(r[this.matches[0]],this.#e,this.#t,"end"),this.#e=e.target.selectionEnd,this.#n=e.target.value.substring(this.#e,this.#t+1),this.#o()),"Escape"==e.key&&(this.#e=e.target.selectionEnd,this.#n=e.target.value.substring(this.#e,this.#t+1),this.#o())," "==e.key&&(this.#e=e.target.selectionEnd,this.#e++,this.#t++),this.#e>this.#t&&(this.#e=this.#t)})),this.input.addEventListener("input",(e=>{this.update()}))}update(){this.#t=this.input.selectionEnd,this.#n=this.input.value.substring(this.#e,this.#t+1),0==this.matches.length&&(this.#e=this.#t),this.#o()}get matches(){return this.#n?.trim()?Object.keys(r).filter((e=>e.startsWith(this.#n))):[]}#o(){0!=this.matches.length?this.suggestion.innerHTML=`<kbd>Tab</kbd> to insert ${r[this.matches[0]]} <kbd>Esc</kbd> to cancel`:(this.#n?.trim(),this.suggestion.innerHTML="")}}(u,document.getElementById("answer-suggestion"));function h(e,t,n){const o=new URLSearchParams({"entry.1896388126":e,"entry.1232458460":t,"entry.1065046570":n}).toString();fetch("https://docs.google.com/forms/d/e/1FAIpQLSfwDCxVqO2GuB4jhk9iAl7lzoA2TsRlX6hz052XkEHbLrbryg/formResponse?"+o,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/x-www-form-urlencoded"}}),function(e,t,n){const o=a.get("history")||[],s=Date.now();o.push({code:e,question:t,answer:n,timestamp:s}),a.set("history",o),p()}(e,t,n)}d.focus(),document.getElementById("submit-button").addEventListener("click",(e=>{const t=d.value?.trim(),n=u.value?.trim();a.get("code")?(t&&n&&(h(a.get("code"),t,n),d.value="",u.value="",d.focus(),m.update()),n||(u.classList.add("attention"),u.focus()),t||(d.classList.add("attention"),d.focus())):c.code()})),d.addEventListener("input",(e=>{e.target.classList.remove("attention")})),u.addEventListener("input",(e=>{e.target.classList.remove("attention")}));const g={a:["Agree","True","Yes"],b:["Disagree","False","No"],c:["Both","Always"],d:["Neither","Never"],e:["Sometimes","Cannot be determined"]};function p(){const e=a.get("history")||[],t=document.getElementById("history-feed");0!=e.length?(t.innerHTML="",e.forEach((e=>{const n=document.createElement("button");n.innerHTML=`<p><b>${e.question}.</b> ${function(e){let t=new Date(e);if(e){let e,n=t.getMonth()+1,o=t.getDate(),s=t.getHours();return s>=12?(s%=12,e="PM"):e="AM",0==s&&(s=12),`${n}/${o} ${s}:${t.getMinutes().toString().padStart(2,"0")} ${e}`}}(e.timestamp)} (${e.code})</p>\n<p>${e.answer}</p>`,t.prepend(n),n.addEventListener("click",(t=>{const n=e.answer.match(/CHOICE ([A-E])/)[1];n?document.querySelector(`[data-multiple-choice=${n.toLowerCase()}]`).click():(d.value=e.question,u.value=e.answer,document.getElementById("history-modal").close(),d.focus(),m.update())}))}))):t.innerHTML="<p>Submitted clicks will show up here!</p>"}document.querySelectorAll("[data-multiple-choice]").forEach((e=>{e.addEventListener("click",(e=>{const n=d.value?.trim(),r=e.target.getAttribute("data-multiple-choice"),i=`<p>Are you sure? This is the same as</p>\n${function(e,t){const n=document.createElement(e?"ol":"ul");return t.forEach((e=>{n.append(new s("li",e).element)})),n.outerHTML}(!1,g[r])}`;a.get("code")?(n&&t(`Submit choice ${r.toUpperCase()}`,i,[new o("Cancel",!0),new o("Submit",!0,(()=>{h(a.get("code"),n,`CHOICE ${r.toUpperCase()}`),d.focus()}))]),n||(u.classList.remove("attention"),d.classList.add("attention"),d.focus())):c.code()}))})),p();const y=[...new Set(Object.values(r))];function E(e){u.setRangeText(e,u.selectionStart,u.selectionEnd,"end"),u.focus(),m.update()}document.querySelectorAll("[data-insert-symbol]").forEach((e=>{const t=e.getAttribute("data-insert-symbol"),n=Object.values(r)[t];e.innerHTML=n,e.addEventListener("click",(e=>{E(n)}))})),y.forEach((e=>{document.querySelector("#symbols-modal>div").append(new s("button",e,(()=>{document.getElementById("symbols-modal").close(),E(e)})).element)}));document.body.setAttribute("data-theme",a.get("theme")||""),["classic","abyss","graphite","blizzard","sage","dune","rose","lavender","wit","loyalty","cunning","bravery"].forEach((e=>{const t=document.createElement("button");t.setAttribute("data-theme",e),t.innerHTML=e,t.addEventListener("click",(t=>{document.body.setAttribute("data-theme",e),a.set("theme",e)})),document.querySelector("#theme-modal>div").append(t)}));const b={theme:()=>{document.body.removeAttribute("data-theme"),a.delete("theme")},history:()=>{e("Are you sure?","Click history will be lost forever! (A long time!)",[new o("Cancel",!0),new o("Clear",!0,(()=>{a.delete("history")}))])},all:()=>{e("Are you sure?","All saved data will be erased, this cannot be reversed",[new o("Cancel",!0),new o("Reset",!0,(()=>{a.obliterate()}))])}};document.querySelectorAll("[data-reset]").forEach((e=>{e.addEventListener("click",(e=>{b[e.target.getAttribute("data-reset")]()}))})),document.addEventListener("keydown",(e=>{const t=Array.from(document.querySelectorAll("dialog")).some((e=>e.open));e.ctrlKey?("Enter"!=e.key||t||document.getElementById("submit-button").click(),","!=e.key||t||c.settings(),"."!=e.key||t||c.history()):e.altKey&&/[1-9]/.test(e.key)&&(e.preventDefault(),E(y[parseInt(e.key)-1]))}));
//# sourceMappingURL=index.f7f5a454.js.map
