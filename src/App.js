const App = () => {
  const title = "Blog Post";
  const subtitle = "This is my blog post";
  const comments = [
    { id: 1, text: "this comment one" },
    { id: 2, text: "this comment two" },
    { id: 3, text: "this comment three" },
    { id: 4, text: "this comment four" },
  ];

  const cond = true;
  const blog = (
    <div className="container">
      <h1 className="title">{title}</h1>
      <h2 className="subtitle">{subtitle}</h2>
      <p className="commentsLength">comments: {comments.length}</p>
      <ul>
        {comments.map((comment) => {
          return <li key={comment.id}>{comment.text}</li>;
        })}
      </ul>
    </div>
  );
  return cond && blog;
};
export default App;
