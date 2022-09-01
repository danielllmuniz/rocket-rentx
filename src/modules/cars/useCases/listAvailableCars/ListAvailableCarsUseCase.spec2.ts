import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase"

 

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

 describe("List Cars", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        listAvailableCarsUseCase = new ListAvailableCarsUseCase(carsRepositoryInMemory);
    })
    
    it("should be able to list all avaible cars", async() => {
        const car = await carsRepositoryInMemory.create({
            "name": "Audi 1",
            "description": "Carro bonito321",
            "daily_rate": 140,
            "license_plate": "abc-2222",
            "fine_amount": 100,
            "brand": "Audi",
            "category_id": null
        });

        const cars = await listAvailableCarsUseCase.execute({});

        expect(cars).toEqual([car]);
    });

    it("should be able to list available cars by name", async () => {
        const car = await carsRepositoryInMemory.create({
            "name": "Audi 1",
            "description": "Carro bonito321",
            "daily_rate": 140,
            "license_plate": "abc-2222",
            "fine_amount": 100,
            "brand": "car_brand_test",
            "category_id": null
        });

        const cars = await listAvailableCarsUseCase.execute({
            brand: "car_brand_test"
        });

        expect(cars).toEqual([car]);
    });
 })