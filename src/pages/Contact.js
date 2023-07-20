import React, { useState } from "react";

export default function Contact() {
  let m = [];
  const [activeState, setActiveState] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  for (let i = 1; i <= 10; i++) {
    m.push(i);
  }
  const handleActive = (index) => {
    setActiveState(index);
  };
  const handleTab = (index) => {
    setActiveTab(index);
  };

  let data = [
    {
      name: "olma",
      price: 70,
      rangi: "qizil",
    },
    {
      name: "anor",
      price: 60,
      rangi: "qizil",
    },
    {
      name: "xurmo",
      price: 45,
      rangi: "sariq",
    },
    {
      name: "banan",
      price: 8,
      rangi: "sariq",
    },
    {
      name: "anjir",
      price: 90,
      rangi: "jigarrang",
    },
    {
      name: "gilos",
      price: 93,
      rangi: "qizil",
    },
  ];

  return (
    <div>
      {m.map((btn, index) => {
        return (
          <button
            className={activeState === index ? "activeBtn" : ""}
            style={{ padding: "15px", margin: "5px" }}
            onClick={() => handleActive(index)}
            key={index}
          >
            {btn}
          </button>
        );
      })}

      <div>
        {data.map((_, index) => {
          return (
            <button
              key={index}
              onClick={() => handleTab(index)}
              style={{ padding: "10px", margin: "5px" }}
              className={activeTab === index ? "activeBtn" : ""}
            >
              {index + 1}
            </button>
          );
        })}
      </div>

      <div style={{ color: "white" }}>
        <h2>{data[activeTab].name}</h2>
        <h3>{data[activeTab].price}</h3>
        <p>{data[activeTab].rangi}</p>
      </div>
    </div>
  );
}
