import React, { Component } from 'react';
import {Container} from "react-bootstrap"
import { connect } from "react-redux";
import CartItem from "./CartItem";
import {EditCart,RemoveCart} from "./redux/action";

class Cart extends Component{
    constructor(props){
        super(props);
        this.state ={cart:[]};
        this.handleqty = this.handleqty.bind(this)
        this.handleremove = this.handleremove.bind(this)
    }
    handleqty(id,val){
        this.setState({cart: this.state.cart.map(el=>el.id === id ? {...el,qty:val}: {...el})})
        this.props.EditCart(id,val)
    }
    handleremove(id){
        this.setState({cart: this.state.cart.filter(el=>el.id === id ? false : true)})
        this.props.RemoveCart(id);
    }
    componentDidMount(){
        let newCart = this.props.cart.map(c=>{
            return {...this.props.products.find(p=> p.id === c.id ),qty:c.qty}
        });
        this.setState({cart:[...newCart]})
    }
    render(){
        console.log()
        return (
            <Container>
                {this.state.cart.map(c=><CartItem {...c} key={c.id} handleqty={this.handleqty} handleremove={this.handleremove}/>)}
            <div>Cart Total - <strong>₹ {this.state.cart.reduce((rd,cr)=>{return Number(cr.price)*cr.qty +rd },0)}</strong></div>
            </Container>
        )
    }
}
const mapStateToProps = (state)=>{
    const {products,cart} = state;
    return {products,cart};
  }

export default connect(mapStateToProps,{EditCart,RemoveCart})(Cart);
