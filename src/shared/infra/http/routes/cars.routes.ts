import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { CreateCarSpecificationController } from "@modules/cars/useCases/createCarSpecification/CreateCarSpecificationController";
import { ListAvailableCarsController } from "@modules/cars/useCases/listAvailableCars/ListAvailableCarsController";
import { UploadCarImagesController } from "@modules/cars/useCases/uploadCarImages/UploadCarImagesController";
import { UploadCarImagesUseCase } from "@modules/cars/useCases/uploadCarImages/UploadCarImagesUseCase";
import { ensureAdmin } from "@shared/infra/http/middlewares/ensureAdmin";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";
import { Router } from "express";
import uploadConfig from "@config/upload";

import multer from "multer";

const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarController = new ListAvailableCarsController();
const createCarSpecificationController = new CreateCarSpecificationController();
const uploadCarImagesController = new UploadCarImagesController();

const upload = multer(uploadConfig);

carsRoutes.post("/", 
    ensureAuthenticated,
    ensureAdmin,
    createCarController.handle
);

carsRoutes.get("/available",
    listAvailableCarController.handle
)

carsRoutes.post("/specifications/:id",
    ensureAuthenticated,
    ensureAdmin,
    createCarSpecificationController.handle
)

carsRoutes.post("/images/:id",
    ensureAuthenticated,
    ensureAdmin, 
    upload.array("images"),
    uploadCarImagesController.handle
)

export { carsRoutes } 