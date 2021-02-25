import { LitElement, html, css  } from 'lit-element';

import '@lion/button/lion-button.js'
import { nothing } from 'lit-html';

export class FeFooter extends LitElement {
    static get properties() {
        return {
            primary : {type : String},
            secondary : {type : String},
        };
      }
        
     parent(e){
       e.preventDefault();
       if(e.target.id === 'primary')
       {
          alert("primary selected");
          
         
       }
       else if(e.target.id === 'secondary'){
         alert("secondary selected");
       }

     }



      static get styles() {
        return css`
           
      
            .primary {
            background-color:purple;
            color:#fff;
            
            border-radius;
            border-radius: 5px;
            padding: 10px;
            margin:10px;
            float :right;
            
            }
            .primary:hover
            {
              color:#fffc;
            }
            .secondary {
                background-color:grey;
                color:#fff;
                border-radius: 5px;
                 padding: 10px;
                 margin:10px;
                 float : left;
                }
                .secondary:hover
                {
                  color:#dcdc;
                }
            
           `;
      }

    render() {
      return html`
     <footer>
       ${
         this.primary  ?  html `<lion-button class = "primary" id="primary" @click = ${() => this.prime()}>${this.primary}</lion-button>` :  nothing
       }

       ${
        this.secondary  ?  html `<lion-button class = "secondary" id="secondary" @click = ${() => this.second()}>${this.secondary}</lion-button>` :  nothing
      }
      </footer>
      `;
      }
      prime(){
        this.dispatchEvent(new CustomEvent('primary', { bubbles: true}));
      }
      second(){
        this.dispatchEvent(new CustomEvent('secondary', { bubbles: true}));
      }
    }
   
  
