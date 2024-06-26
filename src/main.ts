import { ApiExpress } from "./infra/api/express/routes/api.express";
import { CreateProductRoute } from "./infra/api/express/routes/products/create/create.route.express";
import { ListProductRoute } from "./infra/api/express/routes/products/list/list.route.express";
import { ListProductByIdRoute } from "./infra/api/express/routes/products/listById/listById.route.express";
import { ProductRepository } from "./infra/repositories/product/product.repository";
import { prisma } from "./package/prisma/prisma";
import { CreateProductUsecase } from "./usecases/product/create/create.usecase";
import { ListProductUsecase } from "./usecases/product/list/list.usecase";
import { ListProductByIdUsecase } from "./usecases/product/listById/listById.usecase";

function server() {
  const aRepository = ProductRepository.create(prisma);

  const createProductUsecases = CreateProductUsecase.create(aRepository);
  const listProductUsecases = ListProductUsecase.create(aRepository);
  const listProductByIdUsecases = ListProductByIdUsecase.create(aRepository);

  const createRoute = CreateProductRoute.create(createProductUsecases);
  const listRoute = ListProductRoute.create(listProductUsecases);
  const listByIdRoute = ListProductByIdRoute.create(listProductByIdUsecases);

  const api = ApiExpress.create([createRoute, listRoute, listByIdRoute]);
  const port = 8000;
  api.start(port);
}

server();
