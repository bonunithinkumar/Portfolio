export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Predictive Sales Modeler',
    description: 'Deep learning model using LSTM networks to forecast seasonal retail sales with 94% accuracy.',
    tags: ['TensorFlow', 'Pandas', 'LSTM'],
    github: '#',
    demo: '#',
  },
  {
    id: 2,
    title: 'Customer Segmentation',
    description: 'K-Means clustering utilizing RFM analysis to segment 10k+ users into behavioral personas.',
    tags: ['Scikit-Learn', 'K-Means'],
    github: '#',
    demo: '#',
  },
  {
    id: 3,
    title: 'NLP Sentiment Analyzer',
    description: 'End-to-end NLP pipeline fine-tuning a BERT transformer to classify live social media streams.',
    tags: ['PyTorch', 'HuggingFace'],
    github: '#',
    demo: '#',
  },
  {
    id: 4,
    title: 'Defect Detection',
    description: 'Automated CNN pipeline using YOLOv5 and OpenCV to identify manufacturing defects in real-time.',
    tags: ['OpenCV', 'YOLOv5'],
    github: '#',
    demo: '#',
  },
  {
    id: 5,
    title: 'Recommendation Engine',
    description: 'Matrix factorization model using Apache Spark for personalized content recommendations.',
    tags: ['Apache Spark', 'AWS'],
    github: '#',
    demo: '#',
  },
  {
    id: 6,
    title: 'Churn Prediction Model',
    description: 'XGBoost classifier to predict customer churn, deployed on AWS with a 92% ROC-AUC score.',
    tags: ['XGBoost', 'AWS', 'Python'],
    github: '#',
    demo: '#',
  }
];
