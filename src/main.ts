import { ApiExpress } from "./infra/api/express/routes/api.express";
import { CreateProductRoute } from "./infra/api/express/routes/products/create/create.route.express";
import { ListProductRoute } from "./infra/api/express/routes/products/list/list.route.express";
import { ProductRepository } from "./infra/repositories/product/product.repository";
import { prisma } from "./package/prisma/prisma";
import { CreateProductUsecase } from "./usecases/product/create/create.usecase";
import { ListProductUsecase } from "./usecases/product/list/list.usecase";

function server() {
  const aRepository = ProductRepository.create(prisma);

  const createProductUsecases = CreateProductUsecase.create(aRepository);
  const listProductUsecases = ListProductUsecase.create(aRepository);

  const createRoute = CreateProductRoute.create(createProductUsecases);
  const listRoute = ListProductRoute.create(listProductUsecases);

  const api = ApiExpress.create([createRoute, listRoute]);
  const port = 8000;
  api.start(port);
}

server();
