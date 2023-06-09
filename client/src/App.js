import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import Footer from './components/Footer/index';
import Header from './components/Nav/index';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Cart from './components/Cart';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { StoreProvider } from './utils/GlobalState';
import { setContext } from '@apollo/client/link/context';
import Catalog from './pages/Catalog';
import NoMatch from './pages/NoMatch';

import Success from './pages/Success';
import Detail from './pages/Detail';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <StoreProvider>
          <Header />
          <div className='main-div'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/catalog' element={<Catalog />} />

              <Route path='/products/:id' element={<Detail />} />
              <Route path='/ordercomplete' element={<Success />} />
              <Route path='*' element={<NoMatch />} />
            </Routes>
            <Footer />
          </div>
        </StoreProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
