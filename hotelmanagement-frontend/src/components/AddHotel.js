import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "40px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
  },
  field: {
    margin: "15px",
    background: "rgba(220, 220, 220, 0.6)",
  
  },
  button: {
    margin: "10px",
    width: "50%",
    alignSelf: "center",
    
  },
}));

const AddHotel = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (name && address && phone && email && website) {
      
      const hotel = { name, address, phone, email, website };
      
      axios
        .post("http://localhost:8080/api/hotels", hotel)
        .then((response) => {
        
          console.log(response.data);
          alert("Hotel added successfully!");
        })
        .catch((error) => {
         
          console.log(error);
          alert("Something went wrong!");
        });
    } else {
      alert("Please fill all the fields!");
    }
  };

  return (
    <Container className={classes.root}>
      <Typography variant="h4">Add a new hotel</Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          className={classes.field}
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          className={classes.field}
          label="Address"
          variant="outlined"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <TextField
          className={classes.field}
          label="Phone"
          variant="outlined"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <TextField
          className={classes.field}
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          className={classes.field}
          label="Website"
          variant="outlined"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          type="submit"
        >
          Add Hotel
        </Button>
      </form>
    </Container>
  );
};

export default AddHotel;
