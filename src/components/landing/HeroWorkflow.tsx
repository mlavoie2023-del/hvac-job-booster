import { useEffect, useState } from "react";
import { Mail, Calendar, Star, CheckCircle, UserPlus, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Notification {
  id: number;
  type: "avatar" | "icon";
  icon?: LucideIcon;
  avatar?: string;
  initials?: string;
  primary: string;
  secondary: string;
}

const notifications: Notification[] = [
  {
    id: 1,
    type: "avatar",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces&facepad=2",
    initials: "SM",
    primary: "Sarah M.",
    secondary: "Submitted inquiry form",
  },
  {
    id: 2,
    type: "icon",
    icon: Mail,
    primary: "Follow-up #3",
    secondary: "Sent to James",
  },
  {
    id: 3,
    type: "icon",
    icon: Calendar,
    primary: "Discovery call",
    secondary: "Scheduled for Thursday",
  },
  {
    id: 4,
    type: "icon",
    icon: Star,
    primary: "Review request",
    secondary: "Sent to Mike T.",
  },
  {
    id: 5,
    type: "icon",
    icon: CheckCircle,
    primary: "Welcome sequence",
    secondary: "Started for Lisa",
  },
  {
    id: 6,
    type: "icon",
    icon: UserPlus,
    primary: "New referral",
    secondary: "From David K.",
  },
  {
    id: 7,
    type: "avatar",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces&facepad=2",
    initials: "JR",
    primary: "John R.",
    secondary: "Completed onboarding",
  },
  {
    id: 8,
    type: "icon",
    icon: Users,
    primary: "Annual review",
    secondary: "Reminder sent to 12 clients",
  },
];

// Horizontal positions for desktop (left, center-left, center-right, right)
const desktopPositions = [
  { left: "5%", top: "0%" },
  { left: "55%", top: "15%" },
  { left: "25%", top: "35%" },
  { left: "70%", top: "55%" },
];

// Mobile positions (stacked in center with offset)
const mobilePositions = [
  { left: "5%", top: "0%" },
  { left: "15%", top: "35%" },
  { left: "5%", top: "70%" },
];

interface NotificationCardProps {
  notification: Notification;
  position: { left: string; top: string };
  animationDelay: number;
  animationDuration: number;
}

const NotificationCard = ({ 
  notification, 
  position, 
  animationDelay,
  animationDuration 
}: NotificationCardProps) => {
  const Icon = notification.icon;

  return (
    <div
      className="absolute flex items-center gap-3 bg-card/80 backdrop-blur-sm border border-primary/20 rounded-xl px-4 py-3 shadow-lg"
      style={{
        left: position.left,
        top: position.top,
        animation: `notification-float ${animationDuration}s ease-in-out infinite`,
        animationDelay: `${animationDelay}s`,
        boxShadow: "0 0 20px hsl(var(--primary) / 0.1), 0 8px 32px rgba(0,0,0,0.12)",
      }}
    >
      {/* Icon or Avatar */}
      {notification.type === "avatar" ? (
        <Avatar className="h-10 w-10 border-2 border-primary/30">
          <AvatarImage src={notification.avatar} alt={notification.primary} />
          <AvatarFallback className="bg-primary/20 text-primary text-sm font-medium">
            {notification.initials}
          </AvatarFallback>
        </Avatar>
      ) : Icon ? (
        <div 
          className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 border border-primary/30"
          style={{ boxShadow: "0 0 12px hsl(var(--primary) / 0.2)" }}
        >
          <Icon className="w-5 h-5 text-primary" />
        </div>
      ) : null}

      {/* Text content */}
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-foreground">
          {notification.primary}
        </span>
        <span className="text-xs text-muted-foreground">
          {notification.secondary}
        </span>
      </div>
    </div>
  );
};

const HeroWorkflow = () => {
  const [visibleNotifications, setVisibleNotifications] = useState<number[]>([0, 1, 2]);
  const animationDuration = 6; // seconds per card cycle
  const staggerDelay = 2; // seconds between each card start

  useEffect(() => {
    // Rotate notifications every staggerDelay seconds
    const interval = setInterval(() => {
      setVisibleNotifications((prev) => {
        return prev.map((index) => (index + 1) % notifications.length);
      });
    }, staggerDelay * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto mt-12 px-4">
      {/* Desktop view */}
      <div className="hidden sm:block relative h-[180px]">
        {visibleNotifications.map((notifIndex, posIndex) => (
          <NotificationCard
            key={`${notifIndex}-${posIndex}`}
            notification={notifications[notifIndex]}
            position={desktopPositions[posIndex % desktopPositions.length]}
            animationDelay={posIndex * staggerDelay}
            animationDuration={animationDuration}
          />
        ))}
      </div>

      {/* Mobile view */}
      <div className="sm:hidden relative h-[220px]">
        {visibleNotifications.slice(0, 3).map((notifIndex, posIndex) => (
          <NotificationCard
            key={`mobile-${notifIndex}-${posIndex}`}
            notification={notifications[notifIndex]}
            position={mobilePositions[posIndex]}
            animationDelay={posIndex * staggerDelay}
            animationDuration={animationDuration}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroWorkflow;
