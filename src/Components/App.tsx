import React from 'react';

import {Router} from '@reach/router';
import {ApolloClient, HttpLink, InMemoryCache} from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks'
import Notebook from './Notebook';
import Front from './Front';
import SpecificNote from './Note/SpecificNote';
import TopNote from './Note/TopNote';
import NewNote from './Note/NewNote';
import FullTable from './Tables/FullTable';
import TagTable from './Tables/TagTables';
import Nav from './Nav/Nav';
import { isDev } from '../utils';

const client = new ApolloClient({
  link : new HttpLink({uri: isDev ? "http://localhost:4000/graphql" : "https://qde29kvi38.execute-api.eu-central-1.amazonaws.com/dev/graphql"}),
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
        <TopNote path="note">
          <NewNote path="/" />
          <SpecificNote path="/:_id" />
         </TopNote>
      </Router>
    </ApolloProvider>
  );
}

export default App;
