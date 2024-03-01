//package com.example.timekeeper;
//
//import com.example.timekeeper.entity.User;
//import com.example.timekeeper.repository.UserRepository;
//import com.example.timekeeper.service.UserService;
//import org.junit.jupiter.api.Test;
//import org.junit.jupiter.api.extension.ExtendWith;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.junit.jupiter.MockitoExtension;
//import java.util.Optional;
//import static org.junit.jupiter.api.Assertions.assertEquals;
//import static org.mockito.Mockito.when;
//
//@ExtendWith(MockitoExtension.class)
//public class UserRepositoryTest {
//
//    @Mock
//    private UserRepository userRepository;
//
//    @InjectMocks
//    private UserService userService;
//
//    @Test
//    public void testFindByUsername() {
//        // Mocking the behavior of UserRepository
//        String username = "testuser";
//        User user = new User();
//        user.setId(1);
//        user.setUsername(username);
//        when(userRepository.findByUsername(username)).thenReturn(Optional.of(user));
//
//        // Call the service method that uses UserRepository
//        Optional<User> foundUser = userService.getUserByUsername(username);
//
//        // Assert that the user returned matches our expectations
//        assertEquals(user, foundUser.orElse(null));
//    }
//
//    @Test
//    public void testFindByEmail() {
//        // Mocking the behavior of UserRepository
//        String email = "test@example.com";
//        User user = new User();
//        user.setId(1);
//        user.setEmail(email);
//        when(userRepository.findByEmail(email)).thenReturn(Optional.of(user));
//
//        // Call the service method that uses UserRepository
//        Optional<User> foundUser = userService.getUserByEmail(email);
//
//        // Assert that the user returned matches our expectations
//        assertEquals(user, foundUser.orElse(null));
//    }
//}