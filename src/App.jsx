import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import HomePage from "./components/home-page";
import ArticlesPage from "./components/articles-page/articles-page";
import ArticlePage from "./components/article-page/article-page";
import UsersPage from "./components/users-page/users-page";
import { UserAccountProvider } from "./contexts/UserAccount";

function App() {
  return (
    <>
      <UserAccountProvider>
        <header>
          <Header />
        </header>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/articles/:article_id" element={<ArticlePage />}></Route>
          <Route path="/articles/:topic?" element={<ArticlesPage />}></Route>
          <Route path="/users" element={<UsersPage />}></Route>
        </Routes>
      </UserAccountProvider>
      <footer>
        <p>Copyright Northcoders News App 2025</p>
      </footer>
    </>
  );
}

export default App;
