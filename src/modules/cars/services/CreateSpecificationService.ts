import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from '../repositories/ISpecificationsRepository'

export class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute({ name, description }: ICreateSpecificationDTO) {
    const categoryAlreadyExists = this.specificationsRepository.findByName(name)

    if (categoryAlreadyExists) {
      throw new Error('Category already exists!')
    }

    this.specificationsRepository.create({ name, description })
  }
}
