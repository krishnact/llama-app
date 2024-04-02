import {SimpleDirectoryReader, FILE_EXT_TO_READER, TextFileReader} from "llamaindex";
import {LlamaParseReader} from "llamaindex";
// from llama_parse import LlamaParse  # pip install llama-parse
// from llama_index.core import SimpleDirectoryReader  # pip install llama-index
export const DATA_DIR = "./data";

export async function getDocuments() {
  // Currently, it supports reading .csv, .docx, .html, .md and .pdf files
  // To add additional file types see example given for zip file type here:
  // //https://ts.llamaindex.ai/modules/data_loader#simpledirectoryreader


  // const documents = await new SimpleDirectoryReader().loadData({
  //   directoryPath: DATA_DIR,
  //   defaultReader: new TextFileReader(),
  //   fileExtToReader: {
  //     ...FILE_EXT_TO_READER,
  //     pdf: new ZipReader(),
  //   },
  // });
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

//
// parser = LlamaParse(
//     api_key="...",  # can also be set in your env as LLAMA_CLOUD_API_KEY
// result_type="markdown"  # "markdown" and "text" are available
// )
//
// file_extractor = {".pdf": parser}
// reader = SimpleDirectoryReader("./data", file_extractor=file_extractor)
// documents = reader.load_data()