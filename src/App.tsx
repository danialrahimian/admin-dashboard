import { useRoutes } from "react-router";
import { routes } from "./routes/routes";
import { Provider } from "react-redux";
import AppBar from "./components/AppBar";
import store from "./Redux/store";
function App() {
  const appRoutes = useRoutes(routes);
  return (
    <AppBar>
      <Provider store={store}>{appRoutes}</Provider>
    </AppBar>
  );
}

export default App;
