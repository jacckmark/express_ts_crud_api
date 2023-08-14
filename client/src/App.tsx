import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainContainer } from "./containers/MainContainer";
import { ThemeProvider } from "./context/themeContext";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Users } from "./pages/Users";

export const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <MainContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </MainContainer>
      </Router>
    </ThemeProvider>
  );
};
