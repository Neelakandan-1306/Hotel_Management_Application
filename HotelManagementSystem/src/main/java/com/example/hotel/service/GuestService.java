package com.example.hotel.service;

import com.example.hotel.model.Guest;
import com.example.hotel.repository.GuestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GuestService {

   @Autowired
   private GuestRepository guestRepository;

  
   public List<Guest> getAllGuests() {
      return guestRepository.findAll();
   }

   
   public Optional<Guest> getGuestById(Long id) {
      return guestRepository.findById(id);
   }

   
   public Guest addGuest(Guest guest) {
      return guestRepository.save(guest);
   }

   
//   public Guest updateGuest(Long id, Guest guest) {
//      Optional<Guest> existingGuest = guestRepository.findById(id);
//      if (existingGuest.isPresent()) {
//         Guest updatedGuest = existingGuest.get();
//         updatedGuest.setFirstName(guest.getFirstName());
//         updatedGuest.setLastName(guest.getLastName());
//         updatedGuest.setPhone(guest.getPhone());
//         updatedGuest.setEmail(guest.getEmail());
//         updatedGuest.setAddress(guest.getAddress());
//         updatedGuest.setMemberSince(guest.getMemberSince());
//         return guestRepository.save(updatedGuest);
//      } else {
//         return null;
//      }
//   }
   public Guest updateGuest(Guest guest)
   {
	   return guestRepository.saveAndFlush(guest);
   }

  
   public void deleteGuest(Long id) {
      guestRepository.deleteById(id);
   }

  
}
