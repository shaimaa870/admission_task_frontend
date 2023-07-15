function useFile(name="",extension="",base64="") {
    let file = {
      name: name,
      extension: extension,
     // fileType,
      // id: null,
      //fileStatus: 1,
     // readUrl: url,
      // bytes: null,
      //url: url,
      base64: base64,
    };
    return file;
  }
  
  export default useFile;
  