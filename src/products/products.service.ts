import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: uuidv4(),
      name: 'Laptop Gamer Alienware m15',
      description: 'Potente laptop con tarjeta gráfica NVIDIA RTX 3080 y 32GB de RAM.',
      price: 2850.75,
      stock: 8,
      createdAt: new Date(),
    },
    {
      id: uuidv4(),
      name: 'Teclado Mecánico Corsair K95',
      description: 'Teclado premium con switches Cherry MX Speed y retroiluminación RGB.',
      price: 199.99,
      stock: 45,
      createdAt: new Date(),
    },
    {
      id: uuidv4(),
      name: 'Monitor Ultrawide LG 34"',
      description: 'Monitor curvo de 34 pulgadas con resolución 3440x1440 y 144Hz.',
      price: 799.50,
      stock: 15,
      createdAt: new Date(),
    },

  ];

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: string): Product {
    const product = this.products.find((p) => p.id === id);
    if (!product) {
      throw new NotFoundException(`Producto con ID '${id}' no encontrado.`);
    }
    return product;
  }

  create(createProductDto: CreateProductDto): Product {
    const newProduct: Product = {
      id: uuidv4(),
      ...createProductDto, 
      createdAt: new Date(),
    };

    this.products.push(newProduct);
    return newProduct;
  }

  update(id: string, updateProductDto: UpdateProductDto): Product {
    const product = this.findOne(id);
    const index = this.products.findIndex((p) => p.id === id);
    
    const updatedProduct = { ...product, ...updateProductDto };
    
    this.products[index] = updatedProduct;
    return updatedProduct;
  }

  remove(id: string) {
    this.findOne(id); 
    this.products = this.products.filter((p) => p.id !== id);
    return { message: `Producto con ID '${id}' eliminado exitosamente.` };
  }
}