class Cardnews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build())
        shadow.appendChild(this.styles())
    }

    build() { //cria o componentaRoot e designa a ele a classe "card"
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");
// card left
        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");
// cria o elemento e pendura em card left
        const author = document.createElement("span");
        author.textContent = "By " + (this.getAttribute("author") || "anonimous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title") ;
        linkTitle.href = this.getAttribute("url-link")

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content") ;

        cardLeft.appendChild(author);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);
// fim de card left || inicio de card right
        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");
// cria elemento e pendura em card right
        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "src/default.jpg";
        newsImage.alt = "Foto do exemplo"; 
        
        cardRight.appendChild(newsImage);
// fim de card right || inicio de pendurar as cards no component
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);
        return componentRoot;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `
        .card {
            width 70%;
            display: flex;
            flex-direction: row;
            align-itens: center;
            justify-content: space-between;
            box-shadow: 10px 5px 10px 1px rgba(0,0,0,0.5);
-webkit-box-shadow: 10px 5px 10px 1px rgba(0,0,0,0.5);
-moz-box-shadow: 10px 5px 10px 1px rgba(0,0,0,0.5);
            margin: 20px;
            padding: 30px;
            max-width: 700px;
        }

        .card__left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
            padding-right: 5px
        }

        .card__left > a {
            margin-top: 15px;
            font-size: 25px;
            color: black;
            text-decoration: none;
            font-weight: bold;
        }

        .card__left > p {
            color: rgb(70, 70, 70);
        }

        .card__right {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        `
        return style;
    }
}

customElements.define("card-news", Cardnews)