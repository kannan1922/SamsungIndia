import { useSelector } from "react-redux";
import { selectAllUsers } from "./UsersSlice";

const PostAuthor = ({ userId }) => {
    const users = useSelector(selectAllUsers)

    const author = users.find(user => user.name === userId);

    return <span>{author ? author.name : 'Samsung Tab'}</span>
}
export default PostAuthor
