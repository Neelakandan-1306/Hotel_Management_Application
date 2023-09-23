package com.example.hotel.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.example.hotel.model.User;
import com.example.hotel.repository.UserRepository;

@Service
public class UserService {
          
@Autowired
UserRepository userRepository;
public User adduser(User user)
{
	return userRepository.save(user);
}
public List<User>getalluser()
{
	return userRepository.findAll();
}

public User findByUsername(String username)
{
	return userRepository.findByusername(username);
	
}

public boolean checkPassword(String rawPassword,String encodedPassword)
{
	return rawPassword.equals(encodedPassword);
}


}
