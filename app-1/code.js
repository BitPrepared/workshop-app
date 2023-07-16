var listaSuoni = {
  "1": "assets/1-r2d2-beeping.mp3",
  "2": "assets/2-rogerroger.mp3",
  "3": "assets/3-blaster.mp3",
  "4": "assets/4-chewbacca-roar.mp3",
  "5": "assets/5-spade-laser.mp3",
  "6": "assets/6-i-am-your-father.mp3",
  "7": "assets/7-yes-my-master.mp3",
  "8": "assets/8-lord-vader.mp3",
  "9": "assets/9-may-the-force-be-with-you.mp3"
};

var punteggio = 0;
var punteggioMassimo = 5;
var giocatoreDeveScegliere = false;
var indice = 0;

onEvent("buttonPlay", "click", function( ) {
  if (giocatoreDeveScegliere == false) {
    indice = randomNumber(1, 9);
    var suono = listaSuoni[indice];
    playSound(suono);
    setText("instruction", "Quale era il suono? Seleziona l'immagine");
    giocatoreDeveScegliere = true;
  }
});
onEvent("button1", "click", function() {
  sceltaGiocatore(1);
});
onEvent("button2", "click", function() {
  sceltaGiocatore(2);
});
onEvent("button3", "click", function() {
  sceltaGiocatore(3);
});
onEvent("button4", "click", function() {
  sceltaGiocatore(4);
});
onEvent("button5", "click", function() {
  sceltaGiocatore(5);
});
onEvent("button6", "click", function() {
  sceltaGiocatore(6);
});
onEvent("button7", "click", function() {
  sceltaGiocatore(7);
});
onEvent("button8", "click", function() {
  sceltaGiocatore(8);
});
onEvent("button9", "click", function() {
  sceltaGiocatore(9);
});
function sceltaGiocatore(numero) {
  if (giocatoreDeveScegliere == true) {
    if (numero == indice) {
      punteggio = punteggio + 1;
      setText("score", punteggio);
      setText("instruction", "BRAVO! Premi di nuovo play adesso");
      if (punteggio >= punteggioMassimo) {
        setScreen("schermoVittoria");
      }
    } else {
      setScreen("schermoPerdita");
    }
    giocatoreDeveScegliere = false;
  } else {
    setText("instruction", "Prima premi su play");
  }
}
onEvent("buttonRestart", "click", function( ) {
  punteggio = 0;
  setText("score", punteggio);
  setText("instruction", "Premi su play per riprodurre il suono");
  setScreen("schermoPrincipale");
  giocatoreDeveScegliere = false;
});
onEvent("buttonRestart2", "click", function( ) {
  punteggio = 0;
  setText("score", punteggio);
  setText("instruction", "Premi su play per riprodurre il suono");
  setScreen("schermoPrincipale");
  giocatoreDeveScegliere = false;
});
