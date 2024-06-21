const csvParser = require('csv-parser');
const { Position, Entity, Portfolio } = require('../models');

class FileProcessor {
  async processFile(fileStream) {
    return new Promise((resolve, reject) => {
      const results = [];

      const processRow = async (data) => {
        try {
          const [entity] = await Entity.findOrCreate({
            where: { name: data.entity },
          });
          const [portfolio] = await Portfolio.findOrCreate({
            where: { portfolio_id: data.portfolio_id, entity_id: entity.id },
          });

          results.push({
            id: data.id,
            accrued_interest: parseFloat(data.accrued_interest),
            number_of_shares: parseFloat(data.number_of_shares),
            balance: parseFloat(data.balance),
            capital_gain: parseFloat(data.capital_gain),
            cost: parseFloat(data.cost),
            interest_rate: data['interest.rate']
              ? parseFloat(data['interest.rate'])
              : null,
            is_nominal: data.is_nominal.toLowerCase() === 'false',
            expiration_date: data.expiration_date
              ? new Date(data.expiration_date)
              : null,
            initial_date: data.initial_date
              ? new Date(data.initial_date)
              : null,
            valuation_date: data.valuation_date
              ? new Date(data.valuation_date)
              : null,
            rate_to_euro: parseFloat(data.rate_to_euro),
            currency: data.currency,
            portfolio_id: portfolio.id,
            isin: data.isin,
            market: data.market,
            name: data.name,
            type: data.type,
          });
        } catch (error) {
          console.error('Error processing row:', error);
          reject(error);
        }
      };

      const parser = fileStream.pipe(
        csvParser({
          mapHeaders: ({ header }) => header.trim(),
          mapValues: ({ header, value }) => value.trim(),
        }),
      );

      parser.on('data', (data) => {
        parser.pause(); // Pause the stream
        processRow(data)
          .then(() => parser.resume()) // Resume the stream after processing
          .catch(reject);
      });

      parser.on('end', async () => {
        try {
          await Position.bulkCreate(results);
          resolve();
        } catch (error) {
          reject(error);
        }
      });

      parser.on('error', (error) => {
        reject(error);
      });
    });
  }
}

module.exports = new FileProcessor();
