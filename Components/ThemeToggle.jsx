const ThemeToggle = ({ onToggle, currentTheme }) => {
  return (
    <button onClick={onToggle} className="theme-toggle" title="Toggle theme">
      {currentTheme === 'light' ? '🌙' : '☀️'}
    </button>
  );
};
