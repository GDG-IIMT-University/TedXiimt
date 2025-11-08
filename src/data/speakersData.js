// TEDxIIMT UNIVERSITY 2025 Speakers Data
const speakersData = [
  {
    id: 1,
    name: "Miriam Chandy Menacherry",
    designation: "Film Director, Producer, and Storyteller",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQGMxsvn0Ai_6w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1705414202635?e=1764201600&v=beta&t=ldOa0fyoamaP-WR2VWOJhVKyImnjkdR9bMwBTwYNb2A",
    shortBio: "Miriam Chandy Menacherry is an award-winning documentary filmmaker and director known for her compelling storytelling and impactful narratives that explore real human stories with cinematic depth.",
    detailedBio: "Miriam Chandy Menacherry is a celebrated Indian filmmaker and director whose documentaries spotlight untold stories of resilience, courage, and social change. Her work—screened at international film festivals—beautifully bridges journalism and cinema, revealing the extraordinary within the ordinary. Founder of Filament Pictures, she has produced several critically acclaimed documentaries that amplify unheard voices and spark meaningful dialogue through film.",
    quote: "Stories have the power to move hearts and change minds."
  },
  // {
  //   id: 2,
  //   name: "Nupur Goel",
  //   designation: "IAS, Chief Development Officer - Meerut",
  //   image: "https://pbs.twimg.com/profile_images/1898259805090844672/kSCT4Kbg_400x400.jpg",
  //   shortBio: "AIR-11 in UPSC CSE 2019. She cleared the examination after six attempts, demonstrating remarkable persistence and dedication to public service.",
  //   detailedBio: "Nupur Goel is the Chief Development Officer (CDO) of Meerut, Uttar Pradesh, from the UPSC 2019 batch (UP cadre). She cleared the UPSC Civil Services Examination with an All India Rank of 11 after six attempts, showcasing extraordinary perseverance. She holds a B.Tech in Electronics & Communication from Delhi Technological University and a Master's degree in Public Administration from IGNOU. As CDO, she has been involved in implementing schemes to improve rural development and food processing, and was honored for her work in the Prime Minister's Micro Food Processing Enterprises Scheme, boosting farmer incomes and promoting food processing in rural areas.",
  //   quote: "Persistence is not just about trying again—it's about learning, adapting, and growing stronger with each attempt."
  // },
  // {
  //   id: 3,
  //   name: "Arun Govil",
  //   designation: "Actor, Producer & Member of Parliament",
  //   image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Arun_Govil.jpg",
  //   shortBio: "Arun Govil is the legendary actor best known for portraying Lord Rama in Ramayan. Born in Meerut, he rose from film and TV to public life, now serving as the elected MP from Meerut.",
  //   detailedBio: "Arun Govil (born January 12, 1952, Meerut) is a distinguished actor, producer, and politician with a background in Engineering Science from Chaudhary Charan Singh University, Meerut. He began his cinema career with Paheli (1977), then films like Sawan Ko Aane Do and Saanch Ko Aanch Nahin. He became a household name by playing Lord Rama in Ramanand Sagar's iconic TV series Ramayan (1987), a role that cemented his place in Indian popular culture. Over decades, he appeared in multiple mythological shows including Vikram Aur Betaal. In recent years, he joined BJP and won the Meerut Lok Sabha constituency in the 2024 elections, blending his legacy in entertainment with service to the public.",
  //   quote: "Some roles stay with you—not because you played them, but because people believed in them."
  // },
  {
    id: 4,
    name: "Shri Yogesh Mohan Ji Gupta",
    designation: "Chancellor, IIMT UNIVERSITY Meerut",
    image: "https://iimtcollege.edu.in/images/chairman.jpg",
    shortBio: "Chancellor of IIMT UNIVERSITY, a NAAC 'A' grade accredited private university established in 2016, recognized by UGC under sections 2(f) & 12B.",
    detailedBio: "Shri Yogesh Mohan Ji Gupta serves as the Chancellor of IIMT UNIVERSITY, Meerut. IIMT UNIVERSITY is a private university established in 2016, located at 'O' Pocket, Ganga Nagar, Meerut, U.P. The university is NAAC accredited with 'A' grade, and is recognized by the University Grants Commission (UGC) under sections 2(f) & 12B. Under his leadership, the university has grown to provide quality education across multiple disciplines while maintaining high academic standards.",
    quote: "Education is the foundation upon which we build our future."
  },
  // {
  //   id: 5,
  //   name: "Dr. Mayank Agarwal",
  //   designation: "Pro-Chancellor, IIMT UNIVERSITY Meerut",
  //   image: "https://iimtcollege.edu.in/images/managing-direcor-img.jpg",
  //   shortBio: "Dr. Mayank Agarwal is the Pro-Chancellor of IIMT UNIVERSITY, Meerut, and Managing Director of the IIMT UNIVERSITY Group, devoted to advancing education, values, and social welfare through leadership in academia.",
  //   detailedBio: "Dr. Mayank Agarwal is a visionary academic leader serving as Pro-Chancellor of IIMT UNIVERSITY, Meerut, and as Managing Director of the IIMT UNIVERSITY Group of Colleges. Under his leadership, IIMT UNIVERSITY has expanded its reach in education, integrated values-based learning, and launched initiatives aimed at community development. His stewardship in programs such as the Adult Literacy Mission (for villages in Meerut) reflects his commitment to social causes beyond academia. He fosters an environment that balances technological advancement with ethical grounding, preparing students not just for careers but for meaningful contributions to society.",
  //   quote: "Education must uplift both knowledge and compassion."
  // },
  // {
  //   id: 6,
  //   name: "Dr. Akshay Raj",
  //   designation: "Nodal Officer & Research Associate, IIMT UNIVERSITY",
  //   image: "https://iimtcollege.edu.in/uploads/images/research-team.jpg",
  //   shortBio: "Dr. Akshay Raj is Research Associate and Nodal Officer at IIMT UNIVERSITY, Meerut, deeply involved in innovation, academic excellence, and facilitating online education through NPTEL.",
  //   detailedBio: "Dr. Akshay Raj plays a critical role in bridging academia and innovation at IIMT UNIVERSITY, Meerut. As a Research Associate in the R&D cell and SPOC (Single Point of Contact) for the university's NPTEL Local Chapter since July 2017, he has helped promote online learning, course participation, and faculty/student engagement in digital education initiatives. In addition, as the Nodal Officer for ARIIA (Atal Ranking of Institutions on Innovation Achievements), he oversees the institution's efforts in innovation, start-ups and entrepreneurship rankings, helping build an environment that supports student-led projects and institutional growth.",
  //   quote: "Innovation and education thrive where commitment meets opportunity."
  // },
  {
    id: 6,
    name: "Alka Tomar",
    designation: "Olympian & World Championship Medalist",
    image: "https://ss-i.thgim.com/public/photos/article32125154.ece/alternates/FREE_1200/alkajpg",
    shortBio: "Alka Tomar is a trailblazing Indian wrestler who made history as the first woman from India to win a medal at the World Wrestling Championships. She clinched a bronze in 2006 and went on to secure multiple national and international titles, including a gold at the 2010 Commonwealth Games in Delhi.",
    detailedBio: "Born on December 1, 1983, in Sisoli village, Meerut district, Uttar Pradesh, Alka Tomar began her wrestling journey in a region where the sport was predominantly male. Under the guidance of renowned coach Chandgi Ram, she broke barriers to become a formidable force in the 59 kg freestyle category. Her accolades include Bronze Medal at the 2006 World Wrestling Championships in Guangzhou, China (first Indian woman to medal at this event), Bronze Medal at the 2006 Asian Games in Doha, Gold Medal at the 2010 Commonwealth Games in Delhi, Multiple Gold Medals at the Commonwealth Wrestling Championships (2005, 2009, 2011), and Bronze Medals at the Asian Wrestling Championships (2003, 2009, 2010). Alka's journey is a testament to perseverance and passion, inspiring countless young athletes, especially women, to pursue their dreams in sports.",
    quote: "Wrestling taught me to fight not just opponents, but also societal norms."
  },
  {
    id: 7,
    name: "Piyush Sharma",
    designation: "Founder & Creator, Tricky Man",
    image: "https://media.licdn.com/dms/image/v2/D5603AQEW0xcLOMVKLQ/profile-displayphoto-shrink_800_800/B56ZdyzQR0GoAc-/0/1749977728888?e=1764201600&v=beta&t=4JWrL-lpVDVoiCsSIVOSwpAE56hC7-0GoPTquW2c0rs",
    shortBio: "Piyush Sharma, known as Tricky Man, is a software engineer turned full-time educator and content creator. He founded the YouTube channel Tricky Man to simplify career development, coding, and digital tools for students. With over 700K subscribers, his videos have empowered countless learners.",
    detailedBio: "Piyush Sharma, the founder of Tricky Man, transitioned from a software engineering career to become a leading educational content creator. His YouTube channel, Tricky Man, offers practical tutorials on coding, digital tools, and career development, aiming to make learning accessible and engaging. Recognized as one of India's Top 25 Educational Influencers, Piyush has been invited to speak at prominent institutions like IIIT Delhi, IIIT Lucknow, and corporate events hosted by Microsoft and Google. His mission is to bridge the gap between academic learning and real-world skills, helping students navigate internships, job placements, and technical skill development with confidence.",
    quote: "Empowering students with knowledge to shape their futures."
  },
  // {
  //   id: 8,
  //   name: "Abhinav Chaudhary",
  //   designation: "World Record Holder, Dancer & Social Advocate",
  //   image: "https://static.atypicaladvantage.in/images/talents/FT7uXxb39O8pNa6hYS5JCuIKK9SUGwawAuqDsJBv.jpg",
  //   shortBio: "Abhinav Chaudhary, diagnosed with 60% intellectual disability, holds the World Record for performing the maximum number of dance forms by a special child. A passionate dancer, model, and actor, he also runs a dance academy teaching children with special needs.",
  //   detailedBio: "Abhinav Chaudhary is a beacon of inspiration, demonstrating that determination transcends limitations. Despite being diagnosed with 60% intellectual disability, he has achieved remarkable success in the fields of dance, acting, and modeling. His accolades include World Record for performing the maximum number of dance forms by a special child, awarded by World Records India; Participation in national dance competitions and reality shows such as Dance India Dance and India's Got Talent; and National Award for Individual Excellence-2023 in the category of 'Best Disabled' for his outstanding work in art, culture, and social service. Beyond his performances, Abhinav is committed to giving back to the community. He runs a dance academy where he teaches dance to children with special needs and underprivileged kids, fostering an inclusive environment and empowering the next generation through the arts.",
  //   quote: "Dance is not just movement; it's a language of the soul that transcends all barriers."
  // }, 
  {
    id: 8,
    name: "Nishtha Mishra",
    designation: "Digital Marketing, Martech",
    image: "https://media.licdn.com/dms/image/v2/D5603AQFcSbYT-GN65w/profile-displayphoto-crop_800_800/B56ZlbZcZzH8AI-/0/1758175021178?e=1763596800&v=beta&t=zc5acEjjeARRhj3evM2wWAM9SLNdRfwYnweI1nxFeZ8",
    shortBio: "As a founder of Firstshot Technologies, a marketing‐tech venture that empowers brands through AI-powered influencer campaigns and performance marketing strategies to help brands scale efficiently. With a background in analytics and campaign optimisation, I am on a mission to bring transparency, efficiency and measurable ROI to the influencer ecosystem. Soon in the process of launching an FMCG brand.",
    detailedBio: "Nishtha Mishra is a dynamic entrepreneur and digital marketing expert with a passion for leveraging technology to drive brand growth. As the founder of Firstshot Technologies, she has been at the forefront of creating innovative marketing solutions that harness the power of AI and data analytics. Her extensive experience in campaign optimisation and influencer marketing has enabled her to deliver exceptional results for clients across various industries. Nishtha is committed to fostering a culture of transparency and accountability in the marketing ecosystem, ensuring that brands can measure their ROI effectively. With plans to launch her own FMCG brand, she is poised to make a significant impact in the industry.",
    quote: "Empowering brands to thrive in the digital age."
  },
  {
    id: 9,
    name: "Siddhart Sagar",
    designation: "Comedian, Writer & Actor",
    image: "https://blackhattalent.com/wp-content/uploads/2024/01/Sidharth-Sagar.jpg",
    shortBio: "Siddhart Sagar is a stand-up comedian, writer, and actor known for sharp observational humour and energetic stage presence across clubs and digital platforms.",
    detailedBio: "Siddhart Sagar began his career in stand-up comedy and has since established himself as a versatile performer and writer. His sets blend relatable everyday anecdotes with witty commentary on modern life, earning him shows at major comedy clubs and festivals across India. He has appeared on television and streaming platforms and contributed writing for sketches and live events, building a reputation for crisp timing and audience rapport.",
    quote: "Comedy is just truth with a laugh track."
  },
  {
    id: 10,
    name: "Sparsh Agarwal",
    designation: "Co-Founder & CEO, AP Mobility India Private Limited",
    image: "https://media.licdn.com/dms/image/v2/D5603AQGNjy7WKJ0vnA/profile-displayphoto-crop_800_800/B56ZjMLp8YHkAI-/0/1755772265396?e=1764201600&v=beta&t=b-V0Q7dLOBDQ8VhVC_XW9KyX0tPrDEYVhKdsfg2OxQA",
    shortBio: "Sparsh Agarwal is the co-founder and CEO of AP Mobility India Private Limited, focused on innovative mobility and transportation solutions.",
    detailedBio: "Sparsh Agarwal leads AP Mobility India Private Limited, driving product strategy and partnerships for sustainable urban mobility, EV infrastructure, and smart-city transportation projects. With experience in scaling mobility startups and building cross-functional teams, he focuses on impactful technology adoption and ecosystem development.",
    quote: "Innovation in mobility is about creating access and opportunity for everyone."
  }
];

export default speakersData;
