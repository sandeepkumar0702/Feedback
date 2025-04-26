const FeedbackItem = ({ feedback, onDelete }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="feedback-item">
      <div className="feedback-content">
        <h3 className="feedback-name">{feedback.name}</h3>
        <Rating rating={feedback.rating} />
        <div className="feedback-message">{feedback.message}</div>
        {feedback.date && <small className="feedback-date">{formatDate(feedback.date)}</small>}
      </div>
      <div className="feedback-buttons">
        <button className="btn btn-danger btn-sm" onClick={() => onDelete(feedback.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};
