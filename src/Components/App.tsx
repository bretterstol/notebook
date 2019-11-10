import React from 'react';

import {Router} from '@reach/router';
import {ApolloProvider, ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';
import Notebook from './Notebook';
import Front from './Front';
import SpecificNote from './Note/SpecificNote';
import TopNote from './Note/TopNote';
import NewNote from './Note/NewNote';
import FullTable from './Tables/FullTable';
import TagTable from './Tables/TagTables';
import Nav from './Nav/Nav';
import { isDev } from '../utils';

const cache = new InMemoryCache()
const client = new ApolloClient({
  link : new HttpLink({uri: isDev ? "http://localhost:4000/graphql" : "https://qde29kvi38.execute-api.eu-central-1.amazonaws.com/dev/graphql"}),
  cache
});

const initData = {
  note: {
    showInfo: false,
  }
};

cache.writeData({data: initData})

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
