
 //onGridReady={(params) => setGridApi(params.api)}
 

 /*
<PopDialog action={action} handleActionClose={handleActionOpen}  data={formData} />

   onRowEditingStopped={onRowEditingStopped}
      onRowEditingStarted={onRowEditingStarted}
      onCellClicked={onCellClicked}
      editable={true}
      editType="fullRow"

      suppressClickEdit={true}

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

 columnDefs= [
  { headerName: "Name", field: "name", sortable:true,flex:1,filter:true,  sort: 'asc', headerCheckboxSelection: true, headerCheckboxSelectionFilteredOnly: true,}, 
  {headerName: "Email",field: "email"},
  {headerName: "Phone",field: "phone"},
  { headerName: "Job Title", field: "jobTitle" },
  { headerName: "Company", field: "company" },
  { headerName: "Date", field: "date",sortable:true,filter:'agDateColumnFilter',flex:1,  cellClass: 'dateISO', 
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
  { headerName: "Salary", field: "number",sortable:true,flex:1,filter:'agNumberColumnFilter',
  filterParams: {
    suppressAndOrCondition: true,
    defaultJoinOperator: 'OR',
  },
  sort: 'asc' },
  {
    headerName: "action",
    minWidth: 150,
    cellRenderer: actionCellRenderer,
    editable: false,
    colId: "action"
  }
  ]


// edit starts

function onCellClicked(params) {
  // Handle click event for action cells
  if (params.column.colId === "action" && params.event.target.dataset.action) {
    let action = params.event.target.dataset.action;

    if (action === "edit") {
      params.api.startEditingCell({
        rowIndex: params.node.rowIndex,
        // gets the first columnKey
        colKey: params.columnApi.getDisplayedCenterColumns()[0].colId
      });
    }

    if (action === "delete") {
      params.api.applyTransaction({
        remove: [params.node.data]
      });
    }

    if (action === "update") {
      params.api.stopEditing(false);
    }

    if (action === "cancel") {
      params.api.stopEditing(true);
    }
  }
}


function  onRowEditingStarted(params) {
  params.api.refreshCells({
    columns: ["action"],
    rowNodes: [params.node],
    force: true
  });
}


 function onRowEditingStopped(params) {
  params.api.refreshCells({
    columns: ["action"],
    rowNodes: [params.node],
    force: true
  });
}


// edit ends
 const onExportClick=()=>{
 gridApi.exportDataAsCsv( {
  
    onlySelected: document.querySelector('#selectedOnly').checked

  });
}

columnStyles: {
      0: {cellWidth: 100},
      1: {cellWidth: 80},
      2: {cellWidth: 80},
      // etc
    },
    theme : 'grid'
    
 gridApi.getSelectedRows().map((employee)=>
  Slide.addTable([[employee.name,employee.email, employee.phone, employee.jobTitle, employee.company, employee.date    ,employee.number ]], {
   
    
    margin: 0.1,
}),

  )
  
 doc.autoTable({
      head : [['Name', 'Email', 'Phone', 'Company', 'JobTitle','Date', 'Salary']],
      body:[[+employee.firstName, 
        + employee.email, + employee.phone, + employee.jobTitle, + employee.company, + employee.date, + employee.number,
      ]]
    })
 
function printDoc() {
  var doc = new jsPDF("l", "pt", "A4");
  gridApi.getSelectedRows().forEach(function(employee, i){
      doc.text(20, 10 + (i * 10), 
      "First Name: " + employee.firstName +
      "Email: " + employee.email+ 
      'phone :' +employee.phone+
      "Jobtitle :" +employee.jobTitle+
      "Company :" +employee.company+
      "Date :" +employee.date+
      "Salary :"+employee.number);
  });
  doc.save('Test.pdf');
}
 as pdf
 https://blog.ag-grid.com/exporting-ag-grid-to-pdf/


 const gridOptions = {
  defaultColDef: {
    sortable: true,
    filter: true,
    resizable: true,
    minWidth: 100,
    flex: 1,
  },
  suppressRowClickSelection: true,
  checkboxSelection : true,
  pagination : true,
  paginationAutoPageSize : true,
  paginationPageSize : 5,
  rowData : DATAS,
  columnDefs: columnDefs,
  rowSelection: 'multiple',
  onGridReady: function (params) {
    document.getElementById('selectedOnly').checked = true;
  },
};
*/