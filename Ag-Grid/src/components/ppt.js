import {
    Presentation, Slide, 
  } from "react-pptx";
import TablePreViewTab from "./previewTab";
  
export default function Ppt(){

  return(
    <Presentation>
      <Slide 
          style={{
            x: 3, y: 1.55, w: 3, h: 0.1,
          }}>
         <TablePreViewTab />
   
      </Slide>
    
    </Presentation>
  )
}
