const fs = require('fs');

// Update all screen files to use dynamic styles
const updates = [
    {
        file: 'src/screens/AnalyticsScreen.tsx',
        oldImport: `import { colors, spacing, borderRadius } from '../theme/colors';\nimport { layoutStyles, textStyles, cardStyles } from '../styles/commonStyles';`,
        newImport: `import { useTheme } from '../contexts/ThemeContext';\nimport { spacing, borderRadius } from '../theme/colors';\nimport { createLayoutStyles, createTextStyles, createCardStyles } from '../styles/commonStyles';`,
        oldComponent: 'const AnalyticsScreen: React.FC = () => {\n    const user = mockUser;',
        newComponent: 'const AnalyticsScreen: React.FC = () => {\n    const user = mockUser;\n    const { colors } = useTheme();\n    const layoutStyles = createLayoutStyles(colors);\n    const textStyles = createTextStyles(colors);\n    const cardStyles = createCardStyles(colors);'
    },
    {
        file: 'src/screens/ScenariosScreen.tsx',
        oldImport: `import { colors, spacing } from '../theme/colors';\nimport { layoutStyles, textStyles } from '../styles/commonStyles';`,
        newImport: `import { useTheme } from '../contexts/ThemeContext';\nimport { spacing } from '../theme/colors';\nimport { createLayoutStyles, createTextStyles } from '../styles/commonStyles';`,
        oldComponent: 'const ScenariosScreen: React.FC = () => {',
        newComponent: 'const ScenariosScreen: React.FC = () => {\n    const { colors } = useTheme();\n    const layoutStyles = createLayoutStyles(colors);\n    const textStyles = createTextStyles(colors);'
    },
    {
        file: 'src/screens/ChatSimulatorScreen.tsx',
        oldImport: `import { colors, spacing, borderRadius } from '../theme/colors';\nimport { layoutStyles, textStyles, cardStyles } from '../styles/commonStyles';`,
        newImport: `import { useTheme } from '../contexts/ThemeContext';\nimport { spacing, borderRadius } from '../theme/colors';\nimport { createLayoutStyles, createTextStyles, createCardStyles } from '../styles/commonStyles';`,
        oldComponent: 'const ChatSimulatorScreen: React.FC = () => {',
        newComponent: 'const ChatSimulatorScreen: React.FC = () => {\n    const { colors } = useTheme();\n    const layoutStyles = createLayoutStyles(colors);\n    const textStyles = createTextStyles(colors);\n    const cardStyles = createCardStyles(colors);'
    },
    {
        file: 'src/screens/LoginScreen.tsx',
        oldImport: `import { colors, spacing, borderRadius } from '../theme/colors';\nimport { layoutStyles, textStyles, buttonStyles } from '../styles/commonStyles';`,
        newImport: `import { useTheme } from '../contexts/ThemeContext';\nimport { spacing, borderRadius } from '../theme/colors';\nimport { createLayoutStyles, createTextStyles, createButtonStyles } from '../styles/commonStyles';`,
        oldComponent: 'const LoginScreen: React.FC = () => {',
        newComponent: 'const LoginScreen: React.FC = () => {\n    const { colors } = useTheme();\n    const layoutStyles = createLayoutStyles(colors);\n    const textStyles = createTextStyles(colors);\n    const buttonStyles = createButtonStyles(colors);'
    }
];

updates.forEach(update => {
    try {
        let content = fs.readFileSync(update.file, 'utf8');
        content = content.replace(update.oldImport, update.newImport);
        content = content.replace(update.oldComponent, update.newComponent);
        fs.writeFileSync(update.file, content);
        console.log(`Updated: ${update.file}`);
    } catch (error) {
        console.log(`Skipped: ${update.file} (${error.message})`);
    }
});

console.log('Done!');
