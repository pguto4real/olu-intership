import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import { DataContext } from "../../Helper/Context";
import NewItemSkeleton from "../UI/NewItemSkeleton";
import AutorCard from "../../Common/AuthorCard";

const AuthorItems = ({nftCollections,authorImage}) => {
  const {  isAauthorLoading ,setIsAauthorLoading} = useContext(DataContext);
// setIsAauthorLoading(true)
  return (
    <div className="de_tab_content">
      <div className="tab-1">
        <div className="row">
        {isAauthorLoading && (
        <>
          <NewItemSkeleton />
          <NewItemSkeleton />
        </>
      )}
      {
        !isAauthorLoading &&
        nftCollections.map((nftCollection, index) => (
          <AutorCard key={index} data={nftCollection} addDesign={true} authorImageData={authorImage} />
        ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorItems;