import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealth() {
    return {
      status: 'ok',
      service: 'Chukuta Tactical Consulting Group API',
    };
  }
}
