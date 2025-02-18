import niftyImg from "./assets/nifty.png";
import healthImg from "./assets/health.png";
import musicImg from "./assets/music.png";
import rfmImg from "./assets/rfm.png";
import crmImg from "./assets/crm.png";
import salesImg from "./assets/sales.png";
import telcoImg from "./assets/telco.png";

export const techStack = [

  { name: "Python", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "SQL", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "NoSQL", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg" },
  { name: "Power BI", link: "https://www.vectorlogo.zone/logos/microsoft_powerbi/microsoft_powerbi-icon.svg" },
  { name: "Tableau", link: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg" },
  { name: "MS Excel", link: "https://upload.wikimedia.org/wikipedia/commons/8/86/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg" },
  { name: "Streamlit", link: "https://streamlit.io/images/brand/streamlit-mark-color.png" },
  { name: "Docker", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg" },
  { name: "Git", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" },
  { name: "MongoDB", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg" },
  { name: "Scikit-Learn", link: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
  { name: "PyTorch", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { name: "Pandas", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
  { name: "NumPy", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
  { name: "Matplotlib", link: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg" },
  { name: "Seaborn", link: "https://seaborn.pydata.org/_static/logo-wide-lightbg.svg" },
  { name: "XGBoost", link: "https://upload.wikimedia.org/wikipedia/commons/6/69/XGBoost_logo.png" },
  //{ name: "React", link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" },
  //{ name: "Tailwind CSS", link: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
]


export const contactLinks = [
{ name: 'Instagram', url: 'https://img.icons8.com/doodle/40/000000/instagram-new--v2.png', link: 'https://www.instagram.com/_.pranav10.__/' },
{ name: 'Github', url: 'https://img.icons8.com/doodle/40/000000/github--v1.png', link :'https://github.com/Pranav1011'},
{ name: 'LinkedIn', url: 'https://img.icons8.com/doodle/40/000000/linkedin--v2.png', link: 'https://www.linkedin.com/in/sai-pranav-krovvidi/'}
]



export const serviceData = [
  {
    name: "Problem Statement",
    desc: `The Project Management Office (PMO) at Tally Solutions struggled with inefficient project tracking and resource allocation.  
    There was no centralized system to monitor available resources in real time.  
    Project managers lacked visibility into how resources were being allocated across multiple projects.  
    Decision-making was slow and based on manual inputs, leading to suboptimal workforce utilization.`,
    img: "https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-web-development-coding-kiranshastry-lineal-color-kiranshastry.png"
  },
  {
    name: "Solution",
    desc: `To address this challenge, I designed and built a custom software solution using:  
     Postgres for efficient data storage and retrieval.  
     HTML & JavaScript for an intuitive front-end interface.  
     Developed a proprietary data visualization pipeline that visually mapped out the allocation of resources across projects.  
     Enabled real-time tracking of workforce availability, allowing PMO teams to optimize project assignments.`,
    img: "https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-app-development-responsive-web-design-justicon-lineal-color-justicon.png"
  },
  {
    name: "Results",
    desc: `The implementation of this system led to significant improvements in efficiency:  
    40% increase in project and resource allocation efficiency, reducing bottlenecks.  
    Managers could now quickly identify underutilized resources and reassign them in real time.  
    The data-driven dashboard improved visibility across all projects, allowing for faster, informed decision-making.  
    The proprietary visualization tool became an integral part of resource planning, enhancing company-wide project execution strategies.`,
    img: "https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-backend-no-code-flaticons-flat-flat-icons.png"
  }


]

export const projects = [
  {
    name: "Nifty ETF Forecasting Dashboard",
    date: "February 2025",
    desc: `Developed a full-stack financial dashboard using Streamlit to visualize stock market trends and volatility forecasts.  
    Implemented Prophet-based time series modeling, achieving a 15% reduction in volatility prediction error (MAE: 1.13).  
    Designed interactive visualizations for Bollinger Bands, MACD, RSI, and moving averages to analyze market patterns. 
    Integrated automated ETL pipelines for real-time data processing from Yahoo Finance API, applying feature engineering (moving averages, returns, volatility indices).`,
    img: niftyImg,
    link: "https://niftyetfdasboard-2tpd6baas7hbwpuyastukb.streamlit.app/",
  },
  {
    name: "ER Pulse: Real-Time Emergency Care Insights",
    date: "January 2025",
    desc: `Designed an interactive Streamlit-based dashboard to optimize hospital resource allocation and patient flow using the MIMIC-III clinical dataset.  
    Built predictive models to estimate emergency department (ED) wait times, reducing manual resource planning efforts by 30%.  
    Created visual analytics for hourly admissions, department utilization, and transfer patterns, enabling data-driven decision-making.  
    Streamlined deployment with Docker, ensuring real-time analytics updates.`,
    img: healthImg,
    link: "https://er-pulse-real-time-emergency-care-insights-l2tch7wgzkcm5qnczd4.streamlit.app/",
  },
  {
    name: "Instrument Sales Optimization",
    date: "Sep - Dec 2024",
    desc: `Developed a centralized database for musical instrument retailers using SQL and NoSQL, optimizing inventory and sales by 30%.  
    Implemented Python visualizations to analyze trends, such as top-selling products and popular brands.  
    Delivered actionable insights that increased operational efficiency and customer satisfaction.`,
    img: musicImg,
    link: "",
  },
  {
    name: "Customer Segmentation Using RFM Analysis",
    date: "November 2024",
    desc: `Conducted RFM analysis on an E-Commerce dataset, achieving 25% improved accuracy in marketing recommendations.  
    Cleaned and imputed data, calculated RFM scores, and applied K-Means clustering to segment customers.  
    Delivered data-driven insights for optimized customer engagement and targeted marketing strategies.`,
    img: rfmImg,
    link: "https://github.com/Pranav1011/Customer_RFM_Analysis/blob/ff9a579b907f536358d174c631d05605b2d471a5/Report.pdf",
  },
  {
    name: "AI-Enhanced CRM Tool (VIT Bhopal University)",
    date: "Aug 2023 - Apr 2024",
    desc: `Developed a customer relationship management (CRM) tool leveraging Python & AI technologies like DistilBERT for query sentiment analysis and GPT-4 for personalized responses.  
    Led zero-shot classification & query summarization using MT5 & Gemini 1.0 Pro, reducing response times by 50%.  
    Improved overall efficiency of customer issue resolution and boosted customer satisfaction.`,
    img: crmImg,
    link: "https://github.com/Pranav1011/CAPSTONE",
  },
  {
    name: "E-Commerce Sales Dashboard",
    date: "November 2023",
    desc: `Built a dynamic E-Commerce Sales Dashboard using Tableau and SQL to extract actionable insights from sales data.  
    Implemented interactive visualizations for year-to-date sales trends, product quantity analysis, and profit margins.  
    Helped businesses make data-driven decisions for improved strategic planning and sales forecasting.`,
    img: salesImg,
    link: "https://github.com/Pranav1011/E-Commerce-Sales-Dashboard",
  },
  {
    name: "Telecom Customer Churn Analysis",
    date: "September 2023",
    desc: `Conducted a customer churn analysis for a telecom company using the Telco Customer Churn dataset.  
    Applied statistical analysis and visualization methods to uncover patterns and correlations.  
    Provided actionable recommendations for improving customer retention strategies.`,
    img: telcoImg,
    link: "https://github.com/Pranav1011/Telco-Customer-Churn-Analysis",
  },
];