import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton';
import ButtonGroup from '@mui/material/ButtonGroup';

export function BasicButtons() {
  return (
    <>
    {/* Buttons allow users to take actions, and make choices, with a single tap */}
    <Button variant="outlined" onClick={()=>alert("hello")} color="success">submit</Button>
    <Button variant="text" color="error" href='http'>submit</Button>
    {/* href props to create hyperlinks in browser element it become anchor tag */}
    <Button variant='contained' color='warning'>warning</Button>
    <Button variant='contained' color='info'>info</Button>
    <Button variant='contained' color='success'>success</Button>
    <Button variant='contained' color='secondary'>secondary</Button><br />
    
    <Button variant="contained" size="small" endIcon={<SendIcon />}>send</Button>
    <Button variant="contained" size="small" endIcon={<DeleteIcon />}>Delete</Button>
    <IconButton size="large" ><DeleteIcon style={{width:100,height:100}}></DeleteIcon></IconButton><br />

    <ButtonGroup variant='contained' orientation='vertical' onClick={()=>alert("hellohi")}>
      {/* if we click on any button it will excecute same function as onClick is in ButtonGroup */}
      <Button color='success'>Left</Button>
      <Button variant=''>Center</Button>
      <Button onClick={()=>alert("DSH")}>Right</Button>
      {/* this onClick overides ButtonGroup onClick */}
    </ButtonGroup>
    {/* ButtonGroup is to group button and variant,size,color props can be passed to ButtonGroup instead 
    of passing to each Button also can be pass to each seperately,direction of placing the buttons can be
    changed by orientation props by default it will be horizontal*/}
    </>
  );
}