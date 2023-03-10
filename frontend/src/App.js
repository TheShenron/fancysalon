import { Route, Routes } from "react-router-dom";
import Error from './pages/Error'
import Home from "./pages/Home";



function App() {

  return (

    <>

    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="*" element={<Error />} />
    </Routes>

    </>
  );
}

export default App;
