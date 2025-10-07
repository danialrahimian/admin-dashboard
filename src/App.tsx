import { useRoutes } from "react-router";
import { routes } from "./routes/routes";
function App() {
  const appRoutes = useRoutes(routes);
  return <>{appRoutes}</>;
}

export default App;
