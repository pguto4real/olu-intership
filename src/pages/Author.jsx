import React, { useContext, useEffect, useState } from "react";
import AuthorBanner from "../images/author_banner.jpg";
import AuthorItems from "../components/author/AuthorItems";
import { Link, useParams } from "react-router-dom";
import AuthorImage from "../images/author_thumbnail.jpg";
import { DataContext } from "../Helper/Context";
import GetData from "../Hooks/GetData";
import Skeleton from "../components/UI/Skeleton";

const Author = () => {
  const { authorData, setAuthorData, isAauthorLoading, setIsAauthorLoading } =
    useContext(DataContext);
  const [copySuccess, setCopySuccess] = useState('');
  const [follow, setFollow] = useState(false);
  const [follower, setFollower] = useState(0);
  const { id } = useParams();
  const handleFollow = () => {
    if (!follow) {
      setFollower(follower + 1)
    }
    else {
      setFollower(follower - 1)
    }
    setFollow(!follow)
  };
  const { fetchData } = GetData();
  const handleCopy = async (textToCopy) => {
    try {
      // Copy text to the clipboard
      await navigator.clipboard.writeText(textToCopy);

      // Set the success message
      setCopySuccess('copied');

      // Set a timeout to clear the message after 3 seconds
      setTimeout(() => {
        setCopySuccess('');
      }, 100); // 3000 milliseconds = 3 seconds
    } catch (err) {
      // Set an error message if the copy fails
      setCopySuccess('Failed to copy text.');

      // Clear the error message after 3 seconds
      setTimeout(() => {
        setCopySuccess('');
      }, 100);
    }
  };
  const fetchAuthorData = async () => {
    setIsAauthorLoading(true);
    const data = await fetchData({ dataFrom: `authors?author=${id}` });
    setAuthorData(data);
    setFollower(data.followers)
    setIsAauthorLoading(false);
  };
  useEffect(() => {
    fetchAuthorData();
  }, []);



  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section
          id="profile_banner"
          aria-label="section"
          className="text-light"
          data-bgimage="url(images/author_banner.jpg) top"
          style={{ background: `url(${AuthorBanner}) top` }}
        ></section>
        {isAauthorLoading ? (
          <section aria-label="section">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="d_profile de-flex">
                    <div className="de-flex-col">
                      <div className="profile_avatar">
                        <Skeleton height={150} width={150} borderRadius={100} />

                        <i className="fa fa-check"></i>
                        <div className="profile_name">
                          <h4>
                            <Skeleton height={20} width={200} />
                            <span className="profile_username">
                              <Skeleton height={20} width={100} />
                            </span>
                            <span id="wallet" className="profile_wallet">
                              <Skeleton height={20} width={200} />
                            </span>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="profile_follow de-flex">
                      <div className="de-flex-col">
                        <div className="profile_follower">
                          <Skeleton height={20} width={100} />
                        </div>
                        <Skeleton height={50} width={110} borderRadius={10} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="de_tab tab_simple">
                    <AuthorItems />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section aria-label="section">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="d_profile de-flex">
                    <div className="de-flex-col">
                      <div className="profile_avatar">
                        <img src={authorData.authorImage} alt="" />

                        <i className="fa fa-check"></i>
                        <div className="profile_name">
                          <h4>
                            {authorData.authorName}
                            <span className="profile_username">@{authorData.tag}</span>
                            <span id="wallet" className="profile_wallet">
                              {authorData.address}
                            </span>
                            <button id="btn_copy" title="Copy Text"
                              onClick={() => handleCopy(authorData.address)}>
                              Copy
                            </button>
                            <span className="text-[15px] ml-14 text-gray-500 inset-10">{copySuccess}</span>

                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="profile_follow de-flex">
                      <div className="de-flex-col">
                        <div className="profile_follower">
                          {follower} followers
                        </div>
                        <Link to="#" className="btn-main" onClick={handleFollow}>
                          {
                            !follow ? "Follow" : "Unfollow"
                          }

                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="de_tab tab_simple">
                    <AuthorItems
                      nftCollections={authorData.nftCollection}
                      authorImage={authorData.authorImage}
                      isAauthorLoading={isAauthorLoading}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Author;