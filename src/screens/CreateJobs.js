import React, { Component } from 'react';
import {View,} from 'react-native';
import { Container, Header, Form, Textarea,Tab, Tabs, TabHeading, Icon, Text, Left, Right, Body, Title, DatePicker ,Content, Item, Input, Button, } from 'native-base';
import moment from 'moment';

export default class CreateJobs extends Component {
    constructor(props) {
        super(props);
        this.state = { chosenDate: new Date(), text:"" , time:"", chosenTime: new Date() };
        this.setDate = this.setDate.bind(this);

      }
      setDate(newDate) {
        this.setState({ chosenDate: newDate });
      }
      static navigationOptions = { header: null };

      updateText = (text)=>{
        this.setState({text});
     
      }



      componentDidMount() {
        var that = this;
    
        //Getting the current date-time with required formate and UTC   
        var date = moment()
          .utcOffset('+05:30')
          .format('YYYY-MM-DD hh:mm:ss a');
    
        that.setState({ time: date });
        //Settign up time to show
      }



      render() {
        const {navigate} = this.props.navigation;
        return (
          <Container>
                <Header style={{backgroundColor:"#2F3E46"}}>
                    <Left>
                        <Button transparent  onPress={()=> {
                                this.props.navigation.navigate("Jobs");
                            }}>
                        <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Create New Job</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={()=> {
                                this.props.navigation.navigate("Jobs", {text:this.state.text, month:this.state.chosenDate.toString().substr(4,4),
                                     date:this.state.chosenDate.toString().substr(7,4), year:this.state.chosenDate.toString().substr(10,6),
                                     time:this.state.chosenTime.getHours() + ":" + this.state.chosenTime.getMinutes()
                                  }
                                     );
                               
                                
                            }}>
                        <Text>Save</Text>
                        </Button>
                    </Right>
                </Header>
            <Content>
              <DatePicker
                defaultDate={new Date(2020, 1, 7)}
                minimumDate={new Date(2019, 1, 1)}
                maximumDate={new Date(2030, 12, 31)}
                locale={"en"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="Pick date and time"
                textStyle={{ color: "green" }}
                placeHolderTextStyle={{ color: "#d3d3d3" }}
                onDateChange={this.setDate}
                disabled={false}
                />
                {/* <Text>
                  month: {this.state.chosenDate.toString()}
                  month: {this.state.chosenDate.toString().substr(4,4)}
                  day: {this.state.chosenDate.toString().substr(7,4)}
                  year: {this.state.chosenDate.toString().substr(10,6)}
                  time : {this.state.time}
                 
                </Text> */}
               
               


                <Form>
                    <Textarea onChangeText={this.updateText}
                         value={this.state.text} maxLength={90} rowSpan={5} bordered placeholder="Enter Job details..." />
                </Form>
            </Content>
          </Container>
        );
      }
    }