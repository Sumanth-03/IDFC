import { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { IconButton } from '@mui/material';
import { Snackbar, Alert } from '@mui/material';


export function CopyButton({ textToCopy }) {
    const [openSnackbar, setOpenSnackbar] = useState(false);
  
    const handleCopy = () => {
      navigator.clipboard.writeText(textToCopy).then(() => {
        setOpenSnackbar(true);
      });
    };
  
    const handleCloseSnackbar = () => {
      setOpenSnackbar(false);
    };
  
    return (
      <>
        <Tooltip title="Copy to clipboard">
          <IconButton onClick={handleCopy} aria-label="copy" sx={{padding:0}}>
            <ContentCopyIcon sx={{color:'#951B24', width:'20px', padding:0}}/>
          </IconButton>
        </Tooltip>
  
        <Snackbar
          open={openSnackbar}
          autoHideDuration={2000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
            Copied to clipboard!
          </Alert>
        </Snackbar>
      </>
    );
  }