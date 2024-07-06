import { TCategoryMap } from "@/types";
import { DocumentData } from "firebase/firestore";

export type TCategoryState = {
  categoriesArr: DocumentData[] | [];
};

export type TCATEGORIES_ACTION_TYPES = 'category/SET_CATEGORIES'

export type TCategoryAction = {
  type: TCATEGORIES_ACTION_TYPES;
  payload: DocumentData[];
};
