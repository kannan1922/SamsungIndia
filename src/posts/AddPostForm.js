import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import '../posts/Redux.css' 
import { postAdded } from "./PostSlice";
import { selectAllUsers } from "./UsersSlice";
const AddPostForm = () => {
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')
console.log(userId)
    const users = useSelector(selectAllUsers)

    const onTitleChanged = e => setTitle(e.target.value)
    const onAuthorChanged = e => setUserId(e.target.value)

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(
                postAdded(title, content, userId)
            )
            setTitle('')
            setContent('')
            setUserId([])
        }
    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    const usersOptions = users ? users.map(user => (
        <option ><div className='name' >{user.name}</div>
        
        </option>
    )) : [];
    const onContentChanged = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            onSavePostClicked();
        } else {
            setContent(e.target.value);
        }
    };
    
    return (
            <section className="form-section">
                <h2>Add a new FeedBack</h2>
                <form className="form">
    
                    <label htmlFor="postAuthor" className="form-label">Product</label>
                    <select className="form-select" value={userId} onChange={onAuthorChanged}>
                        <option value=""></option>  
                        {usersOptions}
                    </select>
    
                    <label htmlFor="postTitle" className="form-label">Regarding</label>
                    <input
                        type="text"
                        name="postTitle"
                        value={title}
                        onChange={onTitleChanged}
                        className="form-input"
                    />
    
                    <label htmlFor="postContent" className="form-label">FeedBack</label>
                    <input
                        id="postContent"
                        name="postContent"
                        value={content}
                        onChange={onContentChanged}
                        className="form-textarea"
                    />
                    <button
                      onChange={onContentChanged}
                        onClick={onSavePostClicked}
                        disabled={!canSave}  
                        className="form-button"
                    >Save Post</button>
                </form>
            </section>
        )
    }
    
    export default AddPostForm