import React, { Component } from 'react';
import Title from './components/Title'
import User from './components/User'
import './index.css';
import Select from './components/Select'
import Ckeckbox from './components/Checkbox'
import Textarea from './components/Textarea'
import ModalForm from './components/ModalForm'

class App extends Component {
    state = {
      inputName: 'sdadas',
      inputEmail: '',
      phone: '',
      name: 'selectTag',
      value: '100px',
      checked: false,
      placeholder: 'some content',
      bgColor: '',
      color: '',
      content: '',
      open: false,
      searchValue: '',
      searchResult: [],
      searchedUser: [],
      noResult: false,
      users : [ 
      {   
          name: { 
            first: "Sue",
            last: "Camacho"
          },
          about: "Reprehenderit tempor magna ea non exercitation ea aliqua labore. Et laboris officia irure exercitation esse nostrud ullamco dolore ullamco. Pariatur aute nulla officia tempor cillum aliquip et mollit. Esse cillum deserunt laboris quis adipisicing minim fugiat ullamco cupidatat velit ea qui. Nulla minim duis veniam occaecat laboris ea cillum. Amet officia est exercitation laboris irure nulla id reprehenderit non velit.",
          picture: "http://placehold.it/32x32",
          isRegistered: false,
          email: "sue.camacho@newcube.org",     
          phone: "+1 (955) 543-3667",     
          tags: ["irure", "exercitation", "non", "excepteur","enim"]
      },
      { 
          name: {first: "Zac",  last: "Zacovic" },
          about: "Reprehenderit tempor magna ea non exercitation ea aliqua labore. Et laboris officia irure exercitation esse nostrud ullamco dolore ullamco. Pariatur aute nulla officia tempor cillum aliquip et mollit. Esse cillum deserunt laboris quis adipisicing minim fugiat ullamco cupidatat velit ea qui. Nulla minim duis veniam occaecat laboris ea cillum. Amet officia est exercitation laboris irure nulla id reprehenderit non velit.",     
          picture: "http://placehold.it/32x32",
          isRegistered: true,    
          email: "zac.zacovic@newcube.org",
          phone: "+1 (955) 512-3123", 
          tags: [ "irure", "non", "excepteur", "enim"],  
      },
      { 
          name: { first: "Ludi", last: "Milojko" },
          about: "Reprehenderit tempor magna ea non exercitation ea aliqua labore. Et laboris officia irure exercitation esse nostrud ullamco dolore ullamco. Pariatur aute nulla officia tempor cillum aliquip et mollit. Esse cillum deserunt laboris quis adipisicing minim fugiat ullamco cupidatat velit ea qui. Nulla minim duis veniam occaecat laboris ea cillum. Amet officia est exercitation laboris irure nulla id reprehenderit non velit.", 
          picture: "http://placehold.it/32x32",
          isRegistered: false,     
          email: "ludi.milojko@newcube.org", 
          phone: "+1 (955) 123-45678",     
          tags: [ "irure",  "exercitation", "excepteur" ],
      },   
      { 
          name: {       first: "Sundjer", last: "Boba"},
          about: "Reprehenderit tempor magna ea non exercitation ea aliqua labore. Et laboris officia irure exercitation esse nostrud ullamco dolore ullamco. Pariatur aute nulla officia tempor cillum aliquip et mollit. Esse cillum deserunt laboris quis adipisicing minim fugiat ullamco cupidatat velit ea qui. Nulla minim duis veniam occaecat laboris ea cillum. Amet officia est exercitation laboris irure nulla id reprehenderit non velit.",     
          picture: "http://placehold.it/32x32",     
          isRegistered: false,     
          email: "sundjer.boba@newcube.org",     
          phone: "+1 (955) 123-987654",     
          tags: ["exercitation", "non", "excepteur", "enim"],   
      },   
      { 
          name: { first: "Master",  last: "Yoda" },     
          about: "Reprehenderit tempor magna ea non exercitation ea aliqua labore. Et laboris officia irure exercitation esse nostrud ullamco dolore ullamco. Pariatur aute nulla officia tempor cillum aliquip et mollit. Esse cillum deserunt laboris quis adipisicing minim fugiat ullamco cupidatat velit ea qui. Nulla minim duis veniam occaecat laboris ea cillum. Amet officia est exercitation laboris irure nulla id reprehenderit non velit.",     
          picture: "http://placehold.it/32x32",     
          isRegistered: true,     
          email: "master.yoda@newcube.org",     
          phone: "+1 (955) 543-3667",     
          tags: ["irure", "exercitation", "excepteur", "enim"],
      }
           ] 
          
    }

