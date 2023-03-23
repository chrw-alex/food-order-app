import { useEffect, useState } from 'react';
import FoodItem from './FoodItem/FoodItem';
import style from './FoodList.module.css'
import Card from "./../UI/Card/Card";


const FoodList = () => {

  const [meals, setMeals] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true)
      const response = await fetch('https://custom-hooks-35164-default-rtdb.firebaseio.com/meals.json')

      if (!response.ok) {
        throw new Error('Something went wrong')
      }

      const responseData = await response.json()
      const loadedMeals = []

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name.replace(/'/g, ''),
          description: responseData[key].description.replace(/'/g, ''),
          price: responseData[key].price
        })
      }

      setMeals(loadedMeals)
      setIsLoading(false)
    }

    fetchMeals().catch((err) => {
      setIsLoading(false)
      setError(err.message)
    })

  }, [])

  if (isLoading) {
    return <p className={style.loading}>Loading...</p>
  }

  if (error) {
    return <p className={style.loading}>{error}</p>
  }

  return (
    <div className={style.food}>
      <Card>
        <ul>
          {meals.map(({ id, name, description, price }) => {
            return <FoodItem key={id} id={id} name={name} description={description} price={price} />
          })}
        </ul>
      </Card>
    </div>
  )
}

export default FoodList