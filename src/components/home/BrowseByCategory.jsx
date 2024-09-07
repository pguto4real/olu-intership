import React from "react";
import { Link } from "react-router-dom";
import { BrowseByCategoryCard } from "../UI/BrowseByCategoryCard";

const BrowseByCategory = () => {
  return (
    <section id="section-category" className="no-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Browse by category</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <BrowseByCategoryCard text="Art" icon="fa-image" />
          <BrowseByCategoryCard text="Music" icon="fa-music" />
          <BrowseByCategoryCard text="Domain Names" icon="fa-search" />
          <BrowseByCategoryCard text="Virtual Worlds" icon="fa-globe" />
          <BrowseByCategoryCard text="Trading Cards" icon="fa-vcard" />
          <BrowseByCategoryCard text="Collectibles" icon="fa-th" />
        </div>
      </div>
    </section>
  );
};

export default BrowseByCategory;
