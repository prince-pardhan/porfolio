import React, { useState } from "react";
import { Box, Paper, Title, TextInput, PasswordInput, Button, Text } from "@mantine/core";
import { keyframes } from "@mantine/styles";

export default function HackerLogin() {
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
        alert(`Access Granted! Welcome ${name}`);
        setLoading(false);
        setName(""); setEmail(""); setPassword(""); setAddress("");
      }, 1000);
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      alert("ERROR: All fields required!");
    }
  };

  const shakeAnim = keyframes({
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
        background: "linear-gradient(135deg, #000000 0%, #111111 40%, #1a0033 100%)",
        fontFamily: "'Courier New', monospace",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Matrix overlay */}
      <div className="matrix-bg"></div>
      <style>{`
        .matrix-bg {
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(
            0deg,
            rgba(0,255,0,0.05) 0px,
            rgba(255,0,255,0.05) 1px,
            transparent 1px,
            transparent 2px
          );
          z-index: 0;
          animation: scroll 1.5s linear infinite;
        }
        @keyframes scroll {
          0% { background-position-y: 0; }
          100% { background-position-y: 100px; }
        }
        .cursor {
          display: inline-block;
          width: 8px;
          height: 1.2em;
          background: #ff00ff;
          margin-left: 2px;
          animation: blink 1s step-start infinite;
        }
        @keyframes blink { 50% { background: transparent; } }
      `}</style>

      <Paper
        shadow="xl"
        radius="lg"
        p="2em"
        sx={{
          width: "90%",
          maxWidth: 420,
          background: "rgba(0,0,0,0.85)",
          border: "2px solid transparent",
          borderImage: "linear-gradient(45deg, #0ff, #ff00ff, #00ff00, #ff6600) 1",
          backdropFilter: "blur(12px)",
          color: "#fff",
          transition: "all 0.4s ease",
          animation: shake ? `${shakeAnim} 0.5s` : "none",
          position: "relative",
          zIndex: 1,
          "&:hover": {
            boxShadow: "0 0 20px #0ff, 0 0 30px #ff00ff, 0 0 40px #ff6600",
            transform: "translateY(-3px)",
          },
        }}
      >
        <Title
          order={2}
          align="center"
          mb="sm"
          sx={{
            background: "linear-gradient(90deg, #0ff, #ff00ff, #ff6600, #00ff00)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: 800,
            textShadow: "0 0 15px #ff00ff",
          }}
        >
          Hacker Terminal <span className="cursor"></span>
        </Title>
        <Text
          align="center"
          mb="lg"
          sx={{ fontSize: "0.95rem", color: "#ccc" }}
        >
          Enter your credentials to initiate access
        </Text>

        <form onSubmit={handleSubmit}>
          {[{label:"Name", value:name, set:setName}, {label:"Email", value:email, set:setEmail}, {label:"Password", value:password, set:setPassword, type:"password"}, {label:"Address", value:address, set:setAddress}].map((f,i)=>(
            f.type==="password" ? 
              <PasswordInput
                key={i}
                label={f.label}
                placeholder={`Enter ${f.label.toLowerCase()}`}
                value={f.value}
                onChange={(e)=>f.set(e.target.value)}
                mb="md"
                required
                sx={{
                  input: {
                    borderColor: "#ff00ff",
                    color: "#0ff",
                    background: "rgba(0,0,0,0.6)",
                    "&:focus": { borderColor: "#ff6600", boxShadow: "0 0 10px #ff6600" },
                  },
                  label: { color: "#ff00ff" },
                }}
              /> :
              <TextInput
                key={i}
                label={f.label}
                placeholder={`Enter ${f.label.toLowerCase()}`}
                value={f.value}
                onChange={(e)=>f.set(e.target.value)}
                mb="md"
                required
                sx={{
                  input: {
                    borderColor: "#0ff",
                    color: "#ff6600",
                    background: "rgba(0,0,0,0.6)",
                    "&:focus": { borderColor: "#00ff00", boxShadow: "0 0 10px #00ff00" },
                  },
                  label: { color: "#00ff00" },
                }}
              />
          ))}

          <Button
            type="submit"
            fullWidth
            size="md"
            loading={loading}
            sx={{
              marginTop: "10px",
              background: "linear-gradient(45deg, #0ff, #ff00ff, #ff6600)",
              color: "#000",
              fontWeight: 700,
              borderRadius: 6,
              fontFamily: "'Courier New', monospace",
              "&:hover": {
                background: "linear-gradient(45deg, #ff00ff, #00ff00, #0ff)",
                transform: "translateY(-2px)",
                boxShadow:"0 0 15px #0ff, 0 0 30px #ff00ff, 0 0 45px #ff6600"
              },
              "&:active": { transform: "translateY(0)" },
              transition: "all 0.3s ease",
            }}
          >
            {loading ? "Accessing..." : "LOGIN"}
          </Button>
        </form>
      </Paper>
    </Box>
  );
}
