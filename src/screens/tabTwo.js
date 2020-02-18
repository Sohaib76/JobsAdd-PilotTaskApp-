import React, {Component} from 'react';
import {Platform, StyleSheet, View,ScrollView } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body ,List, ActivityIndicator, ListItem,} from 'native-base';
import JobsAddedCard from '../components/jobsAddedCard'



export default class Tab2 extends Component{
  constructor(props) {
    super(props)
    this.state = {
      loadingItems: false,
     


    };



   
  }


  
 





  render() {

   
    var jobsListTomorrow = this.props.jobsListTomorrow
    if(jobsListTomorrow){
      var addedJobs = Object.values(jobsListTomorrow).map((anObjectMapped, index) => {
        return (
            <JobsAddedCard key={`${anObjectMapped.time}`} text={anObjectMapped.text} time = {anObjectMapped.time} year = {anObjectMapped.year} month = {anObjectMapped.month} date = {anObjectMapped.date}/>
          
        );
     })
    }
  
   
  




    return (
      <ScrollView  style={{backgroundColor:"#e8e8e8", flex:1}}>
        
        {addedJobs}
        
    
         
      </ScrollView>
      
    
    


    );
  }
}

