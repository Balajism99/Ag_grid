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


export default function PopDialog({action, handleActionClose, handlepopopen, handleClickopen, onDelete, data,onChange,handleUpdate, gridApi, errors}) {
 
  
  return (
    <div>
      <Dialog
        open={action}
        onClose={handleActionClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="popup-pop"
      >
         <button className="btn-head" onClick={handleClickopen} >Edit</button>
     <button className="btn-head" >Delete</button>
      </Dialog>
    </div>
  );
}