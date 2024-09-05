import axios from "axios"
import { DataContext } from "../Helper/Context"
import { useContext } from "react"


const GetData=()=>{

async function fetchData(params) {
  const {dataFrom} = params
  try {
    const { data } = await axios.get(`https://us-central1-nft-cloud-functions.cloudfunctions.net/${dataFrom}`)
    return data
  } catch (error) {
    console.error("Error fetching data: ", error);
  }

}
return {fetchData}
}

export default GetData