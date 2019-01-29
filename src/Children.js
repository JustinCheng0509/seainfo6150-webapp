import React from "react";
import PropTypes from "prop-types";

const Children = ({title, author, date, children }) => (
    <div>
        {title}{author}{date}{children}
    </div>
);

Children.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
};

export default Children;