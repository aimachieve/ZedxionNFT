// material
import { styled } from '@material-ui/core/styles';
// components
import Page from '../components/Page';
// import { useState, useEffect } from "react";
// import {connectWallet } from "../../src/utils/interact"
import {
  LandingSlider,
  LandingBestCS,
  LandingAuction,
  LandingBlogs1,
  LandingBlogs2,
} from '../components/_external-pages/landing';

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
    <RootStyle title="Zedxioncryptocurrency" id="move_top">
      {/* <LandingHero /> */}
      <ContentStyle>
        {/* Title */}
        <LandingSlider />
        {/* Best Creators & Sellers */}
        <LandingBestCS />
        {/* Live Auction */}
        <LandingAuction />
        {/* Latest Blogs 1/> */}
        <LandingBlogs1 />
        {/* Latest Blogs 2 */}
        <LandingBlogs2 />
      </ContentStyle>
    </RootStyle>
  );
}
