import axios from "axios";
const API_URL = "https://sds2-dsdeliver2021.herokuapp.com"; // "http://192.168.0.106:8080";

export function fetchOrders() {
  return axios(`${API_URL}/orders`);
}

export function confirmDelivery(orderId: number) {
  return axios.put(`${API_URL}/orders/${orderId}/delivered`);
}
