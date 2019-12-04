import React, { Component } from 'react';

import { CloudflareImage } from './reactComponentLib';

class App extends Component {
  render() {
    return (
      <div>
        <CloudflareImage src="images/test.png" />
      </div>
    );
  }
}

export default App;
