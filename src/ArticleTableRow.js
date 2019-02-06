import React from 'react';
import PropTypes from 'prop-types';

class ArticleTableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }

  onClick() {
    this.setState({
      selected: !this.state.selected
    });
  }

  render() {

    let selectedStatus;
    if (this.state.selected) {
      selectedStatus = 'Yes';
    }
    else {
      selectedStatus = 'No';
    }

    // paste this onClick handler into your checkbox;
    // you should not have to modify this code in any way
    // onClick={this.onClick.bind(this)}
    //
      return (
          <tr>
              <td>
                  <input type="Checkbox" onClick={this.onClick.bind(this)} />
              </td>
              <td>
                  <span>{selectedStatus}</span>
              </td>
              <td>
                  <span class="Author">{this.props.author}</span>
              </td>
              <td>
                  <time>{this.props.date}</time>
              </td>
              <td>
                  <span>{this.props.shortText}</span>
              </td>
          </tr>
      );
  }
}

ArticleTableRow.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  shortText: PropTypes.string.isRequired
};

export default ArticleTableRow;
