import React from 'react';
import './App.css';

const ListItem = ({ value, onClick }) => (
    <li onClick={onClick}>{value}</li>
);

const List = ({ items, onItemClick }) => (
  <ul>{items.map((item, i) => <ListItem key={i} value={item} onClick={onItemClick} />)}</ul>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      phonebook: []
    };
  }
  onClick = () => {
    const { inputValue, phonebook } = this.state;
    if (inputValue) {
      const nextState = [...phonebook, inputValue];
      this.setState({ phonebook: nextState, inputValue: '' });
    }
  }
  onChange = (e) => this.setState({ inputValue: e.target.value });
  handleItemClick = (e) => {console.log(e.target.innerHTML)}
  render() {
    const { phonebook, inputValue } = this.state;
    return (
      <div className="container">
        <div className="wrapper">
          <div className="input">
            <input type="text" value={inputValue} onChange={this.onChange} />
            <button className="btn" onClick={this.onClick}>Add</button>
          </div>
          <div className="addressbook">
            <List items={phonebook} onItemClick={this.handleItemClick} />
          </div>
        </div>
      </div>
    );
  }
}
export default App;

