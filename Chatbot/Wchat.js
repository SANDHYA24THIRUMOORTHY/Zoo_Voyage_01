import React, { useState } from 'react';
import './Wchat.css';

function Wchat() {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! Welcome to ZooVoyage. What is your name?' }
  ]);
  const [currentInput, setCurrentInput] = useState('');
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({ 
    name: '', 
    zoo: '', 
    adults: 0, 
    children: 0, 
    seniorCitizens: 0, 
    infants: 0, 
    disabled: '', 
    addons: [], 
    date: '', 
    upi: '' 
  });

  const calculateTotalAmount = () => {
    const { adults, children, seniorCitizens, addons } = userData;
    let totalAmount = adults * 20 + children * 10 + seniorCitizens * 15;
    
    // Assuming some fixed costs for add-ons
    const addonCosts = { Butterfly: 5, 'Jeep Safari': 15, 'Bus Safari': 10 };
    addons.forEach(addon => totalAmount += addonCosts[addon] || 0);
    
    return totalAmount;
  };

  const handleSend = () => {
    if (!currentInput && step !== 2) return;

    const newMessages = [...messages, { from: 'user', text: currentInput }];

    if (step === 1) {
      setUserData({ ...userData, name: currentInput });
      newMessages.push({ from: 'bot', text: `Welcome ${currentInput} to ZooVoyage! Which zoo would you like to book tickets for?`, options: ['Guwahati Zoo', 'Alipore Zoo', 'Gorewada Zoo', 'Nehru Zoo', 'Toronto Zoo'] });
      setStep(2);
    } else if (step === 2) {
      setUserData({ ...userData, zoo: currentInput });
      newMessages.push({ from: 'bot', text: `You have selected ${currentInput}. How many adults?` });
      setStep(3);
    } else if (step === 3) {
      const adults = Number(currentInput);
      setUserData({ ...userData, adults });
      newMessages.push({ from: 'bot', text: 'How many children?' });
      setStep(4);
    } else if (step === 4) {
      const children = Number(currentInput);
      setUserData({ ...userData, children });
      newMessages.push({ from: 'bot', text: 'How many senior citizens?' });
      setStep(5);
    } else if (step === 5) {
      const seniorCitizens = Number(currentInput);
      setUserData({ ...userData, seniorCitizens });
      newMessages.push({ from: 'bot', text: 'How many infants?' });
      setStep(6);
    } else if (step === 6) {
      const infants = Number(currentInput);
      setUserData({ ...userData, infants });
      newMessages.push({ from: 'bot', text: 'Are there any disabled persons? (yes or no)' });
      setStep(7);
    } else if (step === 7) {
      setUserData({ ...userData, disabled: currentInput });
      newMessages.push({ from: 'bot', text: 'Select any addons (Butterfly, Jeep Safari, Bus Safari):', options: ['Butterfly', 'Jeep Safari', 'Bus Safari'] });
      setStep(8);
    } else if (step === 8) {
      const addons = currentInput.split(',').map(item => item.trim());
      setUserData({ ...userData, addons });
      const totalAmount = calculateTotalAmount();
      newMessages.push({ from: 'bot', text: `The total amount is $${totalAmount}. Please select the booking date.` });
      setStep(9);
    } else if (step === 9) {
      setUserData({ ...userData, date: currentInput });
      newMessages.push({ from: 'bot', text: 'Please enter your UPI ID.' });
      setStep(10);
    } else if (step === 10) {
      setUserData({ ...userData, upi: currentInput });
      newMessages.push({ from: 'bot', text: 'Your booking is successful! Thank you for using ZooVoyage.' });
      setStep(11);
    }

    setMessages(newMessages);
    setCurrentInput('');
  };

  const handleOptionClick = (option) => {
    setCurrentInput(option); // Update currentInput with the selected option
    setMessages([...messages, { from: 'user', text: option }]);

    if (step === 2) {
      setUserData({ ...userData, zoo: option });
      setTimeout(() => {
        setMessages(prev => [...prev, { from: 'bot', text: `You have selected ${option}. How many adults?` }]);
        setStep(3);
      }, 500);
    } else if (step === 8) {
      setUserData({ ...userData, addons: [...userData.addons, option] });
      setTimeout(() => {
        const totalAmount = calculateTotalAmount();
        setMessages(prev => [...prev, { from: 'bot', text: `The total amount is Rs.${totalAmount}. Please select the booking date.` }]);
        setStep(9);
      }, 500);
    }
  };

  return (
    <div className="chat-page">
      <div className="chat-container">
        <div className="chat-box">
          {messages.map((msg, index) => (
            <div key={index} className={`chat-message ${msg.from}`}>
              <span>{msg.text}</span>
              {msg.options && (
                <div className="options">
                  {msg.options.map((option, i) => (
                    <button key={i} onClick={() => handleOptionClick(option)} className="option-button">{option}</button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        {step !== 11 && (
          <div className="chat-input-container">
            {step === 9 ? (
              <input
                type="date"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                required
              />
            ) : (
              <input
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                placeholder="Type your message..."
              />
            )}
            <button onClick={handleSend}>Send</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Wchat;
