const fs = require('fs');
const path = require('path');

// List of screen files to fix
const screenFiles = [
    'src/screens/SettingsScreen.tsx',
    'src/screens/ChatbotScreen.tsx',
    'src/screens/LearnScreen.tsx',
    'src/screens/AnalyticsScreen.tsx',
    'src/screens/ScenariosScreen.tsx',
    'src/screens/ChatSimulatorScreen.tsx',
    'src/screens/LoginScreen.tsx'
];

// Function to remove color properties from StyleSheet
function removeColorProperties(content) {
    // Remove lines with color properties
    let fixed = content;

    // Remove backgroundColor lines
    fixed = fixed.replace(/\s*backgroundColor:\s*colors\.\w+,?\r?\n/g, '\n');

    // Remove borderColor lines
    fixed = fixed.replace(/\s*borderColor:\s*colors\.\w+,?\r?\n/g, '\n');

    // Remove color lines (but not borderColor or backgroundColor)
    fixed = fixed.replace(/(\s*)color:\s*colors\.\w+,/g, '');

    return fixed;
}

// Process each file
screenFiles.forEach(file => {
    try {
        const content = fs.readFileSync(file, 'utf8');
        const fixed = removeColorProperties(content);
        fs.writeFileSync(file, fixed);
        console.log(`Fixed: ${file}`);
    } catch (error) {
        console.log(`Skipped: ${file} (${error.message})`);
    }
});

console.log('Done!');
