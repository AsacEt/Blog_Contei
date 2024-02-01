class TituloDinamico extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"})
    //base do component - cria <h1>...</h1> e adiciona Carlos a ele
    const componentRoot = document.createElement("h1");
    componentRoot.textContent = this.getAttribute('titulo')

    //estilizar ele - 
    const style = document.createElement("style");
    style.textContent = `
    h1 {
        color: red;
    }
    `

    //enviar para a shadow
    shadow.appendChild(componentRoot);
    shadow.appendChild(style);
    }
}

customElements.define("titulo-dinamico", TituloDinamico);