
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Yash Jain",
  title: "Hi all, I'm Yash",
  subTitle: emoji("A final year undergrad with a passion for Deep Learning and Machine Learning, actively looking for full-time AI/ML researcher roles. 🚀 I am currently pursuing Mathematics and Computing with a minor in Computer Science from IIT Kharagpur.🚀 I also trade tocks in my free time🚀"),
  resumeLink: "https://drive.google.com/file/d/1FQkbT95PIBUKy1bYW8b5-f5e3_H_Zr4c/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/yashkgp",
  linkedin: "https://www.linkedin.com/in/yash-jain-b19364148/",
  gmail: "yashjainjain1704@gmail.com",
  facebook: "https://www.facebook.com/yash.rocks1704/"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "A DEEP LEARNING ENTHUSIAST WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Proficient in PyTorch, TensorFlow and Distributed Computing."),
    emoji("⚡ Well versed with the recent development in the feild of Deep Learning, specifically NLP."),
    emoji("⚡ Can deploy ML/AI  models on a cloud platform, with a basic frontend."),
    emoji("⚡ Have olid Mathematical and Algorithms Knowledge.")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Risk Analyst",  
      company: "Goldman Sachs",
      companylogo: require("./assets/images/gslogo.png"),
      date: "June 2020 – Present",
      desc: "To estimate and validate the intraday liquidity requirement of the firm"
    },
    {
      role: "Deep Learning Research Intern ",   
      company: "University of Alberta",
      companylogo: require("./assets/images/uofalogo.png"),
      date: "May 2019 – July 2019",
      desc: "",
      descBullets: [
        "Made a visualization tool to find anomalies and defects in 3D laser printed metal parts using thermal imaging",
        "Implemented Deep Predictive Coding Networks and Conv-LSTMs to predict the geometry of the next layer in 3D printed metal samples using thermal imaging, surface profile, 3D point cloud and process parameters"
      ]
    },
    {
      role: "Deep Learning  Intern",  
      company: "Yellow Messenger",
      companylogo: require("./assets/images/yellowlogo.png"),
      date: "May 2018 – Sep 2018",
      desc: "",
      descBullets: [
        "Implemented Generative Chatbots using seq2seq modeling in tensorflow and trained it on domain specific data",
        "Was responsible for making an Optical Character Recognition model to extract metadata from Id-cards",
        " Spearheaded development of a LSTM based model for emotion recognition from human speech"
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "yashkgp", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: emoji("Projects  🏆 "),
  subtitle: "Projects and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Extreme multi-labeled classification ",
      subtitle: "• Used Active-Zero Shot Learning for predicting classes using labeled data only from a small set of classes • Used Modified Skip-Gram along with Page Rank as a centrality measure to estimate class relations",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
      ]
    },
    {
      title: "Smart Social Media",
      subtitle: "• Implemented LSTMs, convNets and Bag-of-Words using pytorch to classify hate speech on live Twitter feed• The back-end models were hosted on an online sever to use the Chrome extension while scrolling through live Twitter feed. Awarded the Best semester project among 13 groups in a peer review",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: []
    },

    {
      title: "Automated Summarization of Legal Text Files",
      subtitle: "• Compared different Summarization Algorithms like Text Rank and Lex-Rank for summarizing legal text files • Evaluated the computer made summaries with gold standard summaries using ROUGE metric for scoring",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: []
      
    },
    {
      title: "Vocabulary Building and Query Reformulation for E-commerce ",
      subtitle: "• Used Conditional Random Field Tagging with LSTMs for sequence tagging of Fashion related articles• Implemented Siamese and Triplet networks using pytorch to tackle the problem of vocabulary mismatching",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: []
      
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters",

  achivementsCards: [
    {
      title: "Inter-IIT Gold Medalist",
      subtitle: "Part of 4- member gold wining team, selected by IIT Kharagpur to represent it at TV Audience Measurement event. The presented solution is being currently adopted by Broadcast Audience Research Council, India",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: []
    },
    {
      title: "Teaching Assistant Nepal School of AI",
      subtitle: "Was selected as a teaching assitant for NLP at the 2nd Nepal School of AI.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: []
    },

    {
      title: "Data Analysis Hackathon, KTJ IIT Kharagpur, Gold Medalist",
      subtitle: "Made an app to decide tax fraud using feed from social media",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "I love to read and teach others what I have read.",

  blogs: [
  ]
};
const publiSection = {

  title: "Publications",
  subtitle: "Papers that I have co-authored",

  blogs: [
    {
      url: "https://www.aclweb.org/anthology/D19-6008.pdf",
      title: "Bidirectional Encoder Representations from Transformers for machine comprehension with common sense ",
      description: "EMNLP 2019| This paper explores the use of Bidirectional Encoder Representations from Transformers(BERT) along with external relational knowledge from ConceptNet to tackle the problem of commonsense inference. The input passage, question and answer are augmented with relational knowledge from ConceptNet. Using this technique we are able to achieve an accuracy of 73.3 % on theofficial test data"
    },
    {
      url: "Distributed representation of tags for Active Zero Shot learning",
      title: "Distributed representation of tags for Active Zero Shot learning",
      description: "CODS COMAD(submitted)|Extreme multi-labelled classification (XMLC) refers to the problem of tagging items to its most relevant subset of class labels from an extremely large set of labels. Since it is practically difficult to obtain training instances for each of such a large set of labels, the problem is better tackled by a zero-shot approach, where training instances of only a small subset of labels are used. In this paper, we focus on active zero-shot classification, where one can select which subset of labels to obtain training data for. The challenge is to intelligently select a small subset of labels (seen classes) for which to obtain training data, such that the trained model can accurately predict a large number of unseen labels. We present a model named DistributedRepresentation of Tags for Active Zero-Shot Learning (DiRTAZL), which learns label similarities from an external knowledge source, to intelligently select the seen classes. We experimented on three data sets to demonstrate that our proposed model is superior to prior models for active zero-shot learning paradigm"
    },
    {
      url: "http://dcase.community/documents/challenge2020/technical_reports/DCASE2020_Tiwari_84_t2.pdf",
      description: "DCASE 2020| We propose two different anomalous sound detection systems, one based on features extracted from a modulation spectral signal representation and the other based on i-vector extracted from mel-band features. The first system uses a nearest neighbour graph to construct clusters which capture local variations in the training data. Anomalies are then identified based on their distance from the cluster centroids. The second system uses i-vectors extracted from mel-band spectra for training a Gaussian Mixture Model. Anomalies are then identified using their negative log likelihood. Both these methods show significant improvement over the DCASE Challenge baseline AUC scores, with an average improvement of 6% across all machines. An ensemble of the two systems is shown to further improve the average performance by 11% over the baseline.",
      title: "MODULATION SPECTRAL SIGNAL REPRESENTATION AND I-VECTORS FOR ANOMALOUS SOUND DETECTION"
    },
    {
      url: "https://www.sciencedirect.com/science/article/pii/S0264127520303750?via%3Dihub",
      title: "Concurrent geometry and material-based process identification and optimization for robotic CMT-based wire arc additive manufacturing",
      description: "Materials & Design Journal | Implemented Deep Predictive Coding Networks and Conv-LSTMs to predict the geometry of the next layer in 3D printed metal samples using thermal imaging, surface profile, 3D point cloud and process parameters"
    },
    {
      url: "https://link.springer.com/chapter/10.1007%2F978-981-13-1742-2_18",
      title: "Exploring Causes of Crane Accidents from Incident Reports Using Decision Tree",
      description: "Electrical Overhead Traveling (EOT) cranes in manufacturing industries serve the purpose of material handling in a complex working environment. The complexity involved in human-machine interaction at the workplace make it hazard and incident prone. In the current study, emerging data mining technique like Decision tree (DT) is adopted to explore the underlying causes involved in incidents that happened in the studied plant from the year 2014–2016. Interesting results are obtained from the analysis like the number of incidents happened during construction and maintenance activities and in weekend (Saturday, Sunday) are more. Managerial implications are suggested for the betterment of the safety management system of the studied plant."
    },
    {
      url: "https://arxiv.org/pdf/2008.06908.pdf",
      description: "WSDM 2021(submitted)|The visual appearance of a product significantly influences purchase decisions on e-commerce websites. We propose a novel framework VASG (Visually Aware Skip-Gram) for learning user and product representations in a common latent space using product image features. Our model is an amalgamation of the Skip-Gram architecture and a deep neural network based Decoder. Here the Skip-Gram attempts to capture user preference by optimizing user-product co-occurrence in a Heterogeneous Information Network while the Decoder simultaneously learns a mapping to transform product image features to the Skip-Gram embedding space. This architecture is jointly optimized in an end-to-end, multitask fashion. The proposed framework enables us to make personalized recommendations for cold-start products which have no purchase history. Experiments conducted on large real world datasets show that the learned embeddings can generate effective recommendations using nearest neighbour searches.",
      title: "Visually Aware Skip-Gram for Image Based Recommendations"
    },
    {
      url: "https://arxiv.org/pdf/2008.06908.pdf",
      description: "AstroPhysics Journal(contributor)| The goal of the SunPy project is to facilitate and promote the use and development of community-led, free, and open source data analysis software for solar physics based on the scientific Python environment. The project achieves this goal by developing and maintaining the sunpy core package and supporting an ecosystem of affiliated packages. This paper describes the first official stable release (version 1.0) of the core package, as well as the project organization and infrastructure. This paper concludes with a discussion of the future of the SunPy project.",
      title: "The SunPy Project: Open Source Development and Status of the Version 1.0 Core Package"
    }


    

    
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss an idea or just want to say hi? My Inbox is open for all.",
  number: "+91-9074521111",
  email_address: "yashjainjain1704@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "YashJai12555057"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences,publiSection, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
