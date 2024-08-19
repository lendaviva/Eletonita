import * as React from 'react';
import { SafeAreaView, Text, Button, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Tela Home</Text>
      <Button
        title="Ir para Perfil"
        onPress={() => navigation.navigate('Perfil')}
      />
      <Button
        title="Ir para Configurações"
        onPress={() => navigation.navigate('Configurações')}
      />
    </SafeAreaView>
  );
}

function PerfilScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Tela Perfil</Text>
    </SafeAreaView>
  );
}

function ConfiguracoesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Tela Configurações</Text>
    </SafeAreaView>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Perfil" component={PerfilScreen} />
        <Stack.Screen name="Configurações" component={ConfiguracoesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});