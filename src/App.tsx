import { useRoutes } from "react-router-dom";
import { routes } from "./routes/routes";
import { Provider } from "react-redux";
import AppBar from "./components/AppBar";
import store from "./Redux/store";
function App() {
  const appRoutes = useRoutes(routes);
  return (
    <Provider store={store}>
      <AppBar>{appRoutes}</AppBar>
    </Provider>
  );
}

export default App;

