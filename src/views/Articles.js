import React from 'react';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';
import { connect } from 'react-redux';

const Articles = ({ articles }) => (
  <GridTemplate>
    {articles.map((item) => (
      <Card
        id={item.id}
        title={item.title}
        content={item.content}
        articleUrl={item.articleUrl}
        created={item.created}
        key={item.title}
      />
    ))}
  </GridTemplate>
);

Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      cardType: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
};

Articles.defaultProps = {
  articles: [],
};

const mapStateToProps = (state) => {
  const { articles } = state;
  return { articles };
};

export default connect(mapStateToProps)(Articles);
