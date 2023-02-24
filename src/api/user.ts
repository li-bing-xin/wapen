import inst, { type IData } from "./axios";

export interface ISignUpReq {
  email: string;
  password: string;
}

export const signUpReq = (data: ISignUpReq): Promise<IData> =>
  inst.post("/user/signup", data);

export const signInReq = (data: ISignUpReq): Promise<IData> =>
  inst.post("/user/signin", data);
