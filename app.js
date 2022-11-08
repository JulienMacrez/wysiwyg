/* ________________ Déclarations de variables ________________ */

let zoneRendu = document.querySelector(".zoneRendu");
let zoneTexte = document.querySelector(".zoneTexte");
let count = 0;
let progressBar = document.querySelector(".progress");
let btn_gras = document.querySelector(".gras");
let btn_italic = document.querySelector(".italic");
let btn_souligne = document.querySelector(".souligne");
let btn_gotoline = document.querySelector(".gotoline");
let btn_effacer = document.querySelector(".effacer");
let btn_darkMode = document.querySelector(".darkMode");

/*________________ Fonction changement texte ________________*/

zoneTexte.addEventListener("keyup", () => {
	zoneRendu.innerHTML = zoneTexte.value;
  });


/* __________ Déclarations des boutons gras and co __________ */

btn_gras.addEventListener("click", () => {
	zoneTexte.value += "<strong></strong>";
  });

btn_italic.addEventListener("click", () => {
	zoneTexte.value += "<i></i>";
  });

btn_souligne.addEventListener("click", () => {
	zoneTexte.value += "<u></u>";
  });

btn_gotoline.addEventListener("click", () => {
  zoneTexte.value += "<br></br>";
  });

btn_effacer.addEventListener("click", () => {
  zoneTexte.value = '';
  zoneRendu.textContent = '';
});

  /*________________ Dark mode & valeur du bouton ________________ */

let toggleTheme = 0;
btn_darkMode.addEventListener("click", () => {
  if (toggleTheme === 0) {
    btn_darkMode.innerHTML = "Dark Mode";
    document.documentElement.style.setProperty("--ecriture", "#f1f1f1");
    document.documentElement.style.setProperty("--background", "#262626")
    document.documentElement.style.setProperty("--border", "#f1f1f1");
    document.documentElement.style.setProperty("--texte", "#f1f1f1");
    document.documentElement.style.setProperty("--titre", "#f1f1f1");
    toggleTheme++;
  } else {
    document.documentElement.style.setProperty("--ecriture", "#262626");
    document.documentElement.style.setProperty("--background", "#f1f1f1")
    document.documentElement.style.setProperty("--border", "#262626");
    document.documentElement.style.setProperty("--texte", "#262626");
    document.documentElement.style.setProperty("--titre", "#262626");
    ;
    btn_darkMode.innerHTML = "Light Mode";
    toggleTheme--;
  }
});

/* ____________ Barre de progression __________ */

zoneTexte.addEventListener("input", () => {
	count = zoneRendu.textContent.length;
	progressBar.style.width = count * 0.5 + "%";
	if (count > 0 && count <= 100) {
	  progressBar.style.backgroundColor = "#28E664";
	} else if (count >= 101 && count <= 170) {
	  progressBar.style.backgroundColor = "#F0AD22";
	} else {
	  progressBar.style.backgroundColor = "#F02F0A";
	}
  });

  /* ___________ Mouse Loader __________ */
  zoneRendu.addEventListener("mousemove", () => {
    zoneRendu.style.cursor = "wait";
  });

  /*____ Pop-Up pour indiquer la limite de caractères ___*/

zoneTexte.addEventListener("keypress", () => {
  if (zoneRendu.textContent.length >= 200) {
    alert("Vous avez atteint la limite de 200 caractères !");
  }
});