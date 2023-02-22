import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { bgcolor } from '@mui/system';

export default function TitlebarImageList() {
  return (
    <ImageList sx={{ marginLeft: "400px", width: 800, height: 650 }}>
      <ImageListItem key="Subheader" cols={6} row={4}>
        <ListSubheader sx={{ marginLeft: "200px", color: "blue" }} component="div">Experence something New</ListSubheader>
        <p>Close to home  or accros the world. Hilton is there for you with memoroble offers and experiene .</p>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://duqjpivknq39s.cloudfront.net/2019/02/800x750.jpg',
    title: 'Multiple Your Point',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqdnp3pMowDGqtCpcuEsR5kBE10zerIHP6jo9d_GoghHGSw2u0ePUJbORS1PgKc8Tdxyo&usqp=CAU',
    title: 'Get Away and Save',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://thumbor.bigedition.com/bali-one-of-the-best-travel-destinations/52R-IxcOUu8ZKkWFLE0U_HK-pPY=/69x0:1184x836/800x0/filters:quality(80)/granite-web-prod/c5/b4/c5b44ca4133d48f1bdf14e0f47f3cfc4.jpeg',
    title: '3 Night Under $259',
    author: '@helloimnik',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRPOKRF_3p2HbF0cmEuiV2svyeqjNPKd-jA&usqp=CAU',
    title: 'A gight On us',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: '3 Night Under $259',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Multiple Your Point',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
    cols: 2,
  },
];