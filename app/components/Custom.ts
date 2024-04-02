import {Ollama} from "llamaindex";

export const llm = new Ollama({ model: process.env.OLLAMA_SERVER_MODEL, temperature: 0.75 });
llm.baseURL = process.env.OLLAMA_SERVER

