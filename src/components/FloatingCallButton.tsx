import { useState } from "react";
import { Phone, X, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const PHONE_NUMBER = "+1 508 463 4418";
const PHONE_NUMBER_RAW = "+15084634418";

const FloatingCallButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(PHONE_NUMBER);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-accent text-accent-foreground px-5 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
      >
        <div className="relative">
          <Phone className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-success rounded-full animate-pulse" />
        </div>
        <span className="font-semibold text-sm sm:text-base">Try AI Receptionist</span>
      </button>

      {/* Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-xl">
              <Phone className="w-5 h-5 text-primary" />
              Try Our AI Receptionist
            </DialogTitle>
            <DialogDescription>
              Experience how our AI handles calls for HVAC businesses. Call now and ask about scheduling, pricing, or emergency services.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* Phone Number Display */}
            <div className="bg-muted rounded-xl p-4 text-center">
              <p className="text-sm text-muted-foreground mb-1">Call this number:</p>
              <p className="text-2xl font-bold text-foreground">{PHONE_NUMBER}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <Button
                variant="hero"
                size="lg"
                className="w-full h-14 text-base"
                asChild
              >
                <a href={`tel:${PHONE_NUMBER_RAW}`} className="flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleCopy}
                className="w-full h-12"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy Number
                  </>
                )}
              </Button>
            </div>

            {/* What to Expect */}
            <div className="border-t pt-4">
              <p className="text-sm font-medium text-foreground mb-2">What to expect:</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• AI answers instantly, 24/7</li>
                <li>• Ask about scheduling an appointment</li>
                <li>• Inquire about pricing or services</li>
                <li>• Test emergency call handling</li>
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FloatingCallButton;
