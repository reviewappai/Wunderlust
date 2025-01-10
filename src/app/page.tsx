import React, { useState } from 'react';
import { Search, MapPin, Clock, Star, Filter, Bookmark, Camera, ThumbsUp, 
  MessageCircle, Share2, Grid, Map, Award, Users, Utensils, Coffee,
  Compass, Zap, Sparkles, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ExplorationPage = ({ place, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

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
              {['Overview', 'Photos', 'Reviews', 'Tips'].map((tab) => (
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

            {/* Overview Content */}
            <div className="space-y-8">
              {/* Features */}
              <div>
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

              {/* Best Times */}
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

              {/* Nearby Food */}
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

              {/* Trip Planning AI */}
              <div className="bg-white/5 rounded-xl p-6">
                <h2 className="text-xl font-semibold text-white mb-4">Plan Your Visit</h2>
                <div className="space-y-4">
                  <button className="w-full bg-white/10 hover:bg-white/20 text-white rounded-lg p-3 text-left text-sm flex items-center gap-2 transition-colors">
                    <Clock className="w-4 h-4" />
                    Create itinerary based on my time
                  </button>
                  <button className="w-full bg-white/10 hover:bg-white/20 text-white rounded-lg p-3 text-left text-sm flex items-center gap-2 transition-colors">
                    <Users className="w-4 h-4" />
                    Plan for my group size
                  </button>
                  <button className="w-full bg-white/10 hover:bg-white/20 text-white rounded-lg p-3 text-left text-sm flex items-center gap-2 transition-colors">
                    <Map className="w-4 h-4" />
                    Suggest related nearby places
                  </button>
                </div>
              </div>

              {/* Smart Recommendations */}
              <div className="bg-white/5 rounded-xl p-6">
                <h2 className="text-xl font-semibold text-white mb-4">AI-Powered Recommendations</h2>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-medium text-white">Based on Current Conditions</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-gray-300">
                        <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                          <Camera className="w-4 h-4 text-green-500" />
                        </div>
                        <span>Perfect lighting for photos between 3-5pm today</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <div className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                          <Users className="w-4 h-4 text-yellow-500" />
                        </div>
                        <span>Lower crowds expected this afternoon</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-medium text-white">Local Tips</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-gray-300">
                        <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center">
                          <Compass className="w-4 h-4 text-orange-500" />
                        </div>
                        <span>Hidden viewpoint 5 minutes from main trail</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                          <MapPin className="w-4 h-4 text-blue-500" />
                        </div>
                        <span>Best parking spot: Northern entrance</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Wunderlust = () => {
  const [selectedCategory, setSelectedCategory] = useState('places');
  const [selectedPlace, setSelectedPlace] = useState(null);

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
        details: {
          atmosphere: "Natural wilderness setting",
          features: ["Multiple lookouts", "Walking tracks", "Picnic areas", "Swimming holes"],
          bestTimes: ["Early morning", "Sunset", "After rain"],
          nearbyFood: ["Robertson Pie Shop", "The General Cafe", "Local Wineries"],
          aiInsights: [
            "Less crowded on weekday mornings",
            "Best photography lighting between 3-5pm",
            "Water flow strongest after recent rainfall",
            "Peak wildflower season in September"
          ],
          reviews: [
            {
              id: 1,
              author: "Sarah M.",
              profile: "/api/placeholder/40/40?text=SM",
              rating: 5,
              date: "2 days ago",
              title: "A photographer's dream location",
              content: "Visited at sunrise and was absolutely blown away. The morning mist created an ethereal atmosphere, and the waterfall was thundering after recent rain. Bring good hiking shoes as the track can be slippery.",
              helpful: 45,
              photos: [
                "/api/placeholder/400/300?text=Waterfall+Morning",
                "/api/placeholder/400/300?text=Hiking+Trail"
              ],
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
              content: "Beautiful location with amazing views. The main lookout is easily accessible, but some of the lower trail sections are quite steep. Our kids (8 & 10) managed well but younger children might struggle. The picnic areas are well maintained.",
              helpful: 32,
              photos: ["/api/placeholder/400/300?text=Family+Picnic"],
              verified: true,
              visitType: "Family Trip",
              visitDate: "December 2024"
            },
            {
              id: 3,
              author: "Emma L.",
              profile: "/api/placeholder/40/40?text=EL",
              rating: 5,
              date: "2 weeks ago",
              title: "Incredible after rainfall",
              content: "Visited just after a rainy week and the falls were spectacular! The roar of the water was incredible. The walking tracks were a bit muddy but the views were worth it. Spotted some local wildlife including lyrebirds.",
              helpful: 28,
              photos: [
                "/api/placeholder/400/300?text=Waterfall+Power",
                "/api/placeholder/400/300?text=Wildlife"
              ],
              verified: true,
              visitType: "Weekend Trip",
              visitDate: "December 2024"
            }
          ]
        }
      },
      {
        id: 2,
        title: "Blue Mountains",
        type: "National Park",
        rating: 4.9,
        reviews: 2156,
        image: "/api/placeholder/800/600?text=Blue+Mountains&bg=456",
        tags: ["Hiking", "Views", "Nature"],
        description: "World heritage-listed mountain range with dramatic scenery",
        priceRange: "Free",
        details: {
          atmosphere: "Mountain wilderness",
          features: ["Three Sisters", "Scenic World", "Hiking Trails", "Lookouts"],
          bestTimes: ["Sunrise", "Autumn months", "Clear winter days"],
          nearbyFood: ["Leura Cafe", "Katoomba Dining", "Mountain Delis"],
          aiInsights: [
            "Best sunrise views from Echo Point",
            "Quietest trails before 9am",
            "Most photogenic during golden hour",
            "Winter offers clearest mountain views"
          ]
        }
      }
    ],
    experiences: [
      {
        id: 3,
        title: "Aboriginal Heritage Walk",
        type: "Guided Tour",
        rating: 4.9,
        reviews: 345,
        image: "/api/placeholder/800/600?text=Heritage+Walk&bg=789",
        tags: ["Cultural", "Educational", "Nature"],
        description: "Discover indigenous culture and traditional bush foods",
        priceRange: "$$",
        details: {
          atmosphere: "Cultural learning environment",
          features: ["Indigenous guides", "Bush food tasting", "Cultural stories", "Art sites"],
          bestTimes: ["Morning tours", "Spring season", "Weekdays"],
          nearbyFood: ["Native food cafe", "Local restaurants", "Picnic spots"],
          aiInsights: [
            "Most immersive experience in smaller groups",
            "Best seasonal bush foods in spring",
            "Photography permitted at specific sites",
            "Book ahead for special ceremonies"
          ]
        }
      }
    ],
    food: [
      {
        id: 4,
        title: "The Lookout Restaurant",
        type: "Fine Dining",
        rating: 4.7,
        reviews: 567,
        image: "/api/placeholder/800/600?text=Mountain+Restaurant&bg=012",
        tags: ["Views", "Modern Australian", "Wine"],
        description: "Panoramic mountain views with contemporary cuisine",
        priceRange: "$$$",
        details: {
          atmosphere: "Elegant dining with views",
          features: ["Scenic dining", "Local produce", "Wine cellar", "Sunset sessions"],
          bestTimes: ["Sunset dinner", "Weekend lunch", "Clear days"],
          nearbyFood: ["Wine bars", "Casual cafes", "Dessert spots"],
          aiInsights: [
            "Best tables by the window need early booking",
            "Signature tasting menu changes seasonally",
            "Wine pairings available for all courses",
            "Popular for special occasions"
          ]
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-6 pt-8">
        {/* Navigation */}
        <nav className="flex justify-between items-center mb-12">
          <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
            Wunderlust
          </div>
          <div className="flex items-center gap-6">
            <button className="text-gray-400 hover:text-white transition-colors">
              About
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              For Partners
            </button>
            <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors">
              Sign In
            </button>
          </div>
        </nav>

        {/* AI Assistant */}
        <div className="relative max-w-2xl mx-auto mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 blur-xl opacity-20"></div>
          <div className="relative">
            <div className="flex flex-col gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="What would you like to explore today?"
                  className="w-full p-4 pl-12 pr-32 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 text-white placeholder-gray-400"
                />
                <Search className="absolute left-4 top-4 text-gray-400" />
                <button className="absolute right-2 top-2 bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-2 rounded-lg">
                  Ask AI
                </button>
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
        <div className="grid grid-cols-2 gap-6 mb-12">
          {discoveries[selectedCategory]?.map((discovery) => (
            <Card 
              key={discovery.id} 
              className="bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all cursor-pointer"
              onClick={() => setSelectedPlace(discovery)}
            >
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

      {selectedPlace && (
        <ExplorationPage 
          place={selectedPlace} 
          onClose={() => setSelectedPlace(null)} 
        />
      )}
    </div>
  );
};

export default Wunderlust;
