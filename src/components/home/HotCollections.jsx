import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


import axios from "axios";
import HotCollectionSkeleton from "../UI/HotCollectionSkeleton";
import HotCarousel from "../UI/HotCarousel";


const HotCollections = () => {
  const [hotCollections, setHotCollections] = useState([])

  const [isHotLoading, setIsHotLoading] = useState(true)

  async function fetchCollection() {
    try {
      const { data } = await axios.get(`https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections`)
      setHotCollections(data)
    } catch (error) {
      console.error("Error fetching data: ", error);
    }   
      setIsHotLoading(false)


  }


  
  useEffect(() => {

    fetchCollection()
  }, [])

  return (
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          {
            isHotLoading ? (<HotCollectionSkeleton/> ): (<HotCarousel hotCollections={hotCollections} />)
          }
     

        </div>
      </div>
    </section>
  );
};

export default HotCollections;
