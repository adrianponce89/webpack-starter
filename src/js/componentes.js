import "../css/componentes.css";
import webpackLogo from "../assets/img/webpack-logo.png";

// Agrega un titulo nombre a id="app"
export const saludar = (nombre) => {
  const elemento = document.getElementById("app");
  elemento.innerHTML = `<h1>Hola ${nombre}</h1>`;

  const img = document.createElement("img");
  img.src = webpackLogo;
  elemento.appendChild(img);
};
