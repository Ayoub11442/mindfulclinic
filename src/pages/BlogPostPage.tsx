
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, Clock, ArrowLeft, Share2, BookmarkPlus, ThumbsUp, MessageSquare, ChevronLeft, ChevronRight, TagIcon } from 'lucide-react';

// Mock blog post data (same as BlogPage for consistency)
const blogPosts = [
  {
    id: 1,
    title: "Understanding Preventive Healthcare: A Guide for All Ages",
    excerpt: "Preventive healthcare is essential for maintaining overall well-being. Learn about age-specific screenings and lifestyle choices for optimal health.",
    image: "https://placehold.co/800x500.png",
    date: "April 15, 2025",
    author: "Dr. Sarah Johnson",
    authorRole: "General Medicine",
    authorImage: "https://placehold.co/200x200.png",
    category: "Wellness",
    tags: ["preventive care", "health screenings", "lifestyle"],
    readTime: "6 min read",
    content: `
      <h2>Why Preventive Healthcare Matters</h2>
      <p>Preventive healthcare is the cornerstone of maintaining overall wellness and avoiding serious medical conditions. Rather than treating illnesses after they develop, preventive care focuses on keeping people healthy and detecting potential health issues before they become problematic.</p>
      <p>Regular health screenings, vaccinations, and lifestyle modifications are all components of a comprehensive preventive healthcare strategy. These measures can help identify risk factors for chronic diseases and allow for early intervention when medical conditions are most treatable.</p>
      
      <h2>Age-Specific Preventive Measures</h2>
      <h3>For Children (0-18)</h3>
      <p>Children require regular well-child visits to monitor their growth and development. These visits include height and weight measurements, vision and hearing screenings, and age-appropriate vaccinations. Dental checkups should begin around age 1 and continue regularly thereafter.</p>
      
      <h3>For Young Adults (19-39)</h3>
      <p>Young adults should have blood pressure screenings at least every two years, cholesterol tests based on risk factors, and diabetes screenings if they have elevated blood pressure. Sexually active individuals should receive appropriate STI screenings, and women should have pap smears starting at age 21.</p>
      
      <h3>For Middle-Aged Adults (40-64)</h3>
      <p>During middle age, preventive screenings become more frequent. Regular blood pressure and cholesterol checks are essential. Colorectal cancer screening should begin at age 45, and women should have regular mammograms starting at age 40 or 50, depending on risk factors.</p>
      
      <h3>For Older Adults (65+)</h3>
      <p>Seniors should continue with the screenings recommended for middle-aged adults while adding bone density tests for osteoporosis, particularly in women. Vaccinations for pneumonia, shingles, and annual flu shots are important. Regular hearing and vision exams help maintain quality of life.</p>
      
      <h2>Lifestyle Factors in Preventive Health</h2>
      <p>Regardless of age, certain lifestyle practices contribute significantly to preventive health:</p>
      <ul>
        <li>Maintaining a balanced, nutritious diet rich in fruits, vegetables, whole grains, and lean proteins</li>
        <li>Engaging in regular physical activity – aim for at least 150 minutes of moderate exercise weekly</li>
        <li>Avoiding tobacco products and limiting alcohol consumption</li>
        <li>Managing stress through techniques such as mindfulness, meditation, or physical activity</li>
        <li>Ensuring adequate sleep – most adults need 7-9 hours per night</li>
      </ul>
      
      <h2>The Role of Technology in Modern Preventive Care</h2>
      <p>Digital health tools have revolutionized preventive healthcare. Wearable devices can monitor physical activity, heart rate, and sleep patterns. Mobile apps help track nutrition, medication schedules, and health metrics. Telemedicine has made preventive consultations more accessible, particularly for those in remote areas or with mobility challenges.</p>
      
      <h2>Overcoming Barriers to Preventive Care</h2>
      <p>Despite its importance, many individuals face obstacles in accessing preventive healthcare. Common barriers include lack of insurance coverage, limited understanding of available services, and insufficient time for medical appointments.</p>
      <p>Healthcare providers and community organizations can help by offering educational resources, conducting outreach programs, and providing flexible scheduling options. Policy measures that expand insurance coverage for preventive services also play a crucial role in improving access.</p>
      
      <h2>Conclusion</h2>
      <p>Preventive healthcare represents a proactive approach to wellbeing that benefits individuals of all ages. By prioritizing age-appropriate screenings, maintaining healthy lifestyle habits, and addressing barriers to care, we can collectively work toward a healthier future with reduced incidence of preventable diseases and improved quality of life.</p>
    `
  },
  {
    id: 2,
    title: "Heart Health: Simple Changes for a Stronger Heart",
    excerpt: "Small daily habits can have a significant impact on your cardiovascular health. Discover practical steps to maintain a healthy heart.",
    image: "https://placehold.co/800x500.png",
    date: "April 10, 2025",
    author: "Dr. Michael Chen",
    authorRole: "Cardiology",
    authorImage: "https://placehold.co/200x200.png",
    category: "Cardiology",
    tags: ["heart health", "exercise", "nutrition"],
    readTime: "5 min read",
    content: `
      <h2>Understanding Heart Health</h2>
      <p>Your heart works tirelessly, beating about 100,000 times per day to deliver oxygen and nutrients throughout your body. Cardiovascular disease remains the leading cause of death globally, but the good news is that many risk factors are modifiable through lifestyle changes.</p>
      
      <h2>Simple Dietary Changes</h2>
      <p>What you eat significantly impacts your heart health. Consider these simple dietary adjustments:</p>
      <ul>
        <li>Incorporate more fruits and vegetables - aim for 5+ servings daily</li>
        <li>Choose whole grains over refined carbohydrates</li>
        <li>Select lean protein sources like fish, poultry, and plant proteins</li>
        <li>Limit saturated and trans fats found in processed foods</li>
        <li>Reduce sodium intake to help manage blood pressure</li>
        <li>Moderate alcohol consumption</li>
      </ul>
      
      <h2>The Power of Physical Activity</h2>
      <p>Regular exercise strengthens your heart muscle and improves circulation. The American Heart Association recommends at least 150 minutes of moderate-intensity activity per week. This doesn't require intense gym sessions - activities like brisk walking, cycling, or swimming count toward this goal.</p>
      <p>Even small increases in daily movement help. Take the stairs instead of the elevator, park farther from entrances, or take short walking breaks during the workday to accumulate more activity.</p>
      
      <h2>Stress Management for Heart Health</h2>
      <p>Chronic stress contributes to heart disease by raising blood pressure and potentially leading to unhealthy coping behaviors. Effective stress management techniques include:</p>
      <ul>
        <li>Deep breathing exercises</li>
        <li>Meditation or mindfulness practices</li>
        <li>Regular physical activity</li>
        <li>Adequate sleep</li>
        <li>Social connections</li>
        <li>Hobbies and activities you enjoy</li>
      </ul>
      
      <h2>The Importance of Sleep</h2>
      <p>Poor sleep quality and insufficient sleep duration are associated with increased cardiovascular risk. Most adults need 7-9 hours of quality sleep per night. Establish a regular sleep schedule and create a restful environment by limiting screen time before bed and keeping your bedroom cool, dark, and quiet.</p>
      
      <h2>Breaking the Smoking Habit</h2>
      <p>If you smoke, quitting is the single most important step you can take for your heart health. Smoking damages blood vessels, reduces oxygen in the blood, and raises blood pressure. The good news is that your risk of heart disease starts to decrease soon after quitting, regardless of how long you've smoked.</p>
      
      <h2>Regular Health Monitoring</h2>
      <p>Stay informed about your heart health numbers: blood pressure, cholesterol levels, blood sugar, and body weight. Regular check-ups with your healthcare provider can help catch potential issues early and guide personalized recommendations for heart health.</p>
      
      <h2>Conclusion</h2>
      <p>Heart health doesn't require radical lifestyle overhauls. By implementing these small, sustainable changes gradually, you can significantly improve your cardiovascular wellbeing over time. Remember that consistency matters more than perfection—each healthy choice you make is a step toward a stronger heart.</p>
    `
  },
  {
    id: 3,
    title: "The Importance of Dental Hygiene for Overall Health",
    excerpt: "Oral health is connected to many aspects of general health. Learn how maintaining good dental hygiene can prevent various health issues.",
    image: "https://placehold.co/800x500.png",
    date: "April 5, 2025",
    author: "Dr. Emily Martinez",
    authorRole: "Dental Care",
    authorImage: "https://placehold.co/200x200.png",
    category: "Dental Care",
    tags: ["oral health", "dental hygiene", "prevention"],
    readTime: "4 min read",
    content: "Full blog post content here..."
  },
  {
    id: 4,
    title: "Understanding Common Neurological Symptoms",
    excerpt: "Recognizing neurological symptoms early can lead to better treatment outcomes. Learn about common warning signs you shouldn't ignore.",
    image: "https://placehold.co/800x500.png",
    date: "March 30, 2025",
    author: "Dr. James Wilson",
    authorRole: "Neurology",
    authorImage: "https://placehold.co/200x200.png",
    category: "Neurology",
    tags: ["brain health", "symptoms", "awareness"],
    readTime: "7 min read",
    content: "Full blog post content here..."
  },
  {
    id: 5,
    title: "Childhood Vaccinations: What Parents Need to Know",
    excerpt: "Vaccinations play a crucial role in child health. This comprehensive guide helps parents understand the importance and schedule of vaccines.",
    image: "https://placehold.co/800x500.png",
    date: "March 25, 2025",
    author: "Dr. Sophia Lee",
    authorRole: "Pediatrics",
    authorImage: "https://placehold.co/200x200.png",
    category: "Pediatrics",
    tags: ["vaccines", "child health", "parenting"],
    readTime: "8 min read",
    content: "Full blog post content here..."
  },
  {
    id: 6,
    title: "Maintaining Vision Health in the Digital Age",
    excerpt: "Screen time can impact eye health. Discover strategies to protect your vision while navigating our increasingly digital lifestyle.",
    image: "https://placehold.co/800x500.png",
    date: "March 20, 2025",
    author: "Dr. Robert Taylor",
    authorRole: "Ophthalmology",
    authorImage: "https://placehold.co/200x200.png",
    category: "Ophthalmology",
    tags: ["eye health", "digital screens", "vision care"],
    readTime: "5 min read",
    content: "Full blog post content here..."
  }
];

