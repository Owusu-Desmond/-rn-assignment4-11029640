import { Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from "@expo-google-fonts/poppins"
import { useFonts } from "expo-font"
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import FeaturedJobCard from "../components/FeaturedJobCard"

const HomePage = () => {
    const [fontsLoaded] = useFonts({
        Poppins_700Bold,
        Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium
    })
    
    if (!fontsLoaded) {
        return null;
    }

    const jobs = [
        {
            companyIcon: require('../assets/icons/ion_logo-facebook.png'),
            jobTitle: 'Software Engineer',
            company: 'Facebook',
            salary: 180.00,
            location: 'Accra, Ghana',
            cardBackground: '#34A853'
        },
        {
            companyIcon: require('../assets/icons/flat-color-icons_google.png'),
            jobTitle: 'Frontend Developer',
            company: 'Google',
            salary: 200.00,
            location: 'Mountain View, CA, USA',
            cardBackground: '#4285F4'
        },
        {
            companyIcon: require('../assets/icons/cib_apple.png'),
            jobTitle: 'UI/UX Designer',
            company: 'Apple',
            salary: 195.00,
            location: 'Cupertino, CA, USA',
            cardBackground: '#A200FF'
        }
    ];
    

    return (
        <View style={{marginVertical: 50, marginHorizontal: 24 }}>
            <View style={styles.profile}>
            <View style={{display: 'flex', gap: 0}}>
                <Text style={{ fontFamily: 'Poppins_700Bold', fontSize: 24}}>Eric Atsu</Text>
                <Text style={{color: '#95969D', fontSize: 20, marginTop: -10}}>eric@gmail.com</Text>
            </View>
            <View>
                <Image source={require('../assets/images/Ellipse.png')} />
            </View>
        </View>
        <View style={styles.searchContainer}>
              <View style={styles.search} >
                <Image 
                  source={require('../assets/icons/searchIcon.png')} 
                  style={{height: 16, width: 16, marginLeft: 10}}
                />
                <TextInput
                    keyboardType='text'
                    style={styles.input}
                    placeholder='Search a job or position'
                  />
              </View>
              <TouchableOpacity>
                <View style={styles.filter}>
                    <Image source={require('../assets/icons/filter.5.png')} />
                </View>
              </TouchableOpacity>
            </View>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 30}}>
                <Text style={{ fontFamily: 'Poppins_600SemiBold', fontSize: 16}}>Featured Jobs</Text>
                <Text style={{ color: '#95969D', fontFamily: 'Poppins_400Regular'}}>See all</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 20 }}>
                {jobs.map((job, index) => (
                    <FeaturedJobCard key={index} job={job} />
                ))}
            </ScrollView>
        </View>
    )
} 

const styles = StyleSheet.create({
    profile: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    searchContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 40
      },
      search: {
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center', 
        gap: 0,
        backgroundColor: '#F2F2F3',
        borderRadius: 12
      },
      input: {
        width: 240,
        height: 48,
        backgroundColor: '#FBF9F7',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#FBF9F7',
        padding: 10,
        fontFamily: 'Lato-Regular',
      },
    filter: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        backgroundColor: '#F2F2F3', 
        width: 48, 
        height: 48
    }
      
})

export default HomePage;