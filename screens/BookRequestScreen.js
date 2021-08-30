import React, {Component} from 'react'
import {View, Text, StyleSheet,TextInput,KeyboardAvoidingView,TouchableOpacity, Alert} from 'react-native'
import MyHeader from '../components/myHeader'
import firebase from 'firebase'
import db from '../config'


export default class BookRequestScreen extends Component{
    constructor(){
        super()
        this.state={
            userID:firebase.auth().currentUser.email,
            bookName:'',
            reasonToRequest:''
        }
    }
    createUniqueID(){
        return Math.random().toString(36).substring(7)
    }
    addRequest=()=>{
        db.collection('request_books').add({
            user_ID: this.state.userID,
            book_name: this.state.bookName,
            reason_to_request: this.state.reasonToRequest,
            request_ID:this.createUniqueID()
        })
        this.setState({
            bookName:'',
            reasonToRequest:''
        })
        Alert.alert('the Request is sent')
        alert('Request is sent')
    }
    render(){
        return(
            <View style={{flex:1}}>
                <MyHeader title={'Request Books'}/>
                <KeyboardAvoidingView style={styles.keyBoardStyle}>
                    <TextInput style={styles.formTextInput}
                               placeholder={'Enter the book name'}
                               onChangeText={(text)=>{
                                this.setState({
                                    bookName:text
                                })
                               }}/>
                     <TextInput style={[styles.formTextInput,{height: 300}]}
                               placeholder={'Enter the reason to request'}
                               onChangeText={(text)=>{
                                this.setState({
                                    reasonToRequest:text
                                })
                               }}/>
                    <TouchableOpacity style={styles.button}
                                      onPress={()=>{
                                          this.addRequest()
                                      }}>
                        <Text>Request</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    keyBoardStyle : {
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    formTextInput:{
      width:"75%",
      height:35,
      alignSelf:'center',
      borderColor:'#ffab91',
      borderRadius:10,
      borderWidth:1,
      marginTop:20,
      padding:10,
    },
    button:{
      width:"75%",
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
      marginTop:20
      },
    }
  )