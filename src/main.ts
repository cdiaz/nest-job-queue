import { ApplicationContext } from './app.context';
import 'dotenv/config';

async function bootstrap() {
  const app = await ApplicationContext();
  await app.listen(process.env.APP_PORT);
}

bootstrap();