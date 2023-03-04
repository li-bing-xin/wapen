import inst, { type IData } from "./axios";

export interface IGptReq {
  method: string;
  userInput: string;
  tone?: string;
  contentOption?: string;
  levelOption?: string;
}

export interface IDeepLReq {
  text: string;
  source: string;
  target: string;
  autoDetect?: boolean;
}

export const gptReq = (data: IGptReq) => inst.post("/gpt", data);

export const deeplReq = (data: IDeepLReq) => inst.post("/translate", data);
