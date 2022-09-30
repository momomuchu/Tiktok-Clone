import React from "react";
import styles from "~/static/sass/components/listAccount.module.scss";
import AccountItem from "./AccountItem";

function ListAccount({ title, seeMore }) {
  return (
    <div className={styles.sidebar_list}>
      <p className={styles.account_title}>{title}</p>
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <div>
        <p className={styles.sidebar_seeAll}>{seeMore}</p>
      </div>
    </div>
  );
}

export default ListAccount;
