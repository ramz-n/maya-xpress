import { en } from "./en";
import { nl } from "./nl";
import { fr } from "./fr";

export const translations = {
  en,
  nl,
  fr,
};

export type Language =
  keyof typeof translations;