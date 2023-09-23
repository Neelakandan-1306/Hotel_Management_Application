package com.example.hotel.model;


import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.Data;

@Data
@Entity
@Table(name = "reservation")
public class Reservation {


@Id
  
   private Long id;
   
   @ManyToOne
   @JoinColumn(name="guest_id", nullable=false)
   private Guest guest;
   
   @ManyToOne
   @JoinColumn(name="room_id", nullable=false)
   private Room room;
   
   @Temporal(TemporalType.DATE)
   @Column(name="date_in", nullable=false)
   private Date dateIn; 
   
   @Column(name="date_out", nullable=false)
   @Temporal(TemporalType.DATE)
   private Date dateOut; 
   
   @Column(name="status", nullable=false)
   private String status; 
   
   @Column(name="payment_method", nullable=false)
   private String paymentMethod;

public Reservation() {
	super();
	// TODO Auto-generated constructor stub
}

public Reservation(Long id, Guest guest, Room room, Date dateIn, Date dateOut, String status, String paymentMethod) {
	super();
	this.id = id;
	this.guest = guest;
	this.room = room;
	this.dateIn = dateIn;
	this.dateOut = dateOut;
	this.status = status;
	this.paymentMethod = paymentMethod;
}

public Long getId() {
	return id;
}

public void setId(Long id) {
	this.id = id;
}

public Guest getGuest() {
	return guest;
}

public void setGuest(Guest guest) {
	this.guest = guest;
}

public Room getRoom() {
	return room;
}

public void setRoom(Room room) {
	this.room = room;
}

public Date getDateIn() {
	return dateIn;
}

public void setDateIn(Date dateIn) {
	this.dateIn = dateIn;
}

public Date getDateOut() {
	return dateOut;
}

public void setDateOut(Date dateOut) {
	this.dateOut = dateOut;
}

public String getStatus() {
	return status;
}

public void setStatus(String status) {
	this.status = status;
}

public String getPaymentMethod() {
	return paymentMethod;
}

public void setPaymentMethod(String paymentMethod) {
	this.paymentMethod = paymentMethod;
}
   
  
}
