import { useRef } from 'react';
import Slider from 'react-slick';
import React from "react"
import PropTypes from 'prop-types';
// import { Icon } from '@iconify/react';
// import { Link as RouterLink } from 'react-router-dom';
// import arrowForwardFill from '@iconify/icons-eva/arrow-forward-fill';
// material
import { styled } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
// utils
// import mockData from '../../utils/mock-data';
//

// ----------------------------------------------------------------------

const MOCK_CAROUSELS = [
  {
    title: 'Product 1',
    image: 'https://shreethemes.in/superex/layouts/images/items/1.jpg',
    description: 'Instruments'
  },
  {
    title: 'Product 2',
    image: 'https://shreethemes.in/superex/layouts/images/items/2.jpg',
    description: 'Instruments'
  },
  {
    title: 'Product 3',
    image: 'https://shreethemes.in/superex/layouts/images/items/3.jpg',
    description: 'Instruments'
  },
  {
    title: 'Product 4',
    image: 'https://shreethemes.in/superex/layouts/images/items/4.jpg',
    description: 'Instruments'
  },
  {
    title: 'Product 5',
    image: 'https://shreethemes.in/superex/layouts/images/items/5.jpg',
    description: 'Instruments'
  },
  {
    title: 'Product 6',
    image: 'https://shreethemes.in/superex/layouts/images/items/6.jpg',
    description: 'Instruments'
  },
  {
    title: 'Product 7',
    image: 'https://shreethemes.in/superex/layouts/images/items/7.jpg',
    description: 'Instruments'
  },
  {
    title: 'Product 8',
    image: 'https://shreethemes.in/superex/layouts/images/items/8.jpg',
    description: 'Instruments'
  },
  {
    title: 'Product 9',
    image: 'https://shreethemes.in/superex/layouts/images/items/9.jpg',
    description: 'Instruments'
  },
  {
    title: 'Product 10',
    image: 'https://shreethemes.in/superex/layouts/images/items/10.jpg',
    description: 'Instruments'
  },
  {
    title: 'Product 11',
    image: 'https://shreethemes.in/superex/layouts/images/items/11.jpg',
    description: 'Instruments'
  },
  {
    title: 'Product 12',
    image: 'https://shreethemes.in/superex/layouts/images/items/12.jpg',
    description: 'Instruments'
  },
  {
    title: 'Product 13',
    image: 'https://shreethemes.in/superex/layouts/images/items/13.jpg',
    description: 'Instruments'
  },
  {
    title: 'Product 14',
    image: 'https://shreethemes.in/superex/layouts/images/items/14.jpg',
    description: 'Instruments'
  },
  {
    title: 'Product 15',
    image: 'https://shreethemes.in/superex/layouts/images/items/15.jpg',
    description: 'Instruments'
  },
  {
    title: 'Product 16',
    image: 'https://shreethemes.in/superex/layouts/images/items/16.jpg',
    description: 'Instruments'
  },
  {
    title: 'Product 17',
    image: 'https://shreethemes.in/superex/layouts/images/items/17.jpg',
    description: 'Instruments'
  },
  {
    title: 'Product 18',
    image: 'https://shreethemes.in/superex/layouts/images/items/18.jpg',
    description: 'Instruments'
  },
  {
    title: 'Product 19',
    image: 'https://shreethemes.in/superex/layouts/images/items/19.jpg',
    description: 'Instruments'
  },
  {
    title: 'Product 20',
    image: 'https://shreethemes.in/superex/layouts/images/items/20.jpg',
    description: 'Instruments'
  }
];
const RootStyle = styled('div')(({ theme }) => ({
  // overflow: 'hidden',
  padding: theme.spacing(18, 0),
  position: 'relative'
}));
// ----------------------------------------------------------------------

CarouselItem.propTypes = {
  item: PropTypes.object
};

function CarouselItem({ item }) {
  const { image } = item;

  return (
    <Box
      sx={{
        textAlign: 'center',
        mx: 1,
        borderRadius: 1,
        display: 'flex',
        justifyContent: 'center',
        height: 170,
        background: `url(${image})`,
        backgroundSize: 'cover',
        boxShadow: '0px 4px 31px rgba(0, 0, 0, 0.11)',
        position: 'relative',
        mt: 3,
        mb: 1
      }}
    >
      {/*<CardContent
        sx={{
          bottom: 0,
          zIndex: 9,
          width: '100%',
          textAlign: 'left',
          position: 'absolute'
        }}
      >
        <Typography paragraph sx={{fontFamily: 'PoppinsBold', color: "#173858", fontSize: 30}}>
          {title}
        </Typography>
      </CardContent>*/}
    </Box>
  );
}

export default function CarouselCenterMode() {
  const carouselRef = useRef();
  // const theme = useTheme();

  const settings = {
    // slidesToShow: 5,
    // arrows: false,
    // // centerMode: true,
    // infinite: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
    centerPadding: '60px',
    // adaptiveHeight: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    // autoplaySpeed: 2000,
    cssEase: "linear",
    rows: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 5 }
      },
      {
        breakpoint: 960,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, centerPadding: '0' }
      }
    ]
  };

  return (
    <RootStyle>
      <Slider ref={carouselRef} {...settings}>
        {MOCK_CAROUSELS.map((item, index) => (
          <CarouselItem key={index} item={item} />
        ))}
      </Slider>
    </RootStyle>
  );
}
