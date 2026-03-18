import { useState } from 'react';
import LandingPage2027 from '../components/LandingPage2027';
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

  return <LandingPage2027 onSelectExpert={handleSelectExpert} />;
}
