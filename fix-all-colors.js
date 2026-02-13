const fs = require('fs');

// Fix ALL remaining color references in all files
const files = [
    'src/screens/ChatbotScreen.tsx',
    'src/screens/SettingsScreen.tsx',
    'src/components/ScenarioCard.tsx',
    'src/components/XPProgress.tsx',
    'src/components/StatRing.tsx',
    'src/components/ModuleCard.tsx',
    'src/components/BadgeCard.tsx'
];

files.forEach(file => {
    try {
        let content = fs.readFileSync(file, 'utf8');

        // Remove ALL lines with any color property reference in StyleSheet
        // This regex matches any line that has ": colors." in it
        content = content.replace(/^.*:\s*colors\.\w+.*\r?\n/gm, '');

        fs.writeFileSync(file, content);
        console.log(`Fixed: ${file}`);
    } catch (error) {
        console.log(`Skipped: ${file} (${error.message})`);
    }
});

console.log('Done!');
