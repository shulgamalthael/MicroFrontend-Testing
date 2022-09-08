//react
import React from "react"
import * as ReactDOM from "react-dom/client"

//styles
import "./index.css"

//components
import App from "./components/App"
import Header from "./components/common/header/Header"
import Footer from "./components/common/footer/Footer"
import Content from "./components/common/content/Content"
import DemoPopUp from "./components/modals/DemoPopUp/DemoPopUp"

const apptag = "wl-fitbuilder"

class WLFitbuilder extends HTMLElement {
    _appName = "WL Fitbuilder"

    static get observedAttributes() {
        return ["appname"]
    }

    changeAttributes(name, prevValue, newValue) {
        switch(name) {
            case "appname":
                this._appName = newValue
                return
            default: return
        }
    }

    render() {
        ReactDOM.createRoot(this).render(<App />)
    }

    connectedCallback() {
        this.render()
    }
}

if(!window.customElements.get(apptag)) {
    window.customElements.define(apptag, WLFitbuilder)
}

const headertag = "wl-fb-header"

export class WLFBHeader extends HTMLElement {
    _title = "WL Fitbuilder"
    
    static get observedAttributes() {
        return ["title"]
    }

    changeAttributes(name, previousValue, newValue) {
        switch(name) {
            case "title":
                this._title = newValue
                return
            default: return
        }
    }

    render() {
        ReactDOM.createRoot(this).render(<Header />)
    }

    connectedCallback() {
        this.render()
    }
}

if(!window.customElements.get(headertag)) {
    window.customElements.define(headertag, WLFBHeader)
}

const contenttag = "wl-fb-content"

export class WLFBContent extends HTMLElement {
    _content = ""
    
    static get observedAttributes() {
        return ["content"]
    }

    changeAttributes(name, previousValue, newValue) {
        switch(name) {
            case "content":
                this._content = newValue
                return
            default: return
        }
    }

    render() {
        ReactDOM.createRoot(this).render(<Content />)
    }

    connectedCallback() {
        this.render()
    }
}

if(!window.customElements.get(contenttag)) {
    window.customElements.define(contenttag, WLFBContent)
}

const footertag = "wl-fb-footer"

export class WLFBFooter extends HTMLElement {
    _externalLinks = []
    
    static get observedAttributes() {
        return ["externalLinks"]
    }

    changeAttributes(name, previousValue, newValue) {
        switch(name) {
            case "externalLinks":
                this._externalLinks = newValue
                return
            default: return
        }
    }

    render() {
        ReactDOM.createRoot(this).render(<Footer />)
    }

    connectedCallback() {
        this.render()
    }
}

if(!window.customElements.get(footertag)) {
    window.customElements.define(footertag, WLFBFooter)
}

const popuptag = "wb-fb-popup"

export class WLFBPopUp extends HTMLElement {
    static get observedAttributes() {
        return []
    }

    changeAttributes(name, previousValue, newValue) {
        switch(name) {
            default: return
        }
    }

    render() {
        ReactDOM.createRoot(this).render(<DemoPopUp />)
    }

    connectedCallback() {
        this.render()
    }
}

if(!window.customElements.get(popuptag)) {
    window.customElements.define(popuptag, WLFBPopUp)
}
