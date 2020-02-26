let tmpl = document.createElement('template');
tmpl.innerHTML = `
    <style>
        @import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css";        
    </style>
    <i class="fas fa-arrow-left"></i>
    `;



class SideBarMenu extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(tmpl.content.cloneNode(true));        
    }

    createSideBarMenu() {
        var divRoot = this.createDivRoot();        
        divRoot.appendChild(this.createSideBarMenuItem());
        divRoot.appendChild(this.createSideBarMenuItem());
        divRoot.appendChild(this.createSideBarMenuItem());
        divRoot.appendChild(this.createSideBarMenuItem());
        divRoot.appendChild(this.createSideBarMenuItem());
        return divRoot;
    }

    createSideBarMenuItem() {
        var item = document.createElement('div');
        item.setAttribute('class', 'cui-menu-item');
        var a = document.createElement('a');
        a.setAttribute('href', '#');
        a.innerHTML = "A";
        var icon = document.createElement("i");
        icon.setAttribute('class', 'fas fa-arrow-left');
        item.appendChild(a);
        item.appendChild(icon);
        return item;
    }

    createDivRoot() {
        var divRoot = document.createElement('div');
        divRoot.setAttribute("class", "cui-menu");
        return divRoot;
    }

    connectedCallback() {
        let sideBarMenu = this.createSideBarMenu();
        this.shadowRoot.appendChild(sideBarMenu);
    }

    disconnectedCallback() {

    }

    attributeChangedCallback(attrName, oldVal, newVal) {

    }
}

let nav_content = [
    'Home',
    'New',
    'Contact',
    'About'
]


window.customElements.define('cui-side-bar-menu', SideBarMenu);