    handleChange = (event, text) => {
      const { value  } = event.target;
      console.log(text)
      this.setState({
        [text]: value
        
      });
      // console.log([text], value)
      // var names = new Set();
      // names.add('Mira').add('Stojko').add('Dzoni');
      // console.log(names)
      // var a = {
      //   ['foo' + ++i]: i,
      //   ['foo' + ++i]: i,
      //   ['foo' + ++i]: i
      // };

      // console.log(a.foo1); // 1
      // console.log(a.foo2); // 2
      // console.log(a.foo3); // 3

      // var param = 'size';
      // var config = {
      //   [param]: 12,
      //   ['mobile' + param.charAt(0).toUpperCase() + param.slice(1)]: 4
      // };

      // console.log(config); 
    }
  
    handleFormSubmit = (event) => {
      const { value, checked, content } = this.state
      this.setState({ open: !this.state.open })
      const classes = this.state.open ? 'show-hide' : 'hide';
      event.preventDefault();
    }

    handleClick = () => {
      this.setState({
        value: 'MIRA'
      })
    }
    controlFunc = (e) => {
      this.setState({
        value: e.target.value
      })
    }
    onChecked = (e) => {
      const { checked } = this.state;
      console.log(e.target.value);
      this.setState({
         checked: !checked
      })
      
     
    }
    handleTextArea = (e) => {
      this.setState({
        placeholder: 'typing inside',
        bgColor: "black",
        color: 'white',
        content: e.target.value
      })
    }

    handleSearch = (e) => {
      const value = e.target.value;

      const searchedUsers = this.state.users.filter(userObject => {

        const firstName = userObject.name.first.toLowerCase();
        const lastName =  userObject.name.last.toLowerCase();
        const fullName = firstName + ' ' + lastName;

        if (fullName.search(value.toLowerCase()) !== -1) {
          return userObject
        }
      })
      
      this.setState({
        searchValue: value,
        searchResult: searchedUsers
      })
    }

    render() {
      const {first, last, users, inputName, inputEmail, phone, name, value, placeholder, checked, content, bgColor, color, searchValue, searchResult}= this.state;
      
      const classes = this.state.open ? 'show-hide' : 'show-hide hide';

      const noResult = searchValue.length > 0 && searchResult.length === 0
      const userList = searchResult.length === 0 ? users : searchResult

      console.log(noResult, 'NO RESULT')

      const renderUserList = userList.map((user, index) => (
        <User key={index} user={user}  />
      ))

      return (
        <div className="App">

        <form className="container" onSubmit={this.handleFormSubmit}>

          <h5>My form</h5>
          <Select name={name} selectedOption={value} placeholder={placeholder} options={['20px', '30px', '50px']} controlFunc={this.controlFunc}/>
          <div style={{backgroundColor: 'red', width: value, height: value}}>

          </div>
          <Ckeckbox checked={checked} onKlik={(e) => this.onChecked(e)}/>
          <Textarea nameta='textarea name' rows='4' onTextArea={(e) =>this.handleTextArea(e)} placeholder={placeholder} bgColor={bgColor} color={color} content={content}/>
          <button type='submit' className="show-hide-btn">Submit form</button>
        
        </form>
        <Title title="Search" />
        <input value={searchValue} onChange={this.handleSearch} />
        <ModalForm className={classes} selected={value} check={checked} textarea={content}/>
          <Title title={content} />
          <div className="listed-user">
          
            {
              noResult ? <h1>NO RESULTS</h1> : renderUserList 
            }
          </div>
          <Title title="Controlled components" />
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" value={inputName} onChange={(e) => this.handleChange(e, 'inputName')} />
            </label>
            <label>
              Email:
              <input type="text" value={inputEmail} onChange={(e) => this.handleChange(e, 'inputEmail')} />
            </label>
            <input type="text" value={phone} onChange={(e) => this.handleChange(e, 'phone')}/>
            {/* <button onClick={this.handleClick}>CHANGE INPUT VALUE</button> */}
            <input type="submit" value="Submit" />
          </form>
         
        </div>
      );
  }
}

export default App;
