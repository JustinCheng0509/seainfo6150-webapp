import React from "react";
import PropTypes from "prop-types";

const Article = (props) => (
    <div>
        {props.title}
        {props.author}
        {props.date}
        {props.children}
    </div>
);


Article.propTypes = {
    children: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
};

export default Article;