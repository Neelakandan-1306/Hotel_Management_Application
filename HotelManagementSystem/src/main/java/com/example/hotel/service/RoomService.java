package com.example.hotel.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.hotel.model.Room;
import com.example.hotel.repository.RoomRepository;

@Service
public class RoomService {
	
	@Autowired
	RoomRepository roomRepository;
	
	public List<Room> getAllRooms()
	{
		return roomRepository.findAll();
	}
	
	public Optional<Room>getRoomById(Long id)
	{
		return roomRepository.findById(id);
	}
	public Room addRoom(Room room)
	{
		return roomRepository.save(room);
	}
//	public Room updateRoom(Long id,Room room)
//	{
//		Optional<Room>existingRoom=roomRepository.findById(id);
//		if(existingRoom.isPresent())
//		{
//			Room updatedRoom=existingRoom.get();
//			updatedRoom.setNumber(room.getNumber());
//			updatedRoom.setType(room.getType());
//		    updatedRoom.setCapacity(room.getCapacity());
//		    updatedRoom.setPrice(room.getPrice());
//		    updatedRoom.setAvailable(room.getAvailable());
//		    return roomRepository.save(updatedRoom);
//		}
//		else
//		{
//			return null;
//		}
//		
//	}
	public Room updateRoom(Room room)
	{
			
		return roomRepository.saveAndFlush(room);
	}
	public void deleteRoom(Long id)
	{
		roomRepository.deleteById(id);
	}
	
   public List<Room> sort(String name)
   {
	   return roomRepository.findAll(Sort.by(Sort.DEFAULT_DIRECTION,name));
   }
   
   public List<Room> paginate(int pageno,int pagesize)
   {
	   Page<Room>page= roomRepository.findAll(PageRequest.of(pageno, pagesize));
	   return page.getContent();
   }
   public List<Room>getRoomsbyTypeAndAvailability(String type)
   {
	   return roomRepository.findAllRoomsByTypeAndAvailabillity(type);
   }
   public List<Room>getRoomsByPrice(int price)
   {
	   return roomRepository.findALLRoomsByPrice(price);
   }
   public List<Room>getroombypriceandcapacity(int price,int capacity)
   {
	   return roomRepository.findALLRoomsByPriceAndCpaacity(price, capacity);
   }
	 
	   

}
