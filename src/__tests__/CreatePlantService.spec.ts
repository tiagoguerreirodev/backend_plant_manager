import { CreatePlantService } from "../services/CreatePlantService";
import { PlantsRepositoryMock } from "./mocks/PlantsRepositoryMock";
import { v4 as uuid } from "uuid";

let createPlantService: CreatePlantService;
let plantsRepository: PlantsRepositoryMock;

describe("CreatePlantService", () => {
	beforeEach(() => {
		plantsRepository = new PlantsRepositoryMock();
		createPlantService = new CreatePlantService(plantsRepository);
	});

	it("should be able to create a new plant", async () => {
		const plant = {
			id: uuid(),
			name: "João sem mão",
			owner_id: "123123",
			category_id: 141414,
		};

		await createPlantService.execute(plant);

		const foundPlant = await plantsRepository.findById(plant.id);

		expect(foundPlant).toEqual(expect.objectContaining(plant));
	});
});
