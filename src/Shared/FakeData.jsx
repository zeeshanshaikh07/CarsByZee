import { faker } from "@faker-js/faker";

function createRandomCarList() {
  return {
    name: faker.vehicle.vehicle(),
    fuelType: faker.vehicle.fuel(),
    model: faker.vehicle.model(),
    type: faker.vehicle.type(),
    image:
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20231016113237_webai_2_.jpg&w=700&c=1",
    kms: 1000,
    transmission: "Auto",
    price: faker.finance.amount({ min: 4000, max: 20000 }),
  };
}

const carList = faker.helpers.multiple(createRandomCarList, {
  count: 7,
});

export default {
  carList,
};
