import ModalButton from "./IngredientModal";
import Box from "@mui/material/Box";

const RecipeCard = ({ recipe }) => {
  <Box
    sx={{ maxWidth: "md" }}
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
  >
    <img src={recipe.image} alt={recipe.title} />

    <Box sx={{ p: 6 }}>
      <Box alignItems="baseline">
        <Box
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="xs"
          textTransform="uppercase"
        >
          <h1>&bull; {recipe.missedIngredients.length} missing ingredients</h1>
          <h1>&bull; {recipe.unusedIngredients.length} unused ingredients</h1>
        </Box>
      </Box>

      <Box>{recipe.title}</Box>

      <Box alignItems="center">
        <p>
          Rating:{" "}
          {recipe.likes === 1
            ? `${recipe.likes} Like`
            : `${recipe.likes} Likes`}{" "}
        </p>
      </Box>
      <ModalButton recipe={recipe} />
    </Box>
  </Box>;
};

export default RecipeCard;
