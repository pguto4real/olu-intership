import React from 'react'
import { Link } from 'react-router-dom'
import AuthorImage from "../../images/author_thumbnail.jpg";
import Skeleton from './Skeleton';
const TopSellerSkelenton = () => {
  return (
    
        new Array(12).fill(0).map((_, index) => (
        <li key={index}>
          <div className="author_list_pp">
           
            <Skeleton height={50} width={50} borderRadius={100}/>
              <i className="fa fa-check"></i>
          
          </div>
          <div className="author_list_info">
          <Skeleton height={20} width={100}/>
            <span> <Skeleton height={20} width={60}/></span>
          </div>
        </li>
      ))
  )
}

export default TopSellerSkelenton