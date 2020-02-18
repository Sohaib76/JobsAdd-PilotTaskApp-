import React, {Component} from 'react';
import {Platform, StyleSheet, View, } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body ,List} from 'native-base';





export default class JobsAddedCard extends Component{
  render() {
    var year = this.props.year
    var month = this.props.month
    var date = this.props.date
    var time = this.props.time
    // "14:30 - 05 Kas 2019"
    var day = time + " - "+ date+ " "+ month + year
    var job_desc = this.props.text
    return (
        <View style={{marginLeft:10, marginRight:10, marginTop:2}}>
             <Card style={{borderRadius:15}}>
                <CardItem header style={{borderRadius:10}}>
                <Text>{day}</Text>
                </CardItem>
                <CardItem  style={{borderRadius:10}}>
                <Body>
                    <Text>
                    {job_desc}
                    </Text>
                </Body>
                </CardItem>
            </Card>
        </View>
           
    );
  }
}

