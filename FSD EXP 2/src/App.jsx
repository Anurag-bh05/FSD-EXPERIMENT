import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPost, deletePost } from './features/postSlice';

function App() {
  const [postTitle, setPostTitle] = useState('');
  const posts = useSelector((state) => state.posts.posts);
  const platforms = useSelector((state) => state.platforms.platforms);
  const dispatch = useDispatch();

  const handleAddPost = (e) => {
    e.preventDefault();
    if (postTitle.trim()) {
      dispatch(addPost({ id: Date.now(), title: postTitle }));
      setPostTitle('');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Centralized State Management</h1>

      <section>
        <h2>Platforms Available (Global State)</h2>
        <ul>
          {platforms.map((platform, idx) => (
            <li key={idx}>{platform}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Manage Posts</h2>
        <form onSubmit={handleAddPost}>
          <input
            type="text"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
            placeholder="Type a post title..."
          />
          <button type="submit">Add Post</button>
        </form>

        <ul>
          {posts && posts.map((post) => (
            <li key={post.id}>
              {post.title}
              <button 
                onClick={() => dispatch(deletePost(post.id))} 
                style={{ marginLeft: '10px' }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;