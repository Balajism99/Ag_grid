
import React, { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import $, { type } from 'jquery'; 
import { Dialog, Slide } from '@material-ui/core';
import Ppt from './ppt';
import Iframe from 'react-iframe';
import TablePreViewTab from './previewTab';

export default function PopUp(){
  const [open, setOpen] = useState(false);
  const [bloburl, setbloburl]= useState();
  const [container, setContainer]=useState(TablePreViewTab )
  var cont = document.getElementById("tabContainer")
console.log(cont)
  const handleClose = () => {
    setOpen(false);
  };
      function blobs(){
        html2canvas(document.getElementById("tabContainer")).then(function(canvas){
          document.getElementById("pop").appendChild(canvas)
         
        })
      }
         
function generateView() {
  setOpen(true);
  html2canvas(document.getElementById("tabContainer")).then(function(canvas){
    document.getElementById("pop").appendChild(canvas)
    var doc = jsPDF("l", "pt", "A2");
    doc.html(document.querySelector("#pop"),{
      callback : function(pdf){
        var blobView =  new Blob([ pdf.output('blob') ], { type : 'application/pdf'});
        console.log(blobView)
        var viewUrl = URL.createObjectURL(blobView); 
        setbloburl(viewUrl)
        console.log(viewUrl)
        var preview = document.getElementById("popups");
       preview.data = viewUrl
      }
    })
     }
     )
     setTimeout(function() {

      $('#pop').hide("100")
    },100)
    
     setTimeout(function() {

      $('#tabContainer').hide("500")
    },500)
}
  
window.onload= generateView
function createPDF() {
  var sTable = document.getElementById('tabContainer').innerHTML;

  var style = "<style>";
  style = style + "table {width: 100%;font: 17px Calibri;}";
  style = style + "table, th, td {border: solid 1px #DDD; border-collapse: collapse;";
  style = style + "padding: 2px 3px;text-align: center;}";
  style = style + "</style>";


  var win = window.open('', '', 'height=1700,width=1700');

  win.document.write('<html><head>');
  win.document.write('<title>Profile</title>');   
  win.document.write(style);         
  win.document.write('</head>');
  win.document.write('<body>');
  win.document.write(sTable);        
  win.document.write('</body></html>');

  win.document.close(); 	

}

  return(
    <div  className="pops">
      <div id="tabContainer">
        <TablePreViewTab />
      </div>

      <div className='pop'id='pop'> </div>

      <Dialog className="popup" id="popupu" open={generateView}  fullScreen onClose={handleClose} >
        <button onClick={createPDF}>download</button>
    
  <object  width="1600px"
         height="1450px" id="popups"/>
      </Dialog>
      
    </div>
  )
}

/*
  <object  width="1600px"
         height="1450px" id="popups"/>
         
function generateView() {
  setOpen(true);
  html2canvas(document.getElementById("tabContainer")).then(function(canvas){
    document.getElementById("pop").appendChild(canvas)
    var doc = jsPDF("l", "pt", "A2");
    doc.html(document.querySelector("#pop"),{
      callback : function(pdf){
        var blobView =  new Blob([ pdf.output('blob') ], { type : 'application/pdf'});
        console.log(blobView)
        var viewUrl = URL.createObjectURL(blobView); 
        setbloburl(viewUrl)
        console.log(viewUrl)
        var preview = document.getElementById("popups");
       preview.data = viewUrl
      }
    })
     }
     )
     setTimeout(function() {

      $('#pop').hide("100")
    },100)
    
     setTimeout(function() {

      $('#tabContainer').hide("500")
    },500)
}
  

 html2canvas(document.getElementById("tabContainer")).then(function(canvas){
    document.getElementById("pop").appendChild(canvas)
    var xhr = new XMLHttpRequest();
    xhr.open("GET", canvas);
    xhr.responseType = "blob";
   var image = xhr.send();
       
    var blobView =  new Blob([ image ], { type : 'application/pdf'});
    console.log(blobView)
    var viewUrl = URL.createObjectURL(blobView); 
    setbloburl(viewUrl)
    console.log(viewUrl)
    var preview = document.getElementById("popups");
   preview.data = viewUrl
  })
     
     setTimeout(function() {

      $('#pop').hide("100")
    },100)
    
     setTimeout(function() {

      $('#tabContainer').hide("500")
    },500)
*/