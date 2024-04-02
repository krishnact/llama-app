import {SimpleDirectoryReader, FILE_EXT_TO_READER, TextFileReader} from "llamaindex";
import {LlamaParseReader} from "llamaindex";

export const DATA_DIR = "./data";

export async function getDocuments() {
  // Currently, it supports reading .csv, .docx, .html, .md and .pdf files
  // To add additional file types see example given for zip file type here:
  // //https://ts.llamaindex.ai/modules/data_loader#simpledirectoryreader

  const simpleDirectoryReader = new SimpleDirectoryReader();
  let fileExtReader = FILE_EXT_TO_READER
  if (process.env.LLAMA_CLOUD_API_KEY && process.env.LLAMA_CLOUD_API_KEY !== ''){
    fileExtReader = {...fileExtReader,pdf: new LlamaParseReader(),}
  }

  const documents = await simpleDirectoryReader.loadData({
    directoryPath: DATA_DIR,
    defaultReader: new TextFileReader(),
    fileExtToReader: fileExtReader,
  });

  return documents;
}