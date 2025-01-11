            {loading && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3].map((n) => (
                  <Card key={`skeleton-${n}`} className="overflow-hidden bg-white/5">
                    <CardContent className="p-0">
                      <Skeleton className="h-64 w-full" />
                      <div className="p-6">
                        <Skeleton className="h-6 w-3/4 mb-2" />
                        <Skeleton className="h-4 w-1/2" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
            <div className="mt-8 text-center">
              <Button 
                onClick={loadMoreItems} 
                className="bg-teal-500 hover:bg-teal-600 text-white"
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Load More'}
              </Button>
            </div>const AddExperienceForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    type: 'place',
    placeId: '',
    description: '',
    tags: []
  });

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white/10 backdrop-blur-xl p-6 rounded-xl w-full max-w-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Add New Experience</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <form className="space-y-6">
          <div>
            <label className="block text-white mb-2">Google Place ID</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter Google Place ID"
                className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white"
                value={formData.placeId}
                onChange={(e) => setFormData({...formData, placeId: e.target.value})}
              />
              <button 
                type="button"
                className="absolute right-3 top-3 text-gray-400 hover:text-white"
                onClick={() => window.open('https://developers.google.com/maps/documentation/places/web-service/place-id', '_blank')}
              >
                <Help className="w-5 h-5" />
              </button>
            </div>
            <p className="mt-1 text-sm text-gray-400">Find Place ID using Google's Place ID Finder</p>
          </div>

          <div>
            <label className="block text-white mb-2">Title</label>
            <input
              type="text"
              placeholder="Experience title"
              className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-white mb-2">Type</label>
            <select
              className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white"
              value={formData.type}
              onChange={(e) => setFormData({...formData, type: e.target.value})}
            >
              <option value="place">Natural Wonder</option>
              <option value="experience">Experience</option>
              <option value="food">Food & Dining</option>
            </select>
          </div>

          <div>
            <label className="block text-white mb-2">Description</label>
            <textarea
              rows={4}
              placeholder="Describe the experience"
              className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white"
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-white mb-2">Tags</label>
            <input
              type="text"
              placeholder="Add tags separated by commas"
              className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white"
              onChange={(e) => setFormData({...formData, tags: e.target.value.split(',')})}
            />
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:from-orange-600 hover:to-pink-600 transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};import React, { useState } from 'react';
import { Search, MapPin, Clock, Star, Filter, Bookmark, Camera, ThumbsUp, 
  MessageCircle, Share2, Grid, Map, Award, Users, Utensils, Coffee,
  Compass, Zap, Sparkles, X, Sun, Moon, Phone, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Card, CardContent } from '@/components/ui/card';

