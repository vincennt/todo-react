import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/form.js'
import './App.css'
import './components/List'
import List from "./components/List";


class App extends React.Component{
  
  constructor() {
    super()
    this.state = {
      tasks: [],
      
    }
    this.addTask = this.addTask.bind(this)
    }
    addTask(str){ 
      this.setState({tasks: [{description: str, status: "To do"}, ...this.state.tasks] })
      
      }
  
  render(){
    return(<>

    <Form addTask={this.addTask} />
    <List tasks={this.state.tasks} />
    </>
    )
  }
}

export default App
