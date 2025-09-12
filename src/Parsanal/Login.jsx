import React, { useState } from "react";
import {
  Box,
  Paper,
  Title,
  TextInput,
  PasswordInput,
  Button,
  Text,
} from "@mantine/core";
import { keyframes } from "@mantine/styles";

export default function LoginPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [shake, setShake] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && password && address) {
      setLoading(true);
      setTimeout(() => {
        alert(`Welcome ${name}! Login successful.`);
        setLoading(false);
        setName("");
        setEmail("");
        setPassword("");
        setAddress("");
      }, 1000);
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      alert("Please enter all fields.");
    }
  };

  const shakeAnimation = keyframes({
    "0%, 100%": { transform: "translateX(0)" },
    "20%, 60%": { transform: "translateX(-8px)" },
    "40%, 80%": { transform: "translateX(8px)" },
  });

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg, #667eea, #764ba2, #ff6a88, #ff99ac)",
        backgroundSize: "400% 400%",
        animation: "gradientBG 15s ease infinite",
        padding: 20,
      }}
    >
      <style>
        {`
        @keyframes gradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}
      </style>

      <Paper
        shadow="xl"
        radius="lg"
        p="2em"
        sx={{
          width: "90%",
          maxWidth: 380,
          background: "rgba(255, 255, 255, 0.15)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          backdropFilter: "blur(12px)",
          color: "#fff",
          transition: "all 0.4s ease",
          animation: shake ? `${shakeAnimation} 0.5s` : "none",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
          },
        }}
      >
        <Title
          order={2}
          align="center"
          mb="sm"
          sx={{
            fontWeight: "900",
            color: "#fff",
            textShadow: "2px 4px 8px rgba(0,0,0,0.3)",
          }}
        >
          Welcome Back
        </Title>
        <Text
          align="center"
          mb="lg"
          sx={{ color: "#f0f0f0", fontSize: "0.95rem" }}
        >
          Please login to continue
        </Text>

        <form onSubmit={handleSubmit}>
          <TextInput
            label="Name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            mb="md"
            required
          />
          <TextInput
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            mb="md"
            required
          />
          <PasswordInput
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            mb="md"
            required
          />
          <TextInput
            label="Address"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            mb="md"
            required
          />

          <Button
            type="submit"
            fullWidth
            size="md"
            loading={loading}
            sx={{
              marginTop: "10px",
              backgroundColor: "#ff6a88",
              color: "#fff",
              fontWeight: 600,
              borderRadius: 8,
              "&:hover": {
                backgroundColor: "#ff99ac",
                transform: "translateY(-2px)",
              },
              "&:active": { transform: "translateY(0)" },
              transition: "all 0.3s ease",
            }}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>
      </Paper>
    </Box>
  );
}
