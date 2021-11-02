import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/form.js'

class App extends React.Component{
  
  constructor() {
    super()
    this.state = {
        placeHolder : "hello"
    }
  
  }
  render(){
    return(<>
    <Form/>
    </>)
  }
}

export default App
