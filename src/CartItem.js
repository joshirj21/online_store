import React from 'react';
import {Button} from "react-bootstrap"

class CartItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {val:this.props.qty};
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    handleChange(e){
        if(e.target.value >= 0)
        this.setState({val:Number(e.target.value)},()=>this.props.handleqty(this.props.id,this.state.val))
    }
    handleClick(evt){
        if(evt.target.textContent === '+') 
            this.setState({val:this.state.val+1},()=>this.props.handleqty(this.props.id,this.state.val));
        else if(evt.target.textContent === '-') 
            {if(this.state.val === 1)
            this.setState({val:this.state.val -1},()=>this.props.handleremove(this.props.id))
            else
            this.setState({val:this.state.val-1},()=>this.props.handleqty(this.props.id,this.state.val));
            }
    }
    render(){
        const {id,name,price,url,handleremove} = this.props;
        return (
            <div className="row justify-content-start align-items-start my-3">
                <img src={url} alt={name} style={{width:"244px",height:"218px",display:"block"}}/>
                <div>
                     <p></p><strong>{name}</strong><p/>
                     <p>₹{price}</p>
                     <div>
                        <button onClick={this.handleClick}>+</button>   
                        <input  style={{width:"1rem"}} onChange={this.handleChange} value={this.state.val} type="text"/>
                        <button onClick={this.handleClick}>-</button>
                    </div>
                     <Button variant="danger" onClick={()=>handleremove(id)}>Delete</Button>
                 </div>
            </div>
        )
    }
}

export default CartItem;