// Agrega un titulo nombre a id="app"
export const saludar = (nombre) => {
  const elemento = document.getElementById("app");
  elemento.innerHTML = `<h1>Hola ${nombre}</h1>`;
};
