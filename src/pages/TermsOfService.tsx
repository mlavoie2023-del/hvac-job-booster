import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import lavoieLogo from "@/assets/lavoie-logo-square.png";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
        <div className="section-container">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <img src={lavoieLogo} alt="Lavoie Systems" className="h-9 w-9" />
              <span className="text-xl font-bold text-foreground">Lavoie Systems</span>
            </Link>
            <Link
              to="/"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
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
                Lavoie Systems provides AI-powered software solutions for HVAC businesses, including 
                automated call answering, lead follow-up, appointment scheduling, and customer relationship 
                management tools.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">3. Free Trial</h2>
              <p className="mt-4 text-muted-foreground">
                We offer a 14-day free trial after a 7-day build period. You may cancel at any time 
                during the trial period without being charged. After the trial period, your subscription 
                will automatically begin unless you cancel.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">4. Payment Terms</h2>
              <p className="mt-4 text-muted-foreground">
                Subscription fees are billed on a recurring basis. You authorize us to charge your 
                payment method for all fees due. All fees are non-refundable except as expressly 
                stated in these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">5. Cancellation</h2>
              <p className="mt-4 text-muted-foreground">
                You may cancel your subscription at any time. Cancellation will take effect at the end 
                of your current billing period. No refunds will be provided for partial billing periods.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">6. Limitation of Liability</h2>
              <p className="mt-4 text-muted-foreground">
                Lavoie Systems shall not be liable for any indirect, incidental, special, consequential, 
                or punitive damages resulting from your use of or inability to use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">7. Changes to Terms</h2>
              <p className="mt-4 text-muted-foreground">
                We reserve the right to modify these terms at any time. We will notify you of any 
                material changes by posting the new terms on our website. Your continued use of our 
                services after such changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">8. Contact Us</h2>
              <p className="mt-4 text-muted-foreground">
                If you have any questions about these Terms of Service, please contact us at{" "}
                <a href="mailto:support@mail.lavoiesystems.com" className="text-primary hover:underline">
                  support@mail.lavoiesystems.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsOfService;
