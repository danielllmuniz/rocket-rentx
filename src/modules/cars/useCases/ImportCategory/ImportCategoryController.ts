import { Request, Response } from 'express';
import { container } from "tsyringe"

import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {

    async handle(request: Request, response:Response): Promise<Response> {
        const { file } = request;

        const importCategoryUsecase = await container.resolve(ImportCategoryUseCase);

        importCategoryUsecase.execute(file);

        return response.status(201).send()
    }
}

export { ImportCategoryController }