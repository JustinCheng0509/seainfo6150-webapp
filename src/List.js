import React from "react";
import PropTypes from "prop-types";
import Name from "./Name";

const List = ({ children }) => (
    <ul>
        {children.map(({ firstName, lastName }) => {
            return (
                <li key={firstName}>
                    <Name firstName={firstName} lastName={lastName} />
                </li>
            );
        })}
    </ul>
);

List.propTypes = {
    children: PropTypes.array.isRequired
};

export default List;
