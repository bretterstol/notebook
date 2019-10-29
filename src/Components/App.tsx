import React from 'react';

import {Router} from '@reach/router';
import {ApolloClient, HttpLink, InMemoryCache} from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks'
import Notebook from './Notebook';
import Front from './Front';
import Note from './NoteContainer';

const client = new ApolloClient({
  link : new HttpLink({uri: "http://localhost:4000/graphql"}),
  cache: new InMemoryCache()
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Front path="/" />
        <Notebook path="notebook" />
        <Note path="notebook/:_id" />
      </Router>
    </ApolloProvider>
  );
}

export default App;
