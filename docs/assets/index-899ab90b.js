(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const p of n.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function d(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=d(o);fetch(o.href,n)}})();const L=`<section class="todoapp">\r
    <header class="header">\r
        <h1>Tareas</h1>\r
        <input id="new-todo-input" class="new-todo" placeholder="¿Qué necesita ser hecho?" autofocus>\r
    </header>\r
    \r
    <!-- This section should be hidden by default and shown when there are todos -->\r
    <section class="main">\r
        <input id="toggle-all" class="toggle-all" type="checkbox">\r
        <label for="toggle-all">Mark all as complete</label>\r
        <ul class="todo-list">\r
            <!-- These are here just to show the structure of the list items -->\r
            <!-- List items should get the class "editing" when editing and "completed" when marked as completed -->\r
            <!-- <li class="completed" data-id="abc">\r
                <div class="view">\r
                    <input class="toggle" type="checkbox" checked>\r
                    <label>Probar JavaScript</label>\r
                    <button class="destroy"></button>\r
                </div>\r
                <input class="edit" value="Create a TodoMVC template">\r
            </li> -->\r
            <!-- <li>\r
                <div class="view">\r
                    <input class="toggle" type="checkbox">\r
                    <label>Comprar un unicornio</label>\r
                    <button class="destroy"></button>\r
                </div>\r
                <input class="edit" value="Rule the web">\r
            </li> -->\r
        </ul>\r
    </section>\r
\r
    <!-- This footer should hidden by default and shown when there are todos -->\r
    <footer class="footer">\r
        <!-- This should be "0 items left" by default -->\r
        <span class="todo-count"><strong id="pending-count">0</strong> pendiente(s)</span>\r
        <!-- Remove this if you don't implement routing -->\r
        <ul class="filters">\r
            <li>\r
                <!-- selected -->\r
                <a class="filtro" class="selected" href="#/">Todos</a>\r
            </li>\r
            <li>\r
                <a class="filtro" href="#/active">Pendientes</a>\r
            </li>\r
            <li>\r
                <a class="filtro" href="#/completed">Completados</a>\r
            </li>\r
        </ul>\r
        <!-- Hidden if no completed items are left ↓ -->\r
        <button class="clear-completed">Borrar completados</button>\r
    </footer>\r
</section>\r
\r
\r
<footer class="info">\r
    <p>Template creado por <a href="http://sindresorhus.com">Sindre Sorhus</a></p>\r
    <!-- Change this out with your name and url ↓ -->\r
    <p>Creado por <a href="http://todomvc.com">ti</a></p>\r
    <p>Parte de <a href="http://todomvc.com">TodoMVC</a></p>\r
</footer>`;let w;const C=new Uint8Array(16);function S(){if(!w&&(w=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!w))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return w(C)}const s=[];for(let e=0;e<256;++e)s.push((e+256).toString(16).slice(1));function E(e,t=0){return(s[e[t+0]]+s[e[t+1]]+s[e[t+2]]+s[e[t+3]]+"-"+s[e[t+4]]+s[e[t+5]]+"-"+s[e[t+6]]+s[e[t+7]]+"-"+s[e[t+8]]+s[e[t+9]]+"-"+s[e[t+10]]+s[e[t+11]]+s[e[t+12]]+s[e[t+13]]+s[e[t+14]]+s[e[t+15]]).toLowerCase()}const k=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),T={randomUUID:k};function A(e,t,d){if(T.randomUUID&&!t&&!e)return T.randomUUID();e=e||{};const i=e.random||(e.rng||S)();if(i[6]=i[6]&15|64,i[8]=i[8]&63|128,t){d=d||0;for(let o=0;o<16;++o)t[d+o]=i[o];return t}return E(i)}class u{constructor(t){this.id=A(),this.description=t,this.done=!1,this.createdAt=new Date}}const c={All:"all",Completed:"Completed",Pending:"Pending"},l={todos:[new u("Maquetado"),new u("Diseño UI/UX"),new u("Paleta de colores"),new u("Elegir tipografia"),new u("Elegir framework y librerias"),new u("Hosting")],filter:c.All},P=()=>{v(),console.log("InitStore 🥑")},v=()=>{if(!localStorage.getItem("state"))return;const{todos:e=[],filter:t=c.All}=JSON.parse(localStorage.getItem("state"));l.todos=e,l.filter=t},f=()=>{localStorage.setItem("state",JSON.stringify(l))},U=(e=c.All)=>{switch(e){case c.All:return[...l.todos];case c.Completed:return l.todos.filter(t=>t.done);case c.Pending:return l.todos.filter(t=>!t.done);default:throw new Error(`Option ${e} is not valid.`)}},I=e=>{if(!e)throw new Error("Description is required");l.todos.push(new u(e)),f()},D=e=>{l.todos=l.todos.map(t=>(t.id===e&&(t.done=!t.done),t)),f()},q=e=>{l.todos=l.todos.filter(t=>t.id!==e),f()},x=()=>{l.todos=l.todos.filter(e=>!e.done),f()},M=(e=c.All)=>{l.filter=e,f()},F=()=>l.filter,a={addTodo:I,deleteCompleted:x,deleteTodo:q,getCurrentFilter:F,getTodos:U,initStore:P,loadStore:v,setFilter:M,toggleTodo:D},O=e=>{if(!e)throw new Error("A TODO objects is required");const{done:t,description:d,id:i}=e,o=`
            <div class="view">
                <input class="toggle" type="checkbox" ${t?"checked":""}>
                <label> ${d}</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="Create a TodoMVC template">
    `,n=document.createElement("li");return n.innerHTML=o,n.setAttribute("data-id",i),e.done&&n.classList.add("completed"),n};let h;const H=(e,t=[])=>{if(h||(h=document.querySelector(e)),!h)throw new Error(`Element ${e} not found`);h.innerHTML="",t.forEach(d=>{h.append(O(d))})};let b;const N=e=>{if(b||(b=document.querySelector(e)),!b)throw new Error(`Element ${e} not found`);b.innerHTML=a.getTodos(c.Pending).length},g={ClearCompletedButton:".clear-completed",TodoList:".todo-list",NewTodoInput:"#new-todo-input",TodoFilters:".filtro",PendingCountLabel:"#pending-count"},V=e=>{const t=()=>{const r=a.getTodos(a.getCurrentFilter());H(g.TodoList,r),d()},d=()=>{N(g.PendingCountLabel)};(()=>{const r=document.createElement("div");r.innerHTML=L,document.querySelector(e).append(r),t()})();const i=document.querySelector(g.NewTodoInput),o=document.querySelector(g.TodoList),n=document.querySelector(g.ClearCompletedButton),p=document.querySelectorAll(g.TodoFilters);i.addEventListener("keyup",r=>{r.keyCode===13&&r.target.value.trim().lenght!==0&&(a.addTodo(r.target.value),t(),r.target.value="")}),o.addEventListener("click",r=>{const m=r.target.closest("[data-id]");a.toggleTodo(m.getAttribute("data-id")),t(),console.log(r.target)}),o.addEventListener("click",r=>{const m=r.target.className==="destroy",y=r.target.closest("[data-id]");!y||!m||(a.deleteTodo(y.getAttribute("data-id")),t())}),n.addEventListener("click",()=>{a.deleteCompleted(),t()}),p.forEach(r=>{r.addEventListener("click",m=>{switch(p.forEach(y=>y.classList.remove("selected")),m.target.classList.add("selected"),m.target.text){case"Todos":a.setFilter(c.All);break;case"Pendientes":a.setFilter(c.Pending);break;case"Completados":a.setFilter(c.Completed);break}t()})})};a.initStore();V("#app");
