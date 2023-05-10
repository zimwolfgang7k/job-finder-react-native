import {useState, useEffect} from 'react'
import axios from 'axios'

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {
      ...query,
    },
    headers: {
      'X-RapidAPI-Key': 'c835b0d8c9msh35778b2b99cbc58p1e517bjsn951c47f9b3bc',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    },
  }

  const fetchData = async () => {
    setIsLoading(true)

    try {
      const res = await axios.request(options)

      setData(res.data.data)
      setIsLoading(false)
    } catch (error) {
      setError(error)
      Alert('Something went wrong')
    } finally {
      setIsLoading(false)
    }
  }
  
  useEffect(() => {
    fetchData()
  }, []);

  const refetch = () => {
    setIsLoading(true)
    fetchData()
  }

  return {data, isLoading, error, refetch}
}

export default useFetch
