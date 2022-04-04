import React, { useState } from 'react'
import * as FileSaver from 'file-saver';
import { OutTable, ExcelRenderer } from "react-excel-renderer";
import * as XLSX from 'xlsx';
import Iframe from 'react-iframe';
import { Dialog} from '@material-ui/core';
import $ from 'jquery'; 


export const AsExcel = ({empData, fileName}) => {
const [open, setOpen] = useState(false)
  
const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';
    const [file, setFile] = useState(null);

function bloburls(){
  $(function() {
    setOpen(true)
   }, 1000);
   setTimeout(function() { toCsv() }, 5000);
}
    function toCsv() {
      const ws = XLSX.utils.json_to_sheet(empData);
      
      const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
      const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
      const data = new Blob([excelBuffer], {type: fileType});
      console.log(data)
      ExcelRenderer(data, (err, resp) => {
       
          setFile({
            cols: resp.cols,
            rows: resp.rows
          });
        
      });
    }
    
    const exportAsExcel = (empData, fileName) => {
     const ws = XLSX.utils.json_to_sheet(empData);
        var wscols = [
          {wch:30},{wch:30},{wch:30},{wch:30},{wch :30},{wch :20},{wch :20}
      ];
      
      ws['!cols'] = wscols;
      
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };

        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], {type: fileType});
        FileSaver.saveAs(data, fileName + fileExtension);
    }
   
    const handleClose = () => {
      setOpen(false);
      window.location.reload()
    };
       
   
    return (
<div onLoad={bloburls}>

<a onClick={bloburls}>As Excel</a>

<Dialog className="popup" id="popupu" open={open} fullScreen onClose={handleClose} >
  <button className="btn-primary" title="button-excel" onClick={(e) => exportAsExcel(empData,fileName)}>Download</button>
  {file && (
        <OutTable
          data={file.rows}
          columns={file.cols}
          tableClassName="table"
          tableHeaderRowClass="heading"
        />
      )}
 <Iframe  width="1600px" 
         height="1450px" id="popups"/>
      </Dialog>
      <script>
        
      </script>
</div>
       

    )

}
