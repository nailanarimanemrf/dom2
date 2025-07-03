// Attendre que le DOM soit chargé
document.addEventListener("DOMContentLoaded", function () {
  const colorBox = document.getElementById("color-box");
  const changeBtn = document.getElementById("change-color-btn");

  // Fonction pour générer une couleur hexadécimale aléatoire
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Changer la couleur de la boîte au clic
  changeBtn.addEventListener("click", function () {
    const newColor = getRandomColor();
    colorBox.style.backgroundColor = newColor;
  });
});
