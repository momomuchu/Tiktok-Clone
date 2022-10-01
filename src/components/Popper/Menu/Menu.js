import React, { useState } from "react";
import PopperWrapper from "~/components/Popper/Wrapper";
import MenuItem from "./MenuItem.js";
import Header from "./Header.js";
import classNames from "classnames";
import styles from "./Menu.module.scss";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/animations/scale.css";

const cx = classNames.bind(styles);

function Menu({ children, items = [], onChange = () => {}, left, right }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const handleToChildren = (item) => {
    const isParent = item.children;
    if (isParent) {
      setHistory((prev) => [...prev, item.children]);
    } else onChange(item);
  };

  const onBack = () => {
    setHistory((prev) => prev.slice(0, prev.length - 1));
  };

  const renderItems = () => {
    return current.data.map((item, index) => (
      <MenuItem
        key={index}
        data={item}
        onClick={() => handleToChildren(item)}
      />
    ));
  };

  const classes = cx(styles.menu_items, {
    [styles.left]: left,
    [styles.right]: right,
  });

  return (
    <Tippy
      interactive
      delay={[0, 500]}
      onHide={() => setHistory((prev) => prev.slice(0, 1))}
      render={(attrs) => (
        <div className={classes} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            {history.length > 1 && <Header title="Language" onBack={onBack} />}
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
