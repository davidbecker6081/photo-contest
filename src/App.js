import React from 'react';
import './App.css';
import Selection from './Selection';

const photoUrls = () => {
  let names = []
  for (let i = 1; i < 48; i++) {
    names.push(`field-day-tv-${i}.jpg`)
  }
  return names
}


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selections: []
    }
  }
  render() {
    return (
      <div className="App">
        {
          photoUrls().map(url => <Selection
            key={url}
            disabled={this.state.selections.length === 3}
            onSelect={() => this.setState({ selections: [...this.state.selections, url]})}
            src={url}
            selected={this.state.selections.find(s => s === url)}
          />)
        }

        <button onClick={() => console.log('voted')}>Vote!</button>
      </div>
    );
  }
}

export default App;
