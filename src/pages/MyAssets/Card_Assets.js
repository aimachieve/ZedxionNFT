import { React, useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Stack, Link } from '@mui/material';
// Contract
import { useNFTContract } from 'hooks/useContract'

export default function Card_Research({ tokenId }) {
  console.log("tokenId =>", tokenId)
  const [data, setData] = useState(null)
  const NFTContract = useNFTContract(process.env.REACT_APP_NFT_CONTRACT_ADDRESS)

  useEffect(() => {
    const init = async () => {
      const NFT = await NFTContract.getNFT(tokenId)

      fetch(NFT[1])
        .then(res => res.json())
        .then(resJson => {
          console.log("resJson =>", resJson)
          setData(resJson)
        })
        .catch(err => {
          console.log("err =>", err)
        })
    }

    init()
  }, [])

  return (
    <Card sx={{ maxWidth: 345, background: '#010101', color: 'white' }}>
      <CardMedia
        component="img"
        alt="NFT"
        height="auto"
        image={data && data.image}
        sx={{ borderRadius: "10px" }}
      />
      <Stack sx={{ p: 3 }}>
        <Link href={`/item-details/${tokenId}`}>
          <Typography gutterBottom variant="h5" component="div" mt={3}>
            {data && data.name}
          </Typography>
        </Link>
        <Typography gutterBottom component="div">
          {data && data.description}
        </Typography>
        <Stack direction={'row'} justifyContent="space-between">
          <Typography sx={{ color: "#1066e7" }}>
            {data && data.price}
            {data && data.symbol}
          </Typography>
          <Typography sx={{}}>1 out of 10</Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
