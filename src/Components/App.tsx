import React from 'react';

import {Router} from '@reach/router';
import {ApolloClient, HttpLink, InMemoryCache} from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks'
import Notebook from './Notebook';
import Front from './Front';
import Note from './Note/NoteContainer';
import FullTable from './Tables/FullTable';
import TagTable from './Tables/TagTables';
import Nav from './Nav/Nav';

const client = new ApolloClient({
  link : new HttpLink({uri: "https://qde29kvi38.execute-api.eu-central-1.amazonaws.com/dev/graphql"}),
  cache: new InMemoryCache()
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Nav />
      <Router>
        <Front path="/" />
        <Notebook path="notebook">
          <FullTable path="/" />
          <TagTable path="/:tag" />
         </Notebook>
        <Note path="note/:_id" />
      </Router>
    </ApolloProvider>
  );
}

export default App;
