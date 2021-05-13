import { greatCircleDistance, parseToObject } from './helpers'

describe('helpers module', () => {
  describe("greatCircleDistance", () => {
    test('should return distance between two coordinate', () => {
      expect(
        greatCircleDistance(
          { lat: 55.08068312, long: 12.86196247 },
          { lat: 50.0111839, long: 10.5824478 }
        )
      ).toEqual(584.3145874002673);

      expect(
        greatCircleDistance(
          { lat: 52.62407672, long: 14.08227028 },
          { lat: 50.0111839, long: 10.5824478 }
        )
      ).toEqual(378.8191149622292);

      expect(
        greatCircleDistance(
          { lat: 55.29794181, long: 11.21015653 },
          { lat: 50.0111839, long: 10.5824478 }
        )
      ).toEqual(589.3768368098237);
    })
  })


  describe("parseToObject", () => {
    test('should return parsed object from string', () => {
      expect(
        parseToObject("")
      ).toEqual({});

      expect(
        parseToObject("id: cbbd17c7-738b-4906-8435-0a435259b0b3, lat: 51.07835287, long:17.03787608,")
      ).toEqual({ "id": "cbbd17c7-738b-4906-8435-0a435259b0b3", "lat": "51.07835287", "long": "17.03787608" });

      expect(
        parseToObject("id: d7440558-4140-4eb5-ab05-295614c8d1a3, lat: 54.93658101, long:13.43174345, ")
      ).toEqual({ "id": "d7440558-4140-4eb5-ab05-295614c8d1a3", "lat": "54.93658101", "long": "13.43174345" });
    })
  })
})
