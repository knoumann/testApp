import React from 'react';
import {Text, TextInput, View} from 'react-native';

import {Colors} from '../../theme';
import {styles} from './styles';

const InputComponent = ({
  name,
  setName,
  isInputField,
  placeholder,
  otherComponent,
  label,
  keyboardType,
  maxLength,
}) => {
  return (
    <>
      <View style={styles.container}>
        {isInputField ? (
          <View style={styles.textInputView}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
              placeholder={placeholder}
              placeholderTextColor={Colors.GRAY_DISABLED}
              style={styles.input}
              keyboardType={keyboardType || 'default'}
              value={name}
              onChangeText={text => {
                setName(text);
              }}
              selectionColor={Colors.PRIMARY}
              maxLength={maxLength}
            />
          </View>
        ) : (
          {otherComponent}
        )}
      </View>
    </>
  );
};
export default InputComponent;
