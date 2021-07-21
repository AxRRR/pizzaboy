import React, { useState } from 'react';
// import PropTypes from 'prop-types';

export const Counter = ({ value }) => {
    const [count, setCount] = useState(0)

    setCount(value+count);

    return count;
};

// Counter.propTypes = {};

// export default Counter;