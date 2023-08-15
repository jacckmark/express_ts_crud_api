import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/themeContext";
import { withAuthContainer } from "./containers/AuthPageContainer";
import { withNotAuthContainer } from "./containers/NotAuthPageContainer";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Users } from "./pages/Users";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { NotFoundPage } from "./pages/NotFoundPage";

export const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/login" element={withNotAuthContainer(<Login />)} />
          <Route path="/register" element={withNotAuthContainer(<Register />)} />
          <Route path="/" element={withAuthContainer(<Home />)} />
          <Route path="/users" element={withAuthContainer(<Users />)} />
          <Route path="/products" element={withAuthContainer(<Products />)} />
          <Route path="*" element={withNotAuthContainer(<NotFoundPage />)} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};
