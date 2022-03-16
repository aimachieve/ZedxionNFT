// material
import { styled } from '@material-ui/core/styles';
// components
import Page from '../../components/Page';
import Detail from './Detail'
import Banner from './Banner'

// ----------------------------------------------------------------------

const RootStyle = styled(Page)({
  height: '100%'
});

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: "#010101"
}));

// ----------------------------------------------------------------------

export default function LandingPage() {
  return (
    <RootStyle title="Zedxioncryptocurrency-Contact" id="move_top">
      {/* Banner */}
      <Banner />
      <ContentStyle>
        {/* ContactInfo */}
        <Detail />
      </ContentStyle>
    </RootStyle>
  );
}
