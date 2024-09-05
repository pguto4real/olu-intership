import React, { useEffect, useState } from "react";

import axios from "axios";
import NewItemCarousel from "../UI/NewItemCarousel";

import NewItemSkeleton from "../UI/NewItemSkeleton";

const NewItems = () => {
  const [newItems, setNewItems] = useState([])

  const [isNewLoading, setIsNewLoading] = useState(true)
  async function fetchNewItems() {
    try {
      const { data } = await axios.get(`https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems`)
      setNewItems(data)
      console.log(data)
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
    finally {
      setIsNewLoading(false)
    }


  }
  useEffect(() => {

    fetchNewItems()
  }, [])
  return (
    <section id="section-items" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          {
            isNewLoading ? (<NewItemSkeleton/> ): ( <NewItemCarousel newItems={newItems}/>)
          }
         
        </div>
      </div>
    </section>
  );
};

export default NewItems;