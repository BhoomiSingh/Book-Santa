import React from 'react';
import {Header} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context'

const MyHeader=(props)=>{
    return(
        <SafeAreaProvider>
                <Header 
        leftComponent={<Icon name='bar' type='font-awesome' color='#696969' onPress={()=>{props.navigation.toggleDrawer()}}/>}
            centerComponent={{ 
                text: props.title, 
                style: { color: 'white', fontSize:20, fontWeight:"bold", } 
            }}
            backgroundColor = "blue"
      />
        </SafeAreaProvider>
    )
}
export default MyHeader 