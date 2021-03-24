import React, {useState, useContext} from 'react';
import {Text, View, TextInput, Button} from 'react-native';
import UsersContext from '../../context/userContext';
import styles from './styles';

const UserForm = ({route, navigation}) => {
  const [user, setUser] = useState(route.params ? route.params : {});
  const {dispatch} = useContext(UsersContext);

  return (
    <View style={styles.form}>
      <View>
        <Text style={styles.title}>Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={name => setUser({...user, name})}
          placeholder="Insira o nome"
          value={user.name}
        />

        <Text style={styles.title}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={email => setUser({...user, email})}
          placeholder="Insira o email"
          value={user.email}
        />

        <Text style={styles.title}>Avatar</Text>
        <TextInput
          style={styles.input}
          onChangeText={avatarUrl => setUser({...user, avatarUrl})}
          placeholder="Informe a URL do avatar"
          value={user.avatarUrl}
        />
        <Button
          title="Salvar"
          onPress={() => {
            dispatch({
              type: user.id ? 'updateUser' : 'createUser',
              payload: user,
            });
            navigation.goBack();
          }}
        />
      </View>
    </View>
  );
};

export default UserForm;
