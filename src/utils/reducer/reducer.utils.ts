export const createAction = <TTypes extends string, TPayload>(type:TTypes, payload:TPayload) => ({ type, payload });
