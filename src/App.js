import React from 'react';
import { index, create, destroy } from './api';

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
        <button
          onClick={() => destroy('5d057940-c4cc-48f7-aa6b-f7a508b9f9d4').then(json => console.log(json))}
        >
          DELETE /todos
        </button>
      </div>
    );
  }
}

export default App;
