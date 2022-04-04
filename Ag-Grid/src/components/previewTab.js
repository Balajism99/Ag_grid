import React, { useState } from 'react';
import { 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Dialog,
    Slide,
 } from '@material-ui/core';
import { DATAS } from '../data/data';



 export default function TablePreViewTab(){

    return(
             <div className="pdf">

        <TableContainer component={Paper} className="tableContainer" id="tabContainer">
      <Table className="table-prev">
        <TableHead>
          <TableRow>
            <TableCell className="column"><b>Name</b></TableCell>
            <TableCell className="column"><b>Email</b></TableCell>
            <TableCell className="column"><b>Phone</b></TableCell>
            <TableCell className="column"><b>Job Title</b></TableCell>
            <TableCell className="column"><b>Company</b></TableCell>
            <TableCell className="column"><b>Course Status</b></TableCell>
            <TableCell className="column"><b>Date</b></TableCell>
            <TableCell className="column"><b>Salary</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {DATAS.map((row) => (
            <TableRow key={row.name}>
              <TableCell className="datas">{row.name}</TableCell>
              <TableCell className="datas">{row.email}</TableCell>
              <TableCell className="datas">{row.phone}</TableCell>
              <TableCell className="datas">{row.jobTitle}</TableCell>
              <TableCell className="datas">{row.company}</TableCell>
              <TableCell className="datas">{row.status}</TableCell>
              <TableCell className="datas" title="datetoLocal" data-testid="datetoLocal">{row.date}</TableCell>
              <TableCell className="datas">{row.number.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>

    )
 }

 