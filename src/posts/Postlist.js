import { useSelector } from "react-redux";
import { selectAllPosts } from "./PostSlice";
import TimeAgo from "./TimeAgo";
import '../posts/Redux.css' 
import PostAuthor from "./PostAuthor";
const PostsList = () => {
    const posts = useSelector(selectAllPosts)

    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    const renderedPosts = orderedPosts.map(post => (
        <article key={post.id} className="post">
            <h3><PostAuthor userId={post.userId} /></h3>
            <p>Regarding: {post.title}</p>
            <p className="postCredit">
                FeedBack: {post.content.substring(0, 100)}
                <p className="timeAgo">Updated:<TimeAgo timestamp={post.date} /></p>
            </p>
        </article>
    ));

    return (
        <section className="posts-section">
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    );
};

export default PostsList;