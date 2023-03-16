import inst from "./axios";

export interface ISignUpReq {
    email: string;
    password: string;
    username?: string;
}

export interface ISignIReq {
    email: string;
    password: string;
}

export const signUpReq = (data: ISignUpReq) => inst.post("/user/signup", data);

export const signInReq = (data: ISignIReq) => inst.post("/user/signin", data);
