import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path='/' exact element={<HomePage />} />
        {/* Page Not Found */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
