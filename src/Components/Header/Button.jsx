import "./Button.css";

export default function Button({ children, isSelected }) {
  return (
    <li>
      <button>{children}</button>
    </li>
  );
}
