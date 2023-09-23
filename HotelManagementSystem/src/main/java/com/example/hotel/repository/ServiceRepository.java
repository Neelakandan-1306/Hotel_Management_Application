package com.example.hotel.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.hotel.model.Service;

@Repository
public interface ServiceRepository extends JpaRepository<Service, Long>{

}
