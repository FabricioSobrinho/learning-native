import axios from 'axios';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function PageCep() {
  const [MeuEnd, setMeuEnd] = useState(null);
  const [cep, setCep] = useState('');

  const handleCep = (e) => {
    setCep(e.nativeEvent.text);
  };

  async function getCep() {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setMeuEnd(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <TextInput placeholder='cep' onChange={handleCep} style={styles.input}  placeholderTextColor="#fff"/>
      <Button title='Search' onPress={getCep} />
      {MeuEnd && !MeuEnd.erro && (
        <>
          <Text style={styles.text}>CEP: {MeuEnd.cep}</Text>
          <Text style={styles.text}>Localidade: {MeuEnd.localidade}</Text>
          <Text style={styles.text}>UF: {MeuEnd.uf}</Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D284C',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#f2f8ff',
    margin: '3px'
  },
  input: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    paddingHorizontal: 10,
    width: '80%',
    color: '#fff',
    margin: '3px'
  },
  text: {
    color: "#f2f8ff"
  }
});
