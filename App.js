import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Tabs from './src/Tabs';
import { Tab } from './src/Tab';
import From, { Temp } from './src/Form';
import List from './src/List';
import { styles } from './src/styles'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      animal:[],
      name:[]
    }
  }
  
  onSubmit = (data) => {
   if(data.Name){
     this.setState({
      name:[...this.state.name,data.Name]

     })
   }else{
    this.setState({
      animal:[...this.state.animal,data.Animal]

     })   
    }
  }


  render(){
    return (
      <SafeAreaView style={styles.mainAppContainer}>
      <Tabs>
        <Tab label={'Form'} >
          <From onPressSubmit={this.onSubmit} data={['Name','Animal']} />
        </Tab>
        <Tab label={'Name'} >
          <List data={this.state.name}/>
        </Tab>
        <Tab label={'Animal'} > 
          <List data={this.state.animal}/>
        </Tab>     
      </Tabs>
      </SafeAreaView>
    );
  }
}

