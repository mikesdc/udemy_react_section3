// import reactImg from "../../assets/react-core-concepts.png";
// import { reactDescriptions } from "../../data.js";
import "./TabButton.css";

export default function TabButton({ children, onSelect }) {

  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
