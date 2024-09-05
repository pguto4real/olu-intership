import React from 'react'
import { Link } from 'react-router-dom'

const TopSeller = ({newItems}) => {
    return (
        <div>{newItems.map(({ id, authorImage, price, authorName, authorId }) => (
            <li key={id}>
                <div className="author_list_pp">
                    <Link to={`/author/${authorId}`}>
                        <img
                            className="lazy pp-author"
                            src={authorImage}
                            alt=""
                        />
                        <i className="fa fa-check"></i>
                    </Link>
                </div>
                <div className="author_list_info">
                    <Link to={`/author/${authorId}`}>{authorName}</Link>
                 
                    <span>{price} ETH</span>
                </div>
            </li>
        ))}</div>
    )
}

export default TopSeller