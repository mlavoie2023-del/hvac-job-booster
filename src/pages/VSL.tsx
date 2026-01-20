import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
const VSL = () => {
  return <div className="min-h-screen bg-background">
      <main className="py-12 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Video Section */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl mb-4">
              See How HVAC Companies Are Booking More Jobs
            </h1>
            <p className="text-muted-foreground text-lg">
              Watch this quick 3-minute demo
            </p>
          </div>

          {/* Video Player */}
          <div className="rounded-2xl overflow-hidden border border-border/50 bg-card shadow-lg mb-10">
            <AspectRatio ratio={16 / 9}>
              {/* Replace the src with your actual video URL */}
              <iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID" title="Product Demo Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full" />
            </AspectRatio>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
              <Link to="/book">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">21-day free trial • Cancel Anytime</p>
          </div>
        </div>
      </main>
    </div>;
};
export default VSL;