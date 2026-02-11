'use server';

import { Resend } from 'resend';

// Initialize Resend with API Key
// Initialize Resend with API Key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const website = formData.get('website') as string;
    const revenue = formData.get('revenue') as string;
    const message = formData.get('message') as string;
    const problem = formData.get('problem') as string;

    try {
        const data = await resend.emails.send({
            from: 'Found It Marketing <contact@founditmarketing.com>',
            to: ['trevor@founditmarketing.com'], // Replace with client email
            subject: `New Lead: ${name} (${problem})`,
            html: `
        <h1>New Project Inquiry</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Website:</strong> ${website}</p>
        <p><strong>Revenue:</strong> ${revenue}</p>
        <p><strong>Problem Area:</strong> ${problem}</p>
        <hr />
        <h3>Message:</h3>
        <p>${message}</p>
      `,
        });

        return { success: true, data };
    } catch (error) {
        return { success: false, error };
    }
}
