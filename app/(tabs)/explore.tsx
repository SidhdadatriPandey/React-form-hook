import { View, Text, TextInput, Button } from 'react-native'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'

const explore = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            conformPass: ""
        },
    })
    const onSubmit = (data: any) => console.log(data)
    // console.log('error',errors.name?.message);
    const pwd = watch('password');

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Controller
                control={control}
                rules={{
                    required: 'name is required',
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <View style={{ marginVertical: 15 }}>
                        <TextInput
                            placeholder="Name"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            style={{ borderColor: errors.name ? 'red' : 'blue', borderWidth: 1, borderRadius: 15, minWidth: 350, padding: 15 }}
                        />
                        {errors.name && <Text style={{ color: 'red' }}>{errors?.name?.message || 'Error'}</Text>}
                    </View>
                )}
                name="name"
            />

            <Controller
                control={control}
                rules={{
                    required: 'Email is required',
                    pattern: {
                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        message: 'Invalid email address',
                    },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <View style={{ marginVertical: 15 }}>
                        <TextInput
                            placeholder="Email"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            style={{ borderColor: errors.email ? 'red' : 'blue', borderWidth: 1, borderRadius: 15, minWidth: 350, padding: 15 }}
                        />
                        {errors.email && <Text style={{ color: 'red' }}>{errors.email.message || 'Error'}</Text>}
                    </View>
                )}
                name="email"
            />

            <Controller
                control={control}
                rules={{
                    required: 'password is required',
                    minLength: { value: 4, message: "password should be at least 4 length" }
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <View style={{ marginVertical: 15 }}>
                        <TextInput
                            placeholder="Password"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            style={{ borderColor: errors.password ? 'red' : 'blue', borderWidth: 1, borderRadius: 15, minWidth: 350, padding: 15 }}
                        />
                        {errors.password && <Text style={{ color: 'red' }}>{errors.password.message || 'Error'}</Text>}
                    </View>
                )}
                name="password"
            />


            <Controller
                control={control}
                rules={{
                    required: 'password conformation required',
                    validate: value => value === pwd || 'Password do not match'
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <View style={{ marginVertical: 15 }}>
                        <TextInput
                            placeholder="Conform Password"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            style={{ borderColor: errors.conformPass ? 'red' : 'blue', borderWidth: 1, borderRadius: 15, minWidth: 350, padding: 15 }}
                        />
                        {errors.conformPass && <Text style={{ color: 'red' }}>{errors.conformPass.message || 'Error'}</Text>}
                    </View>
                )}
                name="conformPass"
            />

            <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </View>
    )
}

export default explore