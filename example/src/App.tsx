import React, { Component } from 'react';

import { CloudflareImage } from './reactComponentLib';

class App extends Component {
  render() {
    return (
      <div>
        <CloudflareImage
          src="images/test.png"
          cloudflareParameters={{
            fit: 'auto',
            width: 40,
            height: 40,
          }}
        />
      </div>
    );
  }
}

export default App;
