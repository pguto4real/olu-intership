import React from 'react'
import Skeleton from './Skeleton';
const NewItemSkeleton = () => {
    return (
        new Array(4).fill(0).map((_, index) => (
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
        <div className="nft__item">
          <div className="author_list_pp">

            <Skeleton height={50} width={50} borderRadius={100} />

          </div>
          <div className="de_countdown border-none border-0"> <Skeleton height={30} width={100} borderRadius={50}/></div>


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


            <Skeleton height={200} width={"100%"} borderRadius={10}/>
          </div>
          <div className="nft__item_info">
            <div>
              <h4><Skeleton height={20} width={100}/></h4>
            </div>


           <Skeleton height={20} width={200}/>
            
          </div>
        </div>
      </div>
        )))
}

export default NewItemSkeleton