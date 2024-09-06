import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';
import GetConvertedDate from './CounterNewItem';
import Counter from './CounterNewItem';
import CounterNewItem from './CounterNewItem';
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import Skeleton from './Skeleton';
import AutorCard from '../../Common/AuthorCard';

const NewItemCarousel = ({ newItems }) => {
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    items: 4,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      800: {
        items: 3,
      },
      1000: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  };

  return (
    <OwlCarousel {...options}>
      {
        newItems.map((newItem,index) => (
          <AutorCard key={index} data={newItem} addDesign={false} />
        ))
      }

    </OwlCarousel>
  )
}

export default NewItemCarousel

// return <div className="de_countdown">{hours}h {minutes}m {seconds}s</div>