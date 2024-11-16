import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import { useForm } from 'react-hook-form'
import CustomInput from '@/components/CustomInput';

const LoginScreen = () => {
  const { control, handleSubmit, formState: { errors }, watch } = useForm();

  let pwd = watch('password'); // when we want to access input fields data then we can use their name property

  function abc(data: any) {
    console.log("data", data)
    console.log('Your form get submitted')
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#f9f9f9',
      }}
    >

      <CustomInput
        name="username"
        placeholder="User name"
        control={control}
        rules={{
          // required:true //in this case this field become required and default error message will come 
          required: 'Username is required', // in this way we can pass our own error message
        }}
      />

      <CustomInput
        name="password"
        placeholder='Password'
        control={control}
        secureTextEntry
        rules={{
          required: 'Password is required',
          minLength: {
            value: 5, message: "Minimun length is 5.",
            maxLength: 10 //in this case we are not passing our own message so default message will shown
          }
        }}
      />

      <CustomInput
        name="ConformPassword"
        placeholder="Conform Password"
        control={control}
        secureTextEntry
        rules={{
          required: "Conformation required",
          validate: (value: any) => value === pwd || "Conformed password not maches with upper password" //when we want to access inputfield data then we can use validate property
        }}
      />
      {/* <Controller
        control={control}
        name='username'
        render={({ field: { value, onChange, onBlur } }) => <TextInput
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          style={{
            width: '100%',
            padding: 12,
            marginVertical: 8,
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 8,
          }}
          placeholder='username' />}
      /> */}

      <TouchableOpacity style={{ backgroundColor: 'yellow', padding: 15 }}
        onPress={handleSubmit(abc)} // we need to wrap submit function in handleSubmit of react form hook
      >
        <Text style={{ fontSize: 20 }}>sign-in</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
