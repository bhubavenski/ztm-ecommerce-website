import { TCategoryMap } from "@/types";
import { DocumentData } from "firebase/firestore";

export type TState = {
  categoriesArr: DocumentData[] | [];
};

export type TCATEGORIES_ACTION_TYPES = 'category/SET_CATEGORIES';

export type TAction = {
  type: TCATEGORIES_ACTION_TYPES;
  payload: DocumentData[];
};
