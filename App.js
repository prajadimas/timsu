/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState } from 'react';
 // import type {Node} from 'react';
 import SerialPortAPI from 'react-native-serial-port-api';
 import helpers from "./utils/helpers";
 
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
 React.useState
 
//  async function example() {
//    // unsubscribe
//    // sub.remove();
 
//    // close
//    // serialPort.close();
//  }
 
 const Section = ({ children, title }) => {
   const isDarkMode = useColorScheme() === 'dark';
   return (
     <View style={styles.sectionContainer}>
       <Text
         style={[
           styles.sectionTitle,
           {
             color: isDarkMode ? Colors.white : Colors.black,
           },
         ]}>
         {title}
       </Text>
       <Text
         style={[
           styles.sectionDescription,
           {
             color: isDarkMode ? Colors.light : Colors.dark,
           },
         ]}>
         {children}
       </Text>
     </View>
   );
 };
 
 const App = () => {
   const isDarkMode = useColorScheme() === 'dark';
 
   const [data, setData] = useState("");
  //  const [payload, setPayload] = useState("");
 
   SerialPortAPI.open("/dev/ttysWK1", { baudRate: 9600 })
   .then((serialPort) => {
    // subscribe received data
    serialPort.onReceived(buff => {
      // console.log(buff.toString('hex').toUpperCase());
      // setData(buff.toString('hex').toUpperCase());
      // const inc_start_bit = buff.toString('hex').includes("02");
      // const inc_stop_bit = buff.toString('hex').includes("03");
      // if (inc_start_bit) {
      //   if (inc_stop_bit) {
      //     if (buff.toString('hex').indexOf("03") === (buff.toString('hex').length - 2)) {
      //       // this.setState({ value: data.payload });
      //       setPayload(buff.toString('hex'));
      //     }
      //   } else {
      //     // this.setState({ value: data.payload });
      //     setPayload(buff.toString('hex'));
      //   }
      // } else {
      //   if (inc_stop_bit) {
      //     if (buff.toString('hex').indexOf("03") === (buff.toString('hex').length - 2)) {
      //       // this.setState({ value: this.state.value + data.payload });
      //       setPayload(payload + buff.toString('hex'));
      //     }
      //   } else {
      //     // this.setState({ value: this.state.value + data.payload });
      //     setPayload(payload + buff.toString('hex'));
      //   }
      // }

      // if (payload.length === 26) {
      //   const suValue = helpers.valueText(payload);
      //   // this.setState({ output: this.state.output + suValue + ";" });
      //   setData(suValue);
      // }
      if (buff.toString('hex').length === 26) {
        const suValue = helpers.valueText(buff.toString('hex'));
        // this.setState({ output: this.state.output + suValue + ";" });
        setData(suValue);
      }
    });
   })
   .catch((err) => {
    console.log(err);
    setData(err.message);
   });
 
  // AndroidShell.executeCommand("ls", (result) => {
  //   setData(result);
  //   console.log('Result :', result);
  // });
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
 
   return (
     <SafeAreaView style={backgroundStyle}>
       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
       <ScrollView
         contentInsetAdjustmentBehavior="automatic"
         style={backgroundStyle}>
           <Header />
           <View
             style={{
               backgroundColor: isDarkMode ? Colors.black : Colors.white,
             }}>
              <Text>{data}</Text>
             <Section title="Step One">
               Edit <Text style={styles.highlight}>App.js</Text> to change this
               screen and then come back to see your edits.
             </Section>
             <Section title="See Your Changes">
               <ReloadInstructions />
             </Section>
             <Section title="Debug">
               <DebugInstructions />
             </Section>
             <Section title="Learn More">
               Read the docs to discover what to do next:
             </Section>
             <LearnMoreLinks />
           </View>
       </ScrollView>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 
 export default App;
 