import Grid from '@mui/material/Grid';
import RecipeCard from './RecipeCard'

const RecipeCards = ({ recipes }) => {
    return (
        <Grid item xs={4} sx={{ m: "1.25rem" }}>
             {recipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      )) || <p>No recipes can be made with your ingredients :(</p>}
            
        </Grid>

    )
    
}

export default RecipeCards;