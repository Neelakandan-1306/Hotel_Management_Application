package com.example.hotel.service;

import com.example.hotel.model.Reservation;
import com.example.hotel.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;


    public List<Reservation> getAllReservations() {
        return reservationRepository.findAll();
    }

  
    public Optional<Reservation> getReservationById(Long id) {
        return reservationRepository.findById(id);
    }

  
    public Reservation addReservation(Reservation reservation) {
        return reservationRepository.save(reservation);
    }

    
//    public Reservation updateReservation(Long id, Reservation reservation) {
//        Optional<Reservation> existingReservation = reservationRepository.findById(id);
//        if (existingReservation.isPresent()) {
//            Reservation updatedReservation = existingReservation.get();
//            updatedReservation.setGuest(reservation.getGuest());
//            updatedReservation.setRoom(reservation.getRoom());
//            updatedReservation.setDateIn(reservation.getDateIn());
//            updatedReservation.setDateOut(reservation.getDateOut());
//            updatedReservation.setStatus(reservation.getStatus());
//            updatedReservation.setPaymentMethod(reservation.getPaymentMethod());
//       
//            return reservationRepository.save(updatedReservation);
//        } else {
//            return null;
//        }
//    }
    public Reservation updateResesrvation(Reservation reservation)
    {
    	return reservationRepository.saveAndFlush(reservation);
    }

    
    public void deleteReservation(Long id) {
        reservationRepository.deleteById(id);
    }

   
}
