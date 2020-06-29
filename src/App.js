import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './Input.js'
import List from './list.js'

class App extends Component {
  state={
    todo:[],
    isEdit:false,
    editData:"",
    editIndex:null,
    // search:"",
  }

  addDatafromInput=(data)=>{
      let todoNew=this.state.todo.slice()
      todoNew.push(data)
      
       this.setState({
         todo:todoNew
       })
  }

  filterTodos = (searchTerm) => {
    
    this.setState({
      searchTerm: searchTerm
    })
  }
  
  
  
  editDataFromList=(data,index)=>{

    this.setState({
      editData:data,
      isEdit:true,
      editIndex:index,})
    // },()=>{console.log(this.state)})
  }
  
  editFromInput=(data)=>{
  let newTodo=this.state.todo.slice()
  newTodo.splice(this.state.editIndex,1,data)

    this.setState({
      isEdit:false,
      todo:newTodo   
    })
  }

  deleteDataFromList=(data,index)=>{
    let newTodo=this.state.todo.slice()
    newTodo.splice(index, 1)
    this.setState({
      todo:newTodo
      //Why writing here is giving a problem?
    })
  }



  render(){
    let todos = this.state.todo;
    if (this.state.searchTerm && this.state.searchTerm != "") {
      todos = this.state.todo.filter(el => el.heading.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) > -1)
    }

    return (
          <div className="App" >
            
            <div className="nav-bar" ><nav  className="navbar navbar-light bg-info">
              <span  class="navbar-brand mb-0  text-white ml-3"><i class="fa fa-sticky-note-o" aria-hidden="true">
                </i> NOTES</span>
             </nav>
            <div className='container2 shadow' ></div>
          </div>

        {/* <div className="App-header">NOTES APP</div> */}

        <div className="total">

          <div className="App-sidebar">
          <Input 
            filterTodos={(data) => this.filterTodos(data)}
            getToData={(data)=>this.addDatafromInput(data)} 
            editToInput={this.state.editData} 
            editState={this.state.isEdit} 
            geteditData={(data)=>this.editFromInput(data)} />
           </div>
        
          <div className="dataList">
          <List  
          onList={todos} 
          getEditData={(data,index)=>this.editDataFromList(data,index)}
          deleteData={(data,index)=>this.deleteDataFromList(data,index)}/>
          </div>
        </div>
       
      
      </div>
    );
  }
  
}

export default App;
