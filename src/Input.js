import App from "./App";
import React , {Component} from 'react';


class Input extends Component{
    constructor(props){
        super(props);
        this.state={
            title:"" ,
            date:"" ,
            search:"",
            heading:"",
          }
    }

    

changeTitle=(event)=>{
    this.setState({
        title:event.target.value,
        
       })
}
changeDate=(event)=>{
    this.setState({
        date:event.target.value,
    })

}
changeHeading=(event)=>{
    this.setState({
       heading:event.target.value,
    })

}

sendToWrapper=()=>{this.props.getToData(this.state);}

changeSearch=(event)=>{
    this.setState({
        search:event.target.value
    })
    this.props.filterTodos(event.target.value)
}


componentDidUpdate=(prevProps,prevState)=>{
    if (prevProps.editToInput!=this.props.editToInput)
    this.setState({
        title:this.props.editToInput.title,
        date:this.props.editToInput.date
    })
}

    render(){
        console.log("Input Rendering",this.state)
        return (
            
            <div>
                

                <div className="search">
                <input class="form-control mr-sm-2" type="text" value={this.state.search}  
                onChange={(event)=>this.changeSearch(event)} type="text" placeholder="Search"/>
               {/* <button class="btn btn-success" type="submit">Search</button> */}
               </div>

            
            <div className="inputDiv">
                <input class="form-control mr-sm-2" type="text"  value={this.state.heading} onChange={(event)=>this.changeHeading(event)}
                placeholder=" Input your Heading here"></input>

                <input class="form-control mr-sm-2" type="date"  aria-hidden="true"
                value={this.state.date}  onChange={(event)=>this.changeDate(event)}></input>

                <input class="form-control mr-sm-2" type="text" value={this.state.title} onChange={(event)=>this.changeTitle(event)}
                placeholder="Input your Notes here"></input>

                

                

                {/* <input type="text" value={this.state.search}  onChange={(event)=>this.changeSearch(event)}
                placeholder="Search"></input> */}
              
              

               


                {!this.props.editState?<button class="btn btn-success" type="submit" onClick={()=>this.sendToWrapper()}>Save</button>:
                 <button class="btn btn-success" type="submit" onClick={()=>this.props.geteditData(this.state)}>Edit</button> }
                      

            
            </div>
        </div>
        )
    }
}

export default Input
