
import { EXPO_PUBLIC_GEOAPIFY_API_KEY } from '@env'
import { Alert } from 'react-native';


const fetchAddressInfo = async (address: string) => {
    try {
        const apiUrl = `https://api.geoapify.com/v1/geocode/search?text=${address}&format=json&apiKey=${EXPO_PUBLIC_GEOAPIFY_API_KEY}`;
        const response = await fetch(apiUrl);
        if (response.ok) {
            const data = await response.json();
            return data.results;
        } else {
            const errorData = await response.json();
            throw new Error(`Address request failed: ${errorData.message}`);
        }
    } catch (error) {
        Alert.alert('Error', 'An error occurred while fetching data. Please try again.');
        return null;
    }
};

export default fetchAddressInfo;
