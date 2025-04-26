const FeedbackList = ({ feedbacks, onDelete }) => {
  if (!feedbacks || feedbacks.length === 0) {
    return (
      <div className="card">
        <div className="empty-list">No feedback yet. Be the first to leave one!</div>
      </div>
    );
  }

  return (
    <div className="card">
      <h2 className="card-title">Recent Feedback</h2>
      <div className="feedback-count">{feedbacks.length} feedback entries</div>
      {feedbacks.map((feedback) => (
        <FeedbackItem key={feedback.id} feedback={feedback} onDelete={onDelete} />
      ))}
    </div>
  );
};
