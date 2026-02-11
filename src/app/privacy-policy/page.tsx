import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | Found It Marketing',
    description: 'Privacy Policy and SMS Communications Consent for Found It Marketing LLC.',
};

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-background text-foreground pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter">Privacy Policy</h1>
                    <p className="text-muted-foreground">Last Updated: {new Date().toLocaleDateString()}</p>
                </div>

                <section className="space-y-6">
                    <h2 className="text-2xl font-black uppercase tracking-wide text-primary">SMS Communications Consent</h2>
                    <div className="prose dark:prose-invert max-w-none space-y-4 text-lg leading-relaxed text-muted-foreground">
                        <p>
                            By submitting your phone number on this website, you consent to receive SMS text messages from Found It Marketing LLC. These messages may include marketing messages, service updates, appointment reminders, and other business-related communications.
                        </p>
                        <p className="font-semibold text-foreground">
                            Message frequency may vary. Message and data rates may apply.
                        </p>
                        <p>
                            You may opt out at any time by replying <span className="font-bold text-foreground">STOP</span> to any message. Consent to receive SMS messages is not a condition of purchase.
                        </p>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-black uppercase tracking-wide text-primary">Information We Collect</h2>
                    <div className="prose dark:prose-invert max-w-none space-y-4 text-lg leading-relaxed text-muted-foreground">
                        <p>We may collect personal information that you voluntarily provide to us, including but not limited to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Name</li>
                            <li>Phone number</li>
                            <li>Email address</li>
                            <li>Any information submitted through our forms</li>
                        </ul>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-black uppercase tracking-wide text-primary">How We Use Your Information</h2>
                    <div className="prose dark:prose-invert max-w-none space-y-4 text-lg leading-relaxed text-muted-foreground">
                        <p>The information you provide is used solely to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Communicate with you via SMS, phone, or email</li>
                            <li>Provide marketing, service updates, and business-related communications</li>
                            <li>Respond to inquiries and requests</li>
                            <li>Maintain records for customer service and regulatory compliance</li>
                        </ul>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-black uppercase tracking-wide text-primary">SMS Data & Mobile Information</h2>
                    <div className="prose dark:prose-invert max-w-none space-y-4 text-lg leading-relaxed text-muted-foreground">
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Your mobile phone number and SMS consent data will be used only for communications from Found It Marketing LLC.</li>
                            <li>We do <span className="font-bold text-foreground">not</span> sell, rent, or share your mobile information with third parties for marketing purposes.</li>
                            <li>SMS data may be stored securely to maintain communication history and compliance.</li>
                            <li>We may use trusted third-party messaging providers solely to facilitate SMS delivery.</li>
                        </ul>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-black uppercase tracking-wide text-primary">Data Security</h2>
                    <div className="prose dark:prose-invert max-w-none space-y-4 text-lg leading-relaxed text-muted-foreground">
                        <p>
                            We implement reasonable administrative, technical, and physical safeguards to protect your personal information from unauthorized access, disclosure, or misuse.
                        </p>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-black uppercase tracking-wide text-primary">Your Choices</h2>
                    <div className="prose dark:prose-invert max-w-none space-y-4 text-lg leading-relaxed text-muted-foreground">
                        <p>
                            You may opt out of SMS communications at any time by replying <span className="font-bold text-foreground">STOP</span>.
                        </p>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-black uppercase tracking-wide text-primary">Updates to This Policy</h2>
                    <div className="prose dark:prose-invert max-w-none space-y-4 text-lg leading-relaxed text-muted-foreground">
                        <p>
                            We may update this Privacy Policy from time to time. Any changes will be posted on this page.
                        </p>
                    </div>
                </section>

                <section className="space-y-6 border-t border-border pt-8">
                    <h2 className="text-2xl font-black uppercase tracking-wide text-primary">Contact Information</h2>
                    <div className="prose dark:prose-invert max-w-none space-y-4 text-lg leading-relaxed text-muted-foreground">
                        <p>
                            If you have any questions about this Privacy Policy or our SMS communications, please contact:
                        </p>
                        <div className="font-semibold text-foreground">
                            <p>Found It Marketing LLC</p>
                            <p>📞 318-290-9451</p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
