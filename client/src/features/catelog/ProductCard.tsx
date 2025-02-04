import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Product } from "../../app/models/product";
import { Link } from "react-router-dom";
import { useAddBasketItemMutation } from "../basket/basketApi";
import { currencyFormat } from "../../lib/util";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const [addBasketItem, { isLoading }] = useAddBasketItemMutation();
  return (
    <Card
      elevation={4}
      sx={{
        width: 280,
        borderRadius: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
        },
      }}
    >
      <CardMedia
        sx={{
          height: 240,
          backgroundSize: "cover",
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
        image={product.pictureUrl}
      />
      <CardContent>
        <Typography
          gutterBottom
          sx={{
            textTransform: "uppercase",
            fontWeight: "bold",
            letterSpacing: 1,
          }}
          variant="subtitle2"
        >
          {product.name}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "secondary.main",
            fontWeight: "600",
            marginTop: 1,
          }}
        >
          {currencyFormat(product.price)}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between", padding: 2 }}>
        <Button
          disabled={isLoading}
          onClick={() => addBasketItem({ product, quantity: 1 })}
          variant="contained"
          sx={{
            borderRadius: 2,
            textTransform: "none",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: 2,
            },
          }}
        >
          Add to cart
        </Button>
        <Button
          component={Link}
          to={`/catelog/${product.id}`}
          variant="outlined"
          sx={{
            borderRadius: 2,
            textTransform: "none",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: 1,
            },
          }}
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
}
