import { Specification } from '../model/Specification'
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from './ISpecificationsRepository'

export class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[]

  constructor() {
    this.specifications = []
  }

  create({ description, name }: ICreateSpecificationDTO) {
    const specification = new Specification()

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    })

    this.specifications.push(specification)
  }

  list(): Specification[] {
    return this.specifications
  }

  findByName(name: string): Specification {
    const category = this.specifications.find(
      (category) => category.name === name,
    )
    return category
  }
}
