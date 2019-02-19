import React from "react";
import PropTypes from "prop-types";
import styles from "./ArticleListItem.module.css";
import ArticleImage from "./ArticleImage";

class ArticleListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = {styles.box}>
      <div className = {styles.image}>
        <div className = {styles.image}>
          <ArticleImage url={this.props.url} title={this.props.title}/>
        </div>
      </div>
      <div className = {styles.container}>
        <div className = {styles.title}><h3>{this.props.title}</h3></div>
        <div className = {styles.shortText}>{this.props.shortText}</div>
        <div className = {styles.author}><address>{this.props.author}</address></div>
        <div className = {styles.time}><time dateTime ={this.props.year}>{this.props.date}</time>
        </div>
      </div>
      </div>
    );
  }
}

ArticleListItem.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  shortText: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default ArticleListItem;