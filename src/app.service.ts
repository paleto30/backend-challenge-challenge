import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { v4 as uuidv4 } from 'uuid';
import { User } from './entities/user.entity';

@Injectable()
export class AppService {

  private users: User[] = [
    {
      id: "7b169980-1f01-4967-ad1e-ce0c73f2ff1b",
      name: "Andres Galvis",
      email: "otrosemail@gmai.com",
      birthdate: new Date('2024-01-28T00:00:00.000Z'),
      nationalities: [
        {
          "country": "España",
          "isoCode3": "ESP"
        },
        {
          "country": "Colombia",
          "isoCode3": "Cop"
        }
      ]
    }
  ];



  createUser(createUserDto: CreateUserDto) {

    const { name, email, birthdate, nationalities } = createUserDto;

    const user = new User(uuidv4(), name, email, birthdate, nationalities);

    const userExist = this.users.find(user => user.email === email);

    if (userExist) {
      throw new ConflictException(`User with email : '${email}' already exist.`)
    }

    this.users.push(user);

    return {
      message: 'User created successfully.',
      user
    }
  }



  findOneById(id: string) {

    const userFound = this.users.find(user => user.id === id);

    if (!userFound) {
      throw new NotFoundException(`User with id '${id}' not found.`)
    }
    return {
      message: 'User Founded successfully',
      userFound
    }
  }


  remove(id: string) {
    const index = this.users.findIndex(user => user.id === id);

    if (index === -1) {
      throw new NotFoundException(`User With id : '${id}' not exist.`)
    }

    this.users.splice(index, 1);

    return {
      message: 'User removed successfully.',
      users: this.users
    }

  }


}
