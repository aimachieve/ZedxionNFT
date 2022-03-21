// material
import { styled } from '@material-ui/core/styles';
// components
import Page from '../../components/Page';
import InputInfo from './InputInfo'
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

export default function Create() {
  return (
    <RootStyle title="Zedxioncryptocurrency-Create" id="move_top">
      {/* Banner */}
      <Banner />
      <ContentStyle>
        {/* InputInfo */}
        <InputInfo />
      </ContentStyle>
    </RootStyle>
  );
}
