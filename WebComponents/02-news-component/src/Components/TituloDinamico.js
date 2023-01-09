class TituloDinamico extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});

        //base do component
        const componentRoot = document.createElement("h1");
        componentRoot.textContent = this.getAttribute("titulo"); //Pega o valor que viar do atributo (props) titulo

        //estilizar o component
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

//O nome do customElement precisa ter um hifen, para diferenciar das tags normais.
customElements.define("titulo-dinamico", TituloDinamico);
