import {
  changeHtml,
  changeMode,
  inicializeSwiper,
  loadTheme,
  nextMatchTimer,
} from "./indexPage.js";

document.addEventListener("DOMContentLoaded", (e) => {
  loadTheme();
  changeMode();
  inicializeSwiper();
  nextMatchTimer();
  
});

document.addEventListener("click", e=>{
  if(e.target.matches(`a[data-href]`)){
    e.preventDefault();
    const $index_main = document.querySelector(".index-content");
    changeHtml(
      {
        url: e.target.href,//ponemos la ruta del boton que originó el click
        error: function(response){
          console.log("error: "+response.status);
        },
        success: function(html){
          $index_main.innerHTML = html;
        }
      }
    );
  }
});

