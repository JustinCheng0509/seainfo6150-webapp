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
          <h2 class={styles.title}>{this.props.title}</h2>
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

/*
const ArticleListItem = ({ props }) => (
    <ul className={styles.container}>
      <li>
        <h1 class="title">{props.title}</h1>
      </li>
      <li>
        <p class="shortText">{props.shortText}</p>
      </li>
      <li>
        <address>{props.author}</address>
      </li>
      <li>
        <date class="date">By: {props.date}</date>
      </li>
      <li>
        <year class="year">{props.year}</year>
      </li>
    </ul>
  );
*/
ArticleListItem.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  shortText: PropTypes.string.isRequired
};

export default ArticleListItem;