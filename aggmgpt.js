function AskAggmGPT(text) {
    const aggmgptResponses = [
        { pattern: /I feel (.*)/i, response: "Why do you feel $1?" },
        { pattern: /I am (.*)/i, response: "How long have you been $1?" },
        { pattern: /How are you/i, response: "I'm here to help. How can I assist you today?" },
        { pattern: /What's up/i, response: "Not much. How can I assist you today?" },
        { pattern: /Why (.*)/i, response: "What do you think about $1?" },
        { pattern: /Because (.*)/i, response: "Is that the real reason?" },
        { pattern: /Hello|Hi/i, response: "Hello! How can I assist you today?" },
        { pattern: /Goodbye|Bye/i, response: "Goodbye! Stay safe." },
        { pattern: /I need (.*)/i, response: "Why is $1 important to you?" },
        { pattern: /I want (.*)/i, response: "How would having $1 impact you?" },
        { pattern: /My (.*)/i, response: "Can you elaborate more on your $1?" },
        { pattern: /Can you (.*)/i, response: "What makes you think I could $1?" },
        { pattern: /It hurts/i, response: "I'm sorry to hear that. Can you explain more about the pain?" },
        { pattern: /I feel (happy|joyful|excited)/i, response: "What makes you feel so $1?" },
        { pattern: /I lost (.*)/i, response: "I'm sorry to hear about your loss of $1. How are you coping?" },
        { pattern: /Do you think (.*)/i, response: "Why do you wonder about $1?" },
        { pattern: /What should I do about (.*)/i, response: "What do you think would be the best approach to $1?" },
        { pattern: /I can't (.*)/i, response: "What seems to be preventing you from $1?" },
        { pattern: /I think (.*)/i, response: "Why do you think $1?" },
        { pattern: /Yes/i, response: "Great! Could you tell me more?" },
        { pattern: /No/i, response: "That's okay. Can you explain why not?" },
        { pattern: /Okay|Ok/i, response: "Got it! Is there anything else you'd like to add?" },
        { pattern: /Thank you|Thanks/i, response: "You're welcome! How else can I assist you?" },
        { pattern: /Sorry/i, response: "No need to apologize. What’s on your mind?" },
        { pattern: /Help/i, response: "Sure, I’m here to help. What do you need assistance with?" },
        { pattern: /What is (.*)/i, response: "Why do you want to know about $1?" },
        { pattern: /Tell me about (.*)/i, response: "What specifically would you like to know about $1?" },
        { pattern: /How (.*)/i, response: "What are your thoughts on how $1?" },
        { pattern: /Who (.*)/i, response: "Why are you curious about $1?" },
        { pattern: /Where (.*)/i, response: "What do you think about where $1?" },
        { pattern: /When (.*)/i, response: "What are your thoughts on when $1?" },
        { pattern: /I need advice on (.*)/i, response: "What options have you considered for $1?" },
        { pattern: /I'm worried about (.*)/i, response: "Why does $1 worry you?" },
        { pattern: /What do you think about (.*)/i, response: "I’d love to hear your perspective on $1." },
        { pattern: /Am I (.*)/i, response: "Why do you feel like you might be $1?" },
        { pattern: /It’s hard to (.*)/i, response: "What makes it difficult to $1?" },
        { pattern: /I wish (.*)/i, response: "What would achieving $1 mean to you?" },
        { pattern: /I hope (.*)/i, response: "Why is $1 important to you?" },
        { pattern: /Maybe/i, response: "What makes you unsure?" },
        { pattern: /I don’t know/i, response: "That’s okay. What are your thoughts?" },
        { pattern: /.*/, response: "Can you clarify what you mean?" }
      ];
      
    text = text.toLowerCase().replace(/[.,!?]/g, "");
  
    for (const entry of aggmgptResponses) {
      const match = text.match(entry.pattern);
      if (match) {
        let response = entry.response.replace("$1", match[1] || "");
        response = response.split(" ").map(word => {
          return word;
        }).join(" ");
        return response;
      }
    }
    return "I am uncertain how to reply to that.";
  }
  