
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Stepper,
    StepConnector,
    Step,
    StepLabel,
    List,
    ListItem,
    ListItemText,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const RedeemAccordion = ({ redeemSteps, terms }) => {
    return (
        <div>
            {redeemSteps?.length>=1 &&
            <Accordion sx={{ border: 'none' ,boxShadow:'none'}}>
                <AccordionSummary sx={{fontSize:'1rem',lineHeight:'1.5rem'}} expandIcon={<ExpandMoreIcon />}>
                    Redemption Process
                </AccordionSummary>
                <AccordionDetails>
                    <Stepper
                    orientation="vertical"
                    connector={<StepConnector />}
                    sx={{
                        '& .MuiStepConnector-line': {
                            borderColor: '#951B24',      
                            borderStyle: 'dotted',
                            marginY:'-10px',  
                            height:'50px',
                            border:'none',
                            backgroundImage:'linear-gradient(to bottom, #000 40%, rgba(255, 255, 255, 0) 10%)',
                            backgroundSize:' 1px 20px',
                            backgroundRepeat: 'repeat-y'
                        },
                        '& .MuiStepIcon-root': {
                            color: '#951B24 !important',          
                        },
                        '& .MuiStepLabel-root': {
                        color: '#000000',   
                        },
                        '& .Mui-active .MuiStepLabel-label': {
                        color: '#000000',   
                        },
                        '& .Mui-completed .MuiStepLabel-label': {
                        color: '#000000',  
                        },
                        '& .MuiStepLabel-label': {
                        color: '#555',
                        },
                    }}
                    >
                        {redeemSteps?.map((step, index) => (
                            <Step key={index}>
                                <StepLabel
                                sx={{color:'#000'}}>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </AccordionDetails>
            </Accordion>
            }
            {terms?.length>=1 &&

            <Accordion sx={{ border: 'none' ,boxShadow:'none'}}>
                <AccordionSummary sx={{fontSize:'1rem',lineHeight:'1.5rem'}} expandIcon={<ExpandMoreIcon />}>
                    Terms and Conditions
                </AccordionSummary>
                <AccordionDetails>
                    <List>
                        {terms?.map((term, index) => (
                            <ListItem 
                            key={index}
                            sx={{
                                display: 'list-item', 
                                listStyleType: 'decimal', 
                                marginBottom: '0px', 
                                marginLeft:'20px'                              
                            }}
                              >
                                <ListItemText sx={{ color: '#555' }} primary={term} />
                            </ListItem>
                        ))}
                    </List>
                </AccordionDetails>
            </Accordion>
            }
        </div>
    );
};