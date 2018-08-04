import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  render() {
    return (
      <div>
        <h3>Todo List</h3>
        <table>
          <thead>
            <tr>
              <th>タイトル</th>
              <th>テキスト</th>
              <th>作成日時</th>
            </tr>
          </thead>
          <tbody>
            {this.props.todos.map(todo => (
              <TodoItem
                id={todo.id}
                title={todo.title}
                text={todo.text}
                created_at={todo.created_at}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TodoList;