import {data} from './data_portfolio.js';
const content_widget_1 = document.querySelector('#content-widget-1');

const showCards = () => {
    data.map((project, index) => {
      const content = ` <a href=${project.url
      } target="blank"><div class="content-widget-1 card-project"><h3>${project.name
        } </h3></div> </a> 
    ` 
      content_widget_1.innerHTML += content;
    });
   

  };
  
  showCards();
