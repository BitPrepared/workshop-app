# Workshop Sviluppo App - BitPrepared

Questo workshop é pensato per un gruppo di 5/6 guide/esploratori fra il terzo e il quinti anno di reparto.

I ragazzi avranno la possibilità di imparare i **concetti di base della programmazione** e realizzare una **serie di app** di esempio. Le app verranno poi condivise con gli altri ragazzi e saranno rese disponibili in modo che chiunque le possa scaricare sul CD finale.

- [Workshop Sviluppo App - BitPrepared](#workshop-sviluppo-app---bitprepared)
  - [Metariale](#metariale)
  - [Code.org](#codeorg)
  - [Preparazione](#preparazione)
  - [Momento 1 - The Hour of Code](#momento-1---the-hour-of-code)
    - [Esempio 1 - La Torta](#esempio-1---la-torta)
    - [Esempio 2 - Il Robot](#esempio-2---il-robot)
      - [if-then-else](#if-then-else)
      - [ciclo-while](#ciclo-while)
    - [Guerre Stellari: Costruisci una Galassia con il codice](#guerre-stellari-costruisci-una-galassia-con-il-codice)
    - [Altre ore del codice](#altre-ore-del-codice)
  - [Momento 2 - Calculator](#momento-2---calculator)
  - [Momento 3 - App a Scelta](#momento-3---app-a-scelta)
    - [Progetti Consigliati](#progetti-consigliati)
      - [Music Box](#music-box)
      - [Canzoniere](#canzoniere)
  - [Momento 4 (Jolly) - App Debugging](#momento-4-jolly---app-debugging)

## Metariale

* Un computer con mouse e tastiera per ogni ragazzo connesso ad internet.
* Un account su code.org configurato (vedi sotto).
* Cartellone e pennarelli.
* PRBMM sui tablet (almeno un tablet ogni 2).

## Code.org

Tutto il workshop si basa sull'utilizzo del sito [Code.org](http://code.org) che permette di introdurre il concetto di **programmazione a blocchi**.

Prima del workshop é consigliato prendere dimestichezza con il sito e con il metodo di programmazione a blocchi (completare 1/2 corsi dovrebbe essere sufficiente)

## Preparazione

1. Creare un account personale su Code.org (entrare con Google é probabilmente la soluzione piu' veloce). 
2. Creare una classe dal seguente link [https://studio.code.org/home#](https://studio.code.org/home).
![pannello_classi](https://i.imgur.com/eTA91HJ.png)
3. Selezionare accesso con immagini
4. Selezionare il corso **Guerre Stellari: Costruisci una Galassia con il codice**
5. Aggiugnere i ragazzi nella classe
6. Stampare le password di acesso 

Avere una classe su Code.org e' molto utile perche':

* Non forza i ragazzi a creare un account su Code.org.
* Perme di gestire in modo centrallizato la classe e controllare i progressi dei ragazzi.
* Permette di raccogliere in un unico punto tutte le app realizzate dai ragazzi.

## Momento 1 - The Hour of Code

Durante il primo momento, i ragazzi dovranno completare il corso **The Hour of Code (l'ora del codice)**. Questo corso ha la durata di un ora ed ha lo scopo di introdurre i ragazzi alla programmazione presupponenzo nessuna conoscenza informatica.

Prima di inizare a programmare, è necessario introdurre ai ragazzi il concetto di programmazione.

Qui qualche paragone per far avvicinare i ragazzi alla programmazione

### Esempio 1 - La Torta

Spiegare che in sostanza ogni programma é costituito da 3 cose. Uno stato
iniziale, una serie di istruzioni, e una stato terminale.

Calato sulla torta questi sarebbero gli ingredienti (stato iniziale),
la ricetta (istruzioni), e la torta (il risultato).

Far capire che il programma e' una specie di robot che esegue la ricetta, noi gli mettiamo dentro i dati in ingresso (gli ingredienti) e lui lavora... e ci tira fuori il risultato (la torta).

Calato su star wars i dati di ingresso e' la mappina e la posizione
del droide, il programma e' quello che loro scrivono, e il risultato e
lo stato terminale in cui si trovano i personaggi.

### Esempio 2 - Il Robot

Immagina di avere un robot umanoide che ti deve aiutare durante la
vita di tutti i giorni. Partiamo dal presupposto che questo robot e'
stupido... gli devono venire spiegate tutte le cose per filo e per
segno.

Adesso vuoi che il robot ti aiuta e faccia da maggiordomo (tipo Emilio).
Questo esempio introduce il concetto di _if-then-else_ e di _ciclo-while_.

#### if-then-else
Immagina di essere in cucina con la porta chiusa e di chiamare il robot.
Lo chiami, lui arriva. Se il robot non sa come aprire la porta, molto
probabilmente potrebbe sbatterci contro e romperla. Per questo motivo
e' necessario introdurre una condizione. Un esempio di piccolo
programma potrebbe essere.

```
alzati_in_piedi()
cammina_verso_il_salotto()
if (porta_chiusa) then {
   apri_la_porta()
}
attraversa_la_porta()
```

#### ciclo-while

Immagina di essere in salotto che stai guardando un film. Il robot ti
chiede se hai bisogno di qualcosa, e tu vuoi che non ti disturbi per
un ora... Il robot fara' un ciclo per aspettare che il tempo passi e
poi chiedera' nuovamente se hai bisogno di qualcosa. Esempio:

```
while(il_robot_e'_acceso()){
    chiedi_se_ha_bisogno();
    if (ha_bisogno()){
       aiuta()
    } else {
       while(non_e'_passata_un_ora()){
           aspetta_qualche_minuto()
       }
    }
}
```

### Guerre Stellari: Costruisci una Galassia con il codice

Far fare ai ragazzi l'ora del codice su star wars.

La cosa interessante da far notare e' che introduce alla
**Programmazione ad Eventi**. In sostanza si definisce cio' che deve
succedere ogni volta che l'utente genera un evento.

Nel caso di star wars un evento e' "Quando si preme sulla freccia
verso sinistra" o simili. Nel caso di un'app un evento e' "Quando si
preme sul bottone OK".

Questo e' molto importante perche' l'app che i ragazzi andranon a fare si basa sulla programmazione ad eventi. I ragazzi dovranno definire una serie di bottoni, oggetti grafici, etc. e poi si va a dire cosa deve succedere ogni
volta che l'utente ne preme uno, etc.

### Altre ore del codice

É probabile che alcuni ragazzi abbiano già fatto il corso a scuola e quindi ci metteranno molto di meno nel completarlo.

Qui suggerimenti per altri due corsi che aiuteranno nello sviluppo dell'app:

* [Ora del codice: Artista](https://studio.code.org/s/artist)
Questo e' molto carino e permette ai ragazzi di disegnare programmando.

* [Ora del codice con Frozen](https://studio.code.org/s/frozen/)
Questo e' abbastanza simile a quello di StarWars ma comunque valido.

## Momento 2 - Calculator

Durante il momento 2 i ragazzi creeranno una semplice app Calcolatrice. Il momento due e' strutturato in questo modo:

* Introdure l'ambiente di App Lab [https://code.org/educate/applab](https://code.org/educate/applab)
* Creare una semplice app
* Mostrare come aggiungere bottoni, caselle di testo ed blocchi di testo
* Creare un app semplice che faccia la somma di due numeri al proiettore
* Spiegare tutto passo per passo
* Chiedere ai ragazzi di implementare la stessa calcolatrice pero' avendo somma, sottrazione, moltiplicazione, divisione.

[Codice dell'app Calcolatrice](https://studio.code.org/projects/applab/BMW7hvFJ8vznNm4SwDZC266zh7mi1UfB221h_pYZG8A)

Non e' necessario che tutti arrivino a finire la calcolatrice in tempo con tutte le operazioni, ma almeno la somma deve essere implementata.

## Momento 3 - App a Scelta

Il momento e' libero e permette ai ragazzi di finire il loro progetto.
Durante questo momento e' possibile far completare la calcolatrice ai ragazzi che non l'hanno finita.

Vengono mostrate alcune app di esempio ai ragazzi (vedi sotto), spiegando alcune funzioni _avanzate_ di AppLab. I ragazzi devono scegliere se:

* Finire e migliorare la loro calcolatrice
* Re-implementare uno dei progetti consigliati
* Creare un'app ex-novo partendo da una loro idea.

E' molto importante capire il livello dei ragazzi e assicurarsi che ognuno stia facendo qualcosa di adeguato alle proprie capacita'.

Se il livello generale e' troppo basso, valutare di non lasciare liberta' ai ragazzi ma consigliare solamente un'app da re-implementare.

### Progetti Consigliati

Qui un elenco di app che ho scritto su AppLab e che possono essere utili per i ragazzi come idea da re-implementare.

#### Music Box
![Screenshot Musicbox](https://i.imgur.com/SHDytA5.png)

[Codice Sorgente Musicbox](https://studio.code.org/projects/applab/xWSObAhlbYO5gReJ303ct-5IalL5Gz5m-YyQmvP-Qc0)

Questa e' carina perche' e' in tema Star Wars ed utilizza immagini e musiche.

L'app consiste in una serie di bottoni con immagini per ogni personaggio di star wars. Alla pressione del pulsante un suono deve essere riprodotto.

**IMPORTANTE**: Assicurarsi di avere a disposizione gli assett (immagini/audio) da condividere sulla cartella per i ragazzi (si possono scaricare dall'app).

#### Canzoniere
![Screenshot Canzoniere](https://i.imgur.com/7DgXoee.png)

[Codice Sorgente Canzoniere](https://studio.code.org/projects/applab/l9mHY61G9sF27C7zFKzD6TLDCrbWpxNqRMDJO2vAzO8)

L'app canzoniere e' piu' complessa. Utilizza un DB chiave/valore per salvare alcune canzoni scout. Permette ai ragazzi di visulizzare la lista di canzoni ed eventualmente di aggiungerne di nuove.

**IMPORTANTE**: Assicurarsi che i ragazzi che la vogliano implementare siano abbastanza in gamba in modo da non rimanere bloccati.

## Momento 4 (Jolly) - App Debugging

Se avanza tempo o c'e' da riempire dei buchi, e' possibile far fare ai ragazzi un attivita' di bug reporting di PRBMM.

I ragazzi avranno gia' usato il PRBMM durante le loro missioni, quindi possono raccontare la loro esperienza.

Far scrivere sul cartellone tutti i bug che hanno incontrato. Dopo circa 10/15 minuti di brainstorming passare alla fase di priotarizzazione.

* Rosso: Molto importante - Impatta l'esperienza utente
* Giallo: Medio - Presenta alcune problematiche ma puo' essere aggirato
* Verde: Basso - Nice to have

Spiegare ai ragazzi i concetti di priorita' e far assegnare a loro le priorita'. 
