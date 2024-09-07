import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import GetData from "../../Hooks/GetData";
import { DataContext } from "../../Helper/Context";
import TopSeller from "../UI/TopSeller";
import TopSellerSkelenton from "../UI/TopSellerSkelenton";
import AnimateOnScroll from "../UI/AnimateOnScroll";

const TopSellers = () => {
  const { newItems, setNewItems } = useContext(DataContext)
  const [isLoading, setIsLoading] = useState(true);

  const { fetchData } = GetData()

  useEffect(() => {
    const fetchNewItemData = async () => {

      const data = await fetchData({ dataFrom: "topSellers" })
      setNewItems(data)
      setIsLoading(false)
    }
    fetchNewItemData()
  }, [])

  return (
    <section id="section-popular" className="pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Top Sellers</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <AnimateOnScroll animation="fade" duration={400}  delay="0" easing="ease-in-sine">
          <div className="col-md-12">
            <ol className="author_list">
              {
                isLoading ? (<TopSellerSkelenton />) : (<TopSeller newItems={newItems} />)
              }
            </ol>
          </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default TopSellers;
