const FeedbackForm = ({ onAddFeedback }) => {
  const [name, setName] = React.useState('');
  const [rating, setRating] = React.useState(5);
  const [message, setMessage] = React.useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (name.trim() === '' || message.trim() === '') return;

    const newFeedback = {
      name,
      rating: Number(rating),
      message,
      date: new Date().toISOString()
    };

    onAddFeedback(newFeedback);

    setName('');
    setRating(5);
    setMessage('');
  };

  return (
    <div className="card">
      <h2 className="card-title">Leave Your Feedback</h2>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Your Name</label>
          <input
            type="text"
            id="name"
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="rating" className="form-label">Rating</label>
          <select
            id="rating"
            className="form-input"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option value="5">Excellent (5)</option>
            <option value="4">Very Good (4)</option>
            <option value="3">Good (3)</option>
            <option value="2">Fair (2)</option>
            <option value="1">Poor (1)</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="message" className="form-label">Your Message</label>
          <textarea
            id="message"
            className="form-textarea"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Share your thoughts..."
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit Feedback</button>
      </form>
    </div>
  );
};
