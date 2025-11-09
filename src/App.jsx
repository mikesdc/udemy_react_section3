import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";

import { CORE_CONCEPTS } from "./data";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("Please click a button.");

  function handleSelect(selectedButton) {
    // selectedButton => 'components, 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
    console.log(`Hello World! - selected ${selectedButton}!`);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          Dynamic Content
          <div>{selectedTopic}</div>
        </section>
      </main>
    </div>
  );
}

export default App;
