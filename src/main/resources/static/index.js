//import React from 'react';
//import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App.js';
//import registerServiceWorker from './registerServiceWorker';
//import FeaturePost from './FeaturePost.js';

function updateState(loggedIn) {
    this.setState({loggedIn})
}


class Global extends React.Component{
    constructor(props){
        super(props)
    }
    updateAll(loggedIn){
        updateState(loggedIn)
    }

}

    
class App extends React.Component {

  render() {
    return (
        <div className="App">
            <header className="App-header">
        
                <div className="row"> 
                    <div className="column-left-App-logo">
                        <img src={"goldlogo2.svg"} height="100%"/>
                   </div>
                <div className ="column-middle-App-titles">  
                    <h1 className="App-title">YourCash App</h1>
                    <h3 className="App-subtitle">"Does thou even hoist your cash?"</h3>
                </div>
      
                    <div className="column-right">
                        <LoginForm/>
                    </div>
                </div>
        </header>
        <h3 className="App-intro">Let us help you track your expenses!</h3>
        <p>Carpe diem lol Carpe diem lol Carpe diem lol Carpe diem lol Carpe diem lol Carpe diem lol Carpe diem lol Carpe diem lol Carpe diem lol Carpe </p>
        
               
        
      </div>
    );
  }
}






class Welcome extends React.Component{


    render(){
        return <h1>Lift the cash, {this.props.name}!</h1>
    }
}

function getCurrentUsername() {


    let un = null;
    var Url = '//localhost:8080/current/username';
    $.ajax({
        async: false,
        url: Url,
        type: "GET",
        success: function(response){
            //console.log(response)
            //if(response == null)
            //  alert("Please Log in");
            un = response;
            //<Welcome name={b}/>
        },
        error: function (error) {
            console.log('Error ${error}')

        }

    })

    return un;
}

function getCurrentUser() {

    let b = null;
        var Url = '//localhost:8080/current';
        $.ajax({
            async: false,
            url: Url,
            type: "GET",
            success: function(response){
                //console.log(response)
                //if(response == null)
                  //  alert("Please Log in");
                b = response;
                //<Welcome name={b}/>
            },
            error: function (error) {
                console.log('Error ${error}')

            }

        })

    return b;
}

class AppUser extends React.Component {

  render() {

    return (
            
        <div className="App">
            <header className="App-header">
        
                <div className="row"> 
                    <div className="column-left-App-logo">
                        <img src={"goldlogo2.svg"} height="100%"/>
                   </div>
                <div className ="column-middle-App-titles">  
                    <Welcome name={getCurrentUser()} />
                </div>
      
                <div className="column-right">
                    <form>
                    <div>
                    <button className="Button-Logout">LOG OUT!!!!</button>
                        </div>
                    </form>
                </div>
                </div>
        </header>
        <p></p>
        
               
        
      </div>
    
    );
  }
}



