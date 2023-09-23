
package com.example.hotel.controller;

import com.example.hotel.model.Room;
import com.example.hotel.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api/rooms")
public class RoomController {

    @Autowired
    private RoomService roomService;

    
    @GetMapping
    public List<Room> getAllRooms() {
        return roomService.getAllRooms();
   
    }

    @GetMapping("/{id}")
    public Optional<Room> getRoomById(@PathVariable Long id) {
        return roomService.getRoomById(id);
       
    }

    @PostMapping
    public Room addRoom(@RequestBody Room room) {
        return roomService.addRoom(room);
        
    }

//    
//    public Room updateRoom(@PathVariable Long id,@RequestBody Room room)
//    {
//    	return roomService.updateRoom(id, room);
//    }
    @PutMapping("/{id}")
    public Room updateRoom(@RequestBody Room room) {
        return roomService.updateRoom(room);
       
    }

    @DeleteMapping("/{id}")
    public void  deleteRoom(@PathVariable Long id) {
        roomService.deleteRoom(id);
        
    }
    @GetMapping("/sort/{name}")
    public List<Room> sort(@PathVariable String name)
    {
    	return roomService.sort(name);
    }
    @GetMapping("/paginate/{pageno}/{pagesize}")
    public List<Room> paginate(@PathVariable int pageno,@PathVariable int pagesize)
    {
    	return roomService.paginate(pageno,pagesize);
    }
    @GetMapping("/type/{type}")
    public List<Room>getAllRoomsByTypeAndAvailability(@PathVariable String  type)
    {
    	return roomService.getRoomsbyTypeAndAvailability(type);
    }
    @GetMapping("/price/{price}")
    public List<Room>getAllRoomsByPrice(@PathVariable int price)
    {
    	return roomService.getRoomsByPrice(price);
    }
    
    @GetMapping("/price/{price}/capacity/{capacity}")
    public List<Room>getroomsbypriceandcapacity(@PathVariable int price ,@PathVariable int capacity)
    {
    	return roomService.getroombypriceandcapacity(price, capacity);
    }
}
