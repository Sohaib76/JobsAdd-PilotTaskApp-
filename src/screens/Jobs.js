import React, { Component } from 'react';
import {View,AsyncStorage,ScrollView} from 'react-native';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, Left, Right, Body, Title, Content } from 'native-base';

//import { Container, Header, View, Button, Icon, Fab, Text } from 'native-base';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { FloatingAction } from "react-native-floating-action";

import ParallaxScrollView from 'react-native-parallax-scroll-view';
import ReactNativeParallaxHeader from 'react-native-parallax-header';


import Tab1 from './tabOne';
import Tab2 from './tabTwo';
import Tab3 from './tabThree';
// import { ScrollView } from 'react-native-gesture-handler';


export default class Jobs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      text: "Nothing",
      jobsListThisWeek: [],
      jobsList : [],
      jobsListTomorrow: [],
    //{
  //   text: " My Text ",
  //   month: "Jan",
  //   date: "12",
  //   year: "2020",
  //   time: "20:12 "
  // }

    };

    this.reRenderSomething = this.props.navigation.addListener('willFocus', () => {
      var text = this.props.navigation.getParam('text')
      var month = this.props.navigation.getParam('month')
      var date = this.props.navigation.getParam('date')
      var year = this.props.navigation.getParam('year')
      var time = this.props.navigation.getParam('time')
      // this.setState({text : text,  month:month, date:date, year:year, time:time});
      // alert(this.state.text)
      const ti = new Date()
      
      // try{
      //   this.loadingItems()
      // }
      // catch(e){
      //   console.log(e)
      // }

      if (month){
        
        
        if (date == ti.getDate()){
          this.state.jobsList.push({
            text: text,
            month : month,
            date: date ,
            year: year,
            time: time
          
          })
          // alert(parseInt(date)+1)
          // alert(ti.getDate()+1)
          const saveItem = AsyncStorage.setItem('JobsToday', JSON.stringify(this.state.jobsList));

        
          // alert(JSON.stringify(this.state.jobsList))
    
          
    
          
        }

      else if(parseInt(date) == ti.getDate()+1){
        this.state.jobsListTomorrow.push({
          text: text,
          month : month,
          date: date ,
          year: year,
          time: time
        
        })
        
        const saveItem2 = AsyncStorage.setItem('JobsTomorrow', JSON.stringify(this.state.jobsListTomorrow));
      }

      else{
        
          this.state.jobsListThisWeek.push({
            text: text,
            month : month,
            date: date ,
            year: year,
            time: time
          
          })
        
       
        
        const saveItem3 = AsyncStorage.setItem('JobsWeek', JSON.stringify(this.state.jobsListThisWeek));
      }

      

        this.loadingItems()
        // alert(JSON.stringify(this.state.jobsList))


       
        
      }
     
     
     


  

    });
  }

  componentDidMount(){
    AsyncStorage.getItem('JobsWeek')
      .then((allItemsWeek) => {
          if (allItemsWeek) {
            this.setState({
              jobsListThisWeek: JSON.parse(allItemsWeek) || {},
             
            });
          }
      });
      AsyncStorage.getItem('JobsTomorrow')
      .then((allItemsTomorrow) => {
          if (allItemsTomorrow) {
            this.setState({
              jobsListTomorrow: JSON.parse(allItemsTomorrow) || {},
             
            });
          }
      });
      AsyncStorage.getItem('JobsToday')
      .then((allItems) => {
          if (allItems) {
            this.setState({
              jobsList: JSON.parse(allItems) || {},
             
            });
          }
      });


    }


  loadingItems = async () => {
    try {
      const allItems = await AsyncStorage.getItem('JobsToday');
      const allItemsTomorrow = await AsyncStorage.getItem('JobsTomorrow');
      const allItemsWeek= await AsyncStorage.getItem('JobsWeek');
      if (allItems != null){
        this.setState({
          jobsList: JSON.parse(allItems) || {},
         
        });
      }
      if (allItemsTomorrow != null){
        this.setState({
          jobsListTomorrow: JSON.parse(allItemsTomorrow) || {},
         
        });
      }
      if (allItemsWeek != null){
        this.setState({
          jobsListThisWeek: JSON.parse(allItemsWeek) || {},
         
        });
      }
      
    } catch (err) {
      console.log(err);
    }
  };






  static navigationOptions = { header: null };

    componentWillUnmount() {
      this.reRenderSomething;
    }



    // renderNavBar = () => (
      
    //   <Header hasTabs style={{backgroundColor:"#fff"}}>
           
    //       <Body>
    //       <Title style={{marginLeft:20}}></Title>
    //       </Body>
    //       <Right />
    //   </Header>
            
    //       //  <Tabs tabBarUnderlineStyle={{borderBottomWidth:2}} >
            
        
          
    //       //  <Tab heading={ <TabHeading style={{ backgroundColor:"#2F3E46", }}><Text>Today</Text></TabHeading>}>
           
             
    //       //    <Tab1  jobsList={this.state.jobsList}/>
             
    //       //  </Tab>
           
    //       //    <Tab  heading={ <TabHeading style={{ backgroundColor:"#2F3E46", }}><Text>Tomorrow</Text></TabHeading>}>
    //       //    <Tab2 />
    //       //    </Tab>
           
    //       //    <Tab  heading={ <TabHeading style={{ backgroundColor:"#2F3E46", }}><Text>This week</Text></TabHeading>}>
    //       //      <Tab3 />
    //       //  </Tab>
           
    //       //  </Tabs>
        
    // )

    // renderContent = () => (
    //   <Content>
       
    //   <Header hasTabs style={{backgroundColor:"#2F3E46", height:25}}/>
               
           
    //     <Tabs tabBarUnderlineStyle={{borderBottomWidth:2}} >
            
        
          
    //     <Tab heading={ <TabHeading style={{ backgroundColor:"#2F3E46", }}><Text>Today</Text></TabHeading>}>
        
          
    //       <Tab1  jobsList={this.state.jobsList}/>
          
    //     </Tab>
        
    //       <Tab  heading={ <TabHeading style={{ backgroundColor:"#2F3E46", }}><Text>Tomorrow</Text></TabHeading>}>
    //       <Tab2 />
    //       </Tab>
        
    //       <Tab  heading={ <TabHeading style={{ backgroundColor:"#2F3E46", }}><Text>This week</Text></TabHeading>}>
    //         <Tab3 />
    //     </Tab>
        
    //     </Tabs> 
    //     </Content>
    // )




  render() {
    
   
   


    // const {navigate} = this.props.navigation;
    const actions = [
        {
          text: "New Job",
          icon: require("../images/ic_accessibility_white.png"),
          name: "bt_addJob",
          position: 3
        },
        {
          text: "Language",
          icon: require("../images/ic_language_white.png"),
          name: "bt_language",
          position: 1
        },
        {
          text: "Location",
          icon: require("../images/ic_room_white.png"),
          name: "bt_location",
          position: 2
        },
        // {
        //   text: "Video",
        //   icon: require("../images/ic_videocam_white.png"),
        //   name: "bt_videocam",
        //   position: 4
        // }
      ];

    return (  
        <Container>

        {/* <ReactNativeParallaxHeader
                headerMinHeight={45}
                headerMaxHeight={60}
                extraScrollHeight={10}
                navbarColor='#2F3E46'
                title="JOBS"
                titleStyle={{marginLeft:20}}
                // backgroundImage={images.background}
                // backgroundImageScale={1.2}
                renderNavBar={this.renderNavBar}
                renderContent={this.renderContent}
                containerStyle={{ flex: 1 }}
                contentContainerStyle={{ flexGrow: 1 }}
                innerContainerStyle={{ flex: 1 }}
                scrollViewProps={{
                  onScrollBeginDrag: () => console.log('onScrollBeginDrag'),
                  onScrollEndDrag: () => console.log('onScrollEndDrag'),
                }}
              /> */}

        

         {/* text={this.state.text} date={this.state.date} month={this.state.month} year={this.state.year} time={this.state.time} */}

        <ParallaxScrollView
        // backgroundColor="#2F3E46"
        contentBackgroundColor="#e8e8e8"
        parallaxHeaderHeight={45}
        renderForeground={() => (
        //  <View style={{ height: 150, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        //     <Text>Hello World!</Text>
        //   </View>
        <Header style={{backgroundColor:"#2F3E46"}}>
           
            <Body>
            <Title style={{marginLeft:20}}>JOBS</Title>
            </Body>
            <Right />
        </Header>
        )}
        
       
        >
        
           
           
              
            <Container style={{}}>
            
                <Header hasTabs style={{backgroundColor:"#2F3E46", height:25}}/>
               
           
             <Tabs tabBarUnderlineStyle={{borderBottomWidth:2}} >
             
         
           
          <Tab heading={ <TabHeading style={{ backgroundColor:"#2F3E46", }}><Text>Today</Text></TabHeading>}>
         
           
            <Tab1  jobsList={this.state.jobsList}/>
            
          </Tab>
         
           <Tab  heading={ <TabHeading style={{ backgroundColor:"#2F3E46", }}><Text>Tomorrow</Text></TabHeading>}>
            <Tab2 jobsListTomorrow={this.state.jobsListTomorrow}/>
           </Tab>
          
           <Tab  heading={ <TabHeading style={{ backgroundColor:"#2F3E46", }}><Text>This week</Text></TabHeading>}>
             <Tab3 jobsListThisWeek={this.state.jobsListThisWeek}/>
          </Tab>
          
         </Tabs>
        
         </Container>
     
      
      </ParallaxScrollView>

      <FloatingAction
          actions={actions}
          onPressItem={name => {
            {name == "bt_addJob" && this.props.navigation.navigate("CreateJobs")}
            
            // console.log(`selected button: ${name}`);
            // this.floatingAction.animateButton();
          }}/>



      </Container>
  
    

    //     <Container>
    //     <Header hasTabs/>
    //     <Tabs>
    //       <Tab heading={ <TabHeading><Icon name="camera" /><Text>Camera</Text></TabHeading>}>
    //         <Tab1 />
    //       </Tab>
    //       <Tab heading={ <TabHeading><Text>No Icon</Text></TabHeading>}>
    //         <Tab2 />
    //       </Tab>
    //       <Tab heading={ <TabHeading><Icon name="apps" /></TabHeading>}>
    //         <Tab3 />
    //       </Tab>
    //     </Tabs>
    //     <FloatingAction
    //       actions={actions}
    //       onPressItem={name => {
    //         console.log(`selected button: ${name}`);
    //         // this.floatingAction.animateButton();
    //       }}
    //     />
    //   </Container>





    //     <View style={{flex: 1,justifyContent: 'center',alignItems: 'center',}}>
    //     <Text >Floating Action example</Text>
     
    //   </View>








    //   <Container>
    //     <Header />
    //     <View style={{ flex: 1 }}>
    //       <Fab
    //         active={this.state.active}
    //         direction="up"
    //         containerStyle={{ }}
    //         style={{ backgroundColor: '#5067FF' }}
    //         position="bottomRight"
    //         onPress={() => this.setState({ active: !this.state.active })}>
    //         <Ionicons name="md-add"  />
    //         <Button style={{ backgroundColor: '#5067FF'} } >
    //           <MaterialCommunityIcons name="briefcase-account" color="white" size ={15}/>
    //         </Button>
    //         <Button style={{ backgroundColor: '#3B5998' }}>
                
    //           <Icon name="logo-facebook" />
    //           <Text style={ {color:"black" }}>Demo Text</Text>
    //         </Button>
    //         <Button disabled style={{ backgroundColor: '#DD5144' }}>
    //           <Icon name="mail" />
    //         </Button>
    //       </Fab>
    //     </View>
    //   </Container>
    );
  }
}