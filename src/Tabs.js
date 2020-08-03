import React, { Component } from 'react'
import { View, Text,SafeAreaView } from 'react-native'
import { Tab } from './Tab'
import { styles } from './styles'

export default class Tabs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeTabIndex: 0
        }
    }

    handleTabPress = (tabIndex) =>{
        this.setState({
            activeTabIndex:tabIndex
        })
    }

    renderTabs = () => {
        return React.Children.map(this.props.children,(child,index)=>{
            return React.cloneElement(
                child,{
                    onPress:this.handleTabPress,
                    tabIndex:index,
                    isActive: index === this.state.activeTabIndex
                }
            )
        })
    }

    renderContent = () => {
        if(this.props.children[this.state.activeTabIndex]){
            return this.props.children[this.state.activeTabIndex].props.children
        }
    }

    render() {
        return (
            <View style={styles.formContainer}>
                <View style={styles.tabContainer}>
                    {this.renderTabs()}
                </View>
                <View style={styles.formContainer}>
                    {this.renderContent()}
                </View>
            </View>
        )
    }
}
