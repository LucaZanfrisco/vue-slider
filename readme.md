# Descrizione

Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.

**Bonus**

al click su una thumb, visualizzare in grande l’immagine corrispondente
applicare l’autoplay allo slider: ogni 3 secondi, 
cambia immagine automaticamente quando il mouse va in hover sullo slider, bloccare l’autoplay e farlo riprendere quando esce

---

# Svolgimento

- Parto da una struttura gia pronta aggiungo le funzioni di uno slider tramite vue
- Creo un array di oggetti conteteni nome del film , descrizione e immagine
- Effettuo un ciclo per permette di inserire tutte le immagini nella thumbnail
- Aggiungo un due eventi al click dei pulsanti avanti e indietro 
- Associo un indice di partenza ad ogni pulsante 
- Incremento e decremento i pulsanti
- Uso l'indice dei pulsanti per mostare le immagini grandi dello slider 
- Aggiugo all'intera thumbnail l'evento click da cui estrapolo l'indice dell'immagine cliccata
- L'indice estratto della thumbnail lo inserisco al posto dell'indice delle immagine grande in modo da mostra l'immagine cliccata tramite la thumbnail
- aggiungere una funzione di intervallo in modo tale da far scorrere le immagini ogni 3 sec 
- aggiungere un evento hover all'intero slider che interrompe l'autoplay quando ci si va sopra e lo fa riprendere quando si esce
