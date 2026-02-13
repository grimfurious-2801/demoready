const fs = require('fs');

// Fix ChatbotScreen isUser references
let chatbot = fs.readFileSync('src/screens/ChatbotScreen.tsx', 'utf8');
chatbot = chatbot.replace(/isUser: true/g, "sender: 'user'");
chatbot = chatbot.replace(/isUser: false/g, "sender: 'bot'");
chatbot = chatbot.replace(/message\.isUser/g, "message.sender === 'user'");
chatbot = chatbot.replace(/msg\.isUser/g, "msg.sender === 'user'");
chatbot = chatbot.replace(/m\.isUser/g, "m.sender === 'user'");
fs.writeFileSync('src/screens/ChatbotScreen.tsx', chatbot);
console.log('Fixed ChatbotScreen isUser references');

// Fix remaining inline color references in all screens
const files = [
    'src/screens/ChatbotScreen.tsx',
    'src/screens/SettingsScreen.tsx',
    'src/screens/AnalyticsScreen.tsx'
];

files.forEach(file => {
    try {
        let content = fs.readFileSync(file, 'utf8');

        // Replace inline backgroundColor references
        content = content.replace(/backgroundColor:\s*colors\.\w+/g, (match) => {
            const colorProp = match.split('.')[1];
            return `backgroundColor: colors.${colorProp}`;
        });

        // Replace inline borderColor references  
        content = content.replace(/borderColor:\s*colors\.\w+/g, (match) => {
            const colorProp = match.split('.')[1];
            return `borderColor: colors.${colorProp}`;
        });

        fs.writeFileSync(file, content);
        console.log(`Checked inline colors in: ${file}`);
    } catch (error) {
        console.log(`Skipped: ${file}`);
    }
});

console.log('Done!');
