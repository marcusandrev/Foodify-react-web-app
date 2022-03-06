//An asynchronous function to fetch data from the API.
import axios from 'axios'

export default async function sendApiRequest(req, res) {
  const API_KEY = '0770b91588ab40e6aa3549eeaf9250ea'

  try {
    const queries = req.body
    let stringifiedQuery = ''
    queries.forEach(query => (stringifiedQuery += `${query},`))
    stringifiedQuery = stringifiedQuery.substring(
      0,
      stringifiedQuery.length - 1
    )

    const { data } = await axios.get(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${stringifiedQuery}&number=6`
    )
    res.status(200).json(data)
  } catch (err) {
    console.error(err)
    res.status(500).end()
  }
}

//https://codesandbox.io/s/hardcore-faraday-jpvrbh?file=/src/App.js:183-215