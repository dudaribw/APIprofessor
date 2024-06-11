const { View, Image, StyleSheet, ScrollView, Text} = require("react-native");
    
    
    const ImagemRio = () => {
    return (

    
    <ScrollView style={styles.scrollview}>


    <View style={styles.container}>


    <View style={styles.c1}>
    <Image
    source={require('../assets/ana.png')}
    style={styles.Image}
    />
    <Text  style={styles.Text}>Ana Clara Lobrigato</Text>
    </View>

    <View style={styles.c2}>
    <Image
    source={require('../assets/helena.png')}
    style={styles.Image}/>
    <Text  style={styles.Text}>Helena Silva de Souza</Text>
    </View>

    <View style={styles.c3}>
    <Image
    source={require('../assets/manu.png')}
    style={styles.Image}
    />
    <Text  style={styles.Text}>Manuela Cabreira Biacca</Text>
    </View>

    <View style={styles.c4}>
    <Image
    source={require('../assets/maria.png')}
    style={styles.Image}/>
    <Text  style={styles.Text}>Maria Eduarda Ribeiro</Text>
    </View>

    <View style={styles.c5}>
    <Image
    source={require('../assets/lucas.png')}
    style={styles.Image}/>
    <Text style={styles.Text}>Lucas Anael Licatta</Text>
    </View>

    <View style={styles.c6}>
    <Image
    source={require('../assets/vic.png')}
    style={styles.Image}/>
    <Text  style={styles.Text}>Victória Feitoza</Text>
    </View>

    </View>
    </ScrollView>
    );
    };

    const styles = StyleSheet.create( {
        container:{
            marginTop: 20,
            display: 'flex', 
            flexDirection: "column",
            justifyContent: 'space-around'
        },

        Text:{
            color: 'white',
            marginTop: 60,
            marginLeft: 40
        },

        Image:{
            alignItems: 'center',
            justifyContent: 'center',
            width: 200, 
            height: 200, 
            marginLeft: 10,
            marginTop: 20 
             },
            
        container2:{
            justifyContent: 'space-around'

        },
        c1:{
            display: 'flex',
            flexDirection: "row"
        }, 

        c2:{
            display: 'flex',
            flexDirection: "row"
            
        },

        c3:{
            display: 'flex',
            flexDirection: "row"
        },

        c4:{
            display: 'flex',
            flexDirection: "row"
        },

        c5:{
            display: 'flex',
            flexDirection: "row"
        },

        c6:{
            display: 'flex',
            flexDirection: "row"  
        },
        
        scrollview:{
            width: 1500,
            height:1000
        },
        
    });
    
    export default ImagemRio;