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
    title: { fr: "Arrivée au lieu", en: "Arrival" },
    highlight: false,
  },
  {
    icon: "door",
    time: { fr: "14h30", en: "2.30pm" },
    title: { fr: "Arrivée du marié", en: "Groom's arrival" },
    highlight: false,
  },
  {
    icon: "heart",
    time: { fr: "15h", en: "3pm" },
    title: { fr: "Cérémonie laïque", en: "Wedding ceremony" },
    highlight: true,
  },
  {
    icon: "camera",
    time: { fr: "16h", en: "4pm" },
    title: { fr: "Photos & Miams", en: "Photos & Bites" },
    highlight: false,
  },
  {
    icon: "drink",
    time: { fr: "18h", en: "6pm" },
    title: { fr: "Vin d'honneur", en: "Cocktail" },
    highlight: false,
  },
  {
    icon: "party",
    time: { fr: "20h30", en: "8.30pm" },
    title: { fr: "A table !", en: "Let's eat (again)!" },
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
    { label: "Welcome" },
    { label: "Story" },
    { label: "Place" },
    { label: "Schedule" },
    { label: "Invite" },
    { label: "RSVP" },
    { label: "Hotel" },
    { label: "Brunch" },
    { label: "Woof" },
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
      title: { fr: "Programme", en: "Timeline" } as Bilingual,
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
          yes: "Yes, avec joie",
          no: "Non...",
        },
        nameLabel: "Toi/Vous/You ♡",
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
        dietTags: ["Végétarien", "Sans gluten", "Allergies"],
        messagePlaceholder: "Plus d'infos ? \nAnything else ?",
        submit: "Let's go",
        sending: "Envoi...",
        success: {
          fr: "Merci infiniment pour votre confirmation ! Nous avons hâte de célébrer notre union à vos côtés.",
          en: "Thank you so much for confirming! We can't wait to celebrate with you on May 15th, 2027.",
        } as Bilingual,
        error: "Une erreur est survenue, merci de réessayer.",
      },
    },

    hotel: {
      title: {
        fr: "Hébergement",
        en: "Hotel",
      } as Bilingual,
      hotel: {
        name: "Comfort Hotel Evreux",
        image: "/photos/slides/07.jpg",
        mapsUrl:
          "https://www.google.com/maps/place/Comfort+Hotel+Evreux/@49.0052758,1.1424487,17z/data=!4m10!3m9!1s0x47e14724ae97d4b9:0xf738a552ef4ef648!5m3!1s2026-10-25!4m1!1i2!8m2!3d49.0052723!4d1.1450236!16s%2Fg%2F1tdndjnw?entry=ttu&g_ep=EgoyMDI2MTAxNC4wIKXMDSoASAFQAw%3D%3D",
        phone: "+33232230707",
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
        help2: {
          fr: 'Ou taper: "Chambre d\'hôtes" sur Maps',
        },
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
      common: { title: "SEE 🤍 SOON" },
      countdown: {
        image: "/photos/slides/09.jpg",
        units: {
          days: "Jours",
          hours: "Heures",
          minutes: "Minutes",
          seconds: "Secondes",
        },
        easterEggLabel: "Tap here",
      },
    },
  },
};
