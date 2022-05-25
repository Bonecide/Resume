import { Box } from "@mui/system";
import { CircularProgress } from '@mui/material';

export default function SkillsCircle({value,text,fully}){

    return(
    <Box sx={{ position: 'relative', display: 'inline-flex' }} className='CIRCLE'>
       <CircularProgress 
       className="Secondary_Circle"
       sx={{
           position: 'absolute'
       }}/>
        <CircularProgress variant={fully ? 'determinate' : 'indeterminate' } value={value} />
        
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <p className="Circle_Text">
            {text}
          </p>
        </Box>
        
      </Box>
    )
}