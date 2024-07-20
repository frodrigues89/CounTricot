import React, { useEffect, useState } from 'react';
import { Text, Pressable, View, Alert } from 'react-native';
import styles from '../styles/InicioStyles'; // Importa os estilos
import { useNavigation } from '@react-navigation/native';
import Carreira from '../model/Carreira';

interface InicioProps {
  navigation: any; // Tipo da navegação
}

const Inicio: React.FC<InicioProps> = () => {

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Text> </Text>
      ),
      headerTitleStyle: styles.contador,
    });
  }, []);

  const navigation = useNavigation();

  const [carreirasContadas, setCarreirasContadas] = useState<Carreira[]>([]);
  const totalCarreiras = carreirasContadas.length;

  function handleSoma(){
    const carreira = new Carreira('meia', '');
    setCarreirasContadas([...carreirasContadas, carreira]);
  }
  function handleSub(){
    if (carreirasContadas.length > 0) {
      setCarreirasContadas(carreirasContadas.slice(0, -1));
    } else {
      Alert.alert('Erro', 'Não há carreiras para subtrair.');
    }
  }

  function confirmarReset() {
    Alert.alert(
      'Confirmação de Reset',
      'Você realmente quer resetar as carreiras?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Confirmar',
          onPress: handleReset,
        },
      ],
      { cancelable: true }
    );
  }

  function handleReset(){
    setCarreirasContadas([]);
  }


 
  return (
    <View style={styles.container}>
      <Text 
        style={styles.texto}>
          Próxima Carreira:
        </Text>
        <Text 
        style={styles.texto}>
          "Funcionalidade em Teste"
        </Text>
      <Text 
        style={styles.contador}>{totalCarreiras}
        </Text>
      <View style={styles.containerBtn}>
        <Pressable 
          style={styles.btnSub}
          onPress={handleSub}>
          <Text 
          style={styles.btnTxt}>
            -
          </Text>
        </Pressable>
        <Pressable 
          style={styles.btnSoma}
          onPress={handleSoma}>
          <Text 
          style={styles.btnTxt}>
            +
          </Text>
        </Pressable>      
      </View>
      <View style={styles.containerReset}>
        <Pressable 
          style={styles.btnReset}
          onPress={confirmarReset}>
          <Text style={styles.btnResetTxt}>
            RESET
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Inicio;
