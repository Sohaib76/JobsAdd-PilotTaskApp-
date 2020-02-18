import React, {Component} from 'react';
import {Platform, StyleSheet, View,ScrollView } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body ,List, ActivityIndicator, ListItem,} from 'native-base';
import JobsAddedCard from '../components/jobsAddedCard'



export default class Tab1 extends Component{
  constructor(props) {
    super(props)
    this.state = {
      loadingItems: false,
      // jobsList: [],



    };


    // this.reRenderSomething = ('willFocus', () => {

    //     this.loadingItems()
    //     alert(this.state.jobsList)
    //     alert("xasa")

    // });



   
  }


  
  // loadingItems = async () => {
  //   try {
  //     const allItems = await AsyncStorage.getItem('Jobs');
  //     this.setState({
  //       jobsList: JSON.parse(allItems) || {}
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };




  // componentDidMount = () => {
  //   alert("Tab1")
  //   // this.loadingItems();
  // };



































  // loadingItems = async () => {
  //   try {
  //     const allItems = await AsyncStorage.getItem('Jobs');
  //     this.setState({
  //       loadingItems: true,
  //       allItems: JSON.parse(allItems) || {}
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };


  // onDoneAddItem = () => {
  //   // const { inputValue } = this.state;
  //   var text = "this.props.text"
  //   var date = "this.props.date"
  //   if (text !== "" && date) {
  //     this.setState(prevState => {
  //       const id = uuid();
  //       const newItemObject = {
  //         [id]: {
  //           id,
  //           date: date,
  //           text: text,
  //           time: Date.now()
  //         }
  //       };
  //       const newState = {
  //         ...prevState,
  //         // inputValue: '',
  //         allItems: {
  //           ...prevState.allItems,
  //           ...newItemObject
  //         }
  //       };
  //       this.saveItems(newState.allItems);
  //       return { ...newState };
  //     });
  //   }
  // };


  // saveItems = newItem => {
  //   const saveItem = AsyncStorage.setItem('Jobs', JSON.stringify(newItem));
  // };




  render() {

    // const {loadingItems, allItems } = this.state;
    var jobsList = this.props.jobsList
    //   var obj = {
    //     "Job1" : {
    //       text : this.props.text,
    //       year : this.props.year,
    //       month : this.props.month,
    //       time : this.props.time,
    //       date: this.props.date
    //     }
      
    //   }
// year = {item.year} month = {item.month} date = {item.date}

    //   const addedJobs = Object.values(allItems).map(item => {
    //       return <JobsAddedCard key={item.id} text={item.text} time = {item.time} year = "2012" month = "FSA" date = "23-1-3"
    //       />
         
    // })

    const addedJobs = Object.values(jobsList).map((anObjectMapped, index) => {
      return (
          <JobsAddedCard key={`${anObjectMapped.time}`} text={anObjectMapped.text} time = {anObjectMapped.time} year = {anObjectMapped.year} month = {anObjectMapped.month} date = {anObjectMapped.date}/>
        
      );
   })
  



    
 {/* <JobsAddedCard text={this.props.text}  year = {this.props.year} month = {this.props.month} date = {this.props.date} time = {this.props.time}/> */}
    return (
      <ScrollView  style={{backgroundColor:"#e8e8e8", flex:1}}>
        
       
        {addedJobs}
    
         
      </ScrollView>
      
      //   <Container>
      //   <Content style={{backgroundColor:"#e8e8e8"}}>
         
      //     <List>
      //       <ListItem>
      //         <Body>
      //         <JobsAddedCard/>
      //         </Body>
              
      //       </ListItem>
      //       <ListItem>
      //         <Body>
      //         <JobsAddedCard/>
      //         </Body>
              
      //       </ListItem>
      //       <ListItem>
      //         <Body>
      //         <JobsAddedCard/>
      //         </Body>
              
      //       </ListItem>
      //       <ListItem>
      //         <Body>
      //         <JobsAddedCard/>
      //         </Body>
              
      //       </ListItem>
      //       <ListItem>
      //         <JobsAddedCard/>
      //       </ListItem>
      //       <ListItem>
      //         <JobsAddedCard/>
      //       </ListItem>
      //       <ListItem>
      //         <JobsAddedCard/>
      //       </ListItem>
      //       <View style={{margin:10}}>
      //         <JobsAddedCard/>
             
      //       </View>

           
      //       <JobsAddedCard/>
            
      //       {/* {loadingItems ? (
      //           addedJobs
      //     ) : (
      //       <ActivityIndicator size="large" color="white" />
      //     )} */}
      //     {addedJobs}
      //     </List>
          
      //   </Content>
      // </Container>
     
    


    );
  }
}

