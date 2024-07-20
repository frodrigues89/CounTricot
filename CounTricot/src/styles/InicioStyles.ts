import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  texto: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black'
  },
  contador: {
    fontSize: 120,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 50
  },
  containerBtn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  btnSoma: {
    width: 150,
    borderWidth: 2,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#4682B4',
    borderRadius: 150,
    marginHorizontal: 15,
    // Sombras no iOS
    shadowColor: '#000',
    shadowOffset: { width: 7, height: 7 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    // Sombras no Android
    elevation: 5,
  },
  btnSub: {
    width: 150,
    borderWidth: 2,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#CB4154',
    borderRadius: 150,
    marginHorizontal: 15,
    // Sombras no iOS
    shadowColor: '#000',
    shadowOffset: { width: 7, height: 7 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    // Sombras no Android
    elevation: 5,
  },
  btnTxt: {
    fontSize: 90,
    fontWeight: 'bold'
  },
  containerReset: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  btnReset: {
    width: 150,
    borderWidth: 2,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#CB4154',
    borderRadius: 150,
    marginHorizontal: 15,
    // Sombras no iOS
    shadowColor: '#000',
    shadowOffset: { width: 7, height: 7 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    // Sombras no Android
    elevation: 5,
  },
  btnResetTxt:{
    fontSize: 30,
    fontWeight: 'bold'
  }
});
