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
      ? 'rgba(255, 255, 255, .05)'
      : '#010101',
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
            fontFamily: 'Arvo',
            fontWeight: 'bold'
          }}>What are NFTs?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
            fontFamily: 'ArvoItalic',
            color: '#fdb215'
          }}>
            Non-fungible token (NFT) is a unique digital asset that represents ownership of real-world items like art, video clips, music, and more. NFTs use the same blockchain technology that powers cryptocurrencies.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography sx={{
            fontFamily: 'Arvo',
            fontWeight: 'bold'
          }}>When will 222 Black Faces NFTs be released?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
            fontFamily: 'ArvoItalic',
            color: '#fdb215'
          }}>
            The official date is 2.22.22.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography sx={{
            fontFamily: 'Arvo',
            fontWeight: 'bold'
          }}>What do I gain from buying an NFT in this collection?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
            fontFamily: 'ArvoItalic',
            color: '#fdb215'
          }}>
            Besides the unlockable gifts, you’ll be in possession of an asset that will likely appreciate in value on the blockchain.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography sx={{
            fontFamily: 'Arvo',
            fontWeight: 'bold'
          }}>What is the minimum price for a 222 Black Faces NFT?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
            fontFamily: 'ArvoItalic',
            color: '#fdb215'
          }}>
            In fiat currency, the minimum price for an NFT in this collection would not be above 2,000USD.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <Typography sx={{
            fontFamily: 'Arvo',
            fontWeight: 'bold'
          }}>Will the NFTs be placed on a bid?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
            fontFamily: 'ArvoItalic',
            color: '#fdb215'
          }}>
            Yes. We hope that each NFT in this collection garners as much value as possible from being on the market.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
          <Typography sx={{
            fontFamily: 'Arvo',
            fontWeight: 'bold'
          }}>How do I buy NFTs in this collection?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
            fontFamily: 'ArvoItalic',
            color: '#fdb215'
          }}>
            If you’re not new to buying NFTs, you can find our collection on Opensea. However, if you’re a newbie, you can download our self-help material here. Also, please join our Discord community for everything you need including updates.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
        <AccordionSummary aria-controls="panel9d-content" id="panel9d-header">
          <Typography sx={{
            fontFamily: 'Arvo',
            fontWeight: 'bold'
          }}>What are gas fees and who pays for this?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
            fontFamily: 'ArvoItalic',
            color: '#fdb215'
          }}>
            Gas fees simply put, are transaction fees required to mint an NFT (bring it to life on the Ethereum blockchain). With love, our dear Buyers will be paying the gas fees for the NFTs they purchase in this collection.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
        <AccordionSummary aria-controls="panel10d-content" id="panel10d-header">
          <Typography sx={{
            fontFamily: 'Arvo',
            fontWeight: 'bold'
          }}>How much is the gas fee for minting each NFT?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
            fontFamily: 'ArvoItalic',
            color: '#fdb215'
          }}>
            This is to be determined. Please join our Discord server for updates.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
        <AccordionSummary aria-controls="panel11d-content" id="panel11d-header">
          <Typography sx={{
            fontFamily: 'Arvo',
            fontWeight: 'bold'
          }}>What is Ethereum?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
            fontFamily: 'ArvoItalic',
            color: '#fdb215'
          }}>
            Ethereum is currently the most valuable cryptocurrency after Bitcoin and it is mostly used for trading NFTs.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
        <AccordionSummary aria-controls="panel12d-content" id="panel12d-header">
          <Typography sx={{
            fontFamily: 'Arvo',
            fontWeight: 'bold'
          }}>Why is each NFT in this collection so expensive?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
            fontFamily: 'ArvoItalic',
            color: '#fdb215'
          }}>
            This NFT collection is like no other, with lots of unlockable gifts to incentivize our buyers! For proper context, Uzoma charges his clients from 2,500USD for a single character illustration in the real world.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel13'} onChange={handleChange('panel13')}>
        <AccordionSummary aria-controls="panel13d-content" id="panel13d-header">
          <Typography sx={{
            fontFamily: 'Arvo',
            fontWeight: 'bold'
          }}>What is the buying window for this NFT collection?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
            fontFamily: 'ArvoItalic',
            color: '#fdb215'
          }}>
            The window is yet to be determined. Please join our Discord server for updates.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel14'} onChange={handleChange('panel14')}>
        <AccordionSummary aria-controls="panel14d-content" id="panel14d-header">
          <Typography sx={{
            fontFamily: 'Arvo',
            fontWeight: 'bold'
          }}>What happens to my NFT after purchase?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
            fontFamily: 'ArvoItalic',
            color: '#fdb215'
          }}>
            Your NFT(s) will reside in your crypto wallet after purchase. What you choose to do with it afterwards is solely at your discretion. You may decide to resell after 10 years, when its value hits $1m!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel15'} onChange={handleChange('panel15')}>
        <AccordionSummary aria-controls="panel15d-content" id="panel15d-header">
          <Typography sx={{
            fontFamily: 'Arvo',
            fontWeight: 'bold'
          }}>What amount of resale royalties will Uzoma receive?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
            fontFamily: 'ArvoItalic',
            color: '#fdb215'
          }}>
            Well, he’s very happy to part with nothing more than 10%.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel16'} onChange={handleChange('panel16')}>
        <AccordionSummary aria-controls="panel16d-content" id="panel16d-header">
          <Typography sx={{
            fontFamily: 'Arvo',
            fontWeight: 'bold'
          }}>Can I get a refund after purchasing NFTs?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
            fontFamily: 'ArvoItalic',
            color: '#fdb215'
          }}>
            Oh no. This will not be possible.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel116'} onChange={handleChange('panel116')}>
        <AccordionSummary aria-controls="panel116d-content" id="panel116d-header">
          <Typography sx={{
            fontFamily: 'Arvo',
            fontWeight: 'bold'
          }}>Is this the only way to support Uzoma as an artist?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
            fontFamily: 'ArvoItalic',
            color: '#fdb215'
          }}>
            Uzoma appreciates all kinds of support. However NFTs are preferred because it allows his patrons an opportunity to part with an asset of potential future value.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel17'} onChange={handleChange('panel17')}>
        <AccordionSummary aria-controls="panel17d-content" id="panel17d-header">
          <Typography sx={{
            fontFamily: 'Arvo',
            fontWeight: 'bold'
          }}>Must I join the Discord Channel?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
            fontFamily: 'ArvoItalic',
            color: '#fdb215'
          }}>
            Absolutely yes! This is super important for you to learn more about updates for this collection as well as future drops.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel18'} onChange={handleChange('panel18')}>
        <AccordionSummary aria-controls="panel18d-content" id="panel18d-header">
          <Typography sx={{
            fontFamily: 'Arvo',
            fontWeight: 'bold'
          }}>How do I access the unlockable gifts?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
            fontFamily: 'ArvoItalic',
            color: '#fdb215'
          }}>
            You can only access the unlockable contents after purchase of NFTs.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel19'} onChange={handleChange('panel19')}>
        <AccordionSummary aria-controls="panel19d-content" id="panel19d-header">
          <Typography sx={{
            fontFamily: 'Arvo',
            fontWeight: 'bold'
          }}>What free course contents do I get access to for buying an NFT?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
            fontFamily: 'ArvoItalic',
            color: '#fdb215'
          }}>
            The free course contents will include old and new character design course videos created by Uzoma Dunkwu.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel20'} onChange={handleChange('panel20')}>
        <AccordionSummary aria-controls="panel20d-content" id="panel20d-header">
          <Typography sx={{
            fontFamily: 'Arvo',
            fontWeight: 'bold'
          }}>What is Chiefsquare?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
            fontFamily: 'ArvoItalic',
            color: '#fdb215'
          }}>
            Chiefsquare is a visual art talent development community designed for and by Africans on the continent and in diaspora. 20% of the proceeds from the sales of <b> <i>222 Black Faces</i></b> collection will serve as seed funding for the organization to kick-start.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel21'} onChange={handleChange('panel21')}>
        <AccordionSummary aria-controls="panel21d-content" id="panel21d-header">
          <Typography sx={{
            fontFamily: 'Arvo',
            fontWeight: 'bold'
          }}>What happens to the remaining 80% from the NFT sales?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
            fontFamily: 'ArvoItalic',
            color: '#fdb215'
          }}>
            Lol. Uzoma will be able to feed his family and take less freelance work in order to focus on the creation of Artsy as well as other exciting IPs that he can’t wait to announce!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel22'} onChange={handleChange('panel22')}>
        <AccordionSummary aria-controls="panel22d-content" id="panel22d-header">
          <Typography sx={{
            fontFamily: 'Arvo',
            fontWeight: 'bold'
          }}>What is the African Attires Coloring Book about?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
            fontFamily: 'ArvoItalic',
            color: '#fdb215'
          }}>
            This is a coloring book authored by Uzoma yet to be published. It features a collection of appealing black kid characters adorned in various African attires from tribes around the continent. It would be great for kids and young adults!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel23'} onChange={handleChange('panel23')}>
        <AccordionSummary aria-controls="panel23d-content" id="panel23d-header">
          <Typography sx={{
            fontFamily: 'Arvo',
            fontWeight: 'bold'
          }}>What is Artsy?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
            fontFamily: 'ArvoItalic',
            color: '#fdb215'
          }}>
            Artsy is an animated short film project created by Uzoma Dunkwu. He started working on it through the 2020 pandemic. He designed the characters and storyboarded the 9 minute film, with the help of friends in the Hollywood animation industry. Purchasing a minimum of 10 NFTs will grant access to view all the fascinating materials created for the film till date!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel24'} onChange={handleChange('panel24')}>
        <AccordionSummary aria-controls="panel24d-content" id="panel24d-header">
          <Typography sx={{
            fontFamily: 'Arvo',
            fontWeight: 'bold'
          }}>Which Artist will create the portraits for the gifted commission?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
            fontFamily: 'ArvoItalic',
            color: '#fdb215'
          }}>
            Uzoma of course!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel25'} onChange={handleChange('panel25')}>
        <AccordionSummary aria-controls="panel25d-content" id="panel25d-header">
          <Typography sx={{
            fontFamily: 'Arvo',
            fontWeight: 'bold'
          }}>What do you mean by Private Sketchbooks?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
            fontFamily: 'ArvoItalic',
            color: '#fdb215'
          }}>
            Uzoma has a very limited collection of physical sketchbooks filled with sketches, done in his free time. Since it is limited in number, only 2 collectors (strictly on a first-come-first-serve basis) who purchase at least 20 NFTs in this collection, will have it shipped to a real world address of their choice.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
