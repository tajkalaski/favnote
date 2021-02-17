import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import GlobalStyle from 'theme/GlobalStyle';
import PageContext from 'context';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';

const MainTemplate = ({ children, location }) => {
  const [pageType, setPageType] = useState('notes');
  const pageTypes = ['notes', 'articles', 'twitters'];

  useEffect(() => {
    const [currentPage] = pageTypes.filter((page) => location.pathname.includes(page));
    setPageType(currentPage);
  }, [location]);

  return (
    <div>
      <PageContext.Provider value={pageType}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </PageContext.Provider>
    </div>
  );
};

MainTemplate.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.element.isRequired,
};

export default withRouter(MainTemplate);
