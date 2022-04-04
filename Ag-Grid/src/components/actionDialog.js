import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Input, TextField } from '@material-ui/core';
import validateInfo from './validate';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';


export default function ActionDialog({dot, handleDotClose, data,onChange,handleUpdate, gridApi, errors}) {
 
  
  return (
    <div>
      <Dialog
        open={dot}
        onClose={handleDotClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="popup-pop"
      >
        <DialogTitle id="alert-dialog-title"> Employee Details</DialogTitle>
        <DialogContent>
         <form>
         <TextField id="id" name="id" value={data.id}  type="text" label="id" variant="outlined" margin="dense" fullWidth />
             <TextField id="name" name="name" value={data.name}  type="text" label="name" variant="outlined" margin="dense" fullWidth />
             <TextField id="email" name="email" value={data.email}    type="email"  label="email" variant="outlined" margin="dense" fullWidth />
             <TextField id="phone"value={data.phone} label="Job Title" variant="outlined" margin="dense" fullWidth />
             <TextField id="company"value={data.company}  label="Company" variant="outlined" margin="dense" fullWidth />
             <TextField id="status"value={data.status} label="status" variant="outlined" margin="dense" fullWidth />
             <TextField id="date"value={data.date}   label="Date" variant="outlined" margin="dense" fullWidth />
             <TextField id="number" value={data.number}   label="Salary" variant="outlined" margin="dense" fullWidth />
         </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDotClose} color="secondary" variant="outlined">
            Cancel
          </Button>
          
        </DialogActions>
      </Dialog>
    </div>
  );
}