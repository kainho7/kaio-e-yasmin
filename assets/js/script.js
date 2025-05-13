
const contador = document.getElementById("contador");
const dataInicio = new Date("2024-12-29");
const hoje = new Date();
const diff = Math.floor((hoje - dataInicio) / (1000 * 60 * 60 * 24));
contador.innerHTML = `Estamos juntos há ${diff} dias! 🥰`;
