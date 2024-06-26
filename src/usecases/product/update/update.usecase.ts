import { Product } from "../../../domain/product/entity/product.entity";
import { ProductGateway } from "../../../domain/product/gateway/product.gateway";
import { Usecase } from "../../usecase";
import { UpdateProductInputDto } from "./dto/update.input.dto";
import { UpdateProductOutputDto } from "./dto/update.output.dto";

export class UpdateProductUsecase
  implements Usecase<UpdateProductInputDto, UpdateProductOutputDto>
{
  private constructor(private readonly productGateway: ProductGateway) {}

  public static create(productGateway: ProductGateway) {
    return new UpdateProductUsecase(productGateway);
  }

  public async execute({
    name,
    price,
  }: UpdateProductInputDto): Promise<UpdateProductOutputDto> {
    const aProduct = Product.create(name, price);
  
    await this.productGateway.update(aProduct);
  
    const output = this.presentOutput(aProduct);
  
    return output;
  }

  private presentOutput(product: Product): UpdateProductOutputDto {
    const output: UpdateProductOutputDto = {
      id: product.id,
    };

    return output;
  }
}
