function createCard(array) {
    for (let f = 0; f < array.length; f++) {
     let mainDiv = createElement('div', ['col-md-4', 'col-sm-12', 'mb-2', 'mt-2'], null, null, document.querySelector('.cards'));
     let card = createElement('div', ['card'], null, null, mainDiv);
     let img = createElement('img', 'card-img-top', { 'src': array[f]['img']}, null, card);
     let dv = createElement('div', ['card-body'], null, null,mainDiv);
     let h = createElement('h5', 'card-title', null, array[f]['Ad'],dv);
     let p = createElement('p', 'card-text', null, 'Qiymet',dv);
     let a = createElement('a', ['btn','btn-success'], { 'href': '#'}, 'Bax',dv);
     mainDiv.addEventListener('click',()=>{
         let element=JSON.stringify(array[f]);
        sessionStorage.setItem('array',element);
        document.location='information.html';
     })
 }

}
function isNUll(arg) {
 return arg == null;
}
function createElement(element, klass = null, cssProp = null, text = null, appendLocation = null) {
 let el = document.createElement(element);
 if (!isNUll(klass)) {
     if (typeof klass == "string") {
         el.classList.add(klass);
     } else if (typeof klass == "object") {
         for (let f of klass) {
             el.classList.add(f);
         }
     }
 }
 if (!isNUll(cssProp)) {
     for (let f in cssProp) {
         if (f == "src" || f == "href") {
             el[f] = cssProp[f];
         }
         else {
             el.style[f] = cssProp[f];
         }
     }
 }
 if (!isNUll(text)) {
     el.innerText = text;
 }
 if (!isNUll(appendLocation)) {
     appendLocation.appendChild(el);
 }
 return el;
}