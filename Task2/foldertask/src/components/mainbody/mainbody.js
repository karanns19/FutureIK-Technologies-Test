import React, { useState } from "react";
import "./main.css";
import List from "../mainbody/List";
import { status } from "../mainbody/constants";

// Dummy Data
const data = [
  {
    id: 1,
    name: "Designer Templates",
    items: [
      { id: 4, name: "List 1" },
      { id: 5, name: "List 2" },
      { id: 6, name: "List 3" }
    ]
  },
  {
    id: 2,
    name: "QUADFOS",
    items: [
      { id: 7, name: "List 1" },
    ]
  },
  {
    id: 3,
    name: "FutureIK",
    items: [
      {
        id: 8,
        name: "MIDDLE EAST",
        items: [
            {
                id: 9,
                name: "UAE",
                items: [
                    {
                        id: 10,
                        name: "Dubai",
                        items: [{ id: 11, name: "Dubai Mall Entrance Screen 1600x800" },{ id: 12, name: "Dubai Mall Exit Screen 1200x468" }]
                    },
                ]
            },
            {
                id: 13,
                name: "Saudi Arabia",
                items: [{id:14, name:"List 1"}]
            },
            {
                id: 15,
                name: "Kuwait",
                items: [{id:16, name:"List 1"}]
            },
        ]
      },
    ]
  }
];

// Mainbody Component - Trees Lists With Indeterminate (Type of Project)

export default function Mainbody() {
  const setStatus = (root, status) => {
    root.status = status;
    if (Array.isArray(root.items)) {
      return root.items.forEach((item) => {
        setStatus(item, status);
      });
    }
  };

  const computeStatus = (items) => {
    let checked = 0;
    let indeterminate = 0;

    items.forEach((item) => {
      if (item.status && item.status === status.checked) checked++;
      if (item.status && item.status === status.indeterminate) indeterminate++;
    });

    if (checked === items.length) {
      return status.checked;
    } else if (checked > 0 || indeterminate > 0) {
      return status.indeterminate;
    }
  };

  // Method Used - Depth-first traversal
  const traverse = (root, needle, status) => {
    let id;
    let items;

    if (Array.isArray(root)) {
      items = root;
    } else {
      id = root.id;
      items = root.items;
    }
    if (id === needle) {
      return setStatus(root, status);
    }
    if (!items) {
      return root;
    } else {
      items.forEach((item) => traverse(item, needle, status));
      root.status = computeStatus(items);
    }
  };

  const [items, setItems] = useState(data);
  const compute = (checkboxId, status) => {
    traverse(items, checkboxId, status);
    setItems(items.slice());
  };

  return (
    <div className="Mainbody p-4">
      <List items={items} compute={compute} />
    </div>
  );
}
