import React from "react";
import { Link } from "react-router-dom";
import Chip from "../../../common/Chip";

import "./styles.css";

const BlogItem = ({
  blog: {
    description,
    facts,
    img,
    summary,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
    id,
  },
}) => {
  return (
    <div className="blogItem-wrap">
      <img className="blogItem-cover" src={cover} alt="cover" />
      <Chip label={category} />

      <h3>{title}</h3>
      {description && <p className="blogItem-desc">{description}</p>}
      {facts && <p className="blogItem-facts">{facts}</p>}
      {img && <img src={img} alt="" className="blogItem-img" />}
      {summary && <p className="blogItem-facts">{summary}</p>}
      <footer>
        <div className="blogItem-author">
          <img src={authorAvatar} alt="avatar" />
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
        <Link className="blogItem-link" to={`/blog/${id}`}>
          ➝
        </Link>
      </footer>
    </div>
  );
};

export default BlogItem;
