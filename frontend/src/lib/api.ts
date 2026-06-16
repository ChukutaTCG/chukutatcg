export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ContactPayload {
  name: string;
  email: string;
  company: string;
  phone?: string;
  message: string;
  scheduleConsultation?: boolean;
}

export interface ContactResponse {
  success: boolean;
  id: string;
  message: string;
}

const BASE = '/api';

export async function fetchServices(): Promise<ServiceItem[]> {
  const res = await fetch(`${BASE}/services`);
  if (!res.ok) throw new Error('Unable to load services.');
  return res.json();
}

export async function submitContact(
  payload: ContactPayload,
): Promise<ContactResponse> {
  const res = await fetch(`${BASE}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const data = await res.json().catch(() => null);
  if (!res.ok) {
    const detail =
      data && typeof data.message !== 'undefined'
        ? Array.isArray(data.message)
          ? data.message.join(' ')
          : data.message
        : 'Something went wrong. Please try again.';
    throw new Error(detail);
  }
  return data as ContactResponse;
}
