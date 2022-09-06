import axios from "axios";
import { serviceUrl } from "../fixtures.js";

export const placemarkersService = {
  placemarkersUrl: serviceUrl,

  async createUser(user) {
    const res = await axios.post(`${this.placemarkersUrl}/api/users`, user);
    return res.data;
  },

  async getUser(id) {
    const res = await axios.get(`${this.placemarkersUrl}/api/users/${id}`);
    return res.data;
  },

  async getAllUsers() {
    try {
      const res = await axios.get(`${this.placemarkersUrl}/api/users`);
      return res.data;
    } catch (e) {
      return null;
    }
  },

  async deleteAllUsers() {
    const res = await axios.delete(`${this.placemarkersUrl}/api/users`);
    return res.data;
  },

  async authenticate(user) {
    const response = await axios.post(`${this.placemarkersUrl}/api/users/authenticate`, user);
    axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
    return response.data;
  },

  async clearAuth() {
    axios.defaults.headers.common.Authorization = "";
  },

  async makePlacemarkers(id, placemarkers) {
    const response = await axios.post(`${this.placemarkersUrl}/api/counties/${id}/placemarkers`, placemarkers);
    return response.data;
  },

  async getPlacemarkers(id) {
    const response = await axios.get(`${this.placemarkersUrl}/api/counties/${id}/placemarkers`);
    return response.data;
  },

  async createCounties(newCounties) {
    const response = await axios.post(`${this.placemarkersUrl}/api/counties`, newCounties);
    return response.data;
  },
};
