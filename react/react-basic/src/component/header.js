 import React,{ Component } from 'react';
 import '../css/style.css';

 class Header extends Component {

    state = {
        keywords:'',
        // active:'active'
    }

    inputChangeHandler = (event) => {
        // const value = event.target.value === '' ? 'active' : 'non-active';
        this.setState({
            // active:value,
            keywords:event.target.value
        })
    }

     render(){
        
        // const style = {
        //     background:'red'
        // }

        // if(this.state.keywords !== ''){
        //     style.background = 'blue'
        // } else {
        //     style.background = 'red'
        // }

         return (
            // <header className={this.state.active}>
             <header>
                 <div className="logo" onClick={ ()=> {console.log('I was clicked')}}>Logo</div>
                 <input type="text" onChange={this.inputChangeHandler} />
             </header>
         )
     }
 }
 export default Header;
  