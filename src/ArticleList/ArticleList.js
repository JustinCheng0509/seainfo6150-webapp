import React from "react";
import PropTypes from "prop-types";
import ArticleListItem from "./ArticleListItem";
import styles from "./ArticleList.module.css";

const ArticleList = ({ articles }) => (
<div className = {styles.container}>  
  <div className = {styles.heading}>
    <div className = {styles.headingText}>The Info 6150 News</div>
    <div className = {styles.titleTime}>Wed,February 20,2019</div>
  </div>  
  <div className = {styles.body}>{
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
  <div className={styles.footer}>
      <div className = {styles.footerText}> &copy;2019,April Bingham</div>
  </div>
</div>
);

ArticleList.propTypes = {
  articles: PropTypes.object.isRequired
};

export default ArticleList;