export type Bilingual = { fr: string; en: string };

export type TimelineIcon =
  | "car"
  | "door"
  | "heart"
  | "camera"
  | "drink"
  | "party";

export type TimelineEvent = {
  icon: TimelineIcon;
  time: Bilingual;
  title: Bilingual;
  highlight: boolean;
};

const timelineEvents: TimelineEvent[] = [
  {
    icon: "car",
    time: { fr: "14h", en: "2pm" },
    title: { fr: "Arrivée des invités", en: "Welcome & Arrival" },
    highlight: false,
  },
  {
    icon: "door",
    time: { fr: "14h30", en: "2:30pm" },
    title: { fr: "Entrée des mariés", en: "Couple's Grand Entrance" },
    highlight: false,
  },
  {
    icon: "heart",
    time: { fr: "15h", en: "3pm" },
    title: { fr: "Cérémonie Laïque", en: "Wedding Ceremony & Vows" },
    highlight: true,
  },
  {
    icon: "camera",
    time: { fr: "16h", en: "4pm" },
    title: { fr: "Photos & Rafraîchissements", en: "Photos & Refreshments" },
    highlight: false,
  },
  {
    icon: "drink",
    time: { fr: "18h", en: "6pm" },
    title: { fr: "Vin d'honneur", en: "Reception Cocktail & Canapés" },
    highlight: false,
  },
  {
    icon: "party",
    time: { fr: "20h30", en: "8:30pm" },
    title: { fr: "Dîner & Soirée", en: "Dinner & Dancing" },
    highlight: true,
  },
];

export const config = {
  site: {
    lang: "fr",
    title: "Shauna & Antoine — 15 Mai 2027",
    description: "Invitation au mariage de Shauna & Antoine — 15 Mai 2027",
  },

  couple: { bride: "Shauna", groom: "Antoine" },

  event: {
    countdownTarget: "2027-05-15T15:00:00",
    dateLabel: "15 Mai 2027",
    dateNumeric: "15-05-2027",
  },

  music: { src: "/music/wedding_song.mp3" },

  desktopHero: { image: "/photos/slides/01.jpg" },

  // One entry per slide, in display order (labels feed the dots and the mobile bar)
  nav: [
    { label: "Bienvenue" },
    { label: "Histoire" },
    { label: "Lieu" },
    { label: "Planning" },
    { label: "Invite" },
    { label: "RSVP" },
    { label: "Hotel" },
    { label: "Brunch" },
    { label: "Countdown" },
  ],

  slides: {
    invitation: {
      invitation: {
        images: [
          "/photos/slides/02.jpg",
          "/photos/slides/05.jpg",
          "/photos/slides/06.jpg",
          "/photos/slides/07.jpg",
          "/photos/slides/08.jpg",
          "/photos/slides/09.jpg",
          "/photos/slides/01.jpg",
        ],
        badge: "Invitation au Mariage",
        scrollLabel: "Découvrir • Scroll",
      },
    },

    story: {
      story: {
        title: "NOTRE HISTOIRE",
        image: "/photos/slides/02.jpg",
        places: {
          dreux: "Dreux",
          anywhere: "Anywhere",
          creapole: "Créapôle",
          shanghai: "Shanghai",
          paris: "Paris",
          lille: "Lille",
          viroflay: "Viroflay",
        },
      },
    },

    domaine: {
      title: { en: "The Wedding", fr: "Le Mariage" } as Bilingual,
      domaine: {
        title: "Domaine de Coulonge",
        image: "/photos/slides/03.jpg",
        addressLine1: "2 route de Damville",
        addressLine2: "27240 Sylvains-les-Moulins",
        addressLine3: "Normandie, France",
        mapsLabel: "Itinéraire • Google Maps",
        mapsUrl:
          "https://maps.google.com/?q=Domaine+de+Coulonge+2+route+de+Damville+27240+Sylvains-les-Moulins",
      },
    },

    timeline: {
      title: { fr: "Déroulement", en: "Timeline" } as Bilingual,
      timeline: {
        image: "/photos/slides/04.jpg",
        nextLabel: "Invitation ↓",
        events: timelineEvents,
      },
    },

    invited: {
      title: {
        fr: "Tu es invité !",
        en: "You are invited !",
      } as Bilingual,
      invited: {
        image: "/photos/slides/05.jpg",
        nextLabel: "Ta réponse • Your answer ↓",
      },
    },

    rsvp: {
      title: { fr: "Ta Réponse", en: "RSVP" } as Bilingual,
      rsvp: {
        image: "/photos/slides/06.jpg",
        form: { name: "wedding-rsvp", action: "/forms/wedding-rsvp.html" },
        attending: {
          yes: "Oui, avec joie / Yes",
          no: "Non 😢 / Nope",
        },
        nameLabel: "Toi/Vous/You ❤️ ",
        namePlaceholder: "Ex: Camille & Julien",
        adults: {
          one: "Adulte",
          many: "Adultes",
          max: 4,
          default: 2,
        },
        children: {
          one: "Enfant",
          many: "Enfants",
          max: 4,
          default: 0,
          stop: "Stop making them",
        },
        goodToKnowLabel: "Good to savoir",
        dietTags: [
          "Végétarien",
          "Vegan",
          "Sans gluten",
          "Sans lactose",
          "Encore + casse pied",
        ],
        messagePlaceholder:
          "Allergies précises, chansons ou un mot doux... \nAnything else intereseting ?",
        submit: "Confirmer ma réponse",
        sending: "Envoi...",
        success:
          "Merci infiniment pour votre confirmation ! Nous avons hâte de célébrer le 15 Mai 2027 à vos côtés.",
        error: "Une erreur est survenue, merci de réessayer.",
      },
    },

    hotel: {
      title: {
        fr: "Hébergement",
        en: "Hotel",
      } as Bilingual,
      hotel: {
        name: "Hôtel Le confort",
        image: "/photos/slides/07.jpg",
        phone: "+337859526",
        code: "MARIAGE CROBE",
        codeLabel: {
          fr: "Code à annoncer :",
          en: "Booking code:",
        } as Bilingual,
        travel: {
          fr: "15/18 min en voiture.",
          en: "15/18 min by car.",
        } as Bilingual,
        payment: {
          fr: "Paiement sur place.",
          en: "Pay upon arrival on site.",
        } as Bilingual,
        help: {
          fr: "Si besoin d'aide pour réserver, contactez-nous directement.",
          en: "If you cannot call France, let us know, we will do it for you.",
        } as Bilingual,
        platforms: [
          {
            name: "Airbnb",
            image: "/logos/airbnb.png",
            url: "https://www.airbnb.com/",
          },
          {
            name: "Booking.com",
            image: "/logos/booking.png",
            url: "https://www.booking.com/",
          },
          {
            name: "Gîtes de France",
            image: "/logos/gites.png",
            url: "https://www.gites-de-france.com/",
          },
        ],
      },
    },

    brunch: {
      common: { title: "Le Brunch" },
      brunch: {
        image: "/photos/slides/08.jpg",
        dateLabel: "Dimanche 16 Mai 2027",
        text: {
          fr: "Ne manquez pas le brunch du lendemain !",
          en: "Don't miss the next day's brunch !",
        } as Bilingual,
      },
    },

    countdown: {
      common: { title: "The big day is coming !" },
      countdown: {
        image: "/photos/slides/09.jpg",
        units: {
          days: "Jours",
          hours: "Heures",
          minutes: "Minutes",
          seconds: "Secondes",
        },
      },
    },
  },
};
