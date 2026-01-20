import { atom } from "jotai";
export const changeAtom = atom(true); // Rerender the list whenever a value changes
export const sideBarIsHiddenAtom = atom(false);
export const currentBodyAtom = atom("");
export const searchQueryAtom = atom("");
