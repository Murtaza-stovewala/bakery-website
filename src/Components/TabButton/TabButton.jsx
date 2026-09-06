import "./TabButton.css";

export default function TabButton({
  label,
  count,
  onSelect,
  variant,
}) {
  return (
    <li>
      <button
        className={`tab-button ${variant}`}
        onClick={onSelect}
      >
        <span>{label}</span>

        <span className="tab-button-count">
          {count}
        </span>
      </button>
    </li>
  );
}