package com.example.hotel.controller;


import com.example.hotel.model.Hotel;

import com.example.hotel.service.HotelService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})

@RequestMapping("/api/hotels")
public class HotelController {

    @Autowired
    private HotelService hotelService;
    @RequestMapping
    public List<Hotel> getAllHotels() {
        return hotelService.getAllHotels();
   
    }

    @GetMapping("/{id}")
    public Optional<Hotel> getHotelById(@PathVariable Long id) {
        return hotelService.getHotelById(id);
       
    }

    @PostMapping
    public Hotel addHotel(@RequestBody Hotel hotel) {
        return hotelService.addHotel(hotel);
        
    }

    @PutMapping("/{id}")
    public Hotel updateHOtel(@RequestBody Hotel hotel) {
        return hotelService.updateHotel(hotel);
       
    }

    @DeleteMapping("/{id}")
    public void  deleteHotel(@PathVariable Long id) {
        hotelService.deleteHotel(id);
        
    }
    @GetMapping("/sort/{name}")
    public List<Hotel> sort(@PathVariable String name)
    {
    	return hotelService.sort(name);
    }
    @GetMapping("/paginate/{pageno}/{pagesize}")
    public Page<Hotel> paginate(@PathVariable int pageno,@PathVariable int pagesize)
    {
    	return hotelService.paginate(pageno,pagesize);
    }
}
