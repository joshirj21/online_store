import React, { Component } from 'react';
import { connect } from "react-redux";
import {SeedData} from "./redux/action"
import {Container} from "react-bootstrap"
import Product from "./Product"

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
  async componentDidMount(){
      if(!this.props.products.length){
        this.props.SeedData();
      }
    }
      render(){
        const {products} = this.props;
        console.log(products)
      return (
        <>        
        <Container>
          {products ? products.map(v=><Product img={v.url} name={v.name} ratings={v.rating} price={v.price} key={v.id} id={v.id}/>): null}
        </Container>
        </>
      );
    }
}

const mapStateToProps = (state)=>{
  const {products} = state;
  return {products};
}

export default connect(mapStateToProps,{SeedData})(Home);