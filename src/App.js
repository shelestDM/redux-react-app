import { useSelector } from "react-redux";
import Auth from "./components/Auth";
import Counter from "./components/Counter";
import Header from "./components/Header";

function App() {

  const isUserLoggedIn = useSelector(state=>state.auth.isUserLoggedIn);

  return (
    <>
      <Header />
      {!isUserLoggedIn && <Auth/>}
      <Counter />
    </>
  );
}

export default App;
