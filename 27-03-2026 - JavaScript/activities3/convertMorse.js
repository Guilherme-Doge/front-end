const morseAlfabeto = {
  "A": ".-", "B": "-...", "C": "-.-.", "D": "-..", "E": ".", "F": "..-.", 
  "G": "--.", "H": "....", "I": "..", "J": ".---", "K": "-.-", "L": ".-..", 
  "M": "--", "N": "-.", "O": "---", "P": ".--.", "Q": "--.-", "R": ".-.", 
  "S": "...", "T": "-", "U": "..-", "V": "...-", "W": ".--", "X": "-..-", 
  "Y": "-.--", "Z": "--..", "0": "-----", "1": ".----", "2": "..---", 
  "3": "...--", "4": "....-", "5": ".....", "6": "-....", "7": "--...", 
  "8": "---..", "9": "----."
};

const morseParaLetra = Object.fromEntries(
  Object.entries(morseAlfabeto).map(([letra, codigo]) => [codigo, letra])
);

function converterMorse(codigoMorse) {
  return codigoMorse
    .trim()
    .split(" ")
    .map(codigo => morseParaLetra[codigo] || "") 
    .join("");
}

const resultado = converterMorse("... -.-"); 
console.log(resultado);