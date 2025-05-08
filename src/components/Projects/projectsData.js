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
        'This project involved building a robust ETL (Extract, Transform, Load) pipeline to handle large volumes of data from multiple sources. The goal was to create a reliable, automated system that could process data on a schedule and accommodate changes in data schema or source systems.',
        'The pipeline extracts data from various sources including APIs, databases, and file systems, transforms it using custom Python functions, and loads it into a PostgreSQL data warehouse for analytics and reporting purposes. The entire system is containerized with Docker for consistency across development and production environments.'
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
        'The Predictive Analytics Dashboard is a web-based application that enables business analysts to visualize and interact with machine learning predictions and key performance indicators. The system provides real-time insights into customer behavior, market trends, and business performance.',
        'The dashboard integrates several machine learning models built with scikit-learn and presents their outputs through an intuitive interface created with React and Plotly. A FastAPI backend serves as the bridge between the frontend and the data processing pipeline.'
      ],
      features: [
        'Interactive visualizations of time-series data and predictions',
        'Adjustable parameters to explore different prediction scenarios',
        'Drill-down capabilities from high-level metrics to detailed data points',
        'Export functionality for reports and presentations',
        'User authentication and role-based access control',
        'Mobile-responsive design for accessibility from any device'
      ],
      challenges: [
        {
          title: 'Real-time Data Updates',
          description: 'Creating a responsive dashboard that could update data in real-time without frequent page reloads was a significant challenge.',
          solution: 'Implemented WebSocket connections to push updates from the server to the client as data changes, and used Reacts state management to update visualizations without requiring full page reloads.'
        },
        {
          title: 'Model Explainability',
          description: 'Machine learning models often function as "black boxes," making it difficult for users to understand why certain predictions were made.',
          solution: 'Integrated SHAP (SHapley Additive exPlanations) values to provide transparent explanations of model outputs, helping users understand which features contribute most to each prediction.'
        }
      ],
      outcomes: 'The dashboard has become an essential tool for strategic decision-making, with over 200 active users across the organization. It has helped identify several market opportunities and operational inefficiencies, directly contributing to a 15% increase in operational efficiency.'
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
        'This project involved building a comprehensive data transformation framework using dbt (data build tool) to convert raw data into analytics-ready tables with consistent business logic. The framework standardizes transformation processes across the organization and enforces best practices in data modeling.',
        'The solution includes modular SQL transformations, automated testing of data quality and integrity, and thorough documentation of data lineage and business definitions. The entire framework is deployed through a CI/CD pipeline that ensures changes are tested before being applied to production.'
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
        'This project delivers real-time analytics for high-volume event streams, enabling immediate insights and alerts based on incoming data. The system processes millions of events per minute from web applications, IoT devices, and business systems.',
        'The architecture uses Apache Kafka for message queuing, Spark Streaming for stateful processing and aggregations, and Elasticsearch/Kibana for storage and visualization. Custom Java microservices handle specific domain logic and integrations with external systems.'
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