import React from "react";

import { Icon } from '@mdi/react';
import { mdiReload } from '@mdi/js';

const Home = () => {
  return (
    <div className="home_container">
      <p className="home_container--text">
        <Icon 
          path={mdiReload}
          size={2}
          color="#ff811c"
          spin={1}
        />
      </p>
    </div>
  );
};

export default Home;