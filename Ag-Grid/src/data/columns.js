import { Dialog } from "@material-ui/core";
import { useState } from "react";
import FormDialog from '../components/dialog'
 const actionButton=(params)=>{
 <FormDialog  />
}

function actionCellRenderer(params) {
  let eGui = document.createElement("div");

  let editingCells = params.api.getEditingCells();

    eGui.innerHTML = `
<button class="action-button edit"  data-action="edit" > edit  </button>
<button class="action-button delete" data-action="delete" > delete </button>
`;

  return eGui;
}
export const columnDefs= [
    { headerName: "Name", field: "name", sortable:true,flex:1,filter:true,editable: true,  sort: 'asc', headerCheckboxSelection: true, headerCheckboxSelectionFilteredOnly: true,}, 
    {headerName: "Email",field: "email",editable : 'agPopupSelectCellEditor',editable: true,},
    {headerName: "Phone",field: "phone",editable : 'agPopupSelectCellEditor',editable: true,},
    { headerName: "Job Title", field: "jobTitle",editable : 'agPopupSelectCellEditor', editable: true,},
    { headerName: "Company", field: "company" ,editable : 'agPopupSelectCellEditor',editable: true,},
    { headerName: "Date", field: "date",sortable:true,filter:'agDateColumnFilter',flex:1,  cellClass: 'dateISO', editable : 'agPopupSelectCellEditor',editable: true,
    filterParams: {
        debounceMs: 500,
        suppressAndOrCondition: true,
        comparator: function(filterLocalDateAtMidnight, cellValue) {
          if (cellValue == null) {
            return 0;
          }
          var dateParts = cellValue.split('/');
          var year = Number(dateParts[2]);
          var month = Number(dateParts[1]) - 1;
          var day = Number(dateParts[0]);
          var cellDate = new Date(year, month, day);
          if (cellDate < filterLocalDateAtMidnight) {
            return -1;
          } else if (cellDate > filterLocalDateAtMidnight) {
            return 1;
          } else {
            return 0;
          }
        }},
  
  sort: 'asc' },
    { headerName: "Salary", field: "number",sortable:true,flex:1,filter:'agNumberColumnFilter',editable : 'agPopupSelectCellEditor',editable: true,
    filterParams: {
      suppressAndOrCondition: true,
      defaultJoinOperator: 'OR',
    },
    sort: 'asc' },
    {
      headerName: "action",
      minWidth: 150,
      cellRenderer: actionCellRenderer,
      colId: "action"
    },
    {headerName: "Action",field:"number", editable: true,
    cellRendererFramework:(params)=><div>
      <button className="btn-head" onClick={()=>actionButton(params)}>Details</button>
     
     
    </div>}

    ]




/*
const actionButton=(params)=>{
  console.log(params);
  alert(`Name : ${params.data.name} , Email : ${params.data.email} , JobTitle : ${params.data.jobTitle} , Phone : ${params.data.phone} , 
  Company : ${params.data.company} , Date : ${params.data.date} , Salary : ${params.data.number}`)
}
{
      headerName: "Action",
      minWidth: 150,
      cellRenderer: actionCellRenderer,
      editable: false,
      colId: "action"
    }

function actionCellRenderer(params) {
  let eGui = document.createElement("div");

  let editingCells = params.api.getEditingCells();
  // checks if the rowIndex matches in at least one of the editing cells
  let isCurrentRowEditing = editingCells.some((cell) => {
    return cell.rowIndex === params.node.rowIndex;
  });

  if (isCurrentRowEditing) {
    eGui.innerHTML = `
<button  class="action-button update"  data-action="update"> update  </button>
<button  class="action-button cancel"  data-action="cancel" > cancel </button>
`;
  } else {
    eGui.innerHTML = `
<button class="action-button edit"  data-action="edit" > edit  </button>
<button class="action-button delete" data-action="delete" > delete </button>
`;
  }

  return eGui;
}
*/