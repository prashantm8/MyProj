import React, { Component } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { styles } from './styles'

export default class From extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            formIndex: 0,
            isLast:false,
            showError:false
        }
    }

    onChangeText = (text) => {
        this.setState({
            value: text
        })
    }

    checkValidation = () => {
        let value = this.state.value != ''
        this.setState({
            showError:!value
        })
        return value
    }

    onSubmitPress = (item) => {
        if(this.checkValidation()){
            this.state.formIndex == this.props.data.length-1?this.setState({
                value: '',
                formIndex: 0,
                showError:false
            }):
            this.setState({
                value: '',
                formIndex: this.state.formIndex + 1,
                showError:false
            })
            this.props.onPressSubmit({[item]:this.state.value})
        }
    }
    render() {
        let formData = this.props.data.map((item, index) => {
            if (index == this.state.formIndex) {
                return(<View style={styles.formContainer} key ={index}>

                    <Text style={styles.formTextStyle}>{item}</Text>
                    <TextInput
                        style={styles.formTextInputStyle}
                        onChangeText={this.onChangeText}
                        value={this.state.value}
                    />
                    {this.state.showError ? <Text style={styles.formErrorText}>Please enter some data</Text>:null}

                    <View style={styles.formButtonContainer}>
                        <Button
                            onPress={()=>{this.onSubmitPress(item)}}
                            title="Submit"
                            color="#841584"
                        />
                    </View>
                </View>)

            }
            return null
        })
        return (
            <View style={styles.formContainer}>
            { formData }
            </View>
        )
    }
}