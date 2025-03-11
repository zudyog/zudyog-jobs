
import React from "react";
import Auth from "@/features/auth/components/Auth";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
export default function LandingPage() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Auth />
      </Box>
    </Container>
  )
}

