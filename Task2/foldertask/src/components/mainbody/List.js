import React, { useState } from "react";
import Checkbox from "./Checkbox";
import { status } from "./constants";
import openfolder from '../Assets/openfolder.png'
import arrow1 from '../Assets/arrow1.png'

// Display List Contents

export default function List(props) {
  const { items, compute } = props;
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (itemId) => {
    if (openItems.includes(itemId)) {
      setOpenItems(openItems.filter((id) => id !== itemId));
    } else {
      setOpenItems([...openItems, itemId]);
    }
  };

  return (
    <ul>
      {items.map((item) => {
        const isItemOpen = openItems.includes(item.id);
        let childList = null;
        if (Array.isArray(item.items) && isItemOpen) {
          childList = (
            <List items={item.items} compute={compute} />
          );
        }
        const hasChildItems = Array.isArray(item.items) && item.items.length > 0;

        return (
          <li key={item.id}>
            <div>
                {hasChildItems && (
              <div
              className="inline-block mr-2 cursor-pointer"
              >
                <img src={arrow1} width={15} className={`arrow ${isItemOpen ? "open" : ""}`}
                onClick={() => toggleItem(item.id)} alt="" />
              </div>
            )}
            <Checkbox
              id={item.id}
              name={item.name}
              checked={item.status === status.checked}
              indeterminate={item.status === status.indeterminate}
              compute={compute}
            />
            {hasChildItems && (
              <img src={openfolder} className="inline-block" width={30} alt="" />
            )}
            <label className="ml-2" htmlFor={item.name}>{item.name}</label>
            {childList}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
