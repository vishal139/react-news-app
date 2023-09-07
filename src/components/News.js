import React, { useState, useEffect } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [loding, setloding] = useState(false);
  const [totalResults, settotalResults] = useState(0);
  const [page, setpage] = useState(1);

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.Country}&category=${props.category}&apiKey=${props.apikey}&pageSize=${props.pageSize}&page=${page}`;
    setloding(true);
    const data = await fetch(url);
    const parseData = await data.json();
    setarticles(parseData.articles);
    settotalResults(parseData.totalResults);
    setloding(false);
  };
  //this will execute only after the redering complete
  useEffect(() => {
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.Country
    }&category=${props.category}&apiKey=${props.apikey}&pageSize=${
      props.pageSize
    }&page=${page + 1}`;
    setpage(page + 1);
    const data = await fetch(url);
    const parseData = await data.json();
    setarticles(articles.concat(parseData.articles));
    settotalResults(parseData.totalResults);
  };
  return (
    <>
      <div className="container my-3">
        <h1 className="text-center" style={{ marginTop: "90px" }}>
          SpiderNews {props.heading} top headlines
        </h1>
        {loding && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row my-3">
              {articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <Newsitem
                      title={element.title}
                      description={element.description}
                      imageUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "http://www.rcdrilling.com/wp-content/uploads/2013/12/seamless-cogwheels-pattern.png"
                      }
                      newsUrl={element.url}
                      author={element.author}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};

News.defaultProps = {
  Country: "In",
  pageSize: 9,
  category: "general",
};

News.propTypes = {
  Country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
