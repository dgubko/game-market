import { log } from "console";
import React from "react";

export const ReviewForm = ({ userId, gameId }) => {
  const [title, setTitle] = React.useState<string>("");
  const [rating, setRating] = React.useState<number>(0);
  const [comment, setComment] = React.useState<string>("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleRatingChange = (event) => {
    const newValue: number = parseInt(event.target.value);
    setRating(newValue);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ title, rating, comment, userId, gameId });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        placeholder="Title"
        type="text"
        value={title}
        onChange={handleTitleChange}
      />
      <input
        id="1"
        type="radio"
        name="rating"
        value="1"
        onChange={handleRatingChange}
      />
      <label htmlFor="1">1</label>
      <input
        id="2"
        type="radio"
        name="rating"
        value="2"
        onChange={handleRatingChange}
      />
      <label htmlFor="2">2</label>
      <input
        id="3"
        type="radio"
        name="rating"
        value="3"
        onChange={handleRatingChange}
      />
      <label htmlFor="3">3</label>
      <input
        id="4"
        type="radio"
        name="rating"
        value="4"
        onChange={handleRatingChange}
      />
      <label htmlFor="4">4</label>
      <input
        id="5"
        type="radio"
        name="rating"
        value="5"
        onChange={handleRatingChange}
      />
      <label htmlFor="5">5</label>
      <textarea
        id="textarea"
        placeholder="Comment"
        value={comment}
        onChange={handleCommentChange}
      />
      <button>Submit</button>
    </form>
  );
};
