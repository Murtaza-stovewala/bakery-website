import "./TabButton.css";

export default function TabButton({
  label,
  count,
  onSelect,
  variant,
  isSelected
}) {
  return (
    <li>
      <button 
        className={`tab-button ${variant} ${isSelected ? 'active' : ''}` }
        onClick={onSelect}
      >
        <span>{label}</span>

        <span className={`tab-button-count count-${variant}`}>
          {count}
        </span>
      </button>
    </li>
  );
}