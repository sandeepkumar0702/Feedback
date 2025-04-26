const App = () => {
  const [theme, setTheme] = React.useState(localStorage.getItem("theme") || "light");
  const [feedbacks, setFeedbacks] = React.useState([]);

  const fetchFeedbacks = async () => {
    try {
      const res = await fetch("https://hello-ec906-default-rtdb.firebaseio.com/feedbacks.json");
      const data = await res.json();
      const loadedFeedbacks = [];

      if (data) {
        for (const key in data) {
          loadedFeedbacks.push({ id: key, ...data[key] });
        }
      }
      setFeedbacks(loadedFeedbacks);
    } catch (error) {
      console.error("Error fetching feedback:", error);
    }
  };

  React.useEffect(() => {
    fetchFeedbacks();
    document.body.className = theme;
  }, [theme]);

  const addFeedbackHandler = async (feedback) => {
    try {
      await fetch("https://hello-ec906-default-rtdb.firebaseio.com/feedbacks.json", {
        method: "POST",
        body: JSON.stringify(feedback),
        headers: { "Content-Type": "application/json" },
      });
      fetchFeedbacks();
    } catch (error) {
      console.error("Error adding feedback:", error);
    }
  };

  const deleteFeedbackHandler = async (id) => {
    try {
      await fetch(`https://hello-ec906-default-rtdb.firebaseio.com/feedbacks/${id}.json`, {
        method: "DELETE",
      });
      fetchFeedbacks();
    } catch (error) {
      console.error("Error deleting feedback:", error);
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.className = newTheme;
  };

  return (
    <div className="container">
      <header className="header">
        <h1 className="logo">Feedback App</h1>
        <ThemeToggle onToggle={toggleTheme} currentTheme={theme} />
      </header>
      <FeedbackForm onAddFeedback={addFeedbackHandler} />
      <FeedbackList feedbacks={feedbacks} onDelete={deleteFeedbackHandler} />
    </div>
  );
};
