
import React, { Dispatch, SetStateAction, useState } from 'react'

import { MaterialIcons, Entypo } from '@expo/vector-icons';
import { TextInput, TouchableOpacity, View } from 'react-native';


interface InputTextProps {
    placeholder: string,
    value: string | undefined,
    setValue: Dispatch<SetStateAction<string>>
}


const PasswordInputField = (prop: InputTextProps) => {
    const [showPassword, setShowPassword] = useState(false)


    const handleValue = (text: string) => {
        prop.setValue(text)
    }

    return (
        <View
        // className='w-full flex-row items-center justify-between rounded-md space-x-2 px-2 my-2 border border-gray-200'
        >
            <MaterialIcons size={24} name={'password'} />

            <TextInput
                value={prop.value}
                onChangeText={handleValue}
                placeholder={prop.placeholder}
                // className='flex-1 py-2  text-primaryText '
                secureTextEntry={true}
                autoCapitalize='none'
            />
            <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}>
                <Entypo name={showPassword ? 'eye-with-line' : 'eye'} size={24} />
            </TouchableOpacity>
        </View>
    )
}


export default PasswordInputField