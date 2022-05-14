// AddPostForm.js

import React, { useState } from 'react';

export const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged =(e) => setContent(e.target.value);

  return (
    <section>
      <h2>Add a new post</h2>
      <form>
        <label htmlFor="postTitle">PostTitle:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button">Save post</button>
      </form>
    </section>
  );
};
