import React from 'react'
import {View,Text, TouchableOpacity} from 'react-native'
import { styles } from './styles'

export const Tab = (props) => {
    return (
        <TouchableOpacity style={[styles.inactiveTabBar,props.isActive?styles.activeTabBar:{}]}
            onPress={()=>{
                props.onPress(props.tabIndex)
            }
            }
        >
            <Text style={styles.tabTextStyle}>{props.label}</Text>
        </TouchableOpacity>
    )
}