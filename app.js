// App.js
import React from 'react';
import ProductList from './components/productlist.js';
import GlobalStyles from './styles/GlobalStyles';

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <ProductList />
    </div>
  );
};

export default App;
