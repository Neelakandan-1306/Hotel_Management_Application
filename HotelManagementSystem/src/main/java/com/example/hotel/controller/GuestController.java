package com.example.hotel.controller;

import com.example.hotel.model.Guest;
import com.example.hotel.service.GuestService;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin
@RestController
@RequestMapping("/api/guests")
public class GuestController {

    @Autowired
    private GuestService guestService;

    @GetMapping
    public List<Guest> getAllGuests() {
        return guestService.getAllGuests();
   
    }

    @GetMapping("/{id}")
    public Optional<Guest> getGuestById(@PathVariable Long id) {
        return guestService.getGuestById(id);
       
    }

    @PostMapping
    public Guest addGuest(@RequestBody Guest guest) {
        return guestService.addGuest(guest);
        
    }

    @PutMapping("gmap")
    public Guest updateGuest(@RequestBody Guest guest) {
        return guestService.updateGuest(guest);
       
    }

    @DeleteMapping("/{id}")
    public void  deleteGuest(@PathVariable Long id) {
        guestService.deleteGuest(id);
        
    }
}
