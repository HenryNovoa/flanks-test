const positionRepository = require('../repositories/positionRepository');

class PositionService {
  async getAllPositions() {
    return positionRepository.getAll();
  }

  async getPositionById(id) {
    return positionRepository.getById(id);
  }
}

module.exports = new PositionService();
