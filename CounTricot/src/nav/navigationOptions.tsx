// NavigationOptions.tsx
import { Pressable, Text } from "react-native";
import styles from "../styles/navigationStyles";

const voltar = '<'

export const navigationOptions  = (navigation : any) => {


  return {
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitle,

    headerLeft: () => (
      <Pressable onPress={() => navigation.goBack()}>
        <Text style={styles.voltarTxt}>{voltar}</Text>
      </Pressable>
    ),

    };
  };
  
