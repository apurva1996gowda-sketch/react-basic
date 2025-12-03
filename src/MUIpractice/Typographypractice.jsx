import Typography from "@mui/material/Typography"

export function MuiTypography(){
  const object=[{a:1,b:2},{c:3}]
  console.log(object.toString())
  return(
    <>
    {/* Typography is for headings from h1-h6 and paragraphs */}
    <Typography variant='h1'>heading1</Typography>
    <Typography variant='h2' gutterBottom>heading2</Typography>
    {/* gutterBottom props is to add margin bottom */}
    <Typography variant='h3' sx={{border:'1px solid black',outline:'50px solid red'}}>heading3</Typography>
    <Typography variant='h4' gutterBottom>heading4</Typography>
    <Typography variant='h5'>heading5</Typography>
    <Typography variant='h6'>heading6</Typography>
    {/* heading h1-h6 */}
    <Typography variant='body1' sx={{backgroundColor:'pink'}} gutterBottom>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aperiam nam facere dolorem quis, ullam molestias excepturi eligendi porro iste? Repudiandae qui facilis est voluptatum minima, placeat officiis possimus ut.</Typography>
    <Typography variant='body2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi illum veritatis ducimus iure adipisci! Distinctio explicabo aliquid accusantium, hic magnam asperiores quasi est voluptatibus porro tempore eligendi facere dolores. Incidunt.</Typography>
    {/* body1 and body2 are paragraphs with different font sizes
    body1 is the default Typography variant if we don't give variant it will take body1 */}

    <Typography variant='subtitle1'>Subtitle1</Typography>
    <Typography variant='subtitle2'>Subtitle2</Typography>

    <Typography variant='button' gutterBottom>Button</Typography><br />
    <Typography variant='caption'>caption</Typography><br />
    <Typography variant='overline'>Overline</Typography>


    
    </>
  )
}
