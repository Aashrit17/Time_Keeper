package com.example.timekeeper.service;

import com.example.timekeeper.dto.OrderDTO;
import com.example.timekeeper.dto.OrderHistoryDTO;
import com.example.timekeeper.entity.Order;

import java.util.List;

public interface OrderService {
    void createOrder(Order order);
    List<Order> getAllOrders();
    List<OrderHistoryDTO> getOrderHistory();
}