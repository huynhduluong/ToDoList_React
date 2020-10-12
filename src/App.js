import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Header from "./components/layout/Header";
import ToDo from "./components/ToDo";
import { v4 as uuidv4 } from "uuid";
import About from "./components/pages/About";

class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "Take out the trash",
        completed: false,
      },
      {
        id: uuidv4(),
        title: "Dinner with friend",
        completed: false,
      },
      {
        id: uuidv4(),
        title: "Meeting with boss",
        completed: false,
      },
    ],
  };

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  deleteTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <Router>
        <div>
          <div className="container">
            <Header />
            <Route
              exact path="/"
              render={(props) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <ToDo
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    deleteTodo={this.deleteTodo}
                  />
                </React.Fragment>
              )}
            />

            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
