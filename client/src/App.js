import logo from "./logo.svg";
import "./App.css";
import {
  InMemoryCache,
  ApolloClient,
  ApolloProvider,
  useMutation,
  useQuery,
} from "@apollo/client";
import {
  QUERY_USER,
  QUERY_CHALLENGES,
  QUERY_CHALLENGE,
  QUERY_SUBMISSIONS,
} from "./databaseOperations/queries";
const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});
function App() {
  const { loading, data } = useQuery(QUERY_CHALLENGES);
  console.log(data);

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
