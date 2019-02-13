import React from "react";
import PropTypes from "prop-types";
import styles from "./ArticleListItem.module.css";

class ArticleListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className={styles.container}>
        <li>
          <h3 class={styles.title}>{this.props.title}</h3>
        </li>
        <li>
          <p class={styles.shortText}>{this.props.shortText}</p>
        </li>
        <li>
          <address>By: {this.props.author}</address>
        </li>
        <li>
          <date>{this.props.date}</date>
        </li>
      </ul>
    );
  }
}

ArticleListItem.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  shortText: PropTypes.string.isRequired
};

export default ArticleListItem;