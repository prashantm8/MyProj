import React , {Component} from 'react'
import {View, Text} from 'react-native'
import { styles } from './styles'

export default class List extends Component {
    
    render () {
        let data =this.props.data && this.props.data.length>0 ? this.props.data.map((item,index)=>{
            return(
                <View key={index} style={styles.listItem}>
                    <Text style={styles.listText}>
                        {item}
                    </Text>
                </View>
            )
        }):<Text style={styles.emptyText}>Please add some data.</Text>
        return(
            <View style={styles.formContainer}>
                {data}
            </View>
        )
    }
}