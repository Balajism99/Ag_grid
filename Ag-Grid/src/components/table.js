import React, {useState} from 'react';
import { 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    
 } from '@material-ui/core';
import { DATAS } from '../data/data';



 export default function TableView(){
   
    return(
             
        <TableContainer  component={Paper} className="tableContainer" id="tableContainer2">
     <Table className="table">
        <TableHead>
          <TableRow className="tablerow">
            <TableCell className="column" ><b>Name</b></TableCell>
            <TableCell className="column"><b>Email</b></TableCell>
            <TableCell className="column"><b>Phone</b></TableCell>
            <TableCell className="column"><b>Job Title</b></TableCell>
            <TableCell className="column"><b>Company</b></TableCell>
            <TableCell className="column"><b>Date</b></TableCell>
            <TableCell className="column"><b>Salary</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="tablebody">
          {DATAS.map((row) => (
            
            <TableRow key={row.name} className='tablerow' id="tablerow">
              <TableCell className="datas">{row.name}</TableCell>
              <TableCell className="datas">{row.email}</TableCell>
              <TableCell className="datas">{row.phone}</TableCell>
              <TableCell className="datas">{row.jobTitle}</TableCell>
              <TableCell className="datas">{row.company}</TableCell>
              <TableCell className="datas" title="datetoLocal" data-testid="datetoLocal">{row.date}</TableCell>
              <TableCell className="datas" data-testid="num">{row.number.toFixed(2)}</TableCell>
          
            </TableRow>
          ))}
        </TableBody>

      </Table>
     
    </TableContainer>
    )
 }
