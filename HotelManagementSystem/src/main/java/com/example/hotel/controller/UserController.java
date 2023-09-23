
package com.example.hotel.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.hotel.model.User;
import com.example.hotel.service.UserService;

@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
@RequestMapping("/api/user")
public class UserController {

	
	  @Autowired
	  UserService userservice;
	  
	  
	  @GetMapping
	  public List<User> getalluser()
	  {
		  return userservice.getalluser();
	  }
	  @PostMapping
	  public User adduser(@RequestBody User user)
	  {
		  return userservice.adduser(user);
	  }
	  @PostMapping("/login")
	  public ResponseEntity<String> authenticate(@RequestBody User user) {
	      User foundUser = userservice.findByUsername(user.getUsername());
	      if (foundUser != null && userservice.checkPassword(user.getPassword(), foundUser.getPassword())) {
	          return ResponseEntity.ok("Authentication successful");
	      } else {
	          return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Authentication failed");
	      }
	  }

	  
	  
}
