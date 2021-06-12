import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Carousel from "./components/carousel";
import Card from "./components/card";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { Component } from "react";
import Cards from "./components/Cards";
import Test from "./components/test";
import CustomerList from "./components/CustomerList";
import Posts from "./components/Posts";
import { BrowserRouter ,HashRouter , Switch, Route } from "react-router-dom";
import SCBTemplate from "./components/SCBTemplate";
import CustList from "./components/CustList";
import MediaCard from './components/Model'
import CustomerDetail from "./components/CustomerDetail";
import FirstTable from "./components/FirstTable";
import Tabs from "./components/Tabs";
import EmployeeList from './components/EmployeeList';
import UpdateEmployee from "./components/UpdateEmployee";

function App() {
  //JSX (Java Script Extension)

  return (
    <div class="container-fluid">      
       <BrowserRouter>  
       <Header/>     
        <Switch>
          <Route exact path="/" component={SCBTemplate} />
          <Route exact path="/getEmps" component={EmployeeList}/>
          <Route exact path="/updateEmployee/:id" component={UpdateEmployee}/>
          <Route exact path="/customers" component={CustomerList} />
          <Route exact path="/cards" component={Tabs} />
          <Route exact path="/first" component={FirstTable} />
          <Route exact path="/customers/:id/:name" component={CustomerDetail} />
         </Switch>
      </BrowserRouter> 
    </div> 
  );
}

export default App;
