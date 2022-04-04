import React from 'react'

export default function TippyPops(parval, handleClickOpen, onDelete, handlepopopen){
    console.log(parval)
    return(
        <div className="over-pop">
         <div class="dropdown-content-dot-pop" id="drop-pop">
    <a class="cell-pop" onClick={() => handleClickOpen(parval)}><i class="fa fa-edit act-icon"></i> Edit</a>
 <a class="cell-pop" onClick={() => onDelete(parval)}><i class="fa fa-trash act-icon"></i> Delete</a>
 <a class="cell-pop" onClick={() => handlepopopen(parval)}><i class="fa fa-clone act-icon"></i> Clone</a>
     </div>
  
        </div>
    )
}