import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container, Typography, TextField, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  
  root: {

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "40px",
    width:"100%",
    height:"100%",
    backgroundColor:"#f1f0e7"
  },
  header: {
    height: "120px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Montserrat", // Set the font family to Montserrat
    fontSize:"50px", // Adjust font size as needed
    background: "#805241", // Set the background color for the header
    // Set the background color for the header
    color: "#f1f0e7", // Set text color for the header
  },
  button: {
    margin: "10px",
    width: "50%",
    alignSelf: "center",
  },
  table: {
    minWidth: 650,
  },
  modalContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    
  },
  modalContent: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)", // Add box shadow for the card effect
    padding: theme.spacing(2, 9, 3),
    borderRadius: "8px",
    maxWidth: "100%", // Adjust the width of the modal content
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "100%", // Adjust the width of the form fields to 100%
  },
  field: {
    margin: "15px",
  },
  iconButton: {
    margin: "30px",
    fontSize: "32px",
    borderRadius: "0",
    backgroundColor: "#805241",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#805241",
    },
  },
  iconContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom:"20px"
  },
  tableHeadCell: {
    backgroundColor: "#805241",
    color: "#f1f0e7",
    fontSize:"20px",
    textTransform: "uppercase",
    fontFamily: "Montserrat",
  },
  tableCell: {
    fontFamily: "Montserrat",
    fontSize: "17px",
    textTransform: "uppercase",
   
  }
  
}));

const Guest = () => {
  const classes = useStyles();
  const [guests, setGuests] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [guest, setGuest] = useState({
    id: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    fetchGuests();
  }, []);

  const fetchGuests = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/guests");
      setGuests(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAdd = async () => {
    try {
      await axios.post("http://localhost:8080/api/guests", guest);
      fetchGuests();
      setShowAdd(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:8080/api/guests/${guest.id}`, guest);
      fetchGuests();
      setShowUpdate(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/guests/${guest.id}`);
      fetchGuests();
      setShowDelete(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGuest((prevGuest) => ({
      ...prevGuest,
      [name]: value,
    }));
  };

  return (
    <div style={{backgroundColor:'#f1f0e7'}}>
      <div className={classes.header}>MANAGE GUESTS</div>
    <Container className={classes.root}>
     
     
    <div className={classes.iconContainer}>
          <IconButton
            variant="contained"
            className={classes.iconButton}
            onClick={() => setShowAdd(true)}
          >
            <AddIcon />
          </IconButton>
          <IconButton
            variant="contained"
            className={classes.iconButton}
            onClick={() => setShowUpdate(true)}
          >
            <ArrowUpwardIcon />
          </IconButton>
          <IconButton
            variant="contained"
            className={classes.iconButton}
            onClick={() => setShowDelete(true)}
          >
            <DeleteIcon />
          </IconButton>
        </div>

        <TableContainer component={Paper} className={classes.table}>
        <Table aria-label="Guests">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeadCell}>Guest ID</TableCell>
              <TableCell className={classes.tableHeadCell}>First Name</TableCell>
              <TableCell className={classes.tableHeadCell}>Last Name</TableCell>
              <TableCell className={classes.tableHeadCell}>Phone</TableCell>
              <TableCell className={classes.tableHeadCell}>Email</TableCell>
              <TableCell className={classes.tableHeadCell}>Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {guests.map((guest) => (
              <TableRow key={guest.id}>
                <TableCell className={classes.tableCell}>{guest.id}</TableCell>
                <TableCell className={classes.tableCell}>{guest.firstName}</TableCell>
                <TableCell className={classes.tableCell}>{guest.lastName}</TableCell>
                <TableCell className={classes.tableCell}>{guest.phone}</TableCell>
                <TableCell className={classes.tableCell}>{guest.email}</TableCell>
                <TableCell className={classes.tableCell}>{guest.address}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add Modal */}
      {showAdd && (
        <Modal
          open={showAdd}
          onClose={() => setShowAdd(false)}
          className={classes.modalContainer}
        >
          <div className={classes.modalContent}>
            <form className={classes.form} onSubmit={handleAdd}>
              {/* Add Guest form fields */}
              <TextField
                className={classes.field}
                label="First Name"
                variant="outlined"
                name="firstName"
                value={guest.firstName}
                onChange={handleChange}
              />
              <TextField
                className={classes.field}
                label="Last Name"
                variant="outlined"
                name="lastName"
                value={guest.lastName}
                onChange={handleChange}
              />
              <TextField
                className={classes.field}
                label="Phone"
                variant="outlined"
                name="phone"
                value={guest.phone}
                onChange={handleChange}
              />
              <TextField
                className={classes.field}
                label="Email"
                variant="outlined"
                name="email"
                value={guest.email}
                onChange={handleChange}
              />
              <TextField
                className={classes.field}
                label="Address"
                variant="outlined"
                name="address"
                value={guest.address}
                onChange={handleChange}
              />

<Button
  variant="contained"
  color="primary"
  type="submit"
  style={{ backgroundColor: "#805241", color: "#fff" }}
>
  ADD GUEST
</Button>
            </form>
          </div>
        </Modal>
      )}

      {/* Update Modal */}
      {showUpdate && (
        <Modal
          open={showUpdate}
          onClose={() => setShowUpdate(false)}
          className={classes.modalContainer}
        >
          <div className={classes.modalContent}>
            <form className={classes.form} onSubmit={handleUpdate}>
              {/* Update Guest form fields */}
              <TextField
                className={classes.field}
                label="Guest ID"
                variant="outlined"
                name="id"
                value={guest.id}
                onChange={handleChange}
              />
              <TextField
                className={classes.field}
                label="First Name"
                variant="outlined"
                name="firstName"
                value={guest.firstName}
                onChange={handleChange}
              />
              <TextField
                className={classes.field}
                label="Last Name"
                variant="outlined"
                name="lastName"
                value={guest.lastName}
                onChange={handleChange}
              />
              <TextField
                className={classes.field}
                label="Phone"
                variant="outlined"
                name="phone"
                value={guest.phone}
                onChange={handleChange}
              />
              <TextField
                className={classes.field}
                label="Email"
                variant="outlined"
                name="email"
                value={guest.email}
                onChange={handleChange}
              />
              <TextField
                className={classes.field}
                label="Address"
                variant="outlined"
                name="address"
                value={guest.address}
                onChange={handleChange}
              />

<Button
  variant="contained"
  color="primary"
  type="submit"
  style={{ backgroundColor: "#805241", color: "#fff" }}
>
  UPDATE GUEST
</Button>
            </form>
          </div>
        </Modal>
      )}

      {/* Delete Modal */}
      {showDelete && (
        <Modal
          open={showDelete}
          onClose={() => setShowDelete(false)}
          className={classes.modalContainer}
        >
          <div className={classes.modalContent}>
          
            <form className={classes.form} onSubmit={handleDelete}>
              {/* Delete Guest form fields */}
              <TextField
                className={classes.field}
                label="Guest ID"
                variant="outlined"
                name="id"
                value={guest.id}
                onChange={handleChange}
              />
<Button
  variant="contained"
  color="secondary"
  type="submit"
  style={{ backgroundColor: "#805241", color: "#fff" }}
>
  DELETE GUEST
</Button>
            </form>
          </div>
        </Modal>
      )}
    </Container>
    </div>
  );
};

export default Guest;
