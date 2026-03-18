import { useState } from 'react';
import LandingPage from '../components/LandingPage';
import ChatInterface from '../components/ChatInterface';

export default function BlitzAIPage() {
  const [selectedExpert, setSelectedExpert] = useState(null);
  const [showChat, setShowChat] = useState(false);

  const handleSelectExpert = (expert) => {
    setSelectedExpert(expert);
    setShowChat(true);
  };

  const handleBack = () => {
    setShowChat(false);
    setSelectedExpert(null);
  };

  if (showChat && selectedExpert) {
    return <ChatInterface expert={selectedExpert} onBack={handleBack} />;
  }

  return <LandingPage onSelectExpert={handleSelectExpert} />;
}
