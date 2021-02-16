import React from 'react';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';
import { connect } from 'react-redux';

const Notes = ({ notes }) => (
  <GridTemplate pageType="notes">
    {notes.map((item) => (
      <Card
        id={item.id}
        cardType="notes"
        title={item.title}
        content={item.content}
        created={item.created}
        key={item.title}
      />
    ))}
  </GridTemplate>
);

Notes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      cardType: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
};

Notes.defaultProps = {
  notes: [],
};

const mapStateToProps = (state) => {
  const { notes } = state;
  return { notes };
};

export default connect(mapStateToProps)(Notes);
