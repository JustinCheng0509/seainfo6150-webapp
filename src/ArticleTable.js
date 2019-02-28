import React from 'react';
import PropTypes from 'prop-types';
import ArticleTableRow from './ArticleTableRow';

const ArticleTable = ({ articles }) => (
    <table>
        <caption><h1>Articles</h1></caption>
        <thead>
        <tr>
            <th></th>
            <th>Status</th>
            <th>Author</th>
            <th>Date</th>
            <th>short Text</th>
        </tr>
        </thead>
      {
    // this iterates through the articles JSON and
    // calls your ArticleTableRow component for each article
    Object.values(articles).map(article => {
      return <ArticleTableRow
        key={article.slug}
        title={article.title}
        date={article.pubDate}
        author={article.author}
        shortText={article.shortText}
        year={article.pubYear}
      />
    })
  }
  </table>

);

ArticleTable.propTypes = {
  articles: PropTypes.object.isRequired
}

export default ArticleTable;
