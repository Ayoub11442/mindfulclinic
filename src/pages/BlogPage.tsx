
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Calendar, User, ArrowRight, TagIcon } from 'lucide-react';

// Mock blog post data
const blogPosts = [
  {
    id: 1,
    title: "Understanding Preventive Healthcare: A Guide for All Ages",
    excerpt: "Preventive healthcare is essential for maintaining overall well-being. Learn about age-specific screenings and lifestyle choices for optimal health.",
    image: "https://placehold.co/800x500.png",
    date: "April 15, 2025",
    author: "Dr. Sarah Johnson",
    category: "Wellness",
    tags: ["preventive care", "health screenings", "lifestyle"],
    readTime: "6 min read"
  },
  {
    id: 2,
    title: "Heart Health: Simple Changes for a Stronger Heart",
    excerpt: "Small daily habits can have a significant impact on your cardiovascular health. Discover practical steps to maintain a healthy heart.",
    image: "https://placehold.co/800x500.png",
    date: "April 10, 2025",
    author: "Dr. Michael Chen",
    category: "Cardiology",
    tags: ["heart health", "exercise", "nutrition"],
    readTime: "5 min read"
  },
  {
    id: 3,
    title: "The Importance of Dental Hygiene for Overall Health",
    excerpt: "Oral health is connected to many aspects of general health. Learn how maintaining good dental hygiene can prevent various health issues.",
    image: "https://placehold.co/800x500.png",
    date: "April 5, 2025",
    author: "Dr. Emily Martinez",
    category: "Dental Care",
    tags: ["oral health", "dental hygiene", "prevention"],
    readTime: "4 min read"
  },
  {
    id: 4,
    title: "Understanding Common Neurological Symptoms",
    excerpt: "Recognizing neurological symptoms early can lead to better treatment outcomes. Learn about common warning signs you shouldn't ignore.",
    image: "https://placehold.co/800x500.png",
    date: "March 30, 2025",
    author: "Dr. James Wilson",
    category: "Neurology",
    tags: ["brain health", "symptoms", "awareness"],
    readTime: "7 min read"
  },
  {
    id: 5,
    title: "Childhood Vaccinations: What Parents Need to Know",
    excerpt: "Vaccinations play a crucial role in child health. This comprehensive guide helps parents understand the importance and schedule of vaccines.",
    image: "https://placehold.co/800x500.png",
    date: "March 25, 2025",
    author: "Dr. Sophia Lee",
    category: "Pediatrics",
    tags: ["vaccines", "child health", "parenting"],
    readTime: "8 min read"
  },
  {
    id: 6,
    title: "Maintaining Vision Health in the Digital Age",
    excerpt: "Screen time can impact eye health. Discover strategies to protect your vision while navigating our increasingly digital lifestyle.",
    image: "https://placehold.co/800x500.png",
    date: "March 20, 2025",
    author: "Dr. Robert Taylor",
    category: "Ophthalmology",
    tags: ["eye health", "digital screens", "vision care"],
    readTime: "5 min read"
  }
];

// Categories for filtering
const categories = [
  { id: "all", name: "All Categories" },
  { id: "wellness", name: "Wellness" },
  { id: "cardiology", name: "Cardiology" },
  { id: "dental", name: "Dental Care" },
  { id: "neurology", name: "Neurology" },
  { id: "pediatrics", name: "Pediatrics" },
  { id: "ophthalmology", name: "Ophthalmology" }
];

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter posts based on search term and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "all" || 
                            post.category.toLowerCase() === selectedCategory.toLowerCase();
    
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <PageHeader 
        title="Health & Wellness Blog" 
        description="Insights, tips, and updates from our medical professionals"
      />
      
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Main Content */}
            <div className="md:w-3/4">
              {/* Search Bar */}
              <div className="mb-8 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Pills (Mobile) */}
              <div className="mb-8 md:hidden">
                <div className="flex gap-2 overflow-x-auto pb-2 flex-nowrap">
                  {categories.map(category => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category.id)}
                      className={`whitespace-nowrap ${selectedCategory === category.id ? 'bg-clinic-blue hover:bg-clinic-blue/90' : ''}`}
                    >
                      {category.name}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Blog Posts Grid */}
              {filteredPosts.length > 0 ? (
                <div className="grid gap-8 sm:grid-cols-2">
                  {filteredPosts.map(post => (
                    <Card key={post.id} className="border-none shadow-lg hover:shadow-xl transition-all overflow-hidden">
                      <div className="overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <CardHeader className="pb-3">
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{post.date}</span>
                          <span className="mx-2">•</span>
                          <span>{post.readTime}</span>
                        </div>
                        <CardTitle className="text-lg font-serif line-clamp-2 hover:text-clinic-blue transition-colors">
                          <Link to={`/blog/${post.id}`}>{post.title}</Link>
                        </CardTitle>
                        <CardDescription className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {post.author}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pb-3">
                        <p className="text-gray-600 text-sm line-clamp-3">{post.excerpt}</p>
                      </CardContent>
                      <CardFooter className="pt-0 flex justify-between">
                        <div className="flex gap-2">
                          {post.tags.slice(0, 2).map((tag, idx) => (
                            <Badge key={idx} variant="secondary" className="bg-clinic-blue/10 hover:bg-clinic-blue/30 text-clinic-gray">
                              {tag}
                            </Badge>
                          ))}
                          {post.tags.length > 2 && (
                            <Badge variant="secondary" className="bg-gray-100 text-gray-600">
                              +{post.tags.length - 2}
                            </Badge>
                          )}
                        </div>
                        <Link to={`/blog/${post.id}`} className="text-clinic-blue hover:text-clinic-blue/70 text-sm font-medium flex items-center">
                          Read More
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500">No articles match your search.</p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("all");
                    }}
                    className="mt-4"
                  >
                    Reset Filters
                  </Button>
                </div>
              )}

              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <div className="flex gap-2">
                  <Button variant="outline" disabled>Previous</Button>
                  <Button variant="outline" className="bg-clinic-blue/10 hover:bg-clinic-blue/30">1</Button>
                  <Button variant="outline">2</Button>
                  <Button variant="outline">3</Button>
                  <Button variant="outline">Next</Button>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="md:w-1/4">
              {/* Categories */}
              <Card className="border-none shadow-lg mb-8">
                <CardHeader>
                  <CardTitle className="text-xl font-serif">Categories</CardTitle>
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="space-y-2">
                    {categories.map(category => (
                      <Button
                        key={category.id}
                        variant="ghost"
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full justify-start text-left ${selectedCategory === category.id ? 'text-clinic-blue bg-clinic-blue/10' : 'text-gray-600'}`}
                      >
                        {category.name}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Recent Posts */}
              <Card className="border-none shadow-lg mb-8">
                <CardHeader>
                  <CardTitle className="text-xl font-serif">Recent Posts</CardTitle>
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="space-y-4">
                    {blogPosts.slice(0, 4).map(post => (
                      <div key={post.id} className="flex gap-3">
                        <div className="w-16 h-16 flex-shrink-0">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover rounded"
                          />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium line-clamp-2 hover:text-clinic-blue transition-colors">
                            <Link to={`/blog/${post.id}`}>{post.title}</Link>
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Tags */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-serif">Popular Tags</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {Array.from(new Set(blogPosts.flatMap(post => post.tags))).slice(0, 12).map((tag, idx) => (
                      <Badge 
                        key={idx} 
                        className="bg-clinic-blue/10 hover:bg-clinic-blue/30 text-clinic-gray cursor-pointer"
                        onClick={() => setSearchTerm(tag)}
                      >
                        <TagIcon className="h-3 w-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;
