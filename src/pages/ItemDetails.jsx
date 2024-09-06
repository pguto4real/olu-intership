import React, { useContext, useEffect } from "react";
import EthImage from "../images/ethereum.svg";
import { Link, useParams } from "react-router-dom";
import AuthorImage from "../images/author_thumbnail.jpg";
import nftImage from "../images/nftImage.jpg";
import { DataContext } from "../Helper/Context";
import GetData from "../Hooks/GetData";
import Skeleton from "../components/UI/Skeleton";

const ItemDetails = () => {
  const { itemData, setItemData, isItemLoading, setIsIsItemLoading } =
    useContext(DataContext);
  const { id } = useParams();

  const { fetchData } = GetData();
  const fetchItemData = async () => {
    setIsIsItemLoading(true);
    const data = await fetchData({ dataFrom: `itemDetails?nftId=${id}` });
    setItemData(data);

    setIsIsItemLoading(false);
  };
  useEffect(() => {
    fetchItemData();
  }, []);
  console.log(itemData);
  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <section aria-label="section" className="mt90 sm-mt-0">
          <div className="container">
            {isItemLoading ? (
              <div className="row">
                <div className="col-md-6 text-center">
                <Skeleton height={550} width={550} />
                  
                </div>
                <div className="col-md-6">
                  <div className="item_info">
                    <h2><Skeleton height={20} width={250}/></h2>

                    <div className="item_info_counts  bg-white">
                      <div className=" bg-white">
                        
                        <Skeleton height={30} width={100}/>
                      </div>
                      <div className="item_info_like bg-white">
                      <Skeleton height={30} width={100}/>
                      </div>
                    </div>
                    <p>
                    <Skeleton height={100} width={400}/>
                     
                    </p>
                    <div className="d-flex flex-row">
                      <div className="mr40">
                        <h6> <Skeleton height={20} width={50}/></h6>
                        <div className="item_author">
                          <div className="author_list_pp">
                            
                          <Skeleton height={50} width={50} borderRadius={100} />
                              <i className="fa fa-check"></i>
                            
                          </div>
                          <div className="author_list_info">
                            <Skeleton height={20} width={100}/>
                          </div>
                        </div>
                      </div>
                      <div></div>
                    </div>
                    <div className="de_tab tab_simple">
                      <div className="de_tab_content">
                        <h6> <Skeleton height={20} width={50}/></h6>
                        <div className="item_author">
                          <div className="author_list_pp">
                          <Skeleton height={50} width={50} borderRadius={100} />
                              <i className="fa fa-check"></i>
                            
                          </div>
                          <div className="author_list_info">
                          <Skeleton height={20} width={100}/>
                          </div>
                        </div>
                      </div>
                      <div className="spacer-40"></div>
                      <h6><Skeleton height={20} width={50}/></h6>
                      <div className="nft-item-price">
                      <Skeleton height={30} width={30} borderRadius={100} />
                    
                        <span> <Skeleton height={20} width={100}/></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="row">
                <div className="col-md-6 text-center">
                  <img
                    src={itemData.nftImage}
                    className="img-fluid img-rounded mb-sm-30 nft-image"
                    alt=""
                  />
                </div>
                <div className="col-md-6">
                  <div className="item_info">
                    <h2>{itemData.title} #{itemData.tag}</h2>

                    <div className="item_info_counts">
                      <div className="item_info_views">
                        <i className="fa fa-eye"></i>
                        {itemData.views}
                      </div>
                      <div className="item_info_like">
                        <i className="fa fa-heart"></i>
                        {itemData.likes}
                      </div>
                    </div>
                    <p>
                     {itemData.description}
                    </p>
                    <div className="d-flex flex-row">
                      <div className="mr40">
                        <h6>Owner</h6>
                        <div className="item_author">
                          <div className="author_list_pp">
                          <Link to={`/author/${itemData.ownerId}`}>
                              <img className="lazy" src={itemData.ownerImage} alt="" />
                              <i className="fa fa-check"></i>
                            </Link>
                          </div>
                          <div className="author_list_info">
                          <Link to={`/author/${itemData.ownerId}`}> {itemData.ownerName}</Link>
                          </div>
                        </div>
                      </div>
                      <div></div>
                    </div>
                    <div className="de_tab tab_simple">
                      <div className="de_tab_content">
                        <h6>Creator</h6>
                        <div className="item_author">
                          <div className="author_list_pp">
                            <Link to={`/author/${itemData.creatorId}`}>
                              <img className="lazy" src={itemData.creatorImage} alt="" />
                              <i className="fa fa-check"></i>
                            </Link>
                          </div>
                          <div className="author_list_info">
                          <Link to={`/author/${itemData.creatorId}`}>{itemData.creatorName}</Link>
                          </div>
                        </div>
                      </div>
                      <div className="spacer-40"></div>
                      <h6>Price</h6>
                      <div className="nft-item-price">
                        <img src={EthImage} alt="" />
                        <span>{itemData.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ItemDetails;
