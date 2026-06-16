import { Injectable, Logger } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';

export interface ContactSubmission extends CreateContactDto {
  id: string;
  createdAt: string;
}

/**
 * MVP storage: submissions are held in memory and logged to the console.
 * Swap the in-memory array for a PostgreSQL/MongoDB repository and add an
 * email transport (Nodemailer / SES) when moving beyond the MVP.
 */
@Injectable()
export class ContactService {
  private readonly logger = new Logger('ContactService');
  private readonly submissions: ContactSubmission[] = [];
  private counter = 0;

  create(dto: CreateContactDto) {
    this.counter += 1;
    const submission: ContactSubmission = {
      ...dto,
      id: `c_${Date.now()}_${this.counter}`,
      createdAt: new Date().toISOString(),
    };
    this.submissions.push(submission);

    this.logger.log(
      `New contact submission from ${submission.name} <${submission.email}> ` +
        `(${submission.company})` +
        (submission.scheduleConsultation ? ' — consultation requested' : ''),
    );

    // TODO (Phase 2): send confirmation email to the user and a
    // notification to CONTACT_NOTIFY_EMAIL.
    return {
      success: true,
      id: submission.id,
      message:
        'Thank you for reaching out. A member of our team will be in touch shortly.',
    };
  }

  findAll(): ContactSubmission[] {
    return this.submissions;
  }
}
