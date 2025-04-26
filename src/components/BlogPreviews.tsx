
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const BlogPreviews = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Preventive Care: Why Regular Check-ups Matter",
      excerpt: "Learn how regular preventive care appointments can help you maintain your health and catch potential issues early.",
      date: "Apr 15, 2025",
      category: "Wellness",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&q=80&w=600&auto=format"
    },
    {
      id: 2,
      title: "The Connection Between Mental and Physical Health",
      excerpt: "Discover how your mental wellbeing impacts your physical health and vice versa, plus strategies for improvement.",
      date: "Apr 2, 2025",
      category: "Mental Health",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&q=80&w=600&auto=format"
    },
    {
      id: 3,
      title: "Nutrition Tips for a Stronger Immune System",
      excerpt: "Simple dietary changes that can boost your body's natural defenses against illness and infection.",
      date: "Mar 28, 2025",
      category: "Nutrition",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&q=80&w=600&auto=format"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-clinic-blue/10 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-clinic-gray font-serif">Health & Wellness Blog</h2>
            <p className="mt-4 text-gray-500 max-w-2xl">
              Stay informed with our latest articles on health topics, medical advancements, and clinic news
            </p>
          </div>
          <Button 
            variant="outline" 
            className="mt-4 md:mt-0 border-clinic-gray text-clinic-gray hover:bg-clinic-gray hover:text-white transition-colors duration-300"
            onClick={() => window.location.href = '/blog'}
          >
            View All Articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card 
              key={post.id} 
              className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              onClick={() => window.location.href = `/blog/${post.id}`}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center mb-2">
                  <Badge variant="outline" className="bg-clinic-blue/10 text-clinic-gray border-0 text-xs">
                    {post.category}
                  </Badge>
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>
                <CardTitle className="text-xl group-hover:text-clinic-blue transition-colors duration-300">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 line-clamp-2">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto text-clinic-gray font-medium hover:text-clinic-blue hover:bg-transparent"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreviews;
