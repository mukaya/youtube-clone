import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import * as Contacts from 'expo-contacts';

const Contact = ()=>{
const [donner, setDonner] = useState([]);

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails],
        });


        
        if (data.length > 0) {
            console.log(data);
           setDonner(data);
        //   const contact = data[0];
        //   console.log(contact);
        }
      }
    })();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Contacts Module Example</Text>
      <FlatList
      keyExtractor={(item)=>item.key}
       data={donner}
       renderItem={(item)=>{
            return <Text>{item.item.name}</Text>
       }}
      />
    </View>
  );
}

export default Contact;