import { Dialog } from '@material-ui/core';
import React, { useState } from 'react'
import PptxGenJS from 'pptxgenjs';
import $ from 'jquery'; 
import Ppt from './ppt';
import TableView from './table';


export default function ToPpt(){

    
  const [open, setOpen] = useState(false);
 
  const handleOpen = () => {
    setOpen(true);
 
  };
      

 function tabLoad(){
    setTimeout(function() {

        $('#tableContainer2').hide("50")
      },50)
 }
 window.onload = tabLoad
  const handleClose = () => {
    setOpen(false);
  };

      function saveAsppt(){
        let pptx = new PptxGenJS();
        pptx.tableToSlides("tableContainer2",{x :'0%', y:'0%', });
       pptx.writeFile({ fileName: "table.pptx" });
        
      }
    return(
        <div>

<a onClick={handleOpen}>As Ppt</a>
<div  id="tableContainer2">
    <TableView/>
</div>

<Dialog className="popup" id="popupu" open={open} fullScreen onClose={handleClose} >
<button className="btn-primary" onClick={saveAsppt}>Download</button>
<Ppt />
 
      </Dialog>
        </div>
    )
}