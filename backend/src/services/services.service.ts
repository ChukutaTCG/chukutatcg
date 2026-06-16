import { Injectable } from '@nestjs/common';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

@Injectable()
export class ServicesService {
  private readonly services: ServiceItem[] = [
    {
      id: 'strategy-design',
      title: 'Strategy Design',
      description:
        'We develop comprehensive technology adoption strategies that align emerging capabilities with mission objectives, regulatory realities, and measurable outcomes.',
      icon: 'compass',
    },
    {
      id: 'market-entry',
      title: 'Market Entry & Positioning',
      description:
        'We help you navigate competitive landscapes and capture market opportunities with positioning grounded in national security and commercial insight.',
      icon: 'target',
    },
    {
      id: 'revenue-acceleration',
      title: 'Revenue Acceleration',
      description:
        'We identify and execute high-impact growth initiatives, turning strategic advantage into durable, repeatable revenue.',
      icon: 'trending-up',
    },
  ];

  findAll(): ServiceItem[] {
    return this.services;
  }
}
