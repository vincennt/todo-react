import React from 'react'

class Form extends React.Component{
        constructor(){
            super()
            this.state = {
                task: "",
                
            }
            this.handleTaskDescriptionChange = this.handleTaskDescriptionChange.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this)
        }
       
        handleTaskDescriptionChange(e){

            this.setState({ task: e.target.value})
            
        }
        handleSubmit(e){
            e.preventDefault()
            this.props.addTask(this.state.task)
            this.setState({task : ""})
            

        }

            render(){
            return(<div> <form onSubmit={this.handleSubmit} className=" mt-5 d-flex justify-content-center gap-3">
                <input value={this.state.task} onChange={this.handleTaskDescriptionChange}   type="text" className=" border border-dark rounded-pill form-control-plaintext h-25 w-25"
                aria-label="Sizing example input" placeholder="Task"/>
            <button type="submit" className=" h-50 btn btn-primary mb-3">Add list</button>
            </form></div>)
            }
        
    }

    

export default Form