/*
 * Zuordnung SuS-Code -> Karte:
 *
 * LaTeX:
 * - Inline-Formeln: \\( ... \\)
 * - Abgesetzte Formeln: \\[ ... \\]
 *
 * z.B. 
 * "A7K": "\\(f(x)=\\frac{2}{3}x+4\\)"
 */

const kartensaetze = {

  "(leer)": { // Vorlage
    
    "0FC": "",
    "12D": "",
    "1H4": "",
    "3MK": "",
    "3VO": "",
    "43U": "",
    "4EP": "",
    "7L0": "",
    "84P": "",
    "8GK": "",
    "8K5": "",
    "8KO": "",
    "ASO": "",
    "AUW": "",
    "CIC": "",
    "EN7": "",
    "FC8": "",
    "FQ6": "",
    "HEB": "",
    "IM2": "",
    "JWF": "",
    "M0H": "",
    "M26": "",
    "PFI": "",
    "REE": "",
    "S2I": "",
    "SC9": "",
    "US8": "",
    "WI0": "",
    "Y38": "",
  },
  
  "Intervalle": { // Zahlenmengen & Intervalle > 3er Gruppen Zuordnung

    "0FC": "\\(\\{x\\in\\mathbb{R}|-1\\leq x < 5\\}\\)",
    "12D": "Alle Zahlen zwischen \\(-1\\) und \\(5\\). Dabei ist die \\(-1\\) noch enthalten, aber die \\(5\\) nicht.",
    "1H4": "\\([-1;5[\\)",

    "3MK": "\\(\\{x\\in\\mathbb{R}|x < 100\\}\\)",
    "3VO": "Alle Zahlen kleiner als \\(100\\).",
    "43U": "\\([-\\infty;100[\\)",

    "4EP": "\\(\\{x\\in\\mathbb{R}|x > -1\\}\\)",
    "7L0": "Alle reellen Zahlen, die größer als \\(-1\\) sind.",
    "84P": "\\(]-1;\\infty[\\)",

    "8GK": "\\(\\{x\\in\\mathbb{R}|x > 1 \\text{ und } x < 5\\}\\)",
    "8K5": "Alle Zahlen zwischen \\(-1\\) und \\(5\\), wobei die beiden Zahlen selbst nicht mehr enthalten sind.",
    "8KO": "\\(]1;5[\\)",

    "ASO": "\\(\\{x\\in\\mathbb{R}|x \\geq 100\\}\\)",
    "AUW": "Alle reellen Zahlen größer oder gleich \\(100\\).",
    "CIC": "\\([100;\\infty[\\)",

    "EN7": "\\(\\{x\\in\\mathbb{R}|x \\leq 5\\}\\)",
    "FC8": "Alle Zahlen, die kleiner oder gleich \\(5\\) sind.",
    "FQ6": "\\(]-\\infty;5]\\)",

    "HEB": "\\(\\{x\\in\\mathbb{R}|5 < x \\leq 100\\}\\)",
    "IM2": "Alle reellen Zahlen zwischen \\(5\\) und \\(100\\), wobei die \\(100\\) enthalten ist, aber die \\(5\\) nicht.",
    "JWF": "\\(]5;100]\\)",

    "M0H": "\\(\\{x\\in\\mathbb{R}|-1 \\leq x \\leq 100\\}\\)",
    "M26": "Alle reellen Zahlen zwischen \\(-1\\) und \\(100\\), beide inklusive.",
    "PFI": "\\([-1;100]\\)",

    "REE": "\\(\\{x\\in\\mathbb{R}|1 \\leq x < 100\\}\\)",
    "S2I": "Alle Zahlen zwischen \\(1\\) und \\(100\\), wobei die \\(100\\) nicht enthalten ist, aber die \\(1\\).",
    "SC9": "\\([1;100[\\)",

    "US8": "\\(\\{x\\in\\mathbb{R}|-1 \\leq x \\leq 1\\}\\)",
    "WI0": "Alle Zahlen zwischen \\(-1\\) und \\(1\\), wobei beide Zahlen noch enthalten sind.",
    "Y38": "\\([-1;1]\\)",
  },

  "Lineare Funktionen": {

    "0FC": "\\(f(x)=2x+3\\)",
    "12D": "\\(f(x)=-x+5\\)",
    "1H4": "\\(f(x)=3x-7\\)",
    "3MK": "\\(f(x)=\\frac{1}{2}x+2\\)",
    "3VO": "\\(f(x)=-2x-1\\)",
    "43U": "\\(f(x)=4x+6\\)",
    "4EP": "\\(f(x)=-3x+2\\)",
    "7L0": "\\(f(x)=\\frac{1}{2}x-4\\)",
    "84P": "",
    "8GK": "",
    "8K5": "",
    "8KO": "",
    "ASO": "",
    "AUW": "",
    "CIC": "",
    "EN7": "",
    "FC8": "",
    "FQ6": "",
    "HEB": "",
    "IM2": "",
    "JWF": "",
    "M0H": "",
    "M26": "",
    "PFI": "",
    "REE": "",
    "S2I": "",
    "SC9": "",
    "US8": "",
    "WI0": "",
    "Y38": "",
  },

  "Produktform": { // Produktform quadratischer Funktionen > 3er Gruppen Zuordnung

    "0FC": "\\(f(x)=x^2+4x+3\\)",
    "12D": "\\(f(x)=(x+1)\\)",
    "1H4": "\\(f(x)=(x+3)\\)",

    "3MK": "\\(f(x)=x^2+3x-10\\)",
    "3VO": "\\(f(x)=(x-2)\\)",
    "8KO": "\\(f(x)=(x+5)\\)",

    "43U": "\\(f(x)=x^2-5x-6\\)",
    "4EP": "\\(f(x)=(x-6)\\)",
    "CIC": "\\(f(x)=(x+1)\\)",

    "7L0": "\\(f(x)=x^2+\\frac{5}{2}x-\\frac{3}{2}\\)",
    "FC8": "\\(f(x)=(x-\\frac{1}{2})\\)",
    "EN7": "\\(f(x)=(x+3)\\)",

    "8GK": "\\(f(x)=x^2-5x+4\\)",
    "84P": "\\(f(x)=(x-4)\\)",
    "JWF": "\\(f(x)=(x-1)\\)",

    "AUW": "\\(f(x)=x^2-3x-10\\)",
    "ASO": "\\(f(x)=(x+2)\\)",
    "M26": "\\(f(x)=(x-5)\\)",

    "REE": "\\(f(x)=x^2+x-12\\)",
    "S2I": "\\(f(x)=(x-3)\\)",
    "SC9": "\\(f(x)=(x+4)\\)",

    "US8": "\\(f(x)=x^2-\\frac{7}{2}x-2\\)",
    "WI0": "\\(f(x)=(x+\\frac{1}{2})\\)",
    "Y38": "\\(f(x)=(x-4)\\)",

    "FQ6": "\\(f(x)=x^2+5x-14\\)",
    "HEB": "\\(f(x)=(x-2)\\)",
    "IM2": "\\(f(x)=(x+7)\\)",

    "M0H": "\\(f(x)=-x^2+x+6\\)",
    "PFI": "\\(f(x)=(-x+3)\\)",
    "8K5": "\\(f(x)=(x+2)\\)"
  },

  "Quadratische Funktionen": { // Formen quadratischer Funktionen: Hauptform, Scheitelform, Produktform > 3er Gruppen Zuordnung

    "0FC": "\\(f(x)=x^2+6x+8\\)",
    "12D": "\\(f(x)=(x+2)\\cdot(x+4)\\)",
    "1H4": "\\(f(x)=(x+3)^2-1\\)",

    "3MK": "\\(f(x)=x^2-4x-5\\)",
    "3VO": "\\(f(x)=(x-5)\\cdot(x+1)\\)",
    "8KO": "\\(f(x)=(x-2)^2-9\\)",

    "43U": "\\(f(x)=x^2-2x-8\\)",
    "4EP": "\\(f(x)=(x-4)\\cdot(x+2)\\)",
    "CIC": "\\(f(x)=(x-1)^2-9\\)",

    "7L0": "\\(f(x)=x^2+2x-15\\)",
    "FC8": "\\(f(x)=(x-3)\\cdot(x+5)\\)",
    "EN7": "\\(f(x)=(x+1)^2-16\\)",

    "8GK": "\\(f(x)=x^2-6x+5\\)",
    "84P": "\\(f(x)=(x-1)\\cdot(x-5)\\)",
    "JWF": "\\(f(x)=(x-3)^2-4\\)",

    "AUW": "\\(f(x)=x^2+5x+6\\)",
    "ASO": "\\(f(x)=(x+2)\\cdot(x+3)\\)",
    "M26": "\\(f(x)=\\left(x+\\frac{5}{2}\\right)^2-\\frac{1}{4}\\)",

    "REE": "\\(f(x)=x^2-8x+12\\)",
    "S2I": "\\(f(x)=(x-2)\\cdot(x-6)\\)",
    "SC9": "\\(f(x)=(x-4)^2-4\\)",

    "US8": "\\(f(x)=x^2+4x-12\\)",
    "WI0": "\\(f(x)=(x-2)\\cdot(x+6)\\)",
    "Y38": "\\(f(x)=(x+2)^2-16\\)",

    "FQ6": "\\(f(x)=x^2-x-6\\)",
    "HEB": "\\(f(x)=(x-3)\\cdot(x+2)\\)",
    "IM2": "\\(f(x)=\\left(x-\\frac{1}{2}\\right)^2-\\frac{25}{4}\\)",

    "M0H": "\\(f(x)=-x^2+4x+5\\)",
    "PFI": "\\(f(x)=(-x+5)\\cdot(x+1)\\)",
    "8K5": "\\(f(x)=-(x-2)^2+9\\)"
  },

  "Polynomfunktionen I": { // Globales Verhalten von Polynomfunktionen > 4 Gruppen

    "0FC": "\\(f(x)=x^4+\\frac{1}{2}x-8\\)",
    "12D": "\\(f(x)=x^4+x^3-x^2\\)",
    "1H4": "\\(f(x)=x^4+8\\)",
    "3MK": "\\(f(x)=x^4+0,2x^3+x\\)",
    "3VO": "\\(f(x)=x^4-2x^3+x^2\\)",
    "43U": "\\(f(x)=x^4-x+2\\)",
    "4EP": "\\(f(x)=x^4-2x^2-1\\)",
    "US8": "\\(f(x)=x^4-3x^2+1\\)",

    "7L0": "\\(f(x)=-2x^2+5,5\\)",
    "84P": "\\(f(x)=-2x^2+5x+1,5\\)",
    "8GK": "\\(f(x)=-2x^2+4\\)",
    "8K5": "\\(f(x)=-2x^2-5x-1\\)",
    "8KO": "\\(f(x)=-2x^2-x+3\\)",
    "ASO": "\\(f(x)=-2x^2+3x-2\\)",
    "WI0": "\\(f(x)=-2x^2+4x-6\\)",

    "AUW": "\\(f(x)=2x^3-5x+2\\)",
    "CIC": "\\(f(x)=2x^3-3\\)",
    "EN7": "\\(f(x)=2x^3+x^2+x+3\\)",
    "FC8": "\\(f(x)=2x^3-x^2+1\\)",
    "FQ6": "\\(f(x)=2x^3-3x^2+2x\\)",
    "HEB": "\\(f(x)=2x^3+4x^2\\)",
    "IM2": "\\(f(x)=2x^3+5x-2\\)",

    "JWF": "\\(f(x)=-x^3-x+1\\)",
    "M0H": "\\(f(x)=-x^3+x^2+x+3\\)",
    "M26": "\\(f(x)=-x^3+4\\)",
    "PFI": "\\(f(x)=-x^3+x^2+10\\)",
    "REE": "\\(f(x)=-x^3-\\frac{1}{2}x^2\\)",
    "S2I": "\\(f(x)=-x^3-3x^2+2x\\)",
    "SC9": "\\(f(x)=-x^3+x^2-4\\)",
    "Y38": "\\(f(x)=-x^3+3x^2+x-5\\)",
  },

  "Polynomfunktionen II": { // Symmetrie von Polynomfunktionen
    
    "0FC": "\\(f(x)=-2x^5+7x^3+x\\)",
    "12D": "\\(f(x)=-x^6+10x^4+2x^2\\)",
    "1H4": "\\(f(x)=2x^5-11x^3-5x\\)",
    "3MK": "\\(f(x)=x^7+4x^3\\)",
    "3VO": "\\(f(x)=-3x^7+x^5-5x^3\\)",
    "43U": "\\(f(x)=-x^6+4x^2\\)",
    "4EP": "\\(f(x)=-5x^7+4x^5+2x^3\\)",
    "7L0": "\\(f(x)=-2x^8-8x^4+9\\)",
    "84P": "\\(f(x)=6x^6+x^4-8x^2\\)",
    "8GK": "\\(f(x)=x^8+2x^4-x^2-5\\)",
    "8K5": "\\(f(x)=8x^7-3x^5+2x\\)",
    "8KO": "\\(f(x)=x^4+3x^2-5\\)",
    "ASO": "\\(f(x)=-12x^4-x^2+1\\)",
    "AUW": "\\(f(x)=x^5+3x^3-5x\\)",
    "CIC": "\\(f(x)=5x^4+3x^2-12\\)",

    "EN7": "\\(f(x)=-2x^5+7x^3+x\\)",
    "FC8": "\\(f(x)=-x^6+10x^4+2x^2\\)",
    "FQ6": "\\(f(x)=2x^5-11x^3-5x\\)",
    "HEB": "\\(f(x)=x^7+4x^3\\)",
    "IM2": "\\(f(x)=-3x^7+x^5-5x^3\\)",
    "JWF": "\\(f(x)=-x^6+4x^2\\)",
    "M0H": "\\(f(x)=-5x^7+4x^5+2x^3\\)",
    "M26": "\\(f(x)=-2x^8-8x^4+9\\)",
    "PFI": "\\(f(x)=6x^6+x^4-8x^2\\)",
    "REE": "\\(f(x)=x^8+2x^4-x^2-5\\)",
    "S2I": "\\(f(x)=8x^7-3x^5+2x\\)",
    "SC9": "\\(f(x)=x^4+3x^2-5\\)",
    "US8": "\\(f(x)=-12x^4-x^2+1\\)",
    "WI0": "\\(f(x)=x^5+3x^3-5x\\)",
    "Y38": "\\(f(x)=5x^4+3x^2-12\\)",
  },

};

const setElement = document.getElementById("set");
const codeElement = document.getElementById("code");
const showButton = document.getElementById("show");
const resultElement = document.getElementById("result");
const cardTextElement = document.getElementById("cardText");
const errorElement = document.getElementById("error");

// Kartensätze in Auswahl eintragen
for (const name of Object.keys(kartensaetze)) {
  const option = document.createElement("option");
  option.value = name;
  option.textContent = name;
  setElement.appendChild(option);
}

async function zeigeKarte() {
  const kartensatz = kartensaetze[setElement.value];
  const code = codeElement.value.trim().toUpperCase();

  errorElement.textContent = "";
  resultElement.style.display = "none";

  if (!code) {
    errorElement.textContent = "Bitte Code eingeben.";
    return;
  }

  if (!(code in kartensatz)) {
    errorElement.textContent = "Code nicht gefunden.";
    return;
  }

  // LaTeX-Code als HTML einsetzen und anschließend mit MathJax rendern.
  cardTextElement.innerHTML = kartensatz[code];
  resultElement.style.display = "block";

  if (window.MathJax) {
    await MathJax.typesetPromise([cardTextElement]);
  }
}

showButton.addEventListener("click", zeigeKarte);

codeElement.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    zeigeKarte();
  }
});
