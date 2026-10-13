export type Bilingual = { fr: string; en: string };

export type TimelineIcon =
  | "car"
  | "door"
  | "heart"
  | "camera"
  | "drink"
  | "party";

type TimelineEvent = {
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

  couple: { first: "Shauna", second: "Antoine" },

  event: {
    countdownTarget: "2027-05-15T15:00:00",
    dateLabel: "15 Mai 2027",
    dateNumeric: "15-05-2027",
  },

  music: { src: "/music/wedding_song.mp3" },

  // Desktop left column photo
  desktopHero: { image: "/images/01b.jpg", objectPosition: "55% 25%" },

  // One entry per slide, in display order (labels feed the dots and the mobile bar)
  nav: [
    { label: "Invitation", ariaLabel: "Slide 1 - Invitation" },
    { label: "Histoire", ariaLabel: "Slide 2 - Notre Histoire" },
    { label: "Lieu", ariaLabel: "Slide 3 - Le Domaine" },
    { label: "Planning", ariaLabel: "Slide 4 - Déroulement" },
    { label: "Invité !", ariaLabel: "Slide 5 - Tu es invité !" },
    { label: "RSVP", ariaLabel: "Slide 6 - RSVP" },
    { label: "Hôtel", ariaLabel: "Slide 7 - Hébergement" },
    { label: "Brunch", ariaLabel: "Slide 8 - Le Brunch" },
    { label: "Compte à rebours", ariaLabel: "Slide 9 - Compte à rebours" },
  ],

  slides: {
    invitation: {
      // Crossfading backgrounds
      images: [
        "/images/02b.jpg",
        "/images/04.jpg",
        "/images/05.jpg",
        "/images/06.jpg",
        "/images/03b.jpg",
        "/images/01.jpg",
      ],
      crossfadeMs: 3800,
      badge: "Invitation au Mariage",
      scrollLabel: "Découvrir • Scroll",
      scrollAriaLabel: "Faire défiler",
    },

    story: {
      image: "/images/02b.jpg",
      alt: "Notre histoire",
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

    domaine: {
      image: "/images/03b.jpg",
      alt: "Domaine de Coulonge",
      eyebrow: "Le Domaine • Lieu",
      title: "Domaine de Coulonge",
      addressLine1: "2 route de Damville",
      addressLine2: "27240 Sylvains-les-Moulins",
      addressLine3: "Normandie, France",
      mapsLabel: "Itinéraire • Google Maps",
      mapsUrl:
        "https://maps.google.com/?q=Domaine+de+Coulonge+2+route+de+Damville+27240+Sylvains-les-Moulins",
    },

    timeline: {
      image: "/images/04.jpg",
      alt: "Déroulement",
      eyebrow: "Planning de Célébration",
      title: "Déroulement",
      subtitle: "Timeline of the day",
      nextLabel: "Tu es invité ! ↓",
      events: timelineEvents,
    },

    invited: {
      image: "/images/05.jpg",
      alt: "Tu es invité !",
      eyebrow: "Célébration",
      title: "Tu es invité !",
      subtitle: "You are warmly invited",
      nextLabel: "Confirmer ma venue (RSVP) ↓",
    },

    rsvp: {
      image: "/images/06.jpg",
      alt: "RSVP",
      eyebrow: "RSVP",
      title: "La Réponse",
      form: { name: "wedding-rsvp", action: "/forms/wedding-rsvp.html" },
      attending: {
        yes: "Oui, avec joie / Yes",
        no: "Malheureusement non / Sorry",
      },
      nameLabel: "Nom(s) & Prénom(s)",
      namePlaceholder: "Ex: Camille & Julien",
      adults: {
        label: "Adultes",
        one: "Adulte",
        many: "Adultes",
        max: 4,
        default: 2,
      },
      children: {
        label: "Enfants",
        one: "Enfant",
        many: "Enfants",
        max: 3,
        default: 0,
      },
      goodToKnowLabel: "Bon à savoir / Good to know",
      dietTags: ["Végétarien", "Vegan", "Sans gluten", "Sans porc", "Aucun"],
      messagePlaceholder: "Allergies précises, chansons ou un mot doux...",
      submit: "Confirmer ma réponse",
      sending: "Envoi...",
      success:
        "Merci infiniment pour votre confirmation ! Nous avons hâte de célébrer le 15 Mai 2027 à vos côtés.",
      error: "Une erreur est survenue, merci de réessayer.",
    },

    hotel: {
      image: "/images/07.jpg",
      alt: "Hébergement",
      eyebrow: "Séjour • Lodging",
      title: "Hébergement",
      name: "Hôtel Le confort",
      phone: "+337859526",
      code: "MARIAGE2027",
      codeLabel: { fr: "Code à annoncer :", en: "Booking code:" } as Bilingual,
      travel: {
        fr: "15/18 min en voiture.",
        en: "15/18 min by car.",
      } as Bilingual,
      payment: {
        fr: "Paiement directement sur place.",
        en: "Pay upon arrival on site.",
      } as Bilingual,
      help: {
        fr: "Si besoin d'aide pour réserver, contactez-nous directement.",
        en: "If you cannot call France, let us know, we will do it for you.",
      } as Bilingual,
    },

    brunch: {
      image: "/images/08.jpg",
      alt: "Le Brunch",
      dateLabel: "Dimanche 16 Mai 2027",
      title: "Le Brunch",
      text: "Ne manquez pas le brunch du lendemain • 16-05-2027 dans le parc du domaine",
    },

    countdown: {
      image: "/images/09.jpg",
      alt: "Shauna & Antoine Countdown",
      title: "Le Grand Jour Approche",
      units: {
        days: "Jours",
        hours: "Heures",
        minutes: "Minutes",
        seconds: "Secondes",
      },
      tagline: "We're so excited",
      catLabel: "Cute Cat",
      dogLabel: "Cute Dog",
    },
  },
};
