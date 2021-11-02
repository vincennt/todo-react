import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/form.js'
import './App.css'


class App extends React.Component{
  
  constructor() {
    super()
    this.state = {
      tasks: [],
      
    }
    this.addTask = this.addTask.bind(this)
    }
    addTask(str){ 
      this.setState(tasks = str)
      console.log(str);
      }
    
  render(){
    return(
    <Form addtask={this.addTask(this.props.task)} />
    )
  }
}

export default App
