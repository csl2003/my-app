import './App.css'
import HomePage from './pages/HomePage.js';
import AboutPage from './pages/AboutPage.js';
import ArticlesPage from './pages/ArticlesPage.js';
import ArticlesListPage from './pages/ArticleListPage.js';
import NotFoundPage from './pages/NotFoundPage.js';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import NavBar from './NavBar.js';
const App = () => { 
    return (
        <BrowserRouter>
            <div class="App">
            <NavBar />
            <div id="page-body">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/articles" element={<ArticlesListPage />} />
                    <Route path="/articles/:articleId" element={<ArticlesPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
                </div>
                </div>
            </BrowserRouter>
        
    );
}; 

export default App;