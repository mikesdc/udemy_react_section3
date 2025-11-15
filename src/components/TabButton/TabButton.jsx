// import reactImg from "../../assets/react-core-concepts.png";
// import { reactDescriptions } from "../../data.js";
// import "./TabButton.css";

export default function TabButton({ children, isSelected, ...props }) {

  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>{children}</button>
    </li>
  );
}
