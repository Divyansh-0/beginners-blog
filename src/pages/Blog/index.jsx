import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { blogList } from "../../config/data";
import Chip from "../../components/common/Chip";
import Content from "../../components/common/content/Content";
import EmptyList from "../../components/common/EmptyList";
import "./styles.css";
import { Link } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, [id]);

  return (
    <>
      <Link className="blog-goBack" to="/">
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {blog ? (
        <div className="blog-wrap">
          <header>
            <p className="blog-date">Published {blog.createdAt}</p>
            <h1>{blog.title}</h1>
            <div className="blog-subCategory">
              {blog.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>
          <img src={blog.cover} alt="cover" />
          <h2>{blog.titledesc}</h2>
          <p className="blog-desc">{blog.description}</p>

          {blog?.img1 && <img src={blog.img1} alt="" />}
          {blog?.img2 && <img src={blog.img2} alt="" />}
          <div className="blog-Category">
            {blog.content.map((category, i) => (
              <div key={i}>
                <Content label={category} />
              </div>
            ))}
          </div>
          {/* {blog?.summary && <p className="blog-desc">{blog.summary}</p>} */}
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Blog;
