import { Snackbar, Alert } from '@mui/material';

function CustomAlert ({openAlert, setOpenAlert, alertConfig}){
    const {severity, message} = alertConfig
    return(
        <Snackbar
        open={openAlert}
        autoHideDuration={5000}
        onClose={()=>setOpenAlert(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={()=>setOpenAlert(false)} severity={`${severity}`} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    )
}
export default CustomAlert