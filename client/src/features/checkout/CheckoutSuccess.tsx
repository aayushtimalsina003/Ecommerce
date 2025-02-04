import {
  Box,
  Button,
  Container,
  Divider,
  Typography,
  Card,
  CardContent,
  Grid2,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { Order } from "../../app/models/order";
import {
  currencyFormat,
  formatAddressString,
  formatPaymentString,
} from "../../lib/util";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function CheckoutSuccess() {
  const { state } = useLocation();
  const order = state.data as Order;

  if (!order) return <Typography>Problem accessing the order</Typography>;

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box textAlign="center" mb={4}>
        <CheckCircleOutlineIcon
          sx={{ fontSize: 60, color: "success.main", mb: 2 }}
        />
        <Typography variant="h4" gutterBottom fontWeight="bold" color="primary">
          Thanks for your fake order!
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          Your order <strong>#{order.id}</strong> will never be processed as
          this is a fake shop
        </Typography>
      </Box>

      <Card elevation={3} sx={{ mb: 4 }}>
        <CardContent>
          <Grid2 container spacing={3}>
            <Grid2>
              <Box display="flex" alignItems="center" mb={2}>
                <ShoppingCartIcon sx={{ mr: 2, color: "primary.main" }} />
                <Typography variant="h6">Order Details</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" mb={2}>
                <Typography variant="body2" color="textSecondary">
                  Order date
                </Typography>
                <Typography variant="body2" fontWeight="bold" ml={2}>
                  {order.orderDate}
                </Typography>
              </Box>
              <Divider />
            </Grid2>

            <Grid2>
              <Box display="flex" alignItems="center" mb={2}>
                <CreditCardIcon sx={{ mr: 2, color: "primary.main" }} />
                <Typography variant="h6">Payment Information</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" mb={2}>
                <Typography variant="body2" color="textSecondary">
                  Payment method
                </Typography>
                <Typography variant="body2" fontWeight="bold" ml={2}>
                  {formatPaymentString(order.paymentSummary)}
                </Typography>
              </Box>
              <Divider />
            </Grid2>

            <Grid2>
              <Box display="flex" alignItems="center" mb={2}>
                <LocalShippingIcon sx={{ mr: 2, color: "primary.main" }} />
                <Typography variant="h6">Shipping Information</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" mb={2}>
                <Typography variant="body2" color="textSecondary">
                  Shipping Address
                </Typography>
                <Typography variant="body2" fontWeight="bold" ml={2}>
                  {formatAddressString(order.shippingAddress)}
                </Typography>
              </Box>
              <Divider />
            </Grid2>

            <Grid2>
              <Box
                display="flex"
                justifyContent="space-between"
                sx={{ mt: 1, ml: 10 }}
              >
                <Typography variant="h6" color="primary" mt={4} mr={2}>
                  Total Amount
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  color="primary"
                  mt={4}
                  mr={2}
                >
                  {currencyFormat(order.total)}
                </Typography>
              </Box>
            </Grid2>
          </Grid2>
        </CardContent>
      </Card>

      <Box display="flex" justifyContent="center" gap={2}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to={`/orders/${order.id}`}
          size="large"
          startIcon={<ShoppingCartIcon />}
        >
          View your order
        </Button>
        <Button
          component={Link}
          to="/catelog"
          variant="outlined"
          color="primary"
          size="large"
          startIcon={<LocalShippingIcon />}
        >
          Continue Shopping
        </Button>
      </Box>
    </Container>
  );
}
