import { 
  Controller, 
  Get, 
  Post, 
  Body,
} from '@nestjs/common';
import { UsersService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';


@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
  ) {}

  @Post('register')
  async create(@Body() createUserDto: CreateUserDto) {
    const user = await this.usersService.create(createUserDto);
    return {
      message: 'User created successfully',
      user: {
        id: user._id,
        email: user.email,
        createdAt: user.createdAt,
      },
    };
  }

  @Post('login')
  async login(@Body() loginDto: CreateUserDto) {
    const { user } = await this.usersService.login(loginDto);
    return {
      message: 'Login successful',
      user: {
        id: user._id,
        email: user.email,
        createdAt: user.createdAt,
      },
    };
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

}
