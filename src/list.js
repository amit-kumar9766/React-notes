import React,{Component} from 'react';
import App from "./App";

class List extends Component{
    constructor(props){
        super(props);
        // this.state={
        //     title:"",
        //     date:"",
        // }
    }

    render(){
        console.log(" from wrapper",this.props.onList)
   
        // let newList=this.props.onList.filter((elm,index)=>elm.title.includes (elm.search))
        //  console.log(newList)
        return (
            

             <>   
            { 
            this.props.onList.map((elm,index)=>{
             return( 
            // <li key={index} className="renderList">
            // <div className="notes">

            //     {elm.date}{elm.heading} {elm.title}  
            // </div>
            // <div className="editDelete">

            //    <span i class="fa fa-edit"  onClick={()=>this.props.getEditData(elm,index)}></span>
            //    <span i class="fa fa-trash" onClick={()=>this.props.deleteData(elm,index)}></span>
            // </div>

            // </li> 
                <div className="card text-white bg-dark mb-3" style={{width: "60rem"}}>
                    <div class="card-header"><h5>{elm.heading}</h5></div>
                    <div class="card-header">{elm.date}</div>
                    <div class="card-body">
                    <p class="card-text"> {elm.title}</p>
    
                    <span i class="fa fa-edit"  onClick={()=>this.props.getEditData(elm,index)}></span>
                    <span i class="fa fa-trash" onClick={()=>this.props.deleteData(elm,index)}></span>
            
                </div>
            </div>
            
            )}
            
            )}




             
          </>
            

           
        )
    }
    
}

export default List;
