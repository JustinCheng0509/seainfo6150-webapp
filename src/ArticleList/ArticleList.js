import React from "react";
import PropTypes from "prop-types";
import ArticleListItem from "./ArticleListItem";
import styles from "./ArticleList.module.css";

const ArticleList = ({ articles }) => (
  <div className={styles.container}>{
    Object.values(articles).map(article => {
      return (
        <ArticleListItem
          key={article.slug}
          title={article.title}
          date={article.pubDate}
          year={article.pubYear}
          author={article.author}
          shortText={article.shortText}
          url={article.image._url}
          />
      );
    })}
  </div>
);

ArticleList.propTypes = {
  articles: PropTypes.object.isRequired
};

export default ArticleList;