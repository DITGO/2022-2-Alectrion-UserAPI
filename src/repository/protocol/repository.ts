import { Job } from '../../db/entities/userEnum/job'
import { Role } from '../../db/entities/userEnum/role'
import { User } from '../../domain/entities/user'

export interface Repository {
  createUser(params: {
    name: string
    email: string
    username: string
    job: Job
    role: Role
    password: string
  }): Promise<User | undefined>
  updateOne(userData: any): Promise<boolean>
  findOne(userId: string): Promise<any>
  findOneByEmail(email: string): Promise<User | undefined>
  findOneByUsername(username: string): Promise<User | undefined>
}