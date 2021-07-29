import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: "color Red",
    value: "red",
  },
  {
    label: "color Blue",
    value: "blue",
  },
  {
    label: "color Green",
    value: "green",
  },
  {
    label: "color Yellow",
    value: "yellow",
  },
  {
    label: "color Purple",
    value: "purple",
  }
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={setSelected} />
    </div>
  );
};
export default App;
