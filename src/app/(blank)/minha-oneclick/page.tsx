"use client"

import { Box, Button, Container, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";

const center = {
  display: 'flex', alignItems: 'center', justifyContent: 'center'
}

export default function LoginPage() {
  return (
    <Container sx={center}>
      <Box component={Stack} sx={{ width: 400, height: 600, mt: 10, borderRadius: 5, background: '#ededed', padding: 5 }} spacing={5}>
        <Box sx={center}>
          <Image src="/img/logo-ft.png" width={150} height={80} alt="logo oneclick" />
        </Box>
        <TextField
          variant="filled"
          label="CPF ou email"
          placeholder="CPF ou EMAIL"
          fullWidth
        />
        <TextField
          variant="filled"
          label="Sua senha"
          placeholder="Sua senha"
          fullWidth
        />
        <Box component={Stack} spacing={1}>
          <Button
            variant="contained"
            sx={{
              height: 50,
              background: "linear-gradient(to right, #0097b2, #7ed759)",
              color: "#fff",
              fontWeight: 600,
              textTransform: "none",
              borderRadius: "12px",
              paddingX: 3,

              "&:hover": {
                background: "linear-gradient(to right, #00839b, #6bc14d)",
              },
            }}
          >
            Entrar
          </Button>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end'}}>
            <a href=""><Typography variant="body2">Esqueceu a senha?</Typography></a>
          </Box>
        </Box>
        <Typography textAlign="center" variant="body2">Todos direitos reservados <b>OneClick Fibra</b></Typography>
      </Box>
    </Container>
  )
}