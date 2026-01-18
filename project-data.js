const projectsData = {
    "hospital-dashboard-khaled": {
        title: "Hospital Dashboard",
        category: "King Khaled Hospital",
        image: "assets/images/project1.jpg",
        dashboardLink: "https://app.powerbi.com/view?r=eyJrIjoiZDQxNjU5MzItMjE0Ni00NjEwLTk3ZTMtODVkMDg4MTI5NjBmIiwidCI6Ijc0MjY4YzVhLWU1MjItNDY2YS1iMDg4LWQ0NDQ3MzNiNjJjOCJ9",
        documentLink: "#", // Add link here
        summary: "A comprehensive analytical dashboard for King Khaled Hospital. This project focuses on tracking key performance indicators (KPIs) related to patient admissions, department efficiency, and resource utilization. It provides hospital administration with real-time insights to improve operational performance.",
        steps: [
            "Collected raw data from hospital management systems (Excel/SQL).",
            "Cleaned and transformed data using Python (Pandas) to handle missing values and inconsistencies.",
            "Designed the data model in Power BI, establishing relationships between Patient, Doctor, and Department tables.",
            "Created interactive visualizations including Patient Flow, Bed Occupancy metrics, and Wait Time analysis."
        ],
        modelingImage: "assets/images/project1.jpg" // Using project image as placeholder for modeling schema
    },
    "sales-analytics": {
        title: "Sales Analytics",
        category: "Comprehensive Sales Data Analysis",
        image: "assets/images/project3.jpg",
        dashboardLink: "https://app.powerbi.com/view?r=eyJrIjoiNWZlN2FjNjEtN2Q2NS00ZTk3LTkyZjItMWMxMTk1YjcyMmNjIiwidCI6Ijc0MjY4YzVhLWU1MjItNDY2YS1iMDg4LWQ0NDQ3MzNiNjJjOCJ9",
        summary: "This dashboard analyzes sales performance across different regions and product categories. It enables the sales team to identify top-performing products, understand seasonal trends, and target underperforming areas.",
        steps: [
            "Imported sales transaction data from CSV files.",
            "Performed ETL (Extract, Transform, Load) operations using Power Query.",
            "Created a Date Table to handle time-intelligence calculations.",
            "Built a dynamic dashboard with slicers for Region, Year, and Category."
        ],
        modeling: "Used a Snowflake Schema. Fact Sales table connected to DimProduct, DimCustomer, DimRegion, and DimDate. Utilized DAX for Year-over-Year (YoY) growth and Sales YTD calculations."
    },
    "university-dashboard": {
        title: "University Dashboard",
        category: "Academic Performance Tracking",
        image: "assets/images/project10.jpg",
        dashboardLink: "https://app.powerbi.com/view?r=eyJrIjoiYTFjZGQ5YWQtZjZlNS00Y2NmLWI5YzgtZTA2MDdhYTJkYjVkIiwidCI6Ijc0MjY4YzVhLWU1MjItNDY2YS1iMDg4LWQ0NDQ3MzNiNjJjOCJ9",
        summary: "A dashboard designed for university administration to track student enrollment, academic performance, and faculty workload. It helps in strategic planning and resource allocation.",
        steps: [
            "Aggregated student grade and enrollment data.",
            "Standardized department names and course codes.",
            "Visualized GPA trends over semesters.",
            "Analyzed student demographics and retention rates."
        ],
        modeling: "Relational model linking Students, Courses, Professors, and Enrollments. Key metrics include Average GPA, Drop-out Rate, and Student-Faculty Ratio."
    },
    "health-monitor": {
        title: "Health Monitor",
        category: "Health Performance Monitoring",
        image: "assets/images/project2.jpg",
        dashboardLink: "https://app.powerbi.com/view?r=eyJrIjoiNDQ3ODYyZTctNjM0ZS00MzM1LThmMzEtMTdhMzY3MmNjYmJkIiwidCI6Ijc0MjY4YzVhLWU1MjItNDY2YS1iMDg4LWQ0NDQ3MzNiNjJjOCJ9",
        summary: "Focuses on monitoring general health statistics and patient outcomes. Used to track the prevalence of diseases and treatment effectiveness.",
        steps: [
            "Data gathering from health records.",
            "Normalization of medical terms.",
            "Trend analysis of specific health indicators.",
            "Geospatial mapping of health incidents."
        ],
        modeling: " Fact table for Health Events. Dimensions for Diagnosis, Location, and Patient Demographics. Measures for Incidence Rate and Recovery Percentage."
    },
    "dara-project": {
        title: "DARA Project",
        category: "Corporate Analysis Dashboard",
        image: "assets/images/project9.jpg",
        dashboardLink: "https://app.powerbi.com/view?r=eyJrIjoiYzkyZDY2YmQtYjNlMS00ZWUyLTgzNjItMzZlYjcxZDA3YTJkIiwidCI6Ijc0MjY4YzVhLWU1MjItNDY2YS1iMDg4LWQ0NDQ3MzNiNjJjOCJ9",
        summary: "A corporate dashboard for DARA company to monitor internal projects, budget allocation, and milestone completion status.",
        steps: [
            "Integrated project management tool exports.",
            "Calculated budget variance (Planned vs Actual).",
            "Created Gantt charts for timeline visualization.",
            "Tracked resource allocation per project."
        ],
        modeling: "Project Management schema. Entities: Projects, Tasks, Employees, Budget. DAX used for Cost Variance and Schedule Variance."
    },
    "qabdah-system": {
        title: "Qabdah System",
        category: "Contracts & Competitions Tracking",
        image: "assets/images/project4.jpg",
        dashboardLink: "https://app.powerbi.com/view?r=eyJrIjoiOWQ2YzY4YTktZDk5Yy00MjcyLTk1Y2UtOTNlMmM1ZTg0ZjcyIiwidCI6Ijc0MjY4YzVhLWU1MjItNDY2YS1iMDg4LWQ0NDQ3MzNiNjJjOCJ9",
        summary: "Specialized system for tracking government contracts and competitions. Ensures compliance with deadlines and monitors financial statuses of contracts.",
        steps: [
            "Processed contract data documents.",
            "Mapped contract stages (Tender, Award, Execution).",
            " alerted on upcoming deadlines.",
            "Visualized contract values by status."
        ],
        modeling: "Contract Lifecycle model. Fact: ContractEvents. Dimensions: ContractType, Vendor, Status. Measures: Total Contract Value, Open Contracts Count."
    },
    "alzad-utility": {
        title: "Alzad Utility",
        category: "Charity Statistics Tracker",
        image: "assets/images/project5.jpg",
        dashboardLink: "https://app.powerbi.com/view?r=eyJrIjoiOTU5MTM4NjQtZmRlNC00MjMxLTg0OTMtYTgyZDc1ZTE4M2U1IiwidCI6Ijc0MjY4YzVhLWU1MjItNDY2YS1iMDg4LWQ0NDQ3MzNiNjJjOCJ9",
        summary: "A dashboard for Alzad Charity to track donations, beneficiary distribution, and aid programs. Helps in transparent reporting to donors.",
        steps: [
            "Consolidated logs of donations and distribution.",
            "Categorized aid types (Financial, Food, Medical).",
            "Mapped beneficiary locations.",
            "Generated monthly activity reports."
        ],
        modeling: "Charity model. Fact: Transactions. Dimension: Donors, Beneficiaries, AidType. Measures: Total Donations, Families Aided."
    },
    "abasco-orders": {
        title: "Abasco Orders",
        category: "Monthly Order Management",
        image: "assets/images/project6.jpg",
        dashboardLink: "https://app.powerbi.com/view?r=eyJrIjoiYWI0YWNiOGItNzIyOS00N2NiLWE3MjctMGIxNGFmYTU3YTgzIiwidCI6Ijc0MjY4YzVhLWU1MjItNDY2YS1iMDg4LWQ0NDQ3MzNiNjJjOCJ9",
        summary: "Operational dashboard for Abasco to track monthly order volumes, fulfillment rates, and delivery times.",
        steps: [
            "Connected to the Order Management System.",
            "Time-series analysis of order volume.",
            "Tracking delivery lead times.",
            "Identifying bottlenecks in fulfillment."
        ],
        modeling: "Supply Chain model. Fact: Orders. Dimensions: Product, Customer, ShippingMethod. Measures: On-Time Delivery Rate, Average Order Value."
    },
    "hospital-faisal": {
        title: "King Faisal Hospital",
        category: "Specialized Medical Dashboard",
        image: "assets/images/project7.jpg",
        dashboardLink: "https://app.powerbi.com/view?r=eyJrIjoiZjRlZTc3ZjQtMzJjMi00NTBkLWI3NjMtYjAxMThjOWE4NTBjIiwidCI6Ijc0MjY4YzVhLWU1MjItNDY2YS1iMDg4LWQ0NDQ3MzNiNjJjOCJ9",
        summary: "A specialized dashboard for King Faisal Specialist Hospital, likely focusing on specific medical departments or high-level administration stats.",
        steps: [
            "Secure data extraction from HMIS.",
            "Analysis of patient outcomes.",
            "Resource utilization tracking.",
            "Departmental performance comparison."
        ],
        modeling: "Healthcare analytical model. Similar to the other hospital dashboard but tailored for specialized care metrics."
    }
};
