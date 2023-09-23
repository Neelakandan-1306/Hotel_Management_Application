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

const Reservation = () => {
  const classes = useStyles();
  const [reservations, setReservations] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [reservation, setReservation] = useState({
    id: "",
    guest: 
    {
      id:"",
    },
    room:
    { id:"",
  },
    dateIn: "",
    dateOut: "",
    status: "",
    paymentMethod: "",
  });

  useEffect(() => {
    fetchReservations();
  }, []);

  const fetchReservations = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/reservations");
      setReservations(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAdd = async () => {
    try {
      await axios.post("http://localhost:8080/api/reservations", reservation);
      fetchReservations();
      setShowAdd(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(
        `http://localhost:8080/api/reservations/${reservation.id}`,
        reservation
      );
      fetchReservations();
      setShowUpdate(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/reservations/${reservation.id}`);
      fetchReservations();
      setShowDelete(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservation((prevReservation) => ({
      ...prevReservation,
      [name]: value,
    }));
  };

  return (
    <div style={{backgroundColor:'#f1f0e7'}}>
       <div className={classes.header}>MANAGE RESERVATIONS</div>
       
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
        <Table aria-label="Reservations">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeadCell}>Reservation ID</TableCell>
              <TableCell className={classes.tableHeadCell}>Guest ID</TableCell>
              <TableCell className={classes.tableHeadCell}>Room ID</TableCell>
              <TableCell className={classes.tableHeadCell}>Date In</TableCell>
              <TableCell className={classes.tableHeadCell}>Date Out</TableCell>
              <TableCell className={classes.tableHeadCell}>Status</TableCell>
              <TableCell className={classes.tableHeadCell}>Payment Method</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reservations.map((reservation) => (
              <TableRow key={reservation.id}>
                <TableCell className={classes.tableCell}>{reservation.id}</TableCell>
                <TableCell className={classes.tableCell}>{reservation.guest.id}</TableCell>
                <TableCell className={classes.tableCell}>{reservation.room.id}</TableCell>
                <TableCell className={classes.tableCell}>{reservation.dateIn}</TableCell>
                <TableCell className={classes.tableCell}>{reservation.dateOut}</TableCell>
                <TableCell className={classes.tableCell}>{reservation.status}</TableCell>
                <TableCell className={classes.tableCell}>{reservation.paymentMethod}</TableCell>
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
              {/* Add Reservation form fields */}
              <TextField
                className={classes.field}
                label="Reservation ID"
                variant="outlined"
                name="id"
                value={reservation.id}
                onChange={handleChange}
              />
              <TextField
                className={classes.field}
                label="Guest ID"
                variant="outlined"
                name="guest_id"
                value={reservation.guest_id}
                onChange={handleChange}
              />
              <TextField
                className={classes.field}
                label="Room ID"
                variant="outlined"
                name="room_id"
                value={reservation.room_id}
                onChange={handleChange}
              />
              <TextField
                className={classes.field}
                label="Date In"
                variant="outlined"
                name="dateIn"
                value={reservation.dateIn}
                onChange={handleChange}
              />
              <TextField
                className={classes.field}
                label="Date Out"
                variant="outlined"
                name="dateOut"
                value={reservation.dateOut}
                onChange={handleChange}
              />
              <TextField
                className={classes.field}
                label="Status"
                variant="outlined"
                name="status"
                value={reservation.status}
                onChange={handleChange}
              />
              <TextField
                className={classes.field}
                label="Payment Method"
                variant="outlined"
                name="paymentMethod"
                value={reservation.paymentMethod}
                onChange={handleChange}
              />
                           <Button
  variant="contained"
  color="secondary"
  type="submit"
  style={{ backgroundColor: "#805241", color: "#fff" }}
>
  ADD RESERVATION
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
              {/* Update Reservation form fields */}
              <TextField
                className={classes.field}
                label="Reservation ID"
                variant="outlined"
                name="id"
                value={reservation.id}
                onChange={handleChange}
              />
              {/* Add other fields for updating */}
              <Button
  variant="contained"
  color="secondary"
  type="submit"
  style={{ backgroundColor: "#805241", color: "#fff" }}
>
  UPDATE RESERVATION
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
              {/* Delete Reservation form fields */}
              <TextField
                className={classes.field}
                label="Reservation ID"
                variant="outlined"
                name="id"
                value={reservation.id}
                onChange={handleChange}
              />
             <Button
  variant="contained"
  color="secondary"
  type="submit"
  style={{ backgroundColor: "#805241", color: "#fff" }}
>
  DELETE RESERVATION
</Button>
            </form>
          </div>
        </Modal>
      )}
    </Container>
    </div>
  );
};

export default Reservation;
