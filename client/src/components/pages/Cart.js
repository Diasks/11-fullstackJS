import React, { Component } from 'react';

class Cart extends Component {

state = { 
    count: 0,
    tags: ['productOne', 'productTwo', 'productThree']
 };


renderProducts() {
    if (this.state.tags.length ===0) return <p>There are no tags!</p>;
return   <ul>
{ this.state.tags.map(tag => <li key={tag}>{tag}</li>) }
</ul>

}

handleIncrement = () => {
    console.log();
this.setState({ count: this.state.count + 1 })
};


    render() { 

        return ( 
<React.Fragment>
    <span>{this.formatCount()}</span>
    <button onClick={() => this.handleIncrement()}>Increment</button>
{this.state.tags.length === 0 && ''}
   {this.renderProducts()}
</React.Fragment>

         );
    }

formatCount() {
const { count } = this.state;    
return count === 0 ? 'Zero' : count;
}

}
 
export default Cart;