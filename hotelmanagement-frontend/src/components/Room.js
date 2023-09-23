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


const Room = () => {
  const classes = useStyles();
  const [rooms, setRooms] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [room, setRoom] = useState({
    hotel: {
      id: "",
    },
    id: "",
    number: "",
    type: "",
    capacity: "",
    price: "",
    available: "",
  });

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/rooms");
      setRooms(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAdd = async () => {
    try {
      await axios.post("http://localhost:8080/api/rooms", room);
      fetchRooms();
      setShowAdd(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:8080/api/rooms/${room.id}`, room);
      fetchRooms();
      setShowUpdate(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/rooms/${room.id}`);
      fetchRooms();
      setShowDelete(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoom((prevRoom) => {
      if (name === "hotelId") {
        return {
          ...prevRoom,
          hotel: {
            ...prevRoom.hotel,
            id: value,
          },
        };
      } else if (name === "updateHotelId") {
        return {
          ...prevRoom,
          hotel: {
            ...prevRoom.hotel,
            id: value,
          },
        };
      } else if (name === "roomId") {
        return {
          ...prevRoom,
          id: value,
        };
      } else {
        return {
          ...prevRoom,
          [name]: value,
        };
      }
    });
  };

  return (
    <div style={{backgroundColor:'#f1f0e7'}}>
    {/* Header */}
    <div className={classes.header}>MANAGE ROOMS</div>
    
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
      <Table aria-label="Rooms">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeadCell}>Hotel ID</TableCell>
            <TableCell className={classes.tableHeadCell}>Room ID</TableCell>
            <TableCell className={classes.tableHeadCell}>Number</TableCell>
            <TableCell className={classes.tableHeadCell}>Type</TableCell>
            <TableCell className={classes.tableHeadCell}>Capacity</TableCell>
            <TableCell className={classes.tableHeadCell}>Price</TableCell>
            <TableCell className={classes.tableHeadCell}>Available</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rooms.map((room) => (
            <TableRow key={room.id}>
              <TableCell className={classes.tableCell}>{room.hotel.id}</TableCell>
              <TableCell className={classes.tableCell}>{room.id}</TableCell>
              <TableCell className={classes.tableCell}>{room.number}</TableCell>
              <TableCell className={classes.tableCell}>{room.type}</TableCell>
              <TableCell className={classes.tableCell}>{room.capacity}</TableCell>
              <TableCell className={classes.tableCell}>{room.price}</TableCell>
              <TableCell className={classes.tableCell}>{room.available}</TableCell>
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
              {/* Add Room form fields */}
              <TextField
                className={classes.field}
                label="Hotel ID"
                variant="outlined"
                name="hotelId"
                value={room.hotel.id}
                onChange={handleChange}
              />
             <TextField
            className={classes.field}
            label="Room ID"
            variant="outlined"
            name="roomId"
            value={room.id}
            onChange={handleChange}
          />
          <TextField
            className={classes.field}
            label="Number"
            variant="outlined"
            name="number"
            value={room.number}
            onChange={handleChange}
          />
          <TextField
            className={classes.field}
            label="Type"
            variant="outlined"
            name="type"
            value={room.type}
            onChange={handleChange}
          />
          <TextField
            className={classes.field}
            label="Capacity"
            variant="outlined"
            name="capacity"
            value={room.capacity}
            onChange={handleChange}
          />
          <TextField
            className={classes.field}
            label="Price"
            variant="outlined"
            name="price"
            value={room.price}
            onChange={handleChange}
          />
          <TextField
            className={classes.field}
            label="Available"
            variant="outlined"
            name="available"
            value={room.available}
            onChange={handleChange}
          />

<Button
  variant="contained"
  color="primary"
  type="submit"
  style={{ backgroundColor: "#805241", color: "#fff" }}
>
  ADD ROOM
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
              {/* Update Room form fields */}
              <TextField
                className={classes.field}
                label="Hotel ID"
                variant="outlined"
                name="updateHotelId"
                value={room.hotel.id}
                onChange={handleChange}
              />
              <TextField
            className={classes.field}
            label="Room ID"
            variant="outlined"
            name="roomId"
            value={room.id}
            onChange={handleChange}
          />
          <TextField
            className={classes.field}
            label="Number"
            variant="outlined"
            name="number"
            value={room.number}
            onChange={handleChange}
          />
          <TextField
            className={classes.field}
            label="Type"
            variant="outlined"
            name="type"
            value={room.type}
            onChange={handleChange}
          />
          <TextField
            className={classes.field}
            label="Capacity"
            variant="outlined"
            name="capacity"
            value={room.capacity}
            onChange={handleChange}
          />
          <TextField
            className={classes.field}
            label="Price"
            variant="outlined"
            name="price"
            value={room.price}
            onChange={handleChange}
          />
          <TextField
            className={classes.field}
            label="Available"
            variant="outlined"
            name="available"
            value={room.available}
            onChange={handleChange}
          />
              <Button
  variant="contained"
  color="primary"
  type="submit"
  style={{ backgroundColor: "#805241", color: "#fff" }}
>
  UPDATE ROOM
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
              {/* Delete Room form fields */}
              <TextField
                className={classes.field}
                label="Room ID"
                variant="outlined"
                name="roomId"
                value={room.id}
                onChange={(e) => setRoom({ ...room, id: e.target.value })}
              />
              <Button
  variant="contained"
  color="secondary"
  type="submit"
  style={{ backgroundColor: "#805241", color: "#fff" }}
>
  DELETE ROOM
</Button>
            </form>
          </div>
        </Modal>
      )}
    </Container>
    </div>
  );
};

export default Room;
