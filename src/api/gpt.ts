import inst from "./axios";

export interface IUserInput {
    field: "topic" | "keywords" | "outline" | "text";
    value: string;
}

export interface IGptReq {
    method:
        | "outline"
        | "keyword"
        | "tone_rewrite"
        | "content_rewrite"
        | "level_rewrite"
        | "style_rewrite";
    userInputs: IUserInput[];
    tone?: string;
    contentOption?: string;
    levelOption?: string;
    identity: string;
    option?: string;
}

export interface IDeepLReq {
    text: string;
    source: string;
    target: string;
    autoDetect?: boolean;
}

export const gptReq = (data: IGptReq) => inst.post("/gpt", data);

export const deeplReq = (data: IDeepLReq) => inst.post("/translate", data);
