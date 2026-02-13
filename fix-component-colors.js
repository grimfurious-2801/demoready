const fs = require('fs');

// Fix all components - remove static color references from StyleSheets
const files = [
    'src/components/ScenarioCard.tsx',
    'src/components/XPProgress.tsx',
    'src/components/StatRing.tsx',
    'src/components/ModuleCard.tsx',
    'src/components/BadgeCard.tsx'
];

files.forEach(file => {
    try {
        let content = fs.readFileSync(file, 'utf8');

        // Remove backgroundColor lines
        content = content.replace(/\s*backgroundColor:\s*colors\.\w+,?\r?\n/g, '\n');

        // Remove borderColor lines
        content = content.replace(/\s*borderColor:\s*colors\.\w+,?\r?\n/g, '\n');

        // Remove color lines (but not borderColor or backgroundColor)
        content = content.replace(/(\s*)color:\s*colors\.\w+,/g, '');

        fs.writeFileSync(file, content);
        console.log(`Fixed: ${file}`);
    } catch (error) {
        console.log(`Skipped: ${file}`);
    }
});

console.log('Done!');
