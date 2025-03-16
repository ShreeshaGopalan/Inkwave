import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

// Serve static files from the 'Public' folder
app.use(express.static("public"));

//middleware
app.use(bodyParser.urlencoded({ extended: true }));

//in-memory storage
const blogs = [
  {
    id: 1,
    title: "The Art of Mindful Living",
    author: "Aarav Gupta",
    date: "2025-01-20",
    content: "Mindfulness is not just a buzzword—it’s a way of life. In this blog, I explore simple ways to incorporate mindfulness into your daily routine and find peace amidst chaos. Mindfulness is the practice of being present and fully engaged with the current moment, without judgment or distraction. It’s about observing thoughts and feelings with a gentle awareness, without getting caught up in them. This can be especially valuable in today’s fast-paced world, where constant distractions and stress often lead to burnout. One of the first steps in cultivating mindfulness is to focus on your breath. Taking a few minutes each day to sit quietly and concentrate on each inhale and exhale can ground you and bring clarity. Additionally, mindful eating—being aware of the textures, flavors, and sensations of each bite—can transform a simple meal into a moment of calm. Mindfulness also encourages self-compassion. It’s about being kind to yourself, especially when things don’t go as planned. By practicing mindfulness, you can create space for emotional regulation, reduce anxiety, and improve overall well-being. The beauty of mindfulness lies in its simplicity and its ability to be integrated into any aspect of life, whether you’re commuting, working, or interacting with others. It helps you reconnect with yourself and the world around you. Through consistent practice, mindfulness can gradually shift your mindset, allowing you to embrace life with greater presence, patience, and peace."
  },
  {
    id: 2,
    title: "A Designer’s Journey: From Fashion to UI/UX",
    author: "Meera Iyer",
    date: "2025-01-18",
    content: "Switching careers can be challenging, but it's also rewarding. Here, I share my story of transitioning from fashion design to UI/UX, along with lessons I’ve learned along the way. The decision to shift from fashion design to UI/UX design came from a deep desire to combine my creative skills with technology. Fashion design had always been my passion, but over time, I realized that I was more interested in how people interact with the products I designed rather than the products themselves. That’s when I discovered UX design. Both fashion and UI/UX design share a similar core—understanding the needs and desires of people. However, in fashion, I focused on aesthetics, fabrics, and silhouettes, while in UI/UX design, the focus shifted to user behavior, accessibility, and digital interfaces. The transition was not without its hurdles. I had to learn new software, understand the principles of interaction design, and develop a completely different mindset. But, my background in fashion design helped me bring a unique perspective to UI/UX, especially when it came to visual storytelling and creating cohesive, aesthetically pleasing designs. One of the key lessons I learned was the importance of empathy in design. Whether it’s clothing or digital products, understanding the user’s needs and emotions is paramount. Another critical aspect of my transition was constant learning. The tech industry evolves quickly, and staying up to date with design trends, tools, and best practices is essential. Over time, I built my portfolio, worked on personal projects, and eventually secured a job as a junior UX designer. The journey has been both challenging and fulfilling, and I’m excited to see where this path leads me. If you’re considering a career change to UI/UX design, my advice is to embrace the process, be patient with yourself, and never stop learning."
  },
  {
    id: 3,
    title: "10 Tips for Raising Resilient Kids",
    author: "Ananya Sharma",
    date: "2025-01-15",
    content: "Parenting is an art and science. This blog offers practical tips for nurturing resilience and emotional intelligence in your children. As parents, we all want our children to grow up to be strong, independent individuals who can navigate life’s challenges with confidence. Building resilience in children isn’t about shielding them from adversity; it’s about teaching them how to face it head-on and learn from it. Tip #1: Foster a Growth Mindset. Encourage your child to see challenges as opportunities to grow, rather than obstacles to overcome. Help them understand that effort and perseverance lead to improvement, not perfection. Tip #2: Model Resilience. Children learn by observing their parents. Show them how you cope with difficulties, manage your emotions, and bounce back from setbacks. Tip #3: Encourage Problem-Solving. Rather than immediately stepping in to fix a problem, guide your child through the process of finding a solution themselves. This promotes independence and critical thinking. Tip #4: Teach Emotional Regulation. Help your child identify their emotions and develop healthy ways to cope with them. Whether it’s through deep breathing, journaling, or simply talking about their feelings, emotional regulation is key to resilience. Tip #5: Create a Safe Environment. A child needs to feel safe and supported to develop resilience. Create an environment where they feel loved, heard, and respected, and where they know they can ask for help when needed. Tip #6: Build Strong Relationships. Encourage your child to form meaningful relationships with family, friends, and mentors. A strong support network is vital for navigating tough times. Tip #7: Set Realistic Expectations. Set achievable goals for your child, and celebrate their successes along the way. It’s important to recognize their progress and effort, rather than focusing solely on the outcome. Tip #8: Teach Self-Compassion. Teach your child to be kind to themselves when they make mistakes. Self-compassion allows them to bounce back from failure without feeling discouraged. Tip #9: Embrace the Power of ‘Yet’. Encourage your child to use the word ‘yet’ when faced with challenges. For example, ‘I can’t do this yet’ reinforces the idea that learning and growth are ongoing processes. Tip #10: Let Them Fail. It’s important for children to experience failure and learn how to recover from it. Failing allows them to build resilience and understand that setbacks are a natural part of life. By instilling these principles, we can help our children develop the resilience and emotional intelligence they need to thrive in an ever-changing world."
  },
  {
    id: 4,
    title: "Breaking the Cycle: Empowering Women Financially",
    author: "Raghav Singh",
    date: "2025-01-10",
    content: "Financial independence is a powerful tool for breaking free from abusive situations. In this post, I discuss ways to help women gain financial literacy and confidence. Financial empowerment is one of the most effective ways to help women escape the cycle of poverty, dependence, and abuse. Many women remain in unhealthy relationships or situations because they lack the financial resources to leave. In these cases, financial literacy can make all the difference. One of the first steps toward financial empowerment is education. Providing women with the knowledge they need to manage their finances, budget, and save is crucial. This can be done through workshops, online courses, and community programs that teach women about budgeting, credit management, and investing. Financial literacy can help women understand the importance of saving for the future, investing in assets that appreciate in value, and preparing for emergencies. Another key component of financial empowerment is confidence. Many women, especially in marginalized communities, have been taught that money is something they should avoid or that they are not capable of managing. It’s important to challenge these beliefs and show women that they are fully capable of taking charge of their financial futures. Empowering women with financial knowledge and the confidence to act on that knowledge can change the trajectory of their lives. One effective way to build confidence is through mentorship and peer support. Women who have successfully navigated their own financial challenges can mentor others, offering guidance and encouragement. By creating a supportive community, women can share resources, advice, and experiences that help them gain financial independence. Furthermore, encouraging women to take part in the workforce and pursue careers or entrepreneurship can give them the financial stability they need to create a better future for themselves and their families. Ultimately, breaking the cycle of financial dependence requires a combination of education, confidence, and opportunity. By equipping women with these tools, we can help them regain control of their lives and break free from abusive situations."
  },
  {
    id: 5,
    title: "How to Start Your First Design Portfolio",
    author: "Ishita Roy",
    date: "2025-01-05",
    content: "As a budding designer, your portfolio is your gateway to opportunities. Here’s a step-by-step guide to building your first portfolio that stands out. A strong portfolio is one of the most powerful tools in a designer’s arsenal. It’s the first thing potential employers or clients will look at, so it’s important to make it count. Your portfolio should not only showcase your best work, but also reflect your personality and your design process. Step #1: Start with Your Best Work. Quality is far more important than quantity. Choose your strongest projects that demonstrate a range of skills and styles. Don’t be afraid to include personal projects, as they can show your passion and creativity. Step #2: Tell a Story. Each project in your portfolio should have a clear narrative. Explain the problem you were solving, your design process, and the final result. This will help potential clients or employers understand your approach and the value you bring to the table. Step #3: Show Your Process. In addition to the final product, showcase your design process. This can include sketches, wireframes, prototypes, and iterations. Showing your process demonstrates how you approach design challenges and how you think critically. Step #4: Keep It Organized. Make sure your portfolio is easy to navigate. Organize your projects into categories, such as branding, web design, or UX/UI, so that viewers can quickly find what they’re looking for. Step #5: Be Selective. Don’t overcrowd your portfolio with too many projects. Instead, focus on a few key pieces that truly highlight your skills and expertise. Step #6: Add Testimonials. If you’ve worked with clients or been part of a team, include testimonials that speak to your work ethic and design abilities. Step #7: Keep It Updated. Your portfolio is a living document that should evolve as your skills grow. Regularly update it with new projects and remove older work that no longer represents your current skill level. Finally, don’t forget to present your portfolio professionally. Whether you choose to build a personal website or use platforms like Behance or Dribbble, make sure the presentation aligns with your personal brand. A strong portfolio is not just a collection of work—it’s a reflection of who you are as a designer and the value you can bring to any project."
  },
  {
    id: 6,
    title: "The Future of Emergency Healthcare in Rural India",
    author: "Kabir Nair",
    date: "2025-01-01",
    content: "Access to timely healthcare is a challenge for rural India. This blog explores innovative solutions to improve emergency healthcare services for underserved communities. In rural India, the lack of timely and accessible healthcare remains one of the biggest challenges. Many rural areas are underserved, with limited medical facilities, shortage of trained medical professionals, and inadequate infrastructure. This often results in delayed medical treatment, which can lead to unnecessary deaths or long-term complications. One solution to this problem is the introduction of telemedicine, which allows patients in remote areas to consult with doctors and specialists from urban centers via video calls or phone consultations. Telemedicine can bridge the gap in healthcare access, providing timely advice and support to those in need. Another approach is mobile medical units, which are equipped with essential medical tools and staffed with healthcare professionals. These units can travel to remote areas, providing emergency care and basic healthcare services to communities that might otherwise have no access to medical attention. Furthermore, improving the infrastructure in rural areas is crucial. Investing in road networks, transportation, and healthcare facilities can ensure that people in rural areas can reach medical help quickly when needed. The government can also provide incentives for healthcare professionals to work in rural areas, offering financial rewards and professional development opportunities to encourage them to serve underserved populations. Community health workers, who are often from the local population, can also play a significant role in providing basic healthcare services, conducting health education programs, and acting as a bridge between the community and healthcare providers. In addition, public-private partnerships can be explored to improve healthcare services. By working together, both government and private sectors can develop innovative solutions to improve healthcare access and quality in rural India. While there is no one-size-fits-all solution, a multi-faceted approach that includes technology, infrastructure, and community involvement can help improve emergency healthcare services for rural populations, saving lives and improving health outcomes."
  }
];

let lastId = 6;

// Route for the home page
app.get("/", (req, res) => {
  res.render("home.ejs");
});

// Route for the about page
app.get("/about", (req, res) => {
  res.render("about.ejs");
});

// Route for rendering explore blogs page
app.get("/explore-blogs", (req,res) =>{
  res.render("explore.ejs", {blogs});
});

// Route for handling read more 
app.get('/blogs/:id', (req, res) => {
  const blogId = parseInt(req.params.id); 
  const blog = blogs.find(b => b.id === blogId); 

  if (blog) {
    res.render('read-more.ejs', { blog }); 
  } else {
    res.status(404).send("Blog not found");
  }
});

app.get("/start-writing", (req,res) =>{
  res.render("start-writing.ejs");
});


app.post("/publish", (req, res) => {
  const newId = lastId += 1;
  const blog = {
    id: newId,
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    date: new Date(),
  };
  lastId = newId;
  blogs.push(blog);
  res.render("success.ejs");
});



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

