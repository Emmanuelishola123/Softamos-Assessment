import React, { Dispatch, SetStateAction } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput, View } from 'react-native';



interface InputTextProps {
    iconName: keyof typeof MaterialIcons.glyphMap,
    placeholder: string,
    value: string | undefined,
    setValue: Dispatch<SetStateAction<string>>
}


const TextInputField = (prop: InputTextProps) => {
    const handleValue = (text: string) => {
        prop.setValue(text)
    }

    return (
        <View 
        // className='w-full flex-row items-center justify-between rounded-md space-x-2 px-2 my-2 border border-gray-200'
        >
            <MaterialIcons size={24} name={prop.iconName} color={'#555'} />

            <TextInput
                value={prop.value}
                onChangeText={handleValue}
                placeholder={prop.placeholder}
                // className='flex-1 py-2  text-primaryText '
                autoCapitalize='none'
            />
        </View>
    )
}


export default TextInputField



// const style