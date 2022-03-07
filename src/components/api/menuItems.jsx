import React, {useEffect} from 'react'

const axios = require("axios");

export default function MenuItems() {
  //const [data, setData] = useState("");
  const apiKey = "0770b91588ab40e6aa3549eeaf9250ea";
  const id = "424571";
  useEffect(() => {
    axios
      .get(
        `https://api.spoonacular.com/food?apiKey=${apiKey}/menuItems/`
        // `https://api.spoonacular.com/recipes?apiKey=${apiKey}/1003464/ingredientWidget.json`
      )
      .then((response) => {
        // setData(response.data);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

}