import {utils,writeFile, readFile,} from "xlsx";
const useExport =()=>{
    const  generateExcelFile=(data,fileName)=>{
        const worksheet = utils.json_to_sheet(data);
        const workbook = utils.book_new();
        utils.book_append_sheet(workbook, worksheet, "Sheet1");
        writeFile(workbook, `${fileName}.xlsx`);
      }
      const importExcelFile =(e)=>{
        e.preventDefault();
        if (e.target.files) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = e.target.result;
                const workbook = readFile(data, { type: "array" });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const json = utils.sheet_to_json(worksheet);
                console.log(json);
            };
            reader.readAsArrayBuffer(e.target.files[0]);
        }
      }
      return{
        generateExcelFile,
        importExcelFile
      }
}
export default useExport