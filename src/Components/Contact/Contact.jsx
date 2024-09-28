import React, { useState } from "react";
import { Box, TextField, Button, Typography, Fade } from "@mui/material";
import { Helmet } from 'react-helmet'; //  Helmet
import "./contact.css";
import image from '../../assets/imageabout.jpeg';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
  };

  return (
    <Box
      className="contact-us"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        padding: "2rem",
        margin: "auto",
        maxWidth: 1900,
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Helmet>
        <title>Contact Us - HamsterPOS</title>
        <meta name="description" content="Get in touch with us for any inquiries or support regarding HamsterPOS." />
        <meta property="og:title" content="Contact Us - HamsterPOS" />
        <meta property="og:description" content="We are here to assist you with any questions or concerns." />
        <meta property="og:url" content="https://hamsterpos.com/contact" />
      </Helmet>

      <Fade in={true} timeout={1000}>
        <Box sx={{ flex: 1, marginRight: { md: 2 } }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ textAlign: 'center' }}>
            Contact Us
          </Typography>
          <form onSubmit={handleSubmit}>
            <Fade in={true} timeout={1500}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Fade>
            <Fade in={true} timeout={2000}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Fade>
            <Fade in={true} timeout={2500}>
              <TextField
                label="Message"
                variant="outlined"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </Fade>
            <Fade in={true} timeout={3000}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ marginTop: "1rem" }}
              >
                Send Message
              </Button>
            </Fade>
          </form>
        </Box>
      </Fade>
      <Fade in={true} timeout={3500}>
        <Box
          component="img"
          src={image}
          alt="Contact Us"
          sx={{
            width: { xs: "100%", md: "40%" },
            height: "auto",
            borderRadius: "8px",
            boxShadow: 2,
          }}  
        />
      </Fade>
    </Box>
  );
};

export default Contact;
