import axios from "axios";

export default {
  // Login method
  login: function (username, password) {
    return axios.post(`/api/login?username=${username}`, {
      password: password
    })
  },

  // User methods
  getUsers: function () {
    return axios.get("/api/users");
  },

  getUser: function (userId) {
    return axios.get(`/api/users/${userId}`);
  },

  getOperators: function () {
    return axios.get('/api/users?role=Operator');
  },

  getTechnicians: function () {
    return axios.get("/api/users?role=Technician");
  },

  getDismountedOperators: function () {
    return axios.get('/api/users?role=Operator&mounted=false');
  },

  getDismountedTechnicians: function () {
    return axios.get("/api/users?role=Technician&mounted=false");
  },

  getAvailableTechnicians: function () {
    return axios.get("/api/users?role=Technician&available=true");
  },

  updateUserDismountedStatus: function (userId, newDismountedStatus) {
    return axios.patch(`/api/users/${userId}`, {
      mounted: newDismountedStatus,
    });
  },

  updateUserAvailableStatus: function (userId, newAvailableStatus) {
    return axios.patch(`/api/users/${userId}`, {
      available: newAvailableStatus,
    });
  },

  saveUser: function (userData) {
    return axios.post("/api/users", userData);
  },

  // Vehicle methods
  getVehicles: function () {
    return axios.get("/api/vehicles");
  },
  
  getVehicle: function (vehicleId) {
    return axios.get(`/api/vehicles/${vehicleId}`);
  },
  
  getOperatorVehicles: function () {
    return axios.get("/api/vehicles?role=Operator");
  },

  getTechnicianVehicles: function () {
    return axios.get("/api/vehicles?role=Technician");
  },

  getVehicleByOccupant: function (userId) {
    return axios.get(`/api/vehicles?assignedTo=${userId}`);
  },

  updateVehicleServiceableStatus: function (vehicleId, newServiceableStatus) {
    return axios.patch(`/api/vehicles/${vehicleId}`, {
      serviceable: newServiceableStatus,
    });
  },

  updateVehicleOccupant: function (vehicleId, newUserId) {
    return axios.patch(`/api/vehicles/${vehicleId}`, {
      occupant: newUserId,
    });
  },

  updateVehicleRepairRequests: function (vehicleId, newRepairRequestIdArray) {
    return axios.patch(`/api/vehicles/${vehicleId}`, {
      repairRequests: newRepairRequestIdArray,
    });
  },

  saveVehicle: function (vehicleData) {
    return axios.post("/api/vehicles", vehicleData);
  },

  // Repair Request methods
  getRepairRequests: function () {
    return axios.get("/api/repair-requests");
  },

  getRepairRequest: function (repairRequestId) {
    return axios.get(`/api/repair-requests/${repairRequestId}`);
  },

  getRepairRequestByTechnician: function (userId) {
    return axios.get(`/api/repair-requests?assignedTo=${userId}`)
  },

  updateRepairRequestStatus: function (repairRequestId, newStatus) {
    return axios.patch(`/api/repair-requests/${repairRequestId}`, {
      status: newStatus,
    });
  },

  updateRepairRequestAssignedTo: function (repairRequestId, newTechnicianId) {
    return axios.patch(`/api/repair-requests/${repairRequestId}`, {
      assignedTo: newTechnicianId,
    });
  },

  updateRepairRequestRepairWorkOrder: function (
    repairRequestId,
    newRepairWorkOrderId
  ) {
    return axios.patch(`/api/repair-requests/${repairRequestId}`, {
      repairWorkOrder: newRepairWorkOrderId,
    });
  },

  saveRepairRequest: function (repairRequestData) {
    return axios.post("/api/repair-requests", repairRequestData);
  },

  // Repair Work Order methods
  getRepairWorkOrders: function () {
    return axios.get("/api/repair-work-orders");
  },

  saveRepairWorkOrder: function (repairWorkOrderData) {
    return axios.post("/api/repair-work-orders", repairWorkOrderData);
  },
};
