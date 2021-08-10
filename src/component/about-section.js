import 'bootstrap/dist/css/bootstrap.min.css';

class About extends HTMLElement {
    constructor() {
        super();
        this.aboutElement = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.aboutElement.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;                           
                box-sizing: border-box;
            }
            .about-us {
                text-align: justify;
                width: 70%;               
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                margin: 100px auto;
                padding: 20px;
                border-radius: 10px;
            }
            .about-us h1 {
                text-align: center;
                font-family: fantasy, sans-serif;
            }
            .about-us a {
                color: blue;
                text-decoration: none;
            }
        </style>

        <div class="about-us">
            <h1>About Us</h1>
            <p>This is a clone website <a href="https://www.themoviedb.org/movie/now-playing">themoviedb.org</a> for development our skills. thank you so much for your attention. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, dignissimos animi, ut veritatis recusandae nisi dolores dolorem illo repellendus cupiditate porro amet architecto laudantium tempore! Quo ullam laboriosam repudiandae dolor!</p>        
        <div>
        `;
    }
}

customElements.define('about-section', About);
