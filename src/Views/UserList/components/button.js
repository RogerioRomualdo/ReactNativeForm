import React from 'react';
import {Alert} from 'react-native';
import {Icon, Button} from 'react-native-elements';

const CustomButton = ({user, navigation}) => {
  function confirmUserDeletion() {
    Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
      {
        text: 'Sim',
        onPress() {
          console.warn(user.name + ' deleted');
        },
      },
      {
        text: 'Não',
      },
    ]);
  }

  return (
    <>
      <Button
        onPress={() => confirmUserDeletion(user)}
        type="clear"
        icon={<Icon name="delete" size={25} color="#f00" />}
      />
      <Button
        onPress={() => navigation.navigate('UserForm', user)}
        type="clear"
        icon={<Icon name="edit" size={25} color="orange" />}
      />
    </>
  );
};

export default CustomButton;
