import React from 'react';
import { destroy } from '../api';

class TodoItem extends React.Component {
  render() {
    // this.props から TodoItem に渡ってきた Props を取り出す
    const id = this.props.id;
    const title = this.props.title;
    const text = this.props.text;
    const created_at = this.props.created_at;
    const todosUpdater = this.props.todosUpdater;
    return (
      <tr>
        {/* `{...}` で JSX 内に変数を展開する */}
        <td>{title}</td>
        <td>{text}</td>
        <td>{created_at}</td>
        <td>
          <button onClick={() => destroy(id).then(() => todosUpdater())}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default TodoItem;