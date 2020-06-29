import React from 'react';
import { View, FlatList } from 'react-native';

import ListItem from './src/ListItem';
import styles from './global';

export default function App() {
  const tasks = [
    { id: '1', task: 'Agendar consulta odontológica' },
    { id: '2', task: 'Comprar remédio odontológico' },
    { id: '3', task: 'Agendar psicólogo' },
    { id: '4', task: 'Pagar plano médico' }
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={ tasks }
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ListItem
            data={ item }
            handleLeft={() => alert('Tarefa concluída com sucesso!')}
            handleRight={() => alert('Tarefa foi excluída!')}
          />
        )}
        ItemSeparatorComponent={() => <Separator />}
      />
    </View>
  );
};

const Separator = () =>
  <View style={styles.separator}></View>