import axios from "axios";

export default {
  // User methods
  getUsers: function () {
    return axios.get("/api/users");
  },

  getUser: function (userId) {
    return axios.get("/api/users", {
      params: {
        id: userId,
      },
    });
  },

  getOperators: function () {
    return axios.get("/api/users", {
      params: {
        role: "Operator",
      },
    });
  },

  getTechnicians: function () {
    return axios.get("/api/users", {
      params: {
        role: "Technician",
      },
    });
  },

  getDismountedOperators: function () {
    return axios.get("/api/users", {
      params: {
        role: "Operator",
        dismounted: true,
      },
    });
  },

  getDismountedTechnicians: function () {
    return axios.get("/api/users", {
      params: {
        role: "Technician",
        dismounted: true,
      },
    });
  },

  getAvailableTechnicians: function () {
    return axios.get("/api/users", {
      params: {
        role: "Technician",
        available: true,
      },
    });
  },

  updateUserDismountedStatus: function (userId, newDismountedStatus) {
    return axios.patch("/api/users", {
      params: {
        id: userId,
      },
      data: {
        dismounted: newDismountedStatus,
      },
    });
  },

  updateUserAvailableStatus: function (userId, newAvailableStatus) {
    return axios.patch("/api/users", {
      params: {
        id: userId,
      },
      data: {
        available: newAvailableStatus,
      },
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
    return axios.get("/api/vehicles", {
      params: {
        id: vehicleId,
      },
    });
  },
  
  getOperatorVehicles: function () {
    return axios.get("/api/vehicles", {
      params: {
        role: "Operator",
      },
    });
  },

  getTechnicianVehicles: function () {
    return axios.get("/api/vehicles", {
      params: {
        role: "Technician",
      },
    });
  },

  getVehicleByOccupant: function (userId) {
    return axios.get("/api/vehicles", {
      params: {
        occupant: userId,
      },
    });
  },

  updateVehicleServiceableStatus: function (vehicleId, newServiceableStatus) {
    return axios.patch("/api/vehicles", {
      params: {
        id: vehicleId,
      },
      data: {
        serviceable: newServiceableStatus,
      },
    });
  },

  updateVehicleOccupant: function (vehicleId, newUserId) {
    return axios.patch("/api/vehicles", {
      params: {
        id: vehicleId,
      },
      data: {
        occupant: newUserId,
      },
    });
  },

  updateVehicleRepairRequests: function (vehicleId, newRepairRequestIdArray) {
    return axios.patch("/api/vehicles", {
      params: {
        id: vehicleId,
      },
      data: {
        repairRequests: newRepairRequestIdArray,
      },
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
    return axios.get("/api/repair-requests", {
      params: {
        id: repairRequestId,
      },
    });
  },

  getRepairRequestByTechnician: function (userId) {
    return axios.get('/api/repair-requests', {
        params: {
            assignedTo: userId
        }
    })
  },

  updateRepairRequestStatus: function (repairRequestId, newStatus) {
    return axios.patch("/api/repair-requests", {
      params: {
        id: repairRequestId,
      },
      data: {
        status: newStatus,
      },
    });
  },

  updateRepairRequestAssignedTo: function (repairRequestId, newTechnicianId) {
    return axios.patch("/api/repair-requests", {
      params: {
        id: repairRequestId,
      },
      data: {
        assignedTo: newTechnicianId,
      },
    });
  },

  updateRepairRequestRepairWorkOrder: function (
    repairRequestId,
    newRepairWorkOrderId
  ) {
    return axios.patch("/api/repair-requests", {
      params: {
        id: repairRequestId,
      },
      data: {
        repairWorkOrder: newRepairWorkOrderId,
      },
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
