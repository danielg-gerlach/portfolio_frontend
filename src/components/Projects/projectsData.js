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
        'This project focuses on an exploratory data analysis (EDA) of a manufacturing dataset that tracks the number of defects over a 10-day period. The goal was to uncover insights that could support process improvement and quality assurance. I used Python along with libraries like Pandas for data manipulation and Matplotlib and Seaborn for visualizations. This project represents my starting point in data analytics, and there’s plenty more on the way!'
      ],
      features: [
        'Scheduled data extraction from multiple sources',
        'Custom transformation logic for data cleaning and enrichment',
        'Automated data quality validation checks',
        'Data lineage tracking for audit and troubleshooting',
        'Email notifications for pipeline failures',
        'Dashboard for monitoring pipeline status and performance'
      ],
      challenges: [
        {
          title: 'Handling Schema Changes',
          description: 'One of the major challenges was designing the pipeline to be resilient against schema changes in source systems, which could potentially break the ETL process.',
          solution: 'Implemented a schema detection layer that dynamically adapts to changes in source data structure. This layer maps incoming data to a standardized schema and logs any discrepancies for review.'
        },
        {
          title: 'Performance Optimization',
          description: 'Initial pipeline runs were taking too long, especially when processing historical data, which was impacting the availability of reports.',
          solution: 'Optimized performance by implementing parallel processing for independent data streams and adding incremental load capabilities that only process new or changed data.'
        }
      ],
      outcomes: 'The completed pipeline reduced data processing time by 70% and eliminated manual data preparation tasks, saving the team approximately 15 hours per week. The system now reliably processes over 500GB of data daily, providing up-to-date analytics for business decisions.'
    },
    {
      id: 2,
      title: 'End-to-End Data Pipeline, Warehousing & Analysis',
      description: 'Developed an interactive dashboard for visualizing machine learning predictions and key performance metrics.',
      technologies: ['Python', 'SQL', 'BigQuery', 'MySQL', 'Looker Studio'],
      image: portfolioImageETL, 
      github: 'https://github.com/yourusername/analytics-dashboard',
      demo: 'https://yourdemo.com',
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
        'For this project, I designed and implemented a relational database using operational data modeling, specifically tailored to an energy supplier’s needs. The database focuses on streamlining the management of customer accounts, contracts, and meter readings, ensuring data consistency and operational efficiency. By addressing the core challenges of energy data management, this project demonstrates how a well-structured database can optimize workflows and enable better decision-making.',
        'This implementation not only showcases the power of relational databases in solving real-world business problems but also highlights technical skills in data modeling and SQL development. It’s a great example of how databases can deliver value and drive success in the energy industry.'
      ],
      features: [
        'Modular transformation models organized by business domain',
        'Automated data testing suite with over 200 assertions',
        'Self-documenting data catalog with lineage diagrams',
        'Incremental loading strategies for large tables',
        'CI/CD pipeline integration with GitHub Actions',
        'Scheduling and monitoring through Airflow'
      ],
      challenges: [
        {
          title: 'Business Logic Standardization',
          description: 'Different departments within the organization were using inconsistent definitions for key business metrics, leading to conflicting reports and confusion.',
          solution: 'Created a centralized repository of standardized business logic implemented as dbt macros, and worked with stakeholders to align on common definitions for critical metrics.'
        },
        {
          title: 'Performance in Large Data Warehouse',
          description: 'As the data warehouse grew to several terabytes, transformation jobs began taking excessive time to complete, especially during full refreshes.',
          solution: 'Implemented a combination of incremental models, materialized views, and Snowflakes clustering capabilities to optimize performance. This reduced typical transformation run times by 80%.'
        }
      ],
      outcomes: 'The framework has significantly improved data quality and consistency across the organization. Analytics teams now spend 40% less time on data preparation and have higher confidence in their results. The documentation has also made onboarding new team members faster and more effective.'
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
        'Sub-second processing of streaming events',
        'Complex event processing with time-windowed aggregations',
        'Anomaly detection with configurable alert thresholds',
        'Fault-tolerant design with guaranteed message delivery',
        'Horizontally scalable architecture to handle growing volumes',
        'Real-time dashboards with custom visualization components'
      ],
      challenges: [
        {
          title: 'Handling Late-Arriving Data',
          description: 'In distributed systems, events can arrive out of order or be delayed due to network issues, which can skew analytics results.',
          solution: 'Implemented a watermarking system in Spark Streaming that maintains state for a configurable period, allowing late events to be correctly incorporated into their appropriate time windows.'
        },
        {
          title: 'System Scalability',
          description: 'As data volumes grew, the initial architecture struggled to scale efficiently, creating bottlenecks in processing.',
          solution: 'Redesigned the system using a microservices approach with independent scaling for each component. Implemented auto-scaling for Kafka partitions and Spark executors based on current load.'
        },
        {
          title: 'Data Consistency',
          description: 'Ensuring consistent analytics results across real-time and batch processing systems proved challenging.',
          solution: 'Adopted the Lambda architecture pattern with separate paths for real-time and batch processing but with shared business logic libraries. Implemented reconciliation processes to identify and resolve discrepancies.'
        }
      ],
      outcomes: 'The streaming analytics platform has transformed operational monitoring by providing insights within seconds instead of hours or days. It has enabled the detection of issues before they impact customers and has created new opportunities for real-time personalization and optimization.'
    }
  ]