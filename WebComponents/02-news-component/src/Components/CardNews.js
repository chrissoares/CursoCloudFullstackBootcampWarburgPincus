class CardNews extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");
        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");

        const autor = document.createElement("span");
        autor.textContent = "By "+(this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content")
        
        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("image-src") || 'assets/default_image_01-1024x1024-570x321.png';
        newsImage.alt = this.getAttribute("image-alt");
        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    style(){
        const style = document.createElement("style");
        style.textContent = `
            .card{
                width: 80%;
                min-height: 170px;
                box-shadow: 9px 9px 28px 0px rgba(0,0,0,0.75);
                -webkit-box-shadow: 9px 9px 28px 0px rgba(0,0,0,0.75);
                -moz-box-shadow: 9px 9px 28px 0px rgba(0,0,0,0.75);    display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
            
            .card__left{
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
            }
            .card__left > span {
                font-weight: 400;
            }
            .card__left > a{
                margin-top: 15px;
                font-size: 25px;
                color: rgb(12, 12, 12);
                text-decoration: none;
                font-weight: bold;
            
            }
                
            .card__left > p {
                color: rgb(65, 65, 65);
            }

            .card__right > img {
                height: -webkit-fill-available;
            }
        `
        return style;
    }
}

//O nome do customElement precisa ter um hifen, para diferenciar das tags normais.
customElements.define("card-news", CardNews);


/* Será recriado
class CardNews extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.innerHTML = "<h1>Hellow World</h1>";
    }
}

customElements.define('card-news', CardNews)
*/