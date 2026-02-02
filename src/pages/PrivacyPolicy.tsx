import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import lavoieLogo from "@/assets/lavoie-logo-square.png";

const PrivacyPolicy = () => {
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
          <h1 className="text-4xl font-bold text-foreground">Privacy Policy</h1>
          <p className="mt-4 text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

          <div className="mt-12 space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
              <p className="mt-4 text-muted-foreground">
                We collect information you provide directly to us, such as when you inquire about our services, 
                sign up for a subscription, or contact us for support. This may include your name, email address, 
                phone number, financial planning practice information, payment details, and any other information 
                you choose to provide in connection with our practice management solutions for solo fee-only 
                financial planners.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
              <p className="mt-4 text-muted-foreground">
                We use the information we collect to provide, maintain, and improve our services, 
                process payments and transactions (including setup fees, subscription fees, and 
                usage-based charges), send you technical notices and support messages, communicate 
                about your subscription, and respond to your comments and questions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">3. Information Sharing</h2>
              <p className="mt-4 text-muted-foreground">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as necessary to provide our services or as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">4. Data Security</h2>
              <p className="mt-4 text-muted-foreground">
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">5. Your Rights</h2>
              <p className="mt-4 text-muted-foreground">
                You have the right to access, correct, or delete your personal information. You may also 
                opt out of receiving promotional communications from us by following the instructions in 
                those messages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">6. Contact Us</h2>
              <p className="mt-4 text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at{" "}
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

export default PrivacyPolicy;
