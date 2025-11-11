// import reactImg from "../../assets/react-core-concepts.png";
// import { reactDescriptions } from "../../data.js";
import "./TabButton.css";

export default function TabButton({ children, onSelect, isSelected }) {

  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>{children}</button>
    </li>
  );
}
