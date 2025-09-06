import React, { useState } from "react";
import { Box, Paper, Title, TextInput, PasswordInput, Button, Text } from "@mantine/core";
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
    '0%, 100%': { transform: 'translateX(0)' },
    '20%, 60%': { transform: 'translateX(-8px)' },
    '40%, 80%': { transform: 'translateX(8px)' },
  });

  return (
      <Box
      sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "black",
          padding: 20,
        }}
        >
        <div id="login">
      <Paper
        shadow="xl"
        radius="md"
        p="2em"
        sx={{
          width: "90%",
          maxWidth: 350,
          background: "linear-gradient(135deg, #0bb1e4, #33df3b)",
          color: "#ff8c00ff",
          transition: "all 0.4s ease",
          transform: shake ? "translateY(0)" : "translateY(0)",
          animation: shake ? `${shakeAnimation} 0.5s` : "none",
          '&:hover': {
            transform: "translateY(-5px)",
            boxShadow: "0 15px 30px rgba(0,0,0,0.4)",
          },
        }}
      >
        <Title order={2} align="center" mb="lg" sx={{ textShadow: "1px 1px 3px rgba(0,0,0,0.2)" }}>
           welcome 
        </Title>
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            mb="md"
            required
            styles={{
            //   label: { color: "#000000ff" },
              input: {
                // backgroundColor: "linear-gradient(135deg, #0bb1e4, #33df3b)",
                color: "#333",
                borderRadius: 6,
                boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
              },
            }}
          />
          <TextInput
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            mb="md"
            required
            styles={{
              label: { color: "#000000ff" },
              input: {
                // backgroundColor: "rgba(255,255,255,0.9)",
                color: "#333",
                borderRadius: 6,
                boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
              },
            }}
          />
          <TextInput
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            mb="md"
            required
            styles={{
              label: { color: "#000000ff" },
              input: {
                // backgroundColor: "rgba(255,255,255,0.9)",
                color: "#333",
                borderRadius: 6,
                boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
              },
            }}
          />
          <PasswordInput
            label="Address"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            mb="md"
            required
            styles={{
              label: { color: "#000000ff" },
              input: {
                // backgroundColor: "rgba(255,255,255,0.9)",
                color: "#333",
                borderRadius: 6,
                boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
              },
            }}
          />
          <Button
            type="submit"
            fullWidth
            size="md"
            loading={loading}
            sx={{
              backgroundColor: "#fdbb2d",
              color: "#ff8000ff",
              fontWeight: 600,
              '&:hover': { backgroundColor: "#ffcc44", transform: "translateY(-2px)" },
              '&:active': { transform: "translateY(0)" },
              transition: "all 0.3s ease",
            }}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>
      
      </Paper>
      </div>
    </Box>
  );
}
