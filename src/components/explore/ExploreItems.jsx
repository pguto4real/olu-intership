import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../Helper/Context";
import GetData from "../../Hooks/GetData";
import AutorCard from "../../Common/AuthorCard";
import NewItemSkeleton from "../UI/NewItemSkeleton";

const ExploreItems = () => {
  const { exploreData, setExploreData } = useContext(DataContext);

  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const [visibleCount, setVisibleCount] = useState(8); // Initially show 8 items
  const [visibleItems, setVisibleItems] = useState(
    exploreData.slice(0, visibleCount)
  );

  const { fetchData } = GetData();

  // Handler for the "Load More" button
  const handleLoadMore = () => {
    
    const newCount = visibleCount + 4; // Load 4 more items on each click
    setVisibleCount(newCount);
    setVisibleItems(exploreData.slice(0, newCount));
  };

  const handleInputChange = (e) => {
    setFilter(e.target.value);
    fetchNewItemData(e.target.value);
  };

  const fetchNewItemData = async (filterData) => {
    setIsLoading(true);

    let dataFrom;
    filterData === ""
      ? (dataFrom = `explore`)
      : (dataFrom = `explore?filter=${filterData}`);
    const data = await fetchData({ dataFrom: dataFrom });
    if (filterData === "") {
      setExploreData(data);
      setVisibleCount(4);
      setVisibleItems(data.slice(0, 8));
    } else {
      setExploreData(data);
      setVisibleCount(data.length);
      setVisibleItems(data.slice(0, data.length));
    }
  
    setIsLoading(false);
  };

  useEffect(() => {
    fetchNewItemData(filter);
  }, []);

  return (
    <>
      <div>
        <select id="filter-items" defaultValue="" onChange={handleInputChange}>
          <option value="">Default</option>
          <option value="price_low_to_high">Price, Low to High</option>
          <option value="price_high_to_low">Price, High to Low</option>
          <option value="likes_high_to_low">Most liked</option>
        </select>
      </div>
   
      {isLoading && (
        <>
          <NewItemSkeleton />
          <NewItemSkeleton />
        </>
      )}
      {exploreData.length > 0 &&
        !isLoading &&
        visibleItems.map((explore, index) => (
          <AutorCard key={index} data={explore} addDesign={true} />
        ))}
      {!isLoading && visibleCount < exploreData.length && (
        <div className="col-md-12 text-center">
          <Link
            to=""
            id="loadmore"
            className="btn-main lead"
            onClick={handleLoadMore}
          >
            Load more
          </Link>
        </div>
      )}
    </>
  );
};

export default ExploreItems;
