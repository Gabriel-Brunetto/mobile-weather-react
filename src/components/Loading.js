import { ActivityIndicator, View, Text, StyleSheet} from 'react-native'

export default function Loading(){
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0073Cf'}}>
            <Text>Loading</Text>
            <ActivityIndicator size={45} color='#FFF'/>
        </View>
    )
}