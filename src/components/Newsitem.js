import React from "react";

const Newsitem = (props) => {
  let { title, description, imageUrl, newsUrl, author, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <span className="badge bg-danger">{source}</span>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              by {author ? author : "unknown"}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn-sm btn-success"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;
