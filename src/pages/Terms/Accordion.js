import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  // border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgb(255 255 255 / 15%)'
      : '#221f20',
  color:
    theme.palette.mode === 'dark'
      ? 'black'
      : 'white',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: '#010101',
  color: 'white'
  // borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography sx={{
            
          }}>How does it work?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
            
            color: '#b9c6d8'
          }}>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography sx={{
            
          }}>Do I need a designer to use Zedxion ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
            
            color: '#b9c6d8'
          }}>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography sx={{
            
          }}>What do I need to do to start selling ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
            
            color: '#b9c6d8'
          }}>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography sx={{
            
          }}>What happens when I receive an order ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
            
            color: '#b9c6d8'
          }}>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
