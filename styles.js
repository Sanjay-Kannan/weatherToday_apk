import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#88AEDF',
    },
    writeTaskWrapper: {
        top: 140,
        position: 'absolute',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    header: {
        position: 'absolute',
        fontSize: 30,
        fontFamily: 'serif',
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: '#031123',
        width: '100%',
        padding: 10,
        fontWeight: 'bold',
        marginLeft:55
    },
    titleImage:{
        width:50,
        height:50,
        flexDirection:'row',
        position:'absolute',
        marginLeft:10,
        borderRadius:25,
       
    },
    title:{
        justifyContent:'space-between',
        flexDirection:'row',
        top:50,
        width:'100%',
        padding:5
    },
    input: {
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 15
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
    addText: {
        color: '#4E4B4B'
    },
    button: {
        backgroundColor: '#D7D3D3',
        top: 600,
        width: 80,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:35,
        borderWidth:1,
        borderColor:"#B4ADAD"
    },
    clrButton:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    output: {
        top:180,
    },
    result: {
        fontSize: 20,
        color: '#000',
        padding: 10,
        width: 350,
        height: 50,
        borderRadius: 60,
        borderWidth: 2,
        backgroundColor: "#D7D3D3",
        marginBottom: 7,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderColor: '#CCCCE8',
        overflow: 'scroll',
        marginLeft: 3
    },
    img: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 150,
        marginBottom: 5,
        borderWidth: 1,
        borderRadius: 8,
    },
    buttonContainer: {
        width: 60,
        margin: 120,
        marginTop: 600,
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: (Platform.OS === 'ios') ? 30 : 0
    },
});

export default styles;