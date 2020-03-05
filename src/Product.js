import React, { Component } from 'react';
import {Button} from "react-bootstrap"
import { connect } from "react-redux";
import {AddCart} from "./redux/action";

class Product extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    ratings(stars){
        switch(stars){
            case 1:
                return "⭐️";
            case 2:
                return "⭐️⭐️";
            case 3:
                return "⭐️⭐️⭐️"
            case 4:
                return "⭐️⭐️⭐️⭐️"
            case 5:
                return "⭐️⭐️⭐️⭐️⭐️"
            default:
                return "⭐️⭐️⭐️⭐️"            
        }
    }
    render(){
        const {img,name,ratings,price,AddCart,id} = this.props;
        return(
            <>
             <div className="row justify-content-start align-items-start my-3">
                 <img src={img} alt={name} style={{width:"244px",height:"218px",display:"block"}}/>
                 <div className="">
                    <p></p><strong>{name}</strong><p/>
                    <p>Rating - {this.ratings(ratings)}</p>
                    <p>₹{price}</p>
                    <Button  onClick={()=> AddCart(id)} variant="primary mr-2"><i class="fas fa-cart-plus"></i></Button>
                    <Button variant="danger"><i class="far fa-heart"></i></Button>
                 </div>
             </div>
             <hr/>
            </>
        )
    }
}

export default connect(null,{AddCart})(Product);