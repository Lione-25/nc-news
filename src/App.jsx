import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/home-page";
import ArticlesPage from "./components/articles-page/articles-page";
import ArticlePage from "./components/article-page/article-page";
import NavBar from "./components/nav-bar";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/articles/:article_id" element={<ArticlePage />}></Route>
        <Route path="/articles/:topic?" element={<ArticlesPage />}></Route>
      </Routes>
      <footer>
        <p>Copyright Northcoders News App 2025</p>
      </footer>
    </>
  );
}

export default App;
