import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import HomePage from "./components/home-page";
import ArticlesPage from "./components/articles-page/articles-page";
import ArticlePage from "./components/article-page/article-page";
import UsersPage from "./components/users-page/users-page";
import { UserAccountProvider } from "./contexts/user-account";
import { ArticleContextProvider } from "./contexts/article-context";

function App() {
  return (
    <>
      <UserAccountProvider>
        <ArticleContextProvider>
          <header>
            <Header />
          </header>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>

            <Route
              path="/articles/:article_id"
              element={<ArticlePage />}
            ></Route>

            <Route path="/articles" element={<ArticlesPage />}></Route>
            <Route path="/users" element={<UsersPage />}></Route>
          </Routes>
        </ArticleContextProvider>
      </UserAccountProvider>
      <footer>
        <p>Copyright Northcoders News App 2025</p>
      </footer>
    </>
  );
}

export default App;
