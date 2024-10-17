import { Container } from 'inversify';
import 'reflect-metadata';
import { IUserService } from '../services/IUserService';
import { UserService } from '../services/UserService';

const container = new Container();
container.bind<IUserService>('IUserService').to(UserService);

export default container;