import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Input, MenuItem, NativeSelect, Select, TextField } from '@material-ui/core';
import validateInfo from './validate';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';


export default function FormDialog({pop, handleClickClose, data,onChange,handleUpdate, gridApi, errors}) {
 
  function SubmitButton(){
    if (errors.name || errors.email || errors.jobTitle || errors.date || errors.company || errors.phone || errors.number){
      return <Button  color="primary" onClick={handleUpdate} disabled variant="contained">Update </Button>
    } else {
      return <Button  color="primary" onClick={handleUpdate} variant="contained">Update </Button>
    };
  };
  return (
    <div>
      <Dialog
        open={pop}
        onClose={handleClickClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="popup-pop"
      >
        <DialogTitle id="alert-dialog-title">Update Employee</DialogTitle>
        <DialogContent>
         <form>
             <TextField id="name" name="name" value={data.name} onChange={e=>onChange(e)}required type="text" label="name" variant="outlined" margin="dense" fullWidth />
             {errors.name && <p className="errors">{errors.name}</p>}
             <TextField id="email" name="email" value={data.email} onChange={e=>onChange(e)}    type="email"  label="email" variant="outlined" margin="dense" fullWidth />
             {errors.email && <p className="errors">{errors.email}</p>}
             <TextField id="phone"value={data.phone}  onChange={e=>onChange(e)}  label="Phone Number" variant="outlined" margin="dense" fullWidth />
             {errors.phone && <p className="errors">{errors.phone}</p>}
             <TextField id="jobTitle" value={data.jobTitle} onChange={e=>onChange(e)}  label="Job Title" variant="outlined" margin="dense" fullWidth />
        
             {errors.jobTitle && <p className="errors">{errors.jobTitle}</p>}
            
  <label for="cars">Couse Status :</label>
  <select name="cars" id="status" className="color-select" onChange={e=>onChange(e)}>
  <option className="color-option" value='Completed'>Completed</option>
    <option className="color-option" value='Not Registered'>Not Registered</option>
    <option className="color-option" value='In Progress'>In Progress</option>
  </select>
             <TextField id="company"value={data.company} onChange={e=>onChange(e)}  label="Company" variant="outlined" margin="dense" fullWidth />
             {errors.company && <p className="errors">{errors.company}</p>}
             <TextField id="date"value={data.date} onChange={e=>onChange(e)}  label="Date" variant="outlined" margin="dense" fullWidth />
             {errors.date && <p className="errors">{errors.date}</p>}
             <TextField id="number" value={data.number} onChange={e=>onChange(e)}  label="Salary" variant="outlined" margin="dense" fullWidth />
             {errors.number && <p className="errors">{errors.number}</p>}
         </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickClose} color="secondary" variant="outlined">
            Cancel
          </Button>
         <SubmitButton />
          
        </DialogActions>
      </Dialog>
    </div>
  );
}