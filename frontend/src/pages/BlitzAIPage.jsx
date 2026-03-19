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

  return (
    <div style={{ minHeight: "100vh", background: "transparent" }}>
      {showChat && selectedExpert ? (
        <ChatInterface expert={selectedExpert} onBack={handleBack} />
      ) : (
        <LandingPage2027 onSelectExpert={handleSelectExpert} />
      )}
    </div>
  );
}
