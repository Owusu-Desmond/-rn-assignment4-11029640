import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native';
import { SafeAreaView } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium } from '@expo-google-fonts/poppins';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium
  })

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={{paddingHorizontal: 24, paddingTop: 106, backgroundColor: '#FAFAFD'}}>
      <Text style={styles.title}>Jobizz</Text>
      <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Welcome Back 👋</Text>
          <Text style={{fontSize: 14, fontWeight: '400', fontFamily: 'Poppins_400Regular'}}>Let's log in, Apply to jobs!</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          onChange={(e) => setName(e.value)}
          value={name}
          placeholder='Name'
        />
        <TextInput
          style={styles.input}
          onChange={(e) => setEmail(e.value)}
          value={email}
          placeholder='Email'
        />
        <Pressable style={styles.loginBtn}>
          <Text style={{color: '#fff',fontFamily: 'Poppins_500Medium', textAlign: 'center'}}>
            Log In
          </Text>
        </Pressable>
        <View style={styles.dividersContainer}>
          <View style={styles.divider}/>
          <Text style={{fontFamily: 'Poppins_400Regular', color: '#AFB0B6' }}>Or continue with</Text>
          <View style={styles.divider}/>
        </View>
      </View>
      <View style={styles.loginOptions}>
        <View style={styles.mediaIcon}>
            <Image source={require('./assets/icons/flat-color-icons_google.png')} />
        </View>
        <View style={styles.mediaIcon}>
            <Image source={require('./assets/icons/ion_logo-facebook.png')} />
        </View>
        <View style={styles.mediaIcon}>
            <Image source={require('./assets/icons/cib_apple.png')} />
        </View>
      </View>
      <Text style={{marginTop: 20, color: '#AFB0B6', textAlign: 'center'}}>
        Haven’t an account? 
        <Text style={{color: '#356899'}}>
          Register
        </Text>
      </Text>
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#356899',
    fontSize: 22,
    fontWeight: '600',
  },
  welcomeContainer: {
    color: '#0D0D26',
    fontFamily: 'Poppins_400Regular'
  },
  welcomeText: {
    fontSize: 24, 
    fontWeight: '600',
    fontFamily: 'Poppins_600SemiBold'
  },
  form: {
    marginTop: 30,
    display: 'flex',
    gap: 20,
  },
  input: {
    color: '#AFB0B6',
    paddingLeft: 10,
    height: 52,
    borderColor: '#AFB0B6',
    borderWidth: 1,
    borderRadius: 10,
  },
  loginBtn: {
    backgroundColor: '#356899',
    paddingVertical: 16,
    borderRadius: 5,
  },
  dividersContainer: {
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center',
    gap: 4,
  },
  divider: {
    width: 100,
    height: 1,
    backgroundColor: '#AFB0B6'
  },
  loginOptions: {
    display: 'flex',
    flexDirection: 'row',
    gap: 30,
    alignSelf: 'center',
    marginTop: 30,
  },
  mediaIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#fff',
    width: 56,
    height: 56,
  },
});
