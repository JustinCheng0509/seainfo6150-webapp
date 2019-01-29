import React from "react";
import PropTypes from "prop-types";
import Children from "./Children";

const Article = ({ article }) => (
    <ul>
        {article.map(({ title, author, date, children }) => {
            return (
                <li key={article}>
                    <Children title={title} author={author} date={date} children={children}></Children>
                </li>
            );
        })}
    </ul>
);


Article.propTypes = {
    article: PropTypes.array.isRequired,
};

export default Article;