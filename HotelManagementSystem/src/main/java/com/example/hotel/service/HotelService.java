package com.example.hotel.service;

import com.example.hotel.model.Hotel;
import com.example.hotel.repository.HotelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HotelService {

   @Autowired
   private HotelRepository hotelRepository;

  
   public List<Hotel> getAllHotels() {
      return hotelRepository.findAll();
   }

   
   public Optional<Hotel> getHotelById(Long id) {
      return hotelRepository.findById(id);
   }

   
   public Hotel addHotel(Hotel hotel) {
      return hotelRepository.save(hotel);
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
//         return guestRepository.save(uHpdatedGuest);
//      } else {
//         return null;
//      }
//   }
   public Hotel updateHotel(Hotel hotel)
   {
	   return hotelRepository.saveAndFlush(hotel);
   }

  
   public void deleteHotel(Long id) {
      hotelRepository.deleteById(id);
   }
   
   public List<Hotel> sort(String name)
   {
	   return hotelRepository.findAll(Sort.by(Sort.DEFAULT_DIRECTION,name));
   }
   public Page<Hotel> paginate(int pageno,int pagesize)
   {
	   return hotelRepository.findAll(PageRequest.of(pageno, pagesize));
   }
   
   
   

  
}
