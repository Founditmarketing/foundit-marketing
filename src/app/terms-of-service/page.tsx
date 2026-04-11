import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service | Found It Marketing',
    description: 'Terms of Service, including SMS compliance and A2P messaging policies for Found It Marketing LLC.',
};

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-background text-foreground pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter">Terms of Service</h1>
                    <p className="text-muted-foreground">Last Updated: {new Date().toLocaleDateString()}</p>
                </div>

                <section className="space-y-6">
                    <h2 className="text-2xl font-black uppercase tracking-wide text-primary">1. Agreement to Terms</h2>
                    <div className="prose dark:prose-invert max-w-none space-y-4 text-lg leading-relaxed text-muted-foreground">
                        <p>
                            By accessing or using the website and services provided by Found It Marketing LLC ("Company", "we", "us", or "our"), you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not access or use the website or services.
                        </p>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-black uppercase tracking-wide text-primary">2. SMS & A2P Communications Policy</h2>
                    <div className="prose dark:prose-invert max-w-none space-y-4 text-lg leading-relaxed text-muted-foreground">
                        <p>
                            By submitting identifying information via web forms on our site including but not limited to your phone number, you explicitly consent to receive SMS (text) messages from Found It Marketing LLC. These text messages may include responses to your inquiries, appointment reminders, marketing content, promotional offers, and account updates.
                        </p>
                        <p className="font-semibold text-foreground">
                            Message frequency may vary. Standard message and data rates may apply depending on your cellular provider plan.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><span className="font-bold text-foreground">Opting Out:</span> You may opt-out of receiving SMS communications at any time by replying <strong className="text-foreground">STOP</strong> to any message you receive from us. Once we receive your STOP command, we will send one final confirmation message, and no further messages will be sent unless you explicitly opt back in.</li>
                            <li><span className="font-bold text-foreground">Support:</span> If you require assistance or experience issues with our SMS program, you can reply <strong className="text-foreground">HELP</strong> for further instructions, or contact us directly using the information below.</li>
                        </ul>
                        <p>
                            Consent to receive SMS messages is not a condition of purchasing any goods or services from Found It Marketing LLC.
                        </p>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-black uppercase tracking-wide text-primary">3. Data & Privacy</h2>
                    <div className="prose dark:prose-invert max-w-none space-y-4 text-lg leading-relaxed text-muted-foreground">
                        <p>
                            Your privacy is incredibly important to us. All personal data collected, including phone numbers and consent data for SMS communication, is strictly used for internal business purposes by Found It Marketing LLC.
                        </p>
                        <p>
                            <span className="font-bold text-foreground">We explicitly do not sell, rent, or lease your mobile information to third parties or affiliates for their own marketing/promotional purposes.</span> Any third-party vendors utilized (e.g., messaging gateways) are strictly for the purpose of carrying out the communications as authorized by your initial consent, and are bound by identical privacy constraints.
                        </p>
                        <p>
                            For a comprehensive view of how we protect your information, please read our complete <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>.
                        </p>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-black uppercase tracking-wide text-primary">4. Intellectual Property</h2>
                    <div className="prose dark:prose-invert max-w-none space-y-4 text-lg leading-relaxed text-muted-foreground">
                        <p>
                            The content, organization, graphics, design, compilation, magnetic translation, digital conversion and other matters related to the Site are protected under applicable copyrights, trademarks and other proprietary (including but not limited to intellectual property) rights. The copying, redistribution, use or publication by you of any such matters or any part of the Site is strictly prohibited.
                        </p>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-black uppercase tracking-wide text-primary">5. Limitation of Liability</h2>
                    <div className="prose dark:prose-invert max-w-none space-y-4 text-lg leading-relaxed text-muted-foreground">
                        <p>
                            Found It Marketing LLC and its affiliates will not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to or use of the website or services (including errors or delays in SMS delivery).
                        </p>
                    </div>
                </section>

                <section className="space-y-6 border-t border-border pt-8">
                    <h2 className="text-2xl font-black uppercase tracking-wide text-primary">Contact Information</h2>
                    <div className="prose dark:prose-invert max-w-none space-y-4 text-lg leading-relaxed text-muted-foreground">
                        <p>
                            If you have questions regarding these Terms of Service or our SMS program, please contact us at:
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
