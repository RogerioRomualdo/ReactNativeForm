import React, {useContext} from 'react';
import {View, FlatList} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';

import styles from './styles';
import {CustomButton} from './components';
import UsersContext from '../../context/userContext';

const UserForm = props => {
  const {state} = useContext(UsersContext);

  function getUserItem({item: user}) {
    return (
      <React.Fragment>
        <ListItem key={user.id} bottomDivider>
          <Avatar source={{uri: user.avatarUrl}} />

          <ListItem.Content>
            <View style={styles.flexRow}>
              <View>
                <ListItem.Title>{user.name}</ListItem.Title>
                <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
              </View>

              <View style={styles.buttonContainer}>
                <CustomButton user={user} navigation={props.navigation} />
              </View>
            </View>
          </ListItem.Content>
        </ListItem>
      </React.Fragment>
    );
  }

  return (
    <View>
      <FlatList
        keyExtractor={user => user.id.toString()}
        data={state.users}
        renderItem={getUserItem}
      />
    </View>
  );
};

export default UserForm;
