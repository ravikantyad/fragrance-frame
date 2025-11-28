import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Heart,
  MessageCircle,
  Phone,
  MapPin,
  Calendar,
  Gauge,
  Star,
  Eye,
  Fuel,
  Clock,
  Car, // Adding a car icon
  Wrench, // Adding a wrench icon for parts
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ListingCardProps {
  listing: {
    id: string;
    title: string;
    price: number;
    images: string[];
    type: "car" | "part";
    condition: string;
    location: string;
    seller: {
      name: string;
      rating: number;
      isVerified: boolean;
      lastSeen?: string;
    };
    isFeatured?: boolean;
    views: number;
    // Car specific (now objects from the backend)
    year?: number;
    kmDriven?: number;
    fuelType?: string;
    transmission?: string;
    make?: { id: number; name: string };
    model?: { id: number; name: string };
    sub_model?: { id: number; name: string };
    // Part specific
    category?: string;
    brand?: string;
  };
  onChat?: (listingId: string) => void;
  onCall?: (listingId: string) => void;
  onSave?: (listingId: string) => void;
  isSaved?: boolean;
  className?: string;
}

export const ListingCard = ({
  listing,
  onChat,
  onCall,
  onSave,
  isSaved = false,
  className,
}: ListingCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatKm = (km: number) => {
    if (km >= 100000) {
      return `${(km / 100000).toFixed(1)}L km`;
    }
    return `${(km / 1000).toFixed(0)}k km`;
  };

  const mainImage =
    Array.isArray(listing.images) && listing.images.length > 0
      ? listing.images[0]
      : "https://images.unsplash.com/photo-1519326442930-58c06774a161?w=400&h=300&fit=crop";

  return (
    <Card
      className={cn(
        "group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-card border-0 relative",
        listing.isFeatured && "ring-2 ring-secondary ring-offset-2",
        className
      )}
    >
      <Link
        to={listing.type === "car" ? `/cars/${listing.id}` : `/parts/${listing.id}`}
        className="absolute inset-0 z-0"
        aria-label={`View details for ${listing.title}`}
      />

      <div className="relative">
        <div className="aspect-[4/3] overflow-hidden bg-muted">
          <img
            src={mainImage}
            alt={listing.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {listing.isFeatured && (
            <Badge variant="secondary" className="bg-secondary text-secondary-foreground shadow-md">
              ⭐ Featured
            </Badge>
          )}
          <Badge variant="outline" className="bg-white/90 text-foreground border-white/20">
            <Eye className="h-3 w-3 mr-1" />
            {listing.views}
          </Badge>
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onSave?.(listing.id);
          }}
          className={cn(
            "absolute top-3 right-3 bg-white/90 hover:bg-white shadow-md z-10 relative",
            isSaved ? "text-destructive" : "text-foreground"
          )}
        >
          <Heart className={cn("h-4 w-4", isSaved && "fill-current")} />
        </Button>

        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 z-10">
          <Button
            variant="secondary"
            size="sm"
            className="shadow-lg relative"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onCall?.(listing.id);
            }}
          >
            <Phone className="h-4 w-4 mr-2" />
            Call
          </Button>
          <Button
            variant="hero"
            size="sm"
            className="shadow-lg relative"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onChat?.(listing.id);
            }}
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Chat
          </Button>
        </div>
      </div>

      <CardContent className="p-4 relative z-10">
        <div className="mb-3">
          <h3 className="font-semibold text-lg text-foreground line-clamp-1 mb-1">
            {listing.title}
          </h3>
          <div className="text-2xl font-bold text-primary">
            {formatPrice(listing.price)}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-4 text-sm text-muted-foreground">
          {/* Conditional Rendering based on listing type */}
          {listing.type === 'car' && (
            <>
              {listing.year !== undefined && (
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>{listing.year}</span>
                </div>
              )}
              {listing.kmDriven !== undefined && (
                <div className="flex items-center gap-1">
                  <Gauge className="h-3 w-3" />
                  <span>{formatKm(listing.kmDriven)}</span>
                </div>
              )}
              {listing.fuelType && (
                <div className="flex items-center gap-1">
                  <Fuel className="h-3 w-3" />
                  <span>{listing.fuelType}</span>
                </div>
              )}
              {listing.transmission && (
                <div className="flex items-center gap-1">
                  <Car className="h-3 w-3" />
                  <span>{listing.transmission}</span>
                </div>
              )}
              {listing.make && (
                <div className="flex items-center gap-1">
                  <span>🚗</span>
                  <span>{listing.make.name}</span>
                </div>
              )}
              {listing.model && (
                <div className="flex items-center gap-1">
                  <span>🚘</span>
                  <span>{listing.model.name}</span>
                </div>
              )}
              {listing.sub_model && (
                <div className="flex items-center gap-1">
                  <span>⚙️</span>
                  <span>{listing.sub_model.name}</span>
                </div>
              )}
            </>
          )}

          {listing.type === 'part' && (
            <>
              {listing.category && (
                <div className="flex items-center gap-1">
                  <Wrench className="h-3 w-3" />
                  <span>{listing.category}</span>
                </div>
              )}
              {listing.brand && (
                <div className="flex items-center gap-1">
                  <Star className="h-3 w-3" />
                  <span>{listing.brand}</span>
                </div>
              )}
              {listing.condition && (
                <div className="flex items-center gap-1">
                  <Badge variant="outline" className="text-xs px-2 py-0 h-4">{listing.condition}</Badge>
                </div>
              )}
            </>
          )}
        </div>

        {listing.location && (
          <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
            <MapPin className="h-3 w-3" />
            <span>{listing.location}</span>
          </div>
        )}

        <div className="flex items-center justify-between border-t border-border pt-3">
          <div className="flex items-center gap-2">
            {listing.seller && listing.seller.name && (
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-xs font-semibold">
                {listing.seller.name.charAt(0)}
              </div>
            )}
            <div>
              {listing.seller && listing.seller.name && (
                <div className="flex items-center gap-1">
                  <span className="text-sm font-medium text-foreground">{listing.seller.name}</span>
                  {listing.seller.isVerified && (
                    <Badge variant="outline" className="text-xs px-1 py-0 h-4">
                      ✓
                    </Badge>
                  )}
                </div>
              )}
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                {listing.seller && listing.seller.rating !== undefined && (
                  <>
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span>{listing.seller.rating}</span>
                    <span>•</span>
                  </>
                )}
                {listing.seller && listing.seller.lastSeen && (
                  <>
                    <Clock className="h-3 w-3" />
                    <span>{listing.seller.lastSeen}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-2 mt-4 md:hidden">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 relative"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <Phone className="h-4 w-4 mr-2" />
            Call
          </Button>
          <Button
            variant="hero"
            size="sm"
            className="flex-1 relative"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Chat
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};