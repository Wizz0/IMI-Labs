import React from 'react';

function Article({ title, image, text }) {
  return (
    <article>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>{text}</p>
    </article>
  );
}

export default Article;