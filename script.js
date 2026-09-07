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

  "Quadratische Funktionen": { // Quadratische Funktionen > Gruppenpuzzle
    
    "AUW": "\\(f(x)=x^2+1\\) (Gruppe 1)",
    "7L0": "\\(f(x)=4x^2\\) (Gruppe 1)",
    "IM2": "\\(f(x)=-6x^2\\) (Gruppe 1)",
    "3MK": "\\(f(x)=-\\frac{2}{3}x^2\\) (Gruppe 1)",
    "Y38": "\\(f(x)=7,5x^2\\) (Gruppe 1)",
    "8K5": "\\(f(x)=0,3x^2\\) (Gruppe 1)",

    "FC8": "\\(f(x)=-7x^2\\) (Gruppe 2)",
    "12D": "\\(f(x)=-3,5x^2\\) (Gruppe 2)",
    "REE": "\\(f(x)=\\frac{1}{2}x^2\\) (Gruppe 2)",
    "0FC": "\\(f(x)=2x^2\\) (Gruppe 2)",
    "JWF": "\\(f(x)=-x^2+4\\) (Gruppe 2)",
    "SC9": "\\(f(x)=-0,1x^2\\) (Gruppe 2)",

    "43U": "\\(f(x)=-\\frac{1}{4}x^2\\) (Gruppe 3)",
    "ASO": "\\(f(x)=x^2+1\\) (Gruppe 3)",
    "M26": "\\(f(x)=0,6x^2\\) (Gruppe 3)",
    "8KO": "\\(f(x)=-3x^2\\) (Gruppe 3)",
    "HEB": "\\(f(x)=10x^2\\) (Gruppe 3)",
    "1H4": "\\(f(x)=-2,5x^2-1\\) (Gruppe 3)",

    "PFI": "\\(f(x)=3x^2-1\\) (Gruppe 4)",
    "WI0": "\\(f(x)=-x^2\\) (Gruppe 4)",
    "CIC": "\\(f(x)=0,9x^2\\) (Gruppe 4)",
    "4EP": "\\(f(x)=21x^2\\) (Gruppe 4)",
    "FQ6": "\\(f(x)=-8x^2\\) (Gruppe 4)",
    "84P": "\\(f(x)=\\frac{1}{5}x^2\\) (Gruppe 4)",

    "EN7": "\\(f(x)=-0,75x^2\\) (Gruppe 5)",
    "US8": "\\(f(x)=x^2-0,5\\) (Gruppe 5)",
    "3VO": "\\(f(x)=2x^2+1\\) (Gruppe 5)",
    "S2I": "\\(f(x)=-3x^2\\) (Gruppe 5)",
    "M0H": "\\(f(x)=-4x^2\\) (Gruppe 5)",
    "8GK": "\\(f(x)=\\frac{1}{5}x^2\\) (Gruppe 5)",
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

  "Formen Quadratischer Funktionen": { // Formen quadratischer Funktionen: Hauptform, Scheitelform, Produktform > 3er Gruppen Zuordnung

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

  "Potenzfunktionen": { // Potenzfunktionen f(x) = a*x^n, n\in Q + Gruppeninfo > Gruppenpuzzle
    
    "0FC": "\\(f(x)=3x^4\\) (Gruppe 1)",
    "12D": "\\(f(x)=\\frac{1}{7}x^4\\) (Gruppe 1)",
    "1H4": "\\(f(x)=\\frac{1}{2}x^6\\) (Gruppe 1)",
    "3MK": "\\(f(x)=-2x^2\\) (Gruppe 1)",
    "3VO": "\\(f(x)=-x^8\\) (Gruppe 1)",

    "43U": "\\(f(x)=-\\frac{1}{4}x^3\\) (Gruppe 2)",
    "4EP": "\\(f(x)=\\frac{1}{8}x^5\\) (Gruppe 2)",
    "7L0": "\\(f(x)=-6x^5\\) (Gruppe 2)",
    "84P": "\\(f(x)=7x^3\\) (Gruppe 2)",
    "8GK": "\\(f(x)=-x^7\\) (Gruppe 2)",

    "8K5": "\\(f(x)=\\frac{1}{x^4}\\) (Gruppe 3)",
    "8KO": "\\(f(x)=5x^{-2}\\) (Gruppe 3)",
    "ASO": "\\(f(x)=-4x^{-4}\\) (Gruppe 3)",
    "AUW": "\\(f(x)=3x^{-10}\\) (Gruppe 3)",
    "CIC": "\\(f(x)=-\\frac{2}{x^2}\\) (Gruppe 3)",

    "EN7": "\\(f(x)=9x^{-3}\\) (Gruppe 4)",
    "FC8": "\\(f(x)=-\\frac{1}{x^7}\\) (Gruppe 4)",
    "FQ6": "\\(f(x)=\\frac{1}{15}x^{-1}\\) (Gruppe 4)",
    "HEB": "\\(f(x)=x^{-7}\\) (Gruppe 4)",
    "IM2": "\\(f(x)=-\\frac{1}{3}x^{-5}\\) (Gruppe 4)",

    "JWF": "\\(f(x)=3\\sqrt[6]{x}\\) (Gruppe 5)",
    "M0H": "\\(f(x)=0,5x^\\frac{1}{2}\\) (Gruppe 5)",
    "M26": "\\(f(x)=\\sqrt[10]{x}\\) (Gruppe 5)",
    "PFI": "\\(f(x)=-\\sqrt{x}\\) (Gruppe 5)",
    "REE": "\\(f(x)=-x^\\frac{1}{4}\\) (Gruppe 5)",

    "S2I": "\\(f(x)=\\sqrt[5]{x}\\) (Gruppe 6)",
    "SC9": "\\(f(x)=-\\sqrt[3]{x}\\) (Gruppe 6)",
    "US8": "\\(f(x)=x^\\frac{1}{7}\\) (Gruppe 6)",
    "WI0": "\\(f(x)=-3x^\\frac{1}{5}\\) (Gruppe 6)",
    "Y38": "\\(f(x)=2x^\\frac{1}{3}\\) (Gruppe 6)",
  },

  "Exponentialfunktionen": { // Exponentialfunktionen + Gruppeninfo > Gruppenpuzzle
    
    "HEB": "\\(f(x)=5,1^x\\) (1a)",
    "3VO": "\\(f(x)=3,88^x\\) (1a)",
    "PFI": "\\(f(x)=2^x\\) (1a)",
    "8GK": "\\(f(x)=(\\frac{3}{2})^x\\) (1a)",
    "AUW": "\\(f(x)=(\\frac{5}{4})^x\\) (1a)",
    "12D": "\\(f(x)=100^x\\) (1a)",
    "EN7": "\\(f(x)=12,5^x\\) (1a)",
    "M0H": "\\(f(x)=7^x\\) (1a)",

    "SC9": "\\(f(x)=(\\frac{11}{10})^x\\) (1b)",
    "FQ6": "\\(f(x)=1,23^x\\) (1b)",
    "0FC": "\\(f(x)=3^x\\) (1b)",
    "Y38": "\\(f(x)=(\\frac{5}{2})^x\\) (1b)",
    "4EP": "\\(f(x)=9^x\\) (1b)",
    "IM2": "\\(f(x)=(\\frac{5}{2})^x\\) (1b)",
    "1H4": "\\(f(x)=5^x\\) (1b)",
    "US8": "\\(f(x)=2,5^x\\) (1b)",

    "84P": "\\(f(x)=0,1^x\\) (2a)",
    "JWF": "\\(f(x)=0,43^x\\) (2a)",
    "ASO": "\\(f(x)=(\\frac{3}{11})^x\\) (2a)",
    "3MK": "\\(f(x)=0,25^x\\) (2a)",
    "WI0": "\\(f(x)=(\\frac{1}{8})^x\\) (2a)",
    "REE": "\\(f(x)=(\\frac{1}{2})^x\\) (2a)",
    "8K5": "\\(f(x)=(\\frac{2}{7})^x\\) (2a)",
    "M0H": "\\(f(x)=0,6^x\\) (2a)",

    "8KO": "\\(f(x)=(\\frac{4}{9})^x\\) (2b)",
    "M26": "\\(f(x)=0,4135^x\\) (2b)",
    "FC8": "\\(f(x)=0,99^x\\) (2b)",
    "7L0": "\\(f(x)=0,3^x\\) (2b)",
    "CIC": "\\(f(x)=(\\frac{4}{5})^x\\) (2b)",
    "S2I": "\\(f(x)=(\\frac{2}{3})^x\\) (2b)",
    "43U": "\\(f(x)=0,1^x\\) (2b)",
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

const codeElement = document.getElementById("code");

// Kartensatz aus dem URL-Parameter ?set=... bestimmen
const urlParameter = new URLSearchParams(window.location.search);
const setName = urlParameter.get("set");
const showButton = document.getElementById("show");
const resultElement = document.getElementById("result");
const cardTextElement = document.getElementById("cardText");
const errorElement = document.getElementById("error");

async function zeigeKarte() {
  const kartensatz = kartensaetze[setName];
  const code = codeElement.value.trim().toUpperCase();

  errorElement.textContent = "";
  resultElement.style.display = "none";

  if (!kartensatz) {
    errorElement.textContent = "Kartensatz nicht gefunden.";
    return;
  }

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
