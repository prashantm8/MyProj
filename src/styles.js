import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    mainAppContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        paddingTop: '7%'
    },
    formContainer: {
        flex: 1
    },
    formTextStyle: {
        fontSize: 20,
        margin: 10
    },
    formTextInputStyle: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10
    },
    formErrorText: { fontSize: 14, color: 'red', margin: 10 },
    formButtonContainer: { flex: 1, justifyContent: 'flex-end' },
    listItem: { borderColor: 'grey', borderBottomWidth: 1, borderRadius: 3 },
    listText: { fontSize: 16, padding: 20 },
    emptyText: { alignSelf: 'center', textAlign: 'center', padding: 20, fontSize: 16, color: 'grey' },
    tabContainer: { flexDirection: 'row' },
    tabTextStyle: { fontSize: 16, padding: 20, color: 'black', fontWeight: 'bold' },
    inactiveTabBar:{flex:1, justifyContent: 'center', alignItems: 'center',borderBottomColor:'grey',borderBottomWidth:1 },
    activeTabBar:{ borderBottomColor:'blue',borderBottomWidth:3}

})