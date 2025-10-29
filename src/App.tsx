import { useRoutes } from "react-router";
import { routes } from "./routes/routes";
import AppBar from "./components/AppBar";
function App() {
  const appRoutes = useRoutes(routes);
  return <AppBar>{appRoutes}</AppBar>;
}

export default App;
