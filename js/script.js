"use strict";

const { createApp } = Vue;

createApp({
  data() {
    return {
      tabindex: 0,
      slides: [
        {
          image: "img/01.webp",
          title: "Marvel's Spiderman Miles Morale",
          text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
        },
        {
          image: "img/02.webp",
          title: "Ratchet & Clank: Rift Apart",
          text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
        },
        {
          image: "img/03.webp",
          title: "Fortnite",
          text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
        },
        {
          image: "img/04.webp",
          title: "Stray",
          text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
        },
        {
          image: "img/05.webp",
          title: "Marvel's Avengers",
          text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
        },
      ],
    };
  },
  methods: {
    // Evento che mostra l'immagine precedente
    prevImg() {
      this.tabindex--;
      if (this.tabindex < 0) {
        this.tabindex = this.slides.length - 1;
      }
    },
    // Evento che mostra l'immagine successiva
    nextImg() {
      this.tabindex++;
      if (this.tabindex > this.slides.length - 1) {
        this.tabindex = 0;
      }
    },
    // Evento che mostra sul click della thumbnail l'immagine cliccata
    thumbShow(index, event) {
      this.tabindex = index;
    },
    // Scorrimento automatico delle immagini ongi 3 secondi
    autoplay() {
      this.play = setInterval(() => {
        this.nextImg();
      }, 3000);
    },
    // Evento che blocca l'autoplay quando si mette il mouse sullo slider 
    stopAutoPlay() {
      clearInterval(this.play);
    },
    
  },
  mounted() {
    this.autoplay();
  },
}).mount("#app");
