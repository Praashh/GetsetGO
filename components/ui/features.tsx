import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Phone, MessageSquare } from "lucide-react";

const FeatureShowcase = () => {
  const features = [
    {
      icon: <FileText className="w-8 h-8 text-indigo-900" />,
      title: "AI-Powered Application Review",
      description: "Rachel screens and ranks inbound applications instantly using criteria you define. Get clear recommendations on who to advance.",
    },
    {
      icon: <Phone className="w-8 h-8 text-indigo-900" />,
      title: "AI-Powered Phone Screens",
      description: "Rachel conducts phone screens and asks thoughtful and personalized questions, so you only spend time on the best candidates.",
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-indigo-900" />,
      title: "Instant Slack & Email Updates",
      description: "Rachel sends shortlisted candidates straight to you, just like a proactive recruiter. No dashboards, no delays.",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
          <div className="flex justify-center mt-10 mb-10 ">
        <div className="group flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border-2 hover:bg-pink-400 duration-500">
          <span className="text-gray-600 group-hover:text-white">Backed by</span>
          <div className="bg-[#FF6600] text-white w-6 h-6 flex items-center justify-center rounded">
            Y
          </div>
          <span className="text-gray-800 group-hover:text-white">Combinator</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300 shadow-b  hover:shadow-pink-300">
            <CardContent className="p-6">
              <div className="space-y-4">
                {feature.icon}
                <h3 className="text-xl font-semibold text-indigo-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
    
    </div>
  );
};

export default FeatureShowcase;