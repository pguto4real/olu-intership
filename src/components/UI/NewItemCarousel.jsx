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
        newItems.map(({ id, authorImage, authorId, expiryDate, nftImage: nftImg, nftId, title, price, likes }) => (
          <div className="" key={id}>
            <div className="nft__item">
              <div className="author_list_pp">
                <Link
                  to={`/author/${authorId}`}
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Creator: Monica Lucas"
                >
                  <img className="lazy" src={authorImage} alt="" />
                  <i className="fa fa-check"></i>
                </Link>
              </div>
              {
                expiryDate && <CounterNewItem expiryDate={expiryDate} />
              }


              <div className="nft__item_wrap">
                <div className="nft__item_extra">
                  <div className="nft__item_buttons">
                    <button>Buy Now</button>
                    <div className="nft__item_share">
                      <h4>Share</h4>
                      <a href="" target="_blank" rel="noreferrer">
                        <i className="fa fa-facebook fa-lg"></i>
                      </a>
                      <a href="" target="_blank" rel="noreferrer">
                        <i className="fa fa-twitter fa-lg"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-envelope fa-lg"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <Link to={`/item-details/${nftId}`}>
                  <img
                    src={nftImg || nftImage}
                    className="lazy nft__item_preview"
                    alt=""
                  />
                </Link>
              </div>
              <div className="nft__item_info">
                <Link to={`/item-details/${nftId}`}>
                  <h4>{title}</h4>
                </Link>
                <div className="nft__item_price">{price} ETH</div>
                <div className="nft__item_like">
                  <i className="fa fa-heart"></i>
                  <span>{likes}</span>
                </div>
              </div>
            </div>
          </div>
        ))
      }

    </OwlCarousel>
  )
}

export default NewItemCarousel

// return <div className="de_countdown">{hours}h {minutes}m {seconds}s</div>