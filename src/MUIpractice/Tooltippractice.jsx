import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

export function TooltipPractice(){
  return(
    <>
    {/* Tooltips display informative text when users hover over, focus on, or tap an 
    element. title props is for adding the tooltip text,arrow prop to give tooltip with arrow */}
    <Tooltip title="Delete" placement="top-end" arrow><Button variant="contained" sx={{backgroundColor:'yellowgreen'}}>Delete</Button> </Tooltip>
    <Tooltip title="Delete" placement="top-start"><Button variant="contained" sx={{backgroundColor:'pink'}}>Delete</Button> </Tooltip>
    <Tooltip title="Delete" placement="bottom-start"><Button variant="contained" sx={{backgroundColor:'blue'}}>Delete</Button> </Tooltip>
    <Tooltip title='Greeting' arrow>Welcome</Tooltip>
    
    </>
  )
}