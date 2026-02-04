'use server';

import { sendEmail } from '@/actions/sendEmail';
import { z } from 'zod';

const contactFormSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    website: z.string().url('Invalid website URL').optional().or(z.literal('')),
    revenue: z.string().optional(),
    message: z.string().min(1, 'Message is required'),
    problem: z.string().optional(),
});

export async function submitContactForm(formData: FormData) {
    const rawData = Object.fromEntries(formData.entries());

    // 1. Basic Validation
    const validatedFields = contactFormSchema.safeParse(rawData);
    if (!validatedFields.success) {
        return {
            error: 'Invalid inputs',
            details: validatedFields.error.flatten().fieldErrors
        };
    }

    // 2. Add defaults
    if (!formData.get('problem')) {
        formData.append('problem', 'General Inquiry');
    }

    // 3. Delegate to centralized sender
    const result = await sendEmail(formData);

    if (result.success) {
        return { success: true };
    } else {
        return { error: 'Failed to send email. please try again.' };
    }
}

export async function notifyAISubmission(url: string, score: number, summary: string) {
    // Placeholder to prevent breaking imports using this
    const formData = new FormData();
    formData.append('name', 'AI System');
    formData.append('email', 'ai@system.local');
    formData.append('problem', 'AI Scan Completed');
    formData.append('message', `Scan for ${url} completed with score ${score}`);

    await sendEmail(formData);
}
