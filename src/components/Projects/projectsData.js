/**
 * Projects data for the portfolio
 * 
 * This file contains the data for all projects displayed in the portfolio.
 * Each project includes basic information for the project card and
 * extended details for the project detail page.
 */

import portfolioImageETL from '../../assets/images2/projects/portfolio_image.png';
import portfolioImageEDA from '../../assets/images2/projects/EDA.png';
import portfolioImageRDB from '../../assets/images2/projects/rdb-design.png';
import portfolioImageDA from '../../assets/images2/projects/data-arch.png';

export const projectsData = [
    {
      id: 1,
      title: 'Exploratory Analysis & Visualization of Manufacturing Data',
      description: 'Analyzed a dataset that tracks the number of defects over a 10-day period.',
      technologies: ['Python', 'Pandas', 'Seaborn', "Matplotlib"],
      image: portfolioImageEDA,
      github: 'https://github.com/danielg-gerlach/EDA_Manufacturing',
      demo: "",
      // Extended content for project details page
      fullDescription: [
        'Data analysis plays a critical role in manufacturing by providing insights that drive smarter decision-making. It helps businesses optimize resource allocation, improve processes, and maintain quality control. By analyzing data from different stages of production, manufacturers can predict equipment failures, streamline supply chains, and minimize downtime—resulting in cost savings and higher efficiency.',
        "This project focuses on an exploratory data analysis (EDA) of a manufacturing dataset that tracks the number of defects over a 10-day period. The goal was to uncover insights that could support process improvement and quality assurance. I used Python along with libraries like Pandas for data manipulation and Matplotlib and Seaborn for visualizations. This project represents my starting point in data analytics, and there's plenty more on the way!"
      ],
      features: [
        'Exploratory data analysis',
        'Data visualizations using Matplotlib & Seaborn'
      ],
      outcomes: 'The Energy Supplier Data Modeling Project delivers a relational database tailored to the basic operational needs of an energy supplier company. By designing a normalized schema with relationships and enforcing data integrity through constraints, the project ensures reliable and efficient data management. This implementation not only addresses immediate business challenges but also lays a solid foundation for future growth and adaptability.'
    },
    {
      id: 2,
      title: 'End-to-End Data Pipeline, Warehousing & Analysis',
      description: 'Developed an interactive dashboard for visualizing machine learning predictions and key performance metrics.',
      technologies: ['Python', 'SQL', 'BigQuery', 'MySQL', 'Looker Studio'],
      image: portfolioImageETL, 
      github: 'https://github.com/yourusername/analytics-dashboard',
      demo: null,
      // Extended content for project details page
      fullDescription: [
        "I'm currently working on this project. Come back soon to see the results!"
      ]
    },
    {
      id: 3,
      title: 'Relational Database Design',
      description: 'Created a relational database for an energy supplier operations in MySQL.',
      technologies: ['SQL', 'MySQL'],
      image: portfolioImageRDB, 
      github: 'https://github.com/danielg-gerlach/energy_supplier_db',
      demo: null,
      // Extended content for project details page
      fullDescription: [
        'In the energy sector, managing data effectively is critical for delivering seamless operations and exceptional customer satisfaction. Relational databases offer a structured and reliable way to organize key areas such as customer management, energy usage tracking, billing, and payments. They provide the foundation for accuracy, scalability, and the ability to adapt to changing business requirements in a dynamic industry.',
        "For this project, I designed and implemented a relational database using operational data modeling, specifically tailored to an energy supplier's needs. The database focuses on streamlining the management of customer accounts, contracts, and meter readings, ensuring data consistency and operational efficiency. By addressing the core challenges of energy data management, this project demonstrates how a well-structured database can optimize workflows and enable better decision-making.",
        "This implementation not only showcases the power of relational databases in solving real-world business problems but also highlights technical skills in data modeling and SQL development. It's a great example of how databases can deliver value and drive success in the energy industry."
      ],
      features: [
        'Requirements Analysis',
        'Database Modeling & Schema Design as well as defined relationships', 
        'CREATE & INSERTS into the DB',
        'Scalability & Performance (Indexing)',
        'Data Integrity Constraints'
      ],
      outcomes: 'The Energy Supplier Data Modeling Project delivers a relational database tailored to the basic operational needs of an energy supplier company. By designing a normalized schema with relationships and enforcing data integrity through constraints, the project ensures reliable and efficient data management. This implementation not only addresses immediate business challenges but also lays a solid foundation for future growth and adaptability.'
    },
    {
      id: 4,
      title: 'Data Architecture Design',
      description: 'Designed a manufacturing-focused data architecture.',
      technologies: ['Data Architecture Design'],
      image: portfolioImageDA, // Add your image path here
      github: 'https://github.com/danielg-gerlach/Data_Architecture',
      demo: null,
      // Extended content for project details page
      fullDescription: [
        'In manufacturing, data is the backbone of informed decision-making. This project focuses on building a data warehouse architecture that integrates real-time IoT sensor data, production metrics, supply chain information, and quality assurance data. The goal was to create a centralized platform that enables stakeholders to optimize operations, enhance quality, and improve supply chain agility.',
        'This project reflects my passion for data engineering and architecture. It showcases my approach to designing data solutions for the complex landscapes of modern production environments, combining technical expertise with a deep understanding of manufacturing needs.'
      ],
      features: [
        "Real-time streaming ingestion of shop-floor sensor data for immediate process visibility.",
        "End-to-end supply-chain analytics that joins IoT, ERP, MES and logistics feeds.",
        "Schema-flexible, data-mesh layout that adapts quickly to new products and data structures.",
        "Cloud-native stack (Airbyte → AWS S3 Data Lake → dbt → Snowflake → Power BI) for modular scalability.",
        "Ensured data quality loops through cleaning & standardizing data into clean data for further transformation."
      ],
      outcomes: "Designing a resilient data architecture forces me to weigh performance, cost and governance instead of chasing the newest framework. Up-front schema contracts and automated CI/CD tests spare countless downstream fixes and keep stakeholders’ trust. True real-time value emerges only when every data change is treated as an event, not a nightly batch. Long-term scalability hinges less on exotic tech and more on clear domain ownership paired with rich metadata. Starting lean, measuring everything and iterating quickly lets the architecture mature with – not ahead of – the business."
    }
  ]