const { View, Image, StyleSheet, ScrollView, Text } = require("react-native");


const ImagemRio = () => {
    return (


        <ScrollView>


            <View style={styles.container}>
                


                <View style={styles.left}>
                    <Image
                        source={require('../assets/ana.png')}
                        style={styles.Image}
                    />
                    <Text style={styles.Text}>Ana Clara Lobrigato</Text>
                </View>

                <View style={styles.right}>
                    <Image
                        source={require('../assets/helena.png')}
                        style={styles.Image} />
                    <Text style={styles.Text}>Helena Silva de Souza</Text>
                </View>

                <View style={styles.left}>
                    <Image
                        source={require('../assets/manu.png')}
                        style={styles.Image}
                    />
                    <Text style={styles.Text}>Manuela Cabreira Biacca</Text>
                </View>

                <View style={styles.right}>
                    <Image
                        source={require('../assets/maria.png')}
                        style={styles.Image} />
                    <Text style={styles.Text}>Maria Eduarda Ribeiro</Text>
                </View>

                <View style={styles.left}>
                    <Image
                        source={require('../assets/lucas.png')}
                        style={styles.Image} />
                    <Text style={styles.Text}>Lucas Anael Licatta</Text>
                </View>

                <View style={styles.right}>
                    <Image
                        source={require('../assets/vic.png')}
                        style={styles.Image} />
                    <Text style={styles.Text}>Victória Feitoza</Text>
                </View>


                <View style={styles.footer}>
                    <Text style={styles.footerText}>SENAI- SP Valinhos 2024 - Curso Desenvolvimento de Sistemas G2</Text>
                </View>

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {

        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        backgroundColor: '#C3CBF1',
        alignItems: 'center'
    },

    Text: {
        fontFamily: 'Arial',
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginTop: 10
    },

    Image: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 200,
        marginLeft: 10,
        marginTop: 20
    },

    left: {
        justifyContent: 'space-around',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 500

    },

    right: {
        justifyContent: 'space-around',
        display: 'flex',
        flexDirection: 'column',
        marginRight: 500
    },

    footer: {
        position: 'absolute',
    
        left: 0,
        right: 0,
        top: 1476,
        height: 50,
        backgroundColor: '#646C8E',
        alignItems: 'center',
        justifyContent: 'center',
      },
      footerText: {
        fontFamily: 'Arial',
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
    
      },

});

export default ImagemRio;