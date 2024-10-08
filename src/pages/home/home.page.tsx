import React, { useState } from "react";
import Input from "../../components/input/input.component";

import styles from "./styles.module.scss";

const HomePage = () => {
  const [state, setState] = useState<string>("Hello From Chrome Ext..");

  const handleChange = (str: string) => {
    setState(str);
  };

  return (
    <div className={styles.container}>
      <Input value={state} onChange={handleChange} />
    </div>
  );
};

export default HomePage;
