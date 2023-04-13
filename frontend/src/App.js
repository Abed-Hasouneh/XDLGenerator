import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "./App.css";
import Header from "./Layout/Header";
import LogInPage from "./Pages/LogInPage";
import Colors from "./Pages/Colors";
import Typography from "./Pages/Typography";
import Breakpoints from "./Pages/Breakpoints";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Header />
      </header>
      <main>
        <Container>
          <Routes>
            <Route path="/" element={<LogInPage />} />
            <Route path="/colors" element={<Colors />} />
            <Route path="/typography" element={<Typography />} />
            <Route path="/breakpoints" element={<Breakpoints />} />
          </Routes>
        </Container>
      </main>
    </BrowserRouter>
  );
}

export default App;
