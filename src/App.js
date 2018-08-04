import React from 'react';
import { index, create } from './api';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h1>Hello World</h1>
        {/* onClick prop に index を実行する関数を渡す */}
        {/* onClick に渡す関数のことをイベントハンドラと呼んだりします */}
        <button onClick={() => index().then(json => console.log(json))}> {/* index 関数が返した json をコンソールに表示する */}
          GET /todos
        </button>
        <button onClick={() => create('first todo', 'do it').then(json => console.log(json))}>
          POST /todos
        </button>
      </div>
    );
  }
}

export default App;
