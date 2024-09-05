import React from 'react'
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import Skeleton from './Skeleton';
const HotCollectionSkeleton = () => {
    return (
        new Array(4).fill(0).map((_, index) => (
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
                <div className="nft_coll">
                    <div className="nft_wrap">
                       
                    <Skeleton height={200} width={"100%"}/>
                  
                    </div>
                    <div className="nft_coll_pp">
                       
                    <Skeleton height={50} width={50} borderRadius={100}/>
                    
                       
                    </div>
                    <div className="nft_coll_info">
                    <Skeleton height={20} width={100}/>
                  </div>
                   <Skeleton height={20} width={60}/>
                </div>
            </div>
        )))
}

export default HotCollectionSkeleton