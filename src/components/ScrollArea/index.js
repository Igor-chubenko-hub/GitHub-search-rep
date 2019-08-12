import React from 'react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';

import './style.scss';

const ScrollArea = (props) => {
  const { style, children } = props;

  return (
    <Scrollbars
      style={style}
      renderThumbVertical={() => <div className="thumb thumb-vertical" />}
      renderThumbHorizontal={() => <div className="thumb thumb-horizontal" />}
    >
      {children}
    </Scrollbars>
  );
};

ScrollArea.propTypes = {
  style: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.node.isRequired,
};

ScrollArea.defaultProps = {
  style: {
    width: '100%',
    height: '100%',
  },
};

export default ScrollArea;
