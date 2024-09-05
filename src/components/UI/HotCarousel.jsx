import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";

const HotCarousel = ({ hotCollections }) => {
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
        hotCollections.map((hotCollection) => (
          <div className="" key={hotCollection.id}>
            <div className="nft_coll">
              <div className="nft_wrap"  style={{ height: '100%' }}>
              <Link to={`/item-details/${hotCollection.nftId}`}>
                  <img src={hotCollection.nftImage|| nftImage} className="lazy img-fluid" alt="" />
                </Link>
              </div>
              <div className="nft_coll_pp">
                <Link to={`/author/${hotCollection.authorId}`}>
                  <img className="lazy pp-coll" src={hotCollection.authorImage|| AuthorImage} alt="" />
                </Link>
                <i className="fa fa-check"></i>
              </div>
              <div className="nft_coll_info">
                <Link to="/explore">
                  <h4>{hotCollection.title}</h4>
                </Link>
                <span>ERC-{hotCollection.code}</span>
              </div>
            </div>
          </div>
        ))
      }

    </OwlCarousel>
  )
}

export default HotCarousel