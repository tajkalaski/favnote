import React from 'react';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import { connect } from 'react-redux';
import Card from 'components/molecules/Card/Card';

const Twitters = ({ twitters }) => (
  <GridTemplate pageType="twitters">
    {twitters.map((item) => (
      <Card
        id={item.id}
        cardType="twitters"
        title={item.title}
        content={item.content}
        twitterName={item.twitterName}
        created={item.created}
        key={item.title}
      />
    ))}
  </GridTemplate>
);

Twitters.propTypes = {
  twitters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      cardType: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      twitterName: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
};

Twitters.defaultProps = {
  twitters: [],
};

const mapStateToProps = (state) => {
  const { twitters } = state;
  return { twitters };
};

export default connect(mapStateToProps)(Twitters);
