import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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
    image: "https://post.healthline.com/wp-content/uploads/2021/11/1593921-The-Ultimate-Guide-to-Preventive-Care-for-Men-1296x728-Header.jpg",
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
    image: "https://www.nhlbi.nih.gov/sites/default/files/styles/16x9_crop/public/2021-02/iStock-1042457948.jpg?h=815c8185&itok=S3wrhmVW",
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
    image: "https://www.legacycommunityhealth.org/wp-content/uploads/2017/12/Dental-Hygene.png",
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
    image: "https://www.citizenshospitals.com/static/uploads/a48841d7-e6c6-4c99-aef2-97d8822fe453-1704204747694.jpg",
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
    image: "https://www.lebonheur.org/contentAsset/image/bfe8f4c5-caa4-4b10-9f83-620d8d7bbec0/fileAsset/filter/Resize,Jpeg/resize_w/1366/resize_h/637/jpeg_q/80/jpeg_p",
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
    image: "https://www.aucklandeye.co.nz/wp-content/uploads/2024/09/Blog.png",
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
        description="Stay informed with our latest articles on medical advancements, health tips, and wellness advice"
      />
      
      <section className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-3/4">
              {/* Search Bar */}
              <div className="mb-8 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                  aria-label="Search articles"
                />
              </div>

              {/* Category Pills (Mobile) */}
              <div className="mb-8 lg:hidden">
                <div className="flex gap-2 overflow-x-auto pb-2 flex-nowrap hide-scrollbar">
                  {categories.map(category => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category.id)}
                      className={`whitespace-nowrap transition-all duration-300 ${
                        selectedCategory === category.id 
                          ? 'bg-clinic-blue text-white hover:bg-clinic-blue/90' 
                          : 'hover:bg-clinic-blue/10'
                      }`}
                    >
                      {category.name}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Blog Posts Grid with Animation */}
              {filteredPosts.length > 0 ? (
                <div className="grid gap-8 sm:grid-cols-2" data-aos="fade-up">
                  {filteredPosts.map((post, index) => (
                    <Card 
                      key={post.id} 
                      className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-white"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <div className="overflow-hidden aspect-video">
                        <img 
                          src={post.image} 
                          alt={`${post.title} featured image`}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <CardHeader className="pb-3">
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <Calendar className="h-4 w-4 mr-1" aria-hidden="true" />
                          <time dateTime={post.date}>{post.date}</time>
                          <span className="mx-2" aria-hidden="true">•</span>
                          <span>{post.readTime}</span>
                        </div>
                        <CardTitle className="text-xl font-serif line-clamp-2 group">
                          <Link 
                            to={`/blog/${post.id}`}
                            className="hover:text-clinic-blue transition-colors duration-300"
                          >
                            {post.title}
                          </Link>
                        </CardTitle>
                        <CardDescription className="flex items-center">
                          <User className="h-4 w-4 mr-1" aria-hidden="true" />
                          <span>{post.author}</span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pb-3">
                        <p className="text-gray-600 text-sm line-clamp-3">{post.excerpt}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {post.tags.slice(0, 2).map((tag, idx) => (
                            <Badge 
                              key={idx} 
                              variant="secondary" 
                              className="bg-clinic-blue/10 hover:bg-clinic-blue/20 text-clinic-gray transition-colors duration-300"
                            >
                              {tag}
                            </Badge>
                          ))}
                          {post.tags.length > 2 && (
                            <Badge 
                              variant="secondary" 
                              className="bg-gray-100 text-gray-600"
                            >
                              +{post.tags.length - 2}
                            </Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                  <p className="text-gray-500 mb-4">No articles match your search criteria.</p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("all");
                    }}
                    className="hover:bg-clinic-blue/10"
                  >
                    Reset Filters
                  </Button>
                </div>
              )}

              {/* Pagination */}
              <div className="mt-12 flex justify-center" role="navigation" aria-label="Pagination">
                <div className="flex gap-2">
                  <Button variant="outline" disabled>Previous</Button>
                  <Button variant="outline" className="bg-clinic-blue/10 hover:bg-clinic-blue/20">1</Button>
                  <Button variant="outline">2</Button>
                  <Button variant="outline">3</Button>
                  <Button variant="outline">Next</Button>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/4 space-y-8">
              {/* Categories */}
              <Card className="border-none shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="text-xl font-serif">Categories</CardTitle>
                </CardHeader>
                <CardContent className="pb-4">
                  <nav className="space-y-1">
                    {categories.map(category => (
                      <Button
                        key={category.id}
                        variant="ghost"
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full justify-start text-left transition-colors duration-300 ${
                          selectedCategory === category.id 
                            ? 'text-clinic-blue bg-clinic-blue/10 hover:bg-clinic-blue/20' 
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {category.name}
                      </Button>
                    ))}
                  </nav>
                </CardContent>
              </Card>
              
              {/* Recent Posts */}
              <Card className="border-none shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="text-xl font-serif">Recent Posts</CardTitle>
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="space-y-4">
                    {blogPosts.slice(0, 4).map(post => (
                      <article key={post.id} className="flex gap-3">
                        <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded">
                          <img 
                            src={post.image} 
                            alt="" 
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                            loading="lazy"
                          />
                        </div>
                        <div>
                          <h3 className="text-sm font-medium line-clamp-2 hover:text-clinic-blue transition-colors duration-300">
                            <Link to={`/blog/${post.id}`}>{post.title}</Link>
                          </h3>
                          <time className="text-xs text-gray-500 mt-1" dateTime={post.date}>
                            {post.date}
                          </time>
                        </div>
                      </article>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Tags Cloud */}
              <Card className="border-none shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="text-xl font-serif">Popular Tags</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {Array.from(new Set(blogPosts.flatMap(post => post.tags))).slice(0, 12).map((tag, idx) => (
                      <Badge 
                        key={idx} 
                        className="bg-clinic-blue/10 hover:bg-clinic-blue/20 text-clinic-gray cursor-pointer transition-colors duration-300"
                        onClick={() => setSearchTerm(tag)}
                      >
                        <TagIcon className="h-3 w-3 mr-1" aria-hidden="true" />
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