const ExplorationPage = ({ place, onClose, isDarkMode }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadMoreItems();
  }, []);

  const loadMoreItems = () => {
    setLoading(true);
    setTimeout(() => {
      const newItems = [
        { id: items.length + 1, name: 'New Experience', type: 'experience' },
        { id: items.length + 2, name: 'New Place', type: 'place' },
        { id: items.length + 3, name: 'New Dining Venue', type: 'dining' },
      ];
      setItems([...items, ...newItems]);
      setLoading(false);
      setPage(page + 1);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-gray-900 overflow-y-auto z-50">
      <div className="relative">
        {/* Hero Section */}
        <div className="h-96 relative">
          <img
            src={place.image}
            alt={place.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-6 -mt-32 relative">
          {/* AI Assistant Floating Card */}
          <div className="absolute right-6 top-0 w-80 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="text-white font-medium">AI Insights</div>
            </div>
            <div className="space-y-3">
              {place.details.aiInsights.map((insight, index) => (
                <div key={index} className="flex items-start gap-2 text-sm text-gray-300">
                  <div className="w-1 h-1 rounded-full bg-orange-500 mt-2"></div>
                  <div>{insight}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-white mb-4">{place.title}</h1>
            <div className="flex items-center gap-4 text-gray-300 mb-6">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">{place.type}</span>
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-current text-yellow-400" />
                <span>{place.rating}</span>
                <span className="text-sm">({place.reviews} reviews)</span>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex gap-6 mb-8 border-b border-white/10">
              {['Overview', 'Reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                  className={`pb-4 px-2 text-sm ${
                    activeTab === tab.toLowerCase()
                      ? 'text-white border-b-2 border-orange-500'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold text-white mb-4">Contact Information</h2>
                  <div className="grid grid-cols-1 gap-3 mb-6">
                    {place.details.contact?.address && (
                      <div className="flex items-center gap-3 text-gray-300">
                        <MapPin className="w-5 h-5 text-orange-500" />
                        <span>{place.details.contact.address}</span>
                      </div>
                    )}
                    {place.details.contact?.phone && (
                      <div className="flex items-center gap-3 text-gray-300">
                        <Phone className="w-5 h-5 text-orange-500" />
                        <a href={`tel:${place.details.contact.phone}`} className="hover:text-orange-400 transition-colors">
                          {place.details.contact.phone}
                        </a>
                      </div>
                    )}
                    {place.details.contact?.website && (
                      <div className="flex items-center gap-3 text-gray-300">
                        <Globe className="w-5 h-5 text-orange-500" />
                        <a href={place.details.contact.website} target="_blank" rel="noopener noreferrer" 
                           className="hover:text-orange-400 transition-colors">
                          Visit Website
                        </a>
                      </div>
                    )}
                  </div>

                  <h2 className="text-xl font-semibold text-white mb-4">Features & Highlights</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {place.details.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 text-gray-300">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-white mb-4">Best Times to Visit</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {place.details.bestTimes.map((time, index) => (
                      <div key={index} className="flex items-center gap-3 text-gray-300">
                        <Clock className="w-5 h-5 text-orange-500" />
                        {time}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-white mb-4">Places to Stay Nearby</h2>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {place.details.nearbyHotels?.map((hotel) => (
                                              <a
                        key={hotel.id}
                        href={hotel.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/10 transition-all group"
                      >
                        <img src={hotel.image} alt={hotel.name} className="w-20 h-20 object-cover rounded-lg" />
                        <div>
                          <h4 className="font-medium text-white group-hover:text-orange-500 transition-colors">
                            {hotel.name}
                          </h4>
                          <div className="text-sm text-gray-300 mb-1">{hotel.distance}</div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-current text-yellow-400" />
                            <span className="text-sm text-gray-300">{hotel.rating}/5</span>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-white mb-4">Nearby Food & Drinks</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {place.details.nearbyFood.map((food, index) => (
                      <div key={index} className="flex items-center gap-3 text-gray-300">
                        <Utensils className="w-5 h-5 text-orange-500" />
                        {food}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Reviews Section */}
            {activeTab === 'reviews' && (
              <div className="space-y-8">
                <div className="bg-white/5 rounded-xl p-6 mb-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{place.rating}</h3>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star} 
                            className={`w-4 h-4 ${star <= place.rating 
                              ? 'fill-current text-yellow-400' 
                              : 'text-gray-600'}`}
                          />
                        ))}
                        <span className="text-gray-400 ml-2">{place.reviews} reviews</span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Individual Reviews */}
                <div className="space-y-6">
                  {place.details.reviews.map((review) => (
                    <div key={review.id} className="bg-white/5 rounded-xl p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start gap-4">
                          <img
                            src={review.profile}
                            alt={review.author}
                            className="w-10 h-10 rounded-full"
                          />
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-medium text-white">{review.author}</h4>
                              {review.verified && (
                                <span className="text-xs bg-green-500/20 text-green-500 px-2 py-1 rounded-full">
                                  Verified Visit
                                </span>
                              )}
                            </div>
                            <div className="text-sm text-gray-400">
                              {review.visitType} • {review.visitDate}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                              key={star} 
                              className={`w-4 h-4 ${star <= review.rating 
                                ? 'fill-current text-yellow-400' 
                                : 'text-gray-600'}`}
                            />
                          ))}
                        </div>
                      </div>
                      <h5 className="text-lg font-medium text-white mb-2">{review.title}</h5>
                      <p className="text-gray-300 mb-4">{review.content}</p>
                      {review.photos && review.photos.length > 0 && (
                        <div className="flex gap-2 mb-4">
                          {review.photos.map((photo, index) => (
                            <img
                              key={index}
                              src={photo}
                              alt={`Review photo ${index + 1}`}
                              className="w-24 h-24 object-cover rounded-lg"
                            />
                          ))}
                        </div>
                      )}
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-4">
                          <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                            <ThumbsUp className="w-4 h-4" />
                            Helpful ({review.helpful})
                          </button>
                          <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                            <Share2 className="w-4 h-4" />
                            Share
                          </button>
                        </div>
                        <span className="text-gray-400">{review.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-4">Something went wrong.</h1>
            <Button onClick={() => window.location.reload()} className="bg-teal-500 hover:bg-teal-600">
              Refresh Page
            </Button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const Wunderlust = () => {
  const [selectedCategory, setSelectedCategory] = useState('places');
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [selectedCity, setSelectedCity] = useState('sydney');
  const cities = [
    { id: 'sydney', name: 'Sydney', region: 'New South Wales' },
    { id: 'melbourne', name: 'Melbourne', region: 'Victoria' },
    { id: 'brisbane', name: 'Brisbane', region: 'Queensland' },
    { id: 'perth', name: 'Perth', region: 'Western Australia' }
  ];

  const categories = [
    {
      id: 'places',
      name: 'Places',
      icon: <Compass className="w-5 h-5" />,
      color: 'from-green-500 to-teal-500',
      subcategories: ['Natural Wonders', 'Parks', 'Beaches', 'Lookouts']
    },
    {
      id: 'experiences',
      name: 'Experiences',
      icon: <Sparkles className="w-5 h-5" />,
      color: 'from-blue-500 to-purple-500',
      subcategories: ['Tours', 'Activities', 'Classes', 'Events']
    },
    {
      id: 'food',
      name: 'Food & Dining',
      icon: <Utensils className="w-5 h-5" />,
      color: 'from-orange-500 to-pink-500',
      subcategories: ['Restaurants', 'Cafes', 'Markets', 'Food Trails']
    }
  ];

  const discoveries = {
    places: [
      {
        id: 1,
        title: "Carrington Falls",
        type: "Natural Wonder",
        rating: 4.8,
        reviews: 892,
        image: "/api/placeholder/800/600?text=Carrington+Falls&bg=123",
        tags: ["Waterfall", "Hiking", "Photography"],
        description: "Stunning 50-meter waterfall with walking tracks and lookouts",
        priceRange: "Free",
        location: { lat: -34.6367, lng: 150.6806 },
        details: {
          contact: {
            address: "Carrington Falls Road, Budderoo National Park, NSW 2577",
            phone: "+61 2 4887 8244",
            website: "https://www.nationalparks.nsw.gov.au/carrington-falls"
          },
          atmosphere: "Natural wilderness setting",
          features: ["Multiple lookouts", "Walking tracks", "Picnic areas", "Swimming holes"],
          bestTimes: ["Early morning", "Sunset", "After rain"],
          nearbyFood: ["Robertson Pie Shop", "The General Cafe", "Local Wineries"],
          nearbyHotels: [
            {
              id: 1,
              name: "Mountain Valley Resort",
              distance: "2.5 km from Carrington Falls",
              rating: 4.6,
              image: "/api/placeholder/160/160?text=Mountain+Valley",
              bookingUrl: "https://booking.com/example-affiliate-link-1"
            },
            {
              id: 2,
              name: "Rainforest Retreat",
              distance: "3.8 km from Carrington Falls",
              rating: 4.8,
              image: "/api/placeholder/160/160?text=Rainforest+Retreat",
              bookingUrl: "https://booking.com/example-affiliate-link-2"
            }
          ],
          nearbyHotels: [
            {
              id: 1,
              name: "Otford Cottage",
              distance: "1.8 km from Figure Eight Pools",
              rating: 4.7,
              image: "/api/placeholder/160/160?text=Otford+Cottage",
              bookingUrl: "https://booking.com/example-affiliate-link-3"
            },
            {
              id: 2,
              name: "Coastal View B&B",
              distance: "2.3 km from Figure Eight Pools",
              rating: 4.5,
              image: "/api/placeholder/160/160?text=Coastal+View",
              bookingUrl: "https://booking.com/example-affiliate-link-4"
            }
          ],
          nearbyHotels: [
            {
              id: 1,
              name: "Katoomba Mountain Lodge",
              distance: "0.5 km from abseiling site",
              rating: 4.8,
              image: "/api/placeholder/160/160?text=Mountain+Lodge",
              bookingUrl: "https://booking.com/example-affiliate-link-5"
            },
            {
              id: 2,
              name: "Echo Point Hotel",
              distance: "1.2 km from abseiling site",
              rating: 4.6,
              image: "/api/placeholder/160/160?text=Echo+Point",
              bookingUrl: "https://booking.com/example-affiliate-link-6"
            }
          ],
          nearbyHotels: [
            {
              id: 1,
              name: "Leura Luxury Resort",
              distance: "0.3 km from restaurant",
              rating: 4.9,
              image: "/api/placeholder/160/160?text=Leura+Resort",
              bookingUrl: "https://booking.com/example-affiliate-link-7"
            },
            {
              id: 2,
              name: "Heritage Mountain Hotel",
              distance: "0.8 km from restaurant",
              rating: 4.7,
              image: "/api/placeholder/160/160?text=Heritage+Hotel",
              bookingUrl: "https://booking.com/example-affiliate-link-8"
            }
          ],
          aiInsights: [
            "Less crowded on weekday mornings",
            "Best photography lighting between 3-5pm",
            "Water flow strongest after recent rainfall"
          ],
          reviews: [
            {
              id: 1,
              author: "Sarah M.",
              profile: "/api/placeholder/40/40?text=SM",
              rating: 5,
              date: "2 days ago",
              title: "A photographer's dream location",
              content: "Visited at sunrise and was absolutely blown away. The morning mist created an ethereal atmosphere, and the waterfall was thundering after recent rain.",
              helpful: 45,
              photos: ["/api/placeholder/400/300?text=Waterfall+Morning"],
              verified: true,
              visitType: "Solo Adventure",
              visitDate: "January 2025"
            },
            {
              id: 2,
              author: "Michael H.",
              profile: "/api/placeholder/40/40?text=MH",
              rating: 4,
              date: "1 week ago",
              title: "Great family spot, some trails challenging",
              content: "Beautiful location with amazing views. The main lookout is easily accessible, but some of the lower trail sections are quite steep.",
              helpful: 32,
              photos: ["/api/placeholder/400/300?text=Family+Picnic"],
              verified: true,
              visitType: "Family Trip",
              visitDate: "December 2024"
            }
          ]
        }
      },
      {
        id: 2,
        title: "Figure Eight Pools",
        type: "Natural Wonder",
        rating: 4.7,
        reviews: 654,
        image: "/api/placeholder/800/600?text=Figure+Eight+Pools&bg=456",
        tags: ["Rock Pools", "Coastal Walk", "Instagram Famous"],
        description: "Natural rock pools in a perfect figure-eight formation",
        priceRange: "Free",
        location: { lat: -34.1714, lng: 151.0699 },
        details: {
          contact: {
            address: "Royal National Park, Otford NSW 2508",
            phone: "+61 2 9542 0648",
            website: "https://www.nationalparks.nsw.gov.au/figure-eight-pools"
          },
          atmosphere: "Coastal rockshelf",
          features: ["Natural pools", "Coastal views", "Rock platforms"],
          bestTimes: ["Low tide", "Weekdays", "Calm sea days"],
          nearbyFood: ["Otford Pantry", "Coastal Cafes", "Beach Kiosk"],
          aiInsights: [
            "Check tide times before visiting",
            "Best photos during morning light",
            "Avoid during high surf conditions"
          ],
          reviews: [
            {
              id: 1,
              author: "Jessica L.",
              profile: "/api/placeholder/40/40?text=JL",
              rating: 5,
              date: "3 days ago",
              title: "Worth the hike!",
              content: "The coastal walk is challenging but the pools are incredible. Make sure to check tide times and wear good shoes.",
              helpful: 38,
              photos: ["/api/placeholder/400/300?text=Rock+Pools"],
              verified: true,
              visitType: "Friends Trip",
              visitDate: "January 2025"
            }
          ]
        }
      }
    ],
    experiences: [
      {
        id: 3,
        title: "Blue Mountains Abseiling",
        type: "Adventure",
        rating: 4.9,
        reviews: 345,
        image: "/api/placeholder/800/600?text=Abseiling&bg=789",
        tags: ["Adventure", "Guided", "Rock Climbing"],
        description: "Guided abseiling adventures in the Blue Mountains",
        priceRange: "$",
        location: { lat: -33.7197, lng: 150.3000 },
        details: {
          contact: {
            address: "123 Cliff Drive, Katoomba NSW 2780",
            phone: "+61 2 4782 1271",
            website: "https://bluemountainsadventures.com.au"
          },
          atmosphere: "Thrilling outdoor adventure",
          features: ["Professional guides", "All equipment provided", "Multiple difficulty levels"],
          bestTimes: ["Morning sessions", "Weekends", "Spring/Autumn"],
          nearbyFood: ["Leura Cafe", "Mountain Deli", "Cliff View Restaurant"],
          aiInsights: [
            "Book beginner sessions first",
            "Weather conditions best in morning",
            "Photography service available"
          ],
          reviews: [
            {
              id: 1,
              author: "Tom R.",
              profile: "/api/placeholder/40/40?text=TR",
              rating: 5,
              date: "1 week ago",
              title: "Incredible experience!",
              content: "Perfect for beginners! The guides were extremely professional and made us feel safe throughout.",
              helpful: 29,
              photos: ["/api/placeholder/400/300?text=Climbing+Adventure"],
              verified: true,
              visitType: "Adventure Trip",
              visitDate: "December 2024"
            }
          ]
        }
      }
    ],
    food: [
      {
        id: 4,
        title: "The Summit Restaurant",
        type: "Fine Dining",
        rating: 4.8,
        reviews: 567,
        image: "/api/placeholder/800/600?text=Summit+Restaurant&bg=012",
        tags: ["Fine Dining", "Views", "Modern Australian"],
        description: "Elevated dining experience with panoramic mountain views",
        priceRange: "$",
        location: { lat: -33.7321, lng: 150.3120 },
        details: {
          contact: {
            address: "45 Mountain View Road, Leura NSW 2780",
            phone: "+61 2 4782 3456",
            website: "https://thesummitrestaurant.com.au"
          },
          atmosphere: "Elegant with stunning views",
          features: ["Panoramic views", "Degustation menu", "Wine pairing"],
          bestTimes: ["Sunset dinner", "Weekend lunch", "Special occasions"],
          nearbyFood: ["Mountain Bars", "Casual Cafes", "Local Wineries"],
          aiInsights: [
            "Reserve window seats in advance",
            "Popular for special occasions",
            "Seasonal menu changes"
          ],
          reviews: [
            {
              id: 1,
              author: "David K.",
              profile: "/api/placeholder/40/40?text=DK",
              rating: 5,
              date: "4 days ago",
              title: "Exceptional dining experience",
              content: "The degustation menu was outstanding. Each course was perfectly executed and the wine pairing was spot on.",
              helpful: 42,
              photos: ["/api/placeholder/400/300?text=Fine+Dining"],
              verified: true,
              visitType: "Date Night",
              visitDate: "January 2025"
            }
          ]
        }
      }
    ]
  };

  const themeClass = isDarkMode ? 'dark' : 'light';
  const bgClass = isDarkMode ? 'bg-gradient-to-b from-gray-900 to-black' : 'bg-gradient-to-b from-gray-50 to-white';
  const textClass = isDarkMode ? 'text-white' : 'text-gray-900';
  const cardClass = isDarkMode ? 'bg-white/5' : 'bg-white';
  const cardHoverClass = isDarkMode ? 'hover:bg-white/10' : 'hover:bg-gray-50';
  const secondaryTextClass = isDarkMode ? 'text-gray-300' : 'text-gray-600';

  return (
    <div className={`min-h-screen ${bgClass} ${textClass}`}>
      <div className="max-w-6xl mx-auto px-6 pt-8">
        {/* Navigation */}
        <nav className="flex justify-between items-center mb-12">
          <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
            Wunderlust
          </div>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-gray-800 transition-colors"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              For Partners
            </button>
            <button 
              onClick={() => setIsAddingExperience(true)} 
              className="bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-2 rounded-full hover:from-orange-600 hover:to-pink-600 transition-colors"
            >
              Add Experience
            </button>
            <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors">
              Sign In
            </button>
          </div>
        </nav>

        {isAddingExperience && (
          <AddExperienceForm onClose={() => setIsAddingExperience(false)} />
        )}

        {/* Search Section */}
        <div className="relative max-w-2xl mx-auto mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 blur-xl opacity-20"></div>
          <div className="relative">
            <div className="flex flex-col gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="What kind of experience are you looking for?"
                  className="w-full p-4 pl-12 pr-32 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 text-white placeholder-gray-400"
                />
                <Search className="absolute left-4 top-4 text-gray-400" />
                <button className="absolute right-2 top-2 bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-2 rounded-lg">
                  Ask AI
                </button>
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-sm text-gray-400">Exploring:</span>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="bg-white/10 text-white rounded-lg px-3 py-1 outline-none border border-white/20 text-sm hover:bg-white/20 transition-colors cursor-pointer"
                >
                  {cities.map((city) => (
                    <option key={city.id} value={city.id} className="bg-gray-900">
                      {city.name}, {city.region}
                    </option>
                  ))}
                </select>
                <span className="text-xs text-orange-400">↓ Updates results below</span>
              </div>
              <div className="flex gap-2 text-sm text-gray-400">
                Try: 
                <button className="text-white hover:text-orange-400 transition-colors">
                  "Best waterfalls for photography"
                </button>
                <span>•</span>
                <button className="text-white hover:text-orange-400 transition-colors">
                  "Hidden hiking trails with views"
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* AI Guide Preview */}
        <div className="mb-12 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <div className="text-lg font-medium text-white mb-2">AI Local Guide</div>
              <p className="text-gray-300 mb-4">Your personal guide for discovering natural wonders, hidden gems, and amazing experiences across Australia.</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                <button className="text-sm px-3 py-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Best Time to Visit
                </button>
                <button className="text-sm px-3 py-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors flex items-center gap-2">
                  <Camera className="w-4 h-4" />
                  Photo Spots
                </button>
                <button className="text-sm px-3 py-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors flex items-center gap-2">
                  <Utensils className="w-4 h-4" />
                  Nearby Food
                </button>
                <button className="text-sm px-3 py-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors flex items-center gap-2">
                  <Compass className="w-4 h-4" />
                  Local Tips
                </button>
              </div>
              <div className="text-sm text-gray-400">
                Currently trending: "Best sunrise locations", "Hidden waterfalls"
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mb-12">
          {/* Categories */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-6 rounded-xl border border-white/10 backdrop-blur-xl transition-all
                  ${selectedCategory === category.id ? 'bg-white/15' : 'bg-white/5 hover:bg-white/10'}
                `}
              >
                <div className={`inline-flex items-center justify-center p-3 rounded-lg bg-gradient-to-r ${category.color} mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-medium mb-2">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.subcategories.map((sub) => (
                    <span key={sub} className="text-xs px-2 py-1 rounded-full bg-white/10">
                      {sub}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </div>

          {/* Discovery Cards */}
            <div className="grid grid-cols-2 gap-6">
              {discoveries[selectedCategory]?.map((discovery) => (
                <Card 
                  key={discovery.id} 
                  className="bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all cursor-pointer"
                  onClick={() => setSelectedPlace(discovery)}
                >
                  <CardContent className="p-0">
                    <div className="relative">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={discovery.image}
                        alt={discovery.title}
                        className="w-full h-64 object-cover rounded-t-xl"
                      />
                      <div className="absolute top-4 right-4 flex flex-wrap gap-2 max-w-[70%] justify-end">
                        {discovery.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 rounded-full bg-black/70 text-white backdrop-blur-xl text-sm">
                            {tag}
                          </span>>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-xl font-semibold text-white">{discovery.title}</h3>
                            <span className="text-xs px-2 py-1 rounded-full bg-white/20 text-white">
                              {discovery.type}
                            </span>
                          </div>
                          <p className="text-gray-300 text-sm">{discovery.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 mb-1">
                            <Star className="w-4 h-4 fill-current text-yellow-400" />
                            <span className="font-medium text-white">{discovery.rating}</span>
                          </div>
                          <span className="text-sm text-gray-300">{discovery.reviews} reviews</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="text-sm bg-white/20 text-white px-2 py-1 rounded-full">
                            {discovery.priceRange}
                          </span>
                        </div>
                        <button className="px-4 py-2 rounded-lg bg-white/20 text-white hover:bg-white/30 transition-colors">
                          Explore
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
        </div>
      </div>

      {selectedPlace && (
        <ExplorationPage 
          place={selectedPlace} 
          onClose={() => setSelectedPlace(null)}
          isDarkMode={isDarkMode}
        />
      )}
    </div>
  );
};

const WunderlustApp = () => (
  <Wunderlust />
);

export default WunderlustApp;
                      
