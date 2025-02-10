import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <Box
      maxWidth="xl"
      mx="auto"
      px={4}
      position="relative"
      minHeight="100vh"
      display="flex"
    >
      <Box
        position="relative"
        width="100%"
        height="80vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="16px"
        overflow="hidden"
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          width="100%"
          height="100%"
        >
          <img
            src="images/hero3.jpg"
            alt="Ski resort image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "16px",
              zIndex: 0,
            }}
          />
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bgcolor="rgba(0, 0, 0, 0.4)"
            zIndex={1}
          />
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          p={6}
          borderRadius={4}
          position="relative"
          zIndex={2}
          textAlign="center"
        >
          <Typography
            variant="h2"
            color="white"
            fontWeight="bold"
            sx={{
              mb: 2,
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            }}
          >
            Welcome to ShopSphere
          </Typography>
          <Typography
            variant="h5"
            color="white"
            sx={{
              mb: 4,
              opacity: 0.9,
              maxWidth: "600px",
              textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
            }}
          >
            Discover amazing products at unbeatable prices.
          </Typography>
          <Button
            variant="contained"
            size="large"
            component={Link}
            to="/catelog"
            sx={{
              backgroundImage: "linear-gradient(to right, #2563eb, #06b6d4)",
              fontWeight: "bold",
              color: "white",
              borderRadius: "16px",
              px: 8,
              py: 2,
              border: "2px solid transparent",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-3px)",
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                backgroundImage: "linear-gradient(to right, #1e40af, #0891b2)",
              },
            }}
          >
            Go to Shop
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
