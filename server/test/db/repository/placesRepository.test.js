const chai = require('chai');
const sinon = require('sinon');
const client = require('../../../db/client');
const { createPlace } = require('../../../db/repository/placesRepository');

const { expect } = chai;

describe('Places Repository Tests', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('Should create a place', async () => {
    const clientStub = sinon.stub(client, 'query');
    const fakePlace = {
      place_id: 1,
      google_place_id: 'ChIJ0X31pIK3voARo3mz1ebVzDo',
      coord: ('36.1699,-115.1398'),
      vibes: ['party', 'shop'],
    };

    clientStub.withArgs(sinon.match.string, sinon.match.array).resolves({ rows: [fakePlace] });
    const result = await createPlace(fakePlace);
    expect(result).to.deep.equal(fakePlace);
  });

  it('Should handle an error creating palce', async () => {
    const clientStub = sinon.stub(client, 'query');
    clientStub.rejects(new Error('Error creating place'));

    const fakePlaceWithoutCoordinates = {
      google_place_id: 'ChIJ0X31pIK3voARo3mz1ebVzDo',
      vibes: ['party', 'shop'],
    };
    try {
      await createPlace(fakePlaceWithoutCoordinates);
      expect.fail('Expected an error to be thrown.');
    } catch (error) {
      expect(error.message).to.equal('Error creating place');
    }
  });
});
