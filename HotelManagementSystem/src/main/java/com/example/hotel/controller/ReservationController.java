package com.example.hotel.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.hotel.model.Reservation;
import com.example.hotel.service.ReservationService;
@CrossOrigin
@RestController
@RequestMapping("api/reservations")
public class ReservationController {

	
	@Autowired
	ReservationService reservationService;
	@PostMapping
	public Reservation addReservation(@RequestBody Reservation reservation)
	{
		return reservationService.addReservation(reservation);
	}
	@GetMapping
	public List<Reservation> getAllReservations( Reservation reservation)
	{
		return reservationService.getAllReservations();
	}
	@GetMapping("/{id}")
	public Optional<Reservation> getReservationById(@PathVariable Long id)
	{
		return reservationService.getReservationById(id);
	}
	
	@PutMapping
	public Reservation updateReservation(@RequestBody Reservation reservation)
	{
		return reservationService.updateResesrvation(reservation);
	}
	@DeleteMapping("/{id}")
	public void deleteReservation(@PathVariable Long id)
	{
		reservationService.deleteReservation(id);
	}
	
	
}
