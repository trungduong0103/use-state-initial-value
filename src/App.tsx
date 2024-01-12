import React from "react";
import "./styles.css";

interface ITabs {
  tabs: string[];
}

function Tabs({ tabs }: ITabs) {
  // selectedTab will not React to tabs changes
  const [selectedTab, setSelectedTab] = React.useState(tabs[0]);
  const [forceRender, setForceRender] = React.useState(false);

  // if you want to reflect selectedTab based on tabs props, you have to use setSelectedTab
  // React.useEffect(() => {
  //   setSelectedTab(tabs[0]);
  // }, [JSON.stringify(tabs)]);

  React.useEffect(() => {
    setTimeout(() => {
      console.log("force render...");

      setForceRender(true);
    }, 2000);
  }, []);

  console.log("[selectedTab]", selectedTab);
  console.log("[tabs]", JSON.stringify(tabs));

  return (
    <>
      <div>{selectedTab}</div>
      <div>{JSON.stringify(tabs)}</div>
    </>
  );
}

export default function App() {
  const [tabs, setTabs] = React.useState(["hello", "world"]);

  React.useEffect(() => {
    setTimeout(() => {
      setTabs(["bar", "world", "bye", "world"]);
    }, 1500);
  }, []);

  return (
    <div className="App">
      <Tabs tabs={tabs} />
    </div>
  );
}
