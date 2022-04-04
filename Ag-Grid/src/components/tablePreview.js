import React, { useEffect, useState, useMemo } from 'react';

import Iframe from 'react-iframe';
import { AsExcel } from './ry';
import ToPpt from './toPpt';
import { DATAS } from '../data/data';
import { AgGridReact } from 'ag-grid-react';
import jsPDF from 'jspdf';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { columnDefs } from '../data/columns';
import { Button, Dialog, IconButton, Slide, Snackbar, TableCell, TableRow, TextField } from '@material-ui/core';
import html2canvas from 'html2canvas';
import pdfMake from "pdfmake/build/pdfmake";
import 'jspdf-autotable'
import PptxGenJS from 'pptxgenjs';
import FormDialog from './dialog';
import { rowData } from '../data/rowData';
import validateInfo from './validate';
import ActionDialog from './actionDialog';
import $ from 'jquery';
import PopDialog from './popDialog';
import { set } from 'react-hook-form';
import EllipsisToolTip from "ellipsis-tooltip-react-chan";
import { Tooltip } from 'react-tippy';
import { SetFilterModule } from '@ag-grid-enterprise/set-filter';
import TippyPop from './tippypop';
import moment from 'moment'





export default function TablePreView() {

  const [pop, Setpop] = useState(false)
  const [dot, setDot] = useState(false)
  const [action, setAction] = useState(false)
  const [remove, setRemove] = useState('')
  const [row, setRow] = useState(rowData)
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({})
  const [editContactId, setEditContactId] = useState(null);

  const handleClickClose = (params) => {
    Setpop(false);
  };
  const handleDotClose = (params) => {
    setDot(false);
  };

  const handleActionOpen = (params) => {
    setAction(true);
    setFormData(params.data)
  };
  const handleActionClose = (params) => {
    setAction(false);
  };

  const handleClickOpen = (parval,params, event) => {
    Setpop(true);
    setFormData(parval.data)
    console.log(parval)
    const index = row.findIndex((rows) => rows.id);
   
    setTippy("")
  };
  const handlepopopen = (parval) => {
    setDot(true);
    setFormData(parval.data)
  
    setTippy("")
  };
  const onChange = (e) => {
    const { value, id } = e.target
    console.log(id)
    setFormData({ ...formData, [id]: value })
    setErrors(validateInfo(formData))
  }
  function onDelete(parval) {
    gridApi.applyTransaction({
      remove: [parval.node.data]
    });
    setTippy("")
  }
  function handleUpdate(params) {
    setErrors(validateInfo(formData))
    console.log(row.id)
    const newRows = [...row];

    const index = row.findIndex((rows) => rows.id);
    console.log('rowindex', index)
    newRows[index] = formData;

    setRow(newRows);
    setEditContactId(null);
    Setpop(false)
  }
  const cellClassRules = {
    "cell-pass": params => params.value === 'Completed',
    "cell-fail": params => params.value === "Not Registered",
    "cell-progress": params => params.value === "In Progress"
  };
  const [tippy, setTippy] = useState('')
  const [parval, setParval] = useState('')
  function Tippypop(params, event) {
    console.log(params.node.rowIndex
      )
    setTippy("error")
    setParval(params)
    var cursorX;
    var cursorY;
    var icon = document.getElementById("tip-icon")
    document.onmouseenter = function (e) {
      cursorX = e.pageX;
      cursorY = e.pageY;
     
      var dropContent = document.getElementById('tippy-pop')
      var translate3dvalue = "translate3d(" + cursorX + "px," + cursorY + "px, 0)"
      dropContent.style.transform = translate3dvalue;

    }
  }
  var gridModules = [SetFilterModule]

  const columnDefs = [
    { headerName: "Name", field: "name", filter: true, editable: true, sortable: true, sort: 'asc', tooltipField: "name", checkboxSelection: true, headerCheckboxSelection: true, headerCheckboxSelectionFilteredOnly: true, },
    { headerName: "Email", field: "email", editable: 'agPopupSelectCellEditor', tooltipField: "email", editable: true, flex: 2, resizable: true, maxWidth: 260, minWidth: 200, value: "example@ag-grid.com", lastValidation: true },
    { headerName: "Phone", field: "phone", editable: 'agPopupSelectCellEditor', tooltipField: "phone", editable: true, },
    { headerName: "Job Title", field: "jobTitle", editable: 'agPopupSelectCellEditor', resizable: true, maxWidth: 260, minWidth: 200, tooltipField: "jobTitle", editable: true, },
    { headerName: "Company", field: "company", editable: 'agPopupSelectCellEditor', resizable: true, flex: 1, maxWidth: 250, minWidth: 200, tooltipField: "company", editable: true, },
    { headerName: "Course Status", field: "status", filter: 'agSetColumnFilter', cellClassRules: cellClassRules, cellEditor: 'agRichSelectCellEditor', },

    {
      headerName: "Date", field: "date", sortable: true, filter: 'agDateColumnFilter', tooltipField: "date", minWidth: 180, maxWidth: 180, cellClass: 'dateISO', editable: 'agPopupSelectCellEditor', editable: true,
      filterParams: {
        debounceMs: 500,
        suppressAndOrCondition: true,
        comparator: function (filterLocalDateAtMidnight, cellValue) {
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
        }
      },

      sort: 'asc'
    },
    {
      headerName: "Salary", field: "number", tooltipField: "number", minWidth: 180, maxWidth: 180, sortable: true, filter: 'agNumberColumnFilter', editable: 'agPopupSelectCellEditor', editable: true, maxwidth: 120,
      filterParams: {
        suppressAndOrCondition: true,
        defaultJoinOperator: 'OR',
      },
      sort: 'asc'
    },

    {
      headerName: "Actions", colId: "action", minWidth: 180, maxWidth: 180,
      cellRendererFramework: (params) =>
        <div className="over-pop">

          <div class="dropdown-dot-pop">
            <i class="fa fa-2x fa-ellipsis-v dropbtn-dot-pop dot-pops" id="tip-icon" onClick={() => Tippypop(params)}></i>

          </div>

        </div>


    },

  ]

  const [open, setOpen] = useState(false);
  const [asPdf, SetAsPdf] = useState('')
  const handleClose = () => {
    setOpen(false);
    return setOpen
  };

  const handleOpen = () => {
    setOpen(true);

  };


  const fileName = "employeeList";
  const [gridApi, setGridApi] = useState()
  const onGridReady = (params) => {
    //gridApi=params.api
    setGridApi(params.api)
    let gridColumnApi = params.columnApi;
    document.querySelector('#selectedOnly').checked = true;
    console.log(params.api.status)
  }
  const onExportClick = () => {
    gridApi.exportDataAsCsv({

      onlySelected: document.querySelector('#selectedOnly').checked

    });
  }
  const onSelectionChanged = (event) => {
    console.log(event)
    console.log(event.api.getSelectedRows())
    setRemove('open')

  }

  function printDoc() {
    var doc = new jsPDF("l", "pt",);
    var col = [['Name', 'Email', 'Phone', 'JobTitle', 'Company', 'Date', 'Salary']]
    gridApi.getSelectedRows().map((employee) =>
      doc.autoTable({

        // head: col,
        body: [[employee.name, employee.email, employee.phone, employee.jobTitle, employee.company, employee.date, employee.number, employee.status]],

      })
    )
    doc.save('Test.pdf');
  }
  function printPpt() {
    let pptx = new PptxGenJS();
    let slide = pptx.addSlide();
    var arrppt = gridApi.getSelectedRows().map((employee) =>
      [employee.name, employee.email, employee.phone, employee.jobTitle, employee.company, employee.date, employee.number, employee.status]
    )
    var col = [['Name', 'Email', 'Phone', 'JobTitle', 'Company', 'Date', 'Salary']]
    slide.addTable(arrppt,
      { x: 0.5, y: 1.0, w: '90%', autoPage: true, border: { pt: "1", color: "BBCCDD" } },
      { rowH: 0.75, },
    )

    pptx.writeFile(col, { fileName: "table.pptx" });

  }
  // export grid ends



  // go to page and snack bar starts
  const [bar, setBar] = useState(false)
  const [pageerror, setPageerror] = useState('')
  function barOpen() {
    setBar(true)
  }
  function barClose() {
    setPageerror('')
    setBar(false)
  }

  const [pageno, setPageno] = useState()
  const onChangePage = (e) => {
    const { value, id } = e.target
    setPageno(value)
    var size = Number(e.target.value) - 1
    var total = gridApi.paginationGetTotalPages()
    console.log(total)
    let input = document.getElementById("page")
    input.addEventListener('keyup', (e) => {
      if (e.keyCode === 13) {
        gridApi.paginationGoToPage(Number(e.target.value) - 1);
        if (size >= total) {
          setPageerror("No Pages Found, Returning the last page")
        }
      }

    })
  }
  function valueFilter(params) {
    return (
      console.log(params.value === "Completed")

    )
  }

  function onPageSizeChanged() {
    var value = document.getElementById('page-size').value;
    gridApi.paginationSetPageSize((value));
  }
  const onRemoveSelected = () => {
    const selectedData = gridApi.getSelectedRows();
    gridApi.applyTransaction({ remove: selectedData });
    gridApi.setFilterModel(null);
  };
  const clearFilter = () => {
    gridApi.setFilterModel(null);
  };
  // go to page and snack bar ends
  const rowSelectionType = 'multiple'
  const arr = [
    { _id: 1, createdAt: (' Feb 07 2018 11:50:21 ') },
    { _id: 2, createdAt: (' Jan 06 2020 00:00:00') }
  ];
  
 
  return (

    <div className="pdf">
      <div className="tippy-pop" id="tippy-pop">
        {
          tippy ? (
            <div class="dropdown-content-dot-pop" id="drop-pop">
              <a class="cell-pop" onClick={() => handleClickOpen(parval)}><i class="fa fa-edit act-icon"></i>Edit</a>
              <a class="cell-pop" onClick={() => onDelete(parval)}><i class="fa fa-trash act-icon"></i>Delete</a>
              <a class="cell-pop" onClick={() => handlepopopen(parval)}><i class="fa fa-clone act-icon"></i> Clone</a>
            </div>
          ) : ""
        }
      </div>

      <div>
        <label id="selectedOnly" className="option" for="selectedOnly"></label>

      </div>


      {
        pageerror ? (
          <Snackbar className="bar" severity="error" anchorOrigin={{ vertical: "top", horizontal: "center" }} open={barOpen} onClose={barClose} color="red" autoHideDuration={4000}
            message={<span className="message">{pageerror}</span>}
            action={[
              <IconButton key="close" aria-label="Close" color="inherit" onClick={barClose} autoHideDuration={4000}>X</IconButton>

            ]}   >
          </Snackbar>
        ) :
          ''
      }

      <div className="ag-theme-alpine" style={{ height: '400px', width: '1880px' }}>
        <AgGridReact
          columnDefs={columnDefs}
          rowData={row}
          filter={true}
          rowHeight={50}
          pagination={true}
          modules={gridModules}
          rowSelection={rowSelectionType}
          rowMultiSelectWithClick={true}
          checkboxSelection={true}
          editable={true}
          suppressClickEdit={false}
          suppressScrollOnNewData={true}
          paginationPageSize={5}
          onSelectionChanged={onSelectionChanged}
          suppressRowClickSelection={true}
          onGridReady={onGridReady}
          enableBrowserTooltips={true}
          multiSortKey={'ctrl'}
          className="ag-container"
          id="rowselected"
        >

        </AgGridReact>
      </div>


      <div className='page' >


        <TextField id="page" name="page" className="pagearea" type="number" onChange={e => onChangePage(e)} label="Go To Page" variant="outlined" margin="dense" />

        <label className="pagetext">Rows Per Page:</label>
        <select className="pagesize" onChange={onPageSizeChanged} id="page-size">
          <option value="5" selected>5</option>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>

      </div>
      <div id="aspdf"></div>
      <div class="dropdown">
        <button className="dropbtn" >Export Selected</button>

        <div class="dropdown-content">
          <a onClick={() => printDoc()} >As Excel</a>
          <a onClick={() => printDoc()} >As Pdf</a>
          <a onClick={() => printPpt()} >As Ppt</a>
        </div>

      </div>
      <div class="dropdown">
        <button className="dropbtn" >Preview</button>

        <div class="dropdown-content">
          <a onClick={handleOpen} title="button-pdf">As Pdf</a>
          <AsExcel empData={DATAS} fileName={fileName} className="excel" />
          <ToPpt />
        </div>

      </div>
      {
        remove ? (
          <button className="dropbtn-del" onClick={() => onRemoveSelected()}>Remove Selected</button>

        ) : ''
      }
      <FormDialog pop={pop} handleClickClose={handleClickClose} data={formData} onChange={onChange} gridApi={gridApi} handleUpdate={handleUpdate} errors={errors} />
      <ActionDialog dot={dot} handleDotClose={handleDotClose} onChange={onChange} data={formData} />
      <Dialog className="popuup" id="popup" fullScreen open={open} onClose={handleClose}   >
        <Iframe url="http://localhost:3000/preview"
          width="1600px"
          height="1450px" />
      </Dialog>


    </div>


  )
}
/*
{
  tippy ? (
    <div class="dropdown-content-dot-pop" id="drop-pop">
    <a class="cell-pop" onClick={() => handleClickOpen(parval)}><i class="fa fa-edit act-icon"></i> Edit</a>
 <a class="cell-pop" onClick={() => onDelete(parval)}><i class="fa fa-trash act-icon"></i> Delete</a>
 <a class="cell-pop" onClick={() => handlepopopen(parval)}><i class="fa fa-clone act-icon"></i> Clone</a>
     </div>
  ):""
}

<TippyPops handleClickOpen={handleClickOpen(parval)} onDelete={onDelete(parval)} handlepopopen={handlepopopen(parval)}/>





var dropContent = document.getElementById('tippy-pop')

var icon = document.getElementById("tip-icon")
  icon.addEventListener('click', getMousePosition, false)


function getMousePosition(e){
  var x = e.clientX;
  var y = e.clientY;
console.log(x, y)
  var translate3dvalue ="translate3d("+ x + "px," + y +"px, 0)"
  dropContent.style.transform= translate3dvalue
}
*/