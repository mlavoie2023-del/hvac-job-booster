import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import lavoieLogo from "@/assets/lavoie-logo-square.png";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur-lg">
        <div className="section-container">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img 
                src={lavoieLogo} 
                alt="Lavoie Systems" 
                className="h-8 w-8"
              />
              <span className="text-lg font-bold text-foreground">
                Lavoie Systems
              </span>
            </Link>

            {/* Back to Home */}
            <Link
              to="/"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="section-container py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold text-foreground">Terms of Service</h1>
          <p className="mt-4 text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

          <div className="mt-12 space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
              <p className="mt-4 text-muted-foreground">
                By accessing or using Lavoie Systems' services, you agree to be bound by these Terms of 
                Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">2. Description of Services</h2>
              <p className="mt-4 text-muted-foreground">
                Lavoie Systems provides custom-built practice management solutions for solo fee-only 
                financial planners, including client management platforms, automated workflows, 
                lead tracking, appointment scheduling, payment processing integrations, and mobile 
                app access for on-the-go practice management.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">3. Setup Fee and Subscription</h2>
              <p className="mt-4 text-muted-foreground">
                Our service requires a one-time setup fee, payable upfront before your custom system 
                build begins. This fee covers the initial configuration, customization, and deployment 
                of your system. Following setup, you will be billed a recurring monthly subscription 
                fee for continued access to and use of the services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">4. Usage-Based Charges</h2>
              <p className="mt-4 text-muted-foreground">
                In addition to your monthly subscription, certain services incur usage-based charges 
                that are billed separately. These include, but are not limited to, SMS messaging, email 
                sending, AI-powered features, and other third-party services utilized through our platform. 
                Usage charges will be calculated based on your actual consumption and billed in accordance 
                with our current rate schedule, which may be updated from time to time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">5. Payment Terms</h2>
              <p className="mt-4 text-muted-foreground">
                The setup fee is due in full before work begins on your system. Subscription fees are 
                billed monthly in advance. Usage-based charges are billed in arrears based on your 
                consumption during the billing period. You authorize us to charge your payment method 
                for all fees due. All fees are non-refundable except as expressly stated in these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">6. Cancellation</h2>
              <p className="mt-4 text-muted-foreground">
                You may cancel your subscription at any time. Cancellation will take effect at the end 
                of your current billing period. No refunds will be provided for the setup fee, unused 
                subscription time, or partial billing periods. You remain responsible for any outstanding 
                usage-based charges incurred prior to cancellation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">7. Limitation of Liability</h2>
              <p className="mt-4 text-muted-foreground">
                Lavoie Systems shall not be liable for any indirect, incidental, special, consequential, 
                or punitive damages resulting from your use of or inability to use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">8. Changes to Terms</h2>
              <p className="mt-4 text-muted-foreground">
                We reserve the right to modify these terms at any time. We will notify you of any 
                material changes by posting the new terms on our website. Your continued use of our 
                services after such changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">9. Contact Us</h2>
              <p className="mt-4 text-muted-foreground">
                If you have any questions about these Terms of Service, please contact us at{" "}
                <a href="mailto:support@mail.lavoiesystems.com" className="text-primary hover:underline">
                  support@mail.lavoiesystems.com
                </a>
              </p>
              <p className="mt-4 text-muted-foreground">
                <strong className="text-foreground">Address:</strong><br />
                1900 West Park Drive<br />
                Westborough, MA 01581<br />
                United States
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsOfService;
