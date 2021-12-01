import "./App.css";
import Home from "./Pages/Home";
import Auth from "./Pages/Auth";
import { useUserContext } from "./context/userContext";

function App() {
  const { loading, error, user } = useUserContext();
  return (
    <div className="App">
      {error && <p className="error">{error}</p>}{" "}
      {loading ? <h2>Loading...</h2> : <> {user ? <Home /> : <Auth />}</>}
    </div>
  );
}

export default App;
