import articles from './article-content';
import ArticleList from "../components/ArticleList";
import { Link } from 'react-router-dom';
import React from 'react';
const ArticlesListPage = () => {
    return (
        <>
            {
                articles.map(article => (
                    <>
                        <Link key={article.name} className="article-list-Item" to={`/articles/${article.name}`} >
                        <h3 key={article.name}>{article.title}</h3>
                        <p key={article.content}>{article.content[0].substring(0, 90)}...</p>
                        </Link >
                    </>
            ))};
        </>
    )};
export default ArticlesListPage;