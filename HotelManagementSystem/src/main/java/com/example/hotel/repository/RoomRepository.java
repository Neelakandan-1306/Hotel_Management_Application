package com.example.hotel.repository;

import com.example.hotel.model.Room;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomRepository extends JpaRepository<Room, Long> {

	
	@Query("SELECT r FROM Room r WHERE r.type=:type")
	public List<Room>findAllRoomsByTypeAndAvailabillity(@Param("type") String type);
	
	@Query("SELECT r FROM Room r WHERE r.price<=:price ORDER BY r.price desc")
	public List<Room> findALLRoomsByPrice(@Param("price" )int price);
	@Query("SELECT r FROM Room r WHERE r.price<=:price AND r.capacity=:capacity ORDER BY r.price desc")
	public List<Room> findALLRoomsByPriceAndCpaacity(@Param("price" )int price,@Param("capacity") int capacity);
}
