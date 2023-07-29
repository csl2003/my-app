import NotFoundPage from './NotFoundPage';
import articles from './article-content';
import { useParams } from 'react-router-dom';
const ArticlesPage = () => {
    const { articleId } = useParams();
    const article = articles.find(article => article.name === articleId);
    if (!article)
    {
        return <NotFoundPage/>
    }
    else {
        return (
            <>
                <h1>{article.title}</h1>
                {article.content.map((p, i) => (
                    <p key={i}>{p}</p>
                ))}
            </>
        )
    }
};
export default ArticlesPage;