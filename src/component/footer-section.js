class Footer extends HTMLElement {
    constructor() {
        super();
        this.footerElement = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.footerElement.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;                           
                box-sizing: border-box;
            }
            .footer {
                height: 50px;
                width: 100%;
                background-color: #292929;
                color: white;                
                left: 0;
                bottom: 0;                
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);                
            }
            h4 {
                text-align: center;
                line-height: 50px;
                font-family: 'Segoe UI', sans-serif;
                font-weight: 700;                                                
            }
            a {
                color: white;
                text-decoration: none;
            }
        </style>
        
        <div class="footer">
            <h4>Ega Alifya Firnando | All rights reserved.</a></h4>            
        <div>
        `;
    }
}

customElements.define('footer-section', Footer);
