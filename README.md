This is a [LlamaIndex](https://www.llamaindex.ai/) project using [Next.js](https://nextjs.org/) bootstrapped with [`create-llama`](https://github.com/run-llama/LlamaIndexTS/tree/main/packages/create-llama).

**The project has been changed to use Ollama+mistral instead of OpenAI. Please install Ollama+mistarl by following 
the directions below.** 

## Getting Started

First, install the dependencies:

```
npm install
```

Then change .env.example to have correct location of Ollama server and LlamaParseKey (LLAMA_CLOUD_API_KEY).

Then, generate the embeddings of the documents in the `./data` directory (if this folder exists - otherwise, skip this step):

```
npm run generate
# or if you need to debug
npm --node-options --inspect-brk run generate
```

Then, run the development server:

```
npm run dev
# or if you need to debug
npm --node-options --inspect-brk run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Running Ollama with mistral
Source: https://www.llamaindex.ai/blog/running-mixtral-8x7-locally-with-llamaindex-e6cebeabe0ab

Its is recommended that you have 48 GB of RAM to run mixtral, which most people won't have. So we will run 
mistral instead.
```bash
#This command installs Ollama as a service
curl -fsSL https://ollama.com/install.sh | sh
```

Most likely you would like to connect to this server remotely. To enable that, edit this file 
**/etc/systemd/system/ollama.service** and add the line 
**Environment="OLLAMA_HOST=0.0.0.0"** in Service section as shown below.
```
....
[Service]
Environment="OLLAMA_HOST=0.0.0.0"
ExecStart=/usr/local/bin/ollama serve
....
```
then reload and restart
```bash
systemctl daemon-reload
systemctl restart ollama
```
Cheek to make sure that its bound to 0.0.0.0
```bash
netstat -lntp
```

### To interact with mistral local.
```bash
ollama run mistral
>>> who are you?
I am a large language model trained by Mistral AI. I don't have the ability to
have a personal identity or go to colleges. I exist to help answer questions and
generate human-like text based on given prompts. How can I assist you today?

>>> Send a message (/? for help)
```


## Learn More

To learn more about LlamaIndex, take a look at the following resources:

- [LlamaIndex Documentation](https://docs.llamaindex.ai) - learn about LlamaIndex (Python features).
- [LlamaIndexTS Documentation](https://ts.llamaindex.ai) - learn about LlamaIndex (Typescript features).

You can check out [the LlamaIndexTS GitHub repository](https://github.com/run-llama/LlamaIndexTS) - your feedback and contributions are welcome!
