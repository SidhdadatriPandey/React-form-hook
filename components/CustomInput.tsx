import { Controller } from "react-hook-form"
import { Text, TextInput, View } from "react-native"

const CustomInput = ({ control, name, placeholder, secureTextEntry, rules = {} }: any) => {
    return <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
            <>
                <View style={{ borderWidth: 2, borderColor: error ? 'red' : 'blue', marginTop: 15 }}>
                    <TextInput
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        placeholder={placeholder}
                        secureTextEntry={secureTextEntry}
                        style={{
                            width: 250,
                            padding: 12,
                            marginVertical: 8,
                            borderWidth: 1,
                            borderColor: '#ccc',
                            borderRadius: 8,
                            fontSize: 25,
                        }}
                    />
                </View>
                {error && <Text style={{ color: 'red' }}>{error.message || 'Error'}</Text>}
            </>

        )}
    />

}

export default CustomInput