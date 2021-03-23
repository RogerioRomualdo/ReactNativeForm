import React, {useState} from 'react';
import {Text, View, TextInput} from 'react-native';
import styles from './styles';

const UserForm = ({route, navigation}) => {
  const [user, setUser] = useState(route.params ? route.params : {});
  return (
    <View style={styles.form}>
      <View>
        <Text style={styles.title}>Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={name => setUser({...user})}
          placeholder="Insira o nome"
          value={user.name}
        />
      </View>
      <View>
        <Text style={styles.title}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={name => setUser({...user})}
          placeholder="Insira o email"
          value={user.email}
        />
      </View>
    </View>
  );
};

export default UserForm;
