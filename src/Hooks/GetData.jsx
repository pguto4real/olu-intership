import axios from "axios"



const GetData = () => {

  async function fetchData(params) {
    const { dataFrom } = params

    try {
      const { data } = await axios.get(`https://us-central1-nft-cloud-functions.cloudfunctions.net/${dataFrom}`)
      return data
    } catch (error) {
      return []
      console.error("Error fetching data: ", error);
    }

  }
  return { fetchData }
}

export default GetData