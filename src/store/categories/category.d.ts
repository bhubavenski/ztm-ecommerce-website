import { TCategoryMap } from "@/types";
import { DocumentData } from "firebase/firestore";

export type TState = {
  categoriesArr: DocumentData[] | [];
};

export type TAction = {
  type: 'category/SET_CATEGORIES';
  payload: DocumentData[];
};
