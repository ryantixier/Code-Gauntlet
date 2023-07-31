import "./App.css";
import { InMemoryCache, ApolloClient, ApolloProvider } from "@apollo/client";
import Test from "./Test";
const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});
function App() {
  return (
    <ApolloProvider client={client}>
      <Test />
    </ApolloProvider>
  );
}

export default App;
