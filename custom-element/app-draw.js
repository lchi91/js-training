class AppDrawer extends HTMLElement {
    get open() {
        return this.hasAttribute('open');
    }

    set open(val) {
        if(val) {
            this.setAttribute('open', '');            
        } else {
            this.removeAttribute('open');
        }
        this.toggleDrawer();
    }

    get disabled() {
        return this.hasAttribute('disabled');
    }

    set disabled(val) {
        if(val) {
            this.setAttribute('disabled', '');
        } else {
            this.removeAttribute('disabled');            
        }
    }

    constructor() {
        console.log("constructor");
        super();

        this.addEventListener('click', e => {
            if(this.disabled) {
                return;
            }
            this.toggleDrawer()
        })
    }

    connectedCallback() {
        this.innerHTML = "<h1>FUCK</h1>"        
    }

    disconnectedCallback() {

    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        if(this.disabled) {
            this.setAttribute('tabindex', '-1');
            this.setAttribute('aria-disabled', 'true');
        } else {
            this.setAttribute('tabindex', '0');
            this.setAttribute('aria-disabled', 'false');
        }
    }

    toggleDrawer() {
        console.log("toggleDrawer");
    }
}

class FancyDrawer extends AppDrawer {
    constructor() {
        super();
    }

    toggleDrawer() {

    }
}

window.customElements.define('fancy-app-drawer', FancyDrawer);

console.log("Begin");
window.customElements.define('app-drawer', AppDrawer);
window.customElements.whenDefined('app-drawer').then(() => {
    console.log('app-drawer defined');
})


// x-foo-wth-markup
window.customElements.define('x-foo-wth-markup', class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = '<b>I am an x-foo-with-markup</b>'
    }
})
// 


// x-foo-shadow
let tmpl = document.createElement('template');
tmpl.innerHTML = `
    <style>:host {}</style>
    <b>I'm in shadow dom!</b>
    <slot></slot>
`;

window.customElements.define('x-foo-shadow', class extends HTMLElement {
    constructor() {
        super();
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(tmpl.content.cloneNode(true));
    }
})
// 
