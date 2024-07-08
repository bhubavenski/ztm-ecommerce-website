export const createAction = <TTypes extends string, TPayload = undefined>(
    type: TTypes,
    payload?: TPayload
  ) => ({ type, payload });
  