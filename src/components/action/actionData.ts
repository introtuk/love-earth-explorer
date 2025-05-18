
import React from 'react';
import { 
  Leaf, 
  TreePine, 
  Recycle, 
  Droplets, 
  LucideLeaf, 
  Sun
} from 'lucide-react';

export const actionItems = [
  {
    title: "Plant Trees Locally",
    description: "Join local tree planting initiatives or start your own. Every tree makes a difference in carbon sequestration.",
    icon: React.createElement(TreePine, { size: 32 })
  },
  {
    title: "Reduce, Reuse, Recycle",
    description: "Minimize waste by consuming less, reusing items, and recycling materials properly.",
    icon: React.createElement(Recycle, { size: 32 })
  },
  {
    title: "Save Water",
    description: "Install water-saving fixtures, fix leaks, and practice mindful consumption of this precious resource.",
    icon: React.createElement(Droplets, { size: 32 })
  },
  {
    title: "Choose Sustainable Food",
    description: "Opt for locally grown, organic produce and reduce meat consumption to lower your carbon footprint.",
    icon: React.createElement(LucideLeaf, { size: 32 })
  },
  {
    title: "Use Clean Energy",
    description: "Switch to renewable energy sources or support clean energy initiatives in your community.",
    icon: React.createElement(Sun, { size: 32 })
  },
  {
    title: "Educate Others",
    description: "Share knowledge about environmental issues and solutions with your friends, family, and community.",
    icon: React.createElement(Leaf, { size: 32 })
  }
];
