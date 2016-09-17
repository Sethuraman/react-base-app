import React, { PropTypes } from 'react';

const App = props => (
  <div>
		<h1>Your app is now running successfully.</h1>
		<h2>Delete me under App.js and get coding!</h2>
    {props.children}
  </div>
);


App.propTypes = {
  children: PropTypes.element
};

export default App;