class FeaturePost extends React.Component{
    render(){
      return(
        <div className="Post-feature">
            <header className="Post-feature-header">
                <h1 className="FeaturePost-title">Why</h1>
                  <p className="Post-content">
                    If you need further convincing than the crocodile, here are the features that may sway your mind:
                  </p>
                <h3>Categories:</h3>
                  <p>
                    Support for categories exists so you can track cost from different parts of your life.
                  </p>
                <h3>Budget:</h3>
                  <p>
                    Set a budget for yourself! Though, it's up to you to keep the budget...
                  </p>
            </header>
        
        
            <h2 className="FeaturePost-register">Intrigued? Register below!</h2>
            <header className="FeaturePost-header">
            <div className="Post-feature-center">
            <header className="Post-feature-header">
       
                      <Page></Page>
              </header>
            </div>
            </header>
        </div>
      
      );
    }
    
  }
 
 class UserExpense extends React.Component{
    render(){
      return(
            <div className="Post-feature-center">
            <header className="Post-feature-header">
       
                      <Page2></Page2>
              </header>
            </div>
      
      );
    }
    
  }
 
 
 class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password:""};

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsername(event) {
    this.setState({username: event.target.value});
  }
  
  handlePassword(event) { 
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
      let auth = false;
      let Url = '//localhost:8080/login/';
      Url = (Url + this.state.username +'/' + this.state.password);
      $.ajax({
          async: false,
          url: Url,
          type: "GET",
          success: function(response){
              console.log(response);
              auth = response;

          },
          error: function (error) {
              console.log('Error ${error}')

          }

      })
      if(auth){
          //Global.loggedIn = true;

          updateState(true);
          Global.loggedIn=true;
          getProducts();
          //<FlowControl/>
          //return <FlowControl />
      }
      console.log(Global.loggedIn)



    //alert('Your favorite username is: ' + this.state.username + " your favorite password is:" + this.state.password);
    event.preventDefault();
  }

  render() {
    return (

      <form onSubmit={this.handleSubmit}>
          Login<br></br>
          <input type="text" onChange={this.handleUsername} placeholder="Username" />
        <br></br>
        Password:<br></br>
          <input type="password" placeholder="Password" onChange={this.handlePassword}/>
          <br></br>
          <input className="smallbutton" type="submit" value="Submit" />
      </form>

    );
  }
}

 class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
      this.state = {username: "", name:"", password:""};

    this.handleUsername = this.handleUsername.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsername(event) {
    this.setState({username: event.target.value});
  }

  handleName(event) {
         this.setState({name: event.target.value});
  }
  
  handlePassword(event) { 
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
      let register = false;
      let Url = '//localhost:8080/register'
      let user = {
          username: this.state.username,
          name: this.state.name,
          password: this.state.password
      };
      //Url = (Url + this.state.username +'/' + this.state.password)
      $.ajax({
          async: false,
          url: Url,
          type: "POST",
          data: JSON.stringify(user),
          dataType: 'json',
          contentType: "application/json; charset=utf-8",
          success: function(response){
              console.log(response);
              register = response;

          },
          error: function (error) {
              console.log('Error ${error}')

          }

      })
      if(register){
          //ReactDOM.render(<AppUser/>);
          updateState(true);
          Global.loggedIn=true;
          alert("Successful Reg!");
      }
      else{
          alert("Reg Failed");
      }

      alert('Your wanted username is: ' + this.state.username + " your wanted password is:" + this.state.password);
      alert('Hello, ' + this.state.name + ': Your wanted username is: ' + this.state.username + " your wanted password is:" + this.state.password);
      event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          Username <br></br>
        <input type="text" onChange={this.handleUsername} />
        <br></br>

          Display name<br></br>
          <input type="text" onChange={this.handleName} />
          <br></br>
        Password:<br></br>
          <input type="password" onChange={this.handlePassword}/>
          <br></br>
          <input className="smallbutton" type="submit" value="Submit" />
      </form>
    );
  }
}
 
 
 class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'OTHER', cost: 0, description: "Expense", time:"03/17/2019"};

    this.handleChange = this.handleChange.bind(this);
    this.handleCost = this.handleCost.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleTime = this.handleTime.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
  
    handleCost(event){
        this.setState({cost: event.target.value});
    }

    handleDescription(event){
      this.setState({description: event.target.value});
    }
     handleTime(event){
         this.setState({time: event.target.value});
     }


  handleSubmit(event) {

      let Url = '//localhost:8080/expenses'
      let expense = {
          appuser: getCurrentUsername(),
          cost: this.state.cost,
          category: this.state.value,
          time: this.state.time,
          description: this.state.description
      };
      $.ajax({
          async: false,
          url: Url,
          type: "POST",
          data: JSON.stringify(expense),
          dataType: 'json',
          contentType: "application/json; charset=utf-8",
          success: function(response){
              console.log(response);
              //register = response;


          },
          error: function (error) {
              console.log('Error ${error}')

          }

      })
      getProducts();

    //alert('Your favorite expense is: ' + this.state.value + ' And dollars: ' + this.state.cost);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite Expense:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="OTHER">Other</option>
            <option value="RENT">Rent</option>
            <option value="TRANSPORTATION">Transportation</option>
            <option value="FOOD">Food</option>
            <option value="ENTERTAINMENT">Entertainment</option>
            <option value="TRAVEL">Travel</option>
            <option value="INSURANCE">Insurance</option>
          
          </select>
        </label>
          <label>
              Cost:
              <input type="number" onChange={this.handleCost} />
          </label>
          <label>
              Description:
              <input type="text" onChange={this.handleDescription} />
          </label>
          <label>
              Date:
              <input type="text" onChange={this.handleTime} />
          </label>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}
  
  
  
  

class RegisterControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleRegisterClick = this.handleRegisterClick.bind(this);
    this.state = {wantsToRegister: false};
  }

  handleRegisterClick() {
      console.log("sdg")
    this.setState({wantsToRegister: true});
  }

  render() {
    const wantsToRegister = this.state.wantsToRegister;
    let button;
    
    if (wantsToRegister) {
      button = <RegButton onClick={this.handleRegisterClick} />;
      
    }

    return (
      <div>
        <Greeting wantsToRegister={wantsToRegister} />
        {button}
      </div>
    );
  }
}
  
  
class RegisterButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
      WarningBanner(true);
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}
 
 
 
 
 
 
 //tableclass with features for sorting 
 
 class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const description = product.stocked ?
      product.description :
        product.description
      

    return (
      <tr>
        <td>{description}</td>
        <td>{product.cost}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    const filterText = this.props.filterText;
    

    const rows = [];
    let lastCategory = null;

    this.props.products.forEach((product) => {
      if (product.description.indexOf(filterText) === -1) {
        return;
      }
      
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.description}
        />
      );
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }
  
  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }
  
  
  
  render() {
    return (
  
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
        <p>
          
        </p>
      </form>
    );
  }
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
    };
    
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }
  
  

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
        />
      </div>
    );
  }
}

//this is temp untill we get backend input
/*
const PRODUCTS = [
  {category: 'Sporting Goods', cost: '$49.99', stocked: true, description: 'Football', time: "123"},

];*/
var PRODUCTS;

function getProducts() {

    //let Url = '//localhost:8080/expenses/findbyuser/2username2';
    let Url = '//localhost:8080/expenses/findbyuser/'+getCurrentUsername();
    console.log(Url)
    $.ajax({
        async: false,
        url: Url,
        type: "GET",
        success: function(response){
            console.log(response)
            PRODUCTS = response
            //return response;
        },
        error: function (error) {
            console.log('Error ${error}')
        }

    })

}

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return (
      <div>
          
        <button className="button" onClick={this.handleToggleClick}>
        {this.state.showWarning ? "Click me to Register" : "Nevermind i dont want to"}
                
        </button>
        
        {this.state.showWarning ? <div></div> : <FeatureRegister/>} 
      </div>
      
    );
  }
}
 
 class Page2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return (
            <div>
      <div>
        
        <button className="button" onClick={this.handleToggleClick}>
        {this.state.showWarning ? "Add another expense" : "Regret in heaven"}
                
        </button>
        {this.state.showWarning ? <div></div> : <ExpenseForm/>} 
      </div>
                <h1>Current expenses</h1>
      <FilterableProductTable products={PRODUCTS} />
              </div>
    );
  }
}

class FlowControl extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loggedIn: false
        }
        updateState = updateState.bind(this)
    }


    render(){

        if(this.state.loggedIn){
            return <div><AppUser />;
                <UserExpense/> </div> ;
        }else{
            return <div><App />;
                <FeaturePost /> </div>;
        }
    }
}

  class FeatureRegister extends React.Component{
    render(){
      return(
        <div className="Post-feature">
            <RegisterForm/>
        </div>
      
      );
    }
    
  }
  
ReactDOM.render(
    <div>

       <FlowControl />
        {console.log("Working")}
    </div>, 
    document.getElementById('root'));

ReactDOM.render(
  <NameForm />,
  document.getElementById('root')
);



