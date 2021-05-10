import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, Text, View, TextInput, TouchableOpacity, Keyboard, Image, Pressable } from 'react-native';
import styles from './styles';



export default function App() {
  const [searchQuery, search] = useState();
  const [weather, setWeather] = useState({
    temperature: null
  });

  useEffect(() => {

  });

  const dataLog = () => {
    Keyboard.dismiss();
    if (!searchQuery) {
      alert('Enter a valid city name');
      return;
    }
    search(null);
    const url = `http://api.weatherstack.com/current?access_key=8ab24b278f7c0a52929ee032cbf7c5e9&query=${searchQuery}`
    console.log('here');

    try {
      console.log('About to fetch: ' + url);
      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          console.log(result.current.temperature);
          const val = {
            temperature: result.current.temperature + ' C',
            stat: result.location.name,
            region: result.location.region,
            country: result.location.country,
            time: result.location.localtime,
            picture: result.current.weather_icons[0],
            desc: result.current.weather_descriptions,
            humidity: result.current.humidity,
          }

          setWeather(val);
        })
        .catch((error) => {
          console.error(error);
        });

    } catch (error) {
      throw error;
    }

  }

  const dataClear = () => {

    search(null);
    setWeather({});

  }

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.header}>Weather Today</Text>
        <Image style={styles.titleImage}
          source={require('./assets/head.png')}
        />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}>

        <TextInput style={styles.input} placeholder={'Enter the Place'} value={searchQuery} onChangeText={text => search(text)} />
        <TouchableOpacity onPress={() => dataLog()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>Go</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      <View style={styles.clrButton}>
        <Pressable
          style={styles.button}
          onPress={() => dataClear()}
        >
          <Text style={styles.addtext}>Clear</Text>
        </Pressable>
      </View>

      {weather.temperature ? <View style={styles.output}>
        {weather.picture ? <Image
          style={styles.img}
          source={{ uri: weather.picture }}
        /> : null}

        <Text style={styles.result}>Time: {weather.time}</Text>
        <Text style={styles.result}>Temperature: {weather.temperature}</Text>
        <Text style={styles.result}>Humidity: {weather.humidity}</Text>
        <Text style={styles.result}>Weather Description: {weather.desc}</Text>

        {/* <Button
          style={{width: 60, marginTop:10}}
          onPress={() => dataClear()}
          title="Press Me"
          color="#352C2C"
        /> */}

      </View> : null}
      {/* <View style={styles.clrButton}>
        <Pressable
          style={styles.button}
          onPress={() => dataClear()}
        >
          <Text style={styles.text}>Clear</Text>
        </Pressable>
      </View> */}
    </View>

  );
};