const BlogPostPage = () => {
  const { id } = useParams<{id: string}>();
  const [post, setPost] = useState<any>(null);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching blog post
    setLoading(true);
    window.scrollTo(0, 0);
    
    setTimeout(() => {
      const foundPost = blogPosts.find(post => post.id === Number(id));
      setPost(foundPost || null);
      
      // Find related posts (same category or shared tags)
      if (foundPost) {
        const related = blogPosts
          .filter(p => p.id !== foundPost.id && 
                       (p.category === foundPost.category || 
                        p.tags.some(tag => foundPost.tags.includes(tag))))
          .slice(0, 3);
        setRelatedPosts(related);
      }
      
      setLoading(false);
    }, 300);
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <div className="py-20 flex justify-center items-center">
          <div className="animate-pulse space-y-8 w-full max-w-4xl">
            <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto"></div>
            <div className="h-80 bg-gray-200 rounded"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <div className="py-20 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-clinic-gray mb-4">Blog Post Not Found</h2>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist or has been removed.</p>
          <Link to="/blog">
            <Button className="bg-clinic-gray hover:bg-black">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link to="/blog" className="inline-flex items-center text-clinic-gray hover:text-clinic-blue transition-colors mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Articles
          </Link>
          
          {/* Article Header */}
          <div className="mb-8">
            <Badge className="mb-4 bg-clinic-blue/20 text-clinic-gray hover:bg-clinic-blue/40">
              {post.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-clinic-gray font-serif mb-4">{post.title}</h1>
            
            <div className="flex items-center text-sm text-gray-500 mb-6">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <Clock className="h-4 w-4 mr-1" />
              <span>{post.readTime}</span>
            </div>
            
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                <img 
                  src={post.authorImage} 
                  alt={post.author}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-medium text-clinic-gray">{post.author}</p>
                <p className="text-sm text-gray-500">{post.authorRole}</p>
              </div>
            </div>
          </div>
          
          {/* Featured Image */}
          <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-auto"
            />
          </div>
          
          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag: string, idx: number) => (
              <Badge 
                key={idx} 
                className="bg-clinic-blue/10 hover:bg-clinic-blue/30 text-clinic-gray"
              >
                <TagIcon className="h-3 w-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>
          
          {/* Social Sharing */}
          <div className="flex space-x-4 mb-12 py-4 border-t border-b border-gray-200">
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-clinic-blue">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-clinic-blue">
              <BookmarkPlus className="mr-2 h-4 w-4" />
              Save
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-clinic-blue">
              <ThumbsUp className="mr-2 h-4 w-4" />
              Like
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-clinic-blue">
              <MessageSquare className="mr-2 h-4 w-4" />
              Comment
            </Button>
          </div>
          
          {/* Author Bio */}
          <Card className="border-none shadow-lg bg-clinic-blue/10 mb-12">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                  <img 
                    src={post.authorImage} 
                    alt={post.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-clinic-gray mb-2">{post.author}</h3>
                  <p className="text-sm text-gray-500 mb-4">{post.authorRole} at MindfulCare Clinic</p>
                  <p className="text-gray-600">
                    Dr. {post.author.split(' ')[0]} is a specialist in {post.authorRole.toLowerCase()} with over 10 years of experience. 
                    They are passionate about patient education and regularly contribute to our health blog with evidence-based articles.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Pagination */}
          <div className="flex justify-between items-center mb-12 py-4 border-t border-b border-gray-200">
            <Button variant="ghost" className="text-clinic-gray hover:text-clinic-blue">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Previous Article
            </Button>
            <Button variant="ghost" className="text-clinic-gray hover:text-clinic-blue">
              Next Article
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-clinic-gray font-serif mb-6">Related Articles</h2>
              <div className="grid gap-8 sm:grid-cols-3">
                {relatedPosts.map(related => (
                  <Card key={related.id} className="border-none shadow-lg hover:shadow-xl transition-all overflow-hidden">
                    <div className="overflow-hidden h-40">
                      <img 
                        src={related.image} 
                        alt={related.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium text-clinic-gray hover:text-clinic-blue transition-colors line-clamp-2">
                        <Link to={`/blog/${related.id}`}>{related.title}</Link>
                      </h3>
                      <p className="text-sm text-gray-500 mt-2">{related.date}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </Layout>
  );
};

export default BlogPostPage;
