import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DetailsTemplate from 'templates/DetailsTemplate';

const Details = ({ match }) => {
  const [pageType, setPageType] = useState('notes');

  const dummyArticle = {
    id: 1,
    title: 'Wake me up when Vue ends',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    twitterName: 'hello_roman',
    articleUrl: 'https://youtube.com/helloroman',
    created: '1 day',
  };

  useEffect(() => {
    const newPageType = match.path.slice(1).slice(0, -4);
    setPageType(newPageType);
  }, [match]);

  return (
    <>
      <DetailsTemplate
        pageType={pageType}
        title={dummyArticle.title}
        created={dummyArticle.created}
        content={dummyArticle.content}
        articleUrl={dummyArticle.articleUrl}
        twitterName={dummyArticle.twitterName}
      />
    </>
  );
};

Details.propTypes = {
  match: PropTypes.string.isRequired,
};
export default Details;
