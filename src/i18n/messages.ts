export type Locale = "sr" | "en";

export const messages = {
  sr: {
    contact: "Kontakt",
    home: "Početna",
    works: "Radovi",
    about: "O nama",
    portfolio: "Portfolio",
    openMenu: "Otvori meni",
    closeMenu: "Zatvori meni",
    momentsInMotion: "Trenuci u pokretu",
    heroText: "Trenuci koji ostaju zauvek",
    services: "Services",
    viewMore: "View more",
    serviceWeddings: "Venčanja",
    serviceDebut: "Rođendan punoletstvo",
    serviceFirstBirthdays: "Prvi rođendani",
    serviceCorporate: "Corpo events",
    serviceCorporateText:
      "We strive to create a harmonious combination of beauty, comfort and cosiness to make this day unforgettable and leave vivid impressions for a lifetime.",
  },
  en: {
    contact: "Contact",
    home: "Home",
    works: "Works",
    about: "About",
    portfolio: "Portfolio",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    momentsInMotion: "Moments in Motion",
    heroText: "Moments that last forever",
    services: "Services",
    viewMore: "View more",
    serviceWeddings: "Weddings",
    serviceDebut: "Debut birthday",
    serviceFirstBirthdays: "First birthdays",
    serviceCorporate: "Corporate events",
    serviceCorporateText:
      "We strive to create a harmonious combination of beauty, comfort and cosiness to make this day unforgettable and leave vivid impressions for a lifetime.",
  },
} as const;

export type MessageKey = keyof typeof messages.sr;
