import { Category } from '../model/Category'
import { ICreateCategoryDTO } from './CategoriesRepository'

export interface ICategoriesRepository {
  findByName(name: string): Category
  list(): Category[]
  create({ name, description }: ICreateCategoryDTO): void
}
