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
    // Lead from AI Visibility Check
    const formData = new FormData();
    formData.append('name', 'AI Visibility Lead');
    formData.append('email', 'ai-visibility@founditmarketing.com');
    formData.append('problem', 'AI Scan Completed');
    formData.append('message', `Target URL: ${url}\nVisibility Score: ${score}\n\nSummary:\n${summary}`);

    await sendEmail(formData);
}

export async function notifySolutionSubmission(businessName: string, industry: string, summary: string) {
    // Lead from Solution Strategist
    const formData = new FormData();
    formData.append('name', 'Solution Strategist Lead');
    formData.append('email', 'strategist@founditmarketing.com');
    formData.append('problem', 'Strategy Generated');
    formData.append('message', `Business: ${businessName}\nIndustry: ${industry}\n\nAI Summary:\n${summary}`);

    await sendEmail(formData);
}

export async function notifyFeasibilitySubmission(concept: string, score: number, summary: string) {
    // Lead from Feasibility Study
    const formData = new FormData();
    formData.append('name', 'Feasibility Study Lead');
    formData.append('email', 'feasibility@founditmarketing.com');
    formData.append('problem', 'Feasibility Study Completed');
    formData.append('message', `Business Concept: ${concept}\nFeasibility Score: ${score}\n\nSummary:\n${summary}`);

    await sendEmail(formData);
}
