import {React, useState} from 'react'
import { 
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    FlatList } from 'react-native'
import styles from './welcome.style'
import { useRouter } from 'expo-router'
import { icons, SIZES } from '../../../constants'

const jobTypes = ["Full-time", "Part-time", "Contractor"]

const Welcome = ({searchTerm, setSearchTerm, handleClick}) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full-time");

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>
          Hello Adrian
        </Text>
        <Text style={styles.welcomeMessage}>
          Find your perfect job
        </Text>
        <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
            <TextInput style={styles.searchInput} 
              value={searchTerm}
              onChange={(text) => {
                setSearchTerm(text)
              }}
              placeholder='What are you looking for?'/>
          </View>

        <TouchableOpacity onPress={() => {handleClick}} style={styles.searchBtn}>
          <Image 
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>

        </View>
        <View style={styles.tabsContainer}>
          <FlatList 
            data={jobTypes}
            renderItem={({item}) => (
              <TouchableOpacity 
                style={styles.tab(activeJobType, item)}
                onPress={() => {
                  setActiveJobType(item)
                  router.push(`/search/${item}`)
                }}
              >
                <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item}
            contentContainerStyle={{columnGap: SIZES.small}}
            horizontal
          />
        </View>
      </View>
    </View>
  )
}

export default Welcome