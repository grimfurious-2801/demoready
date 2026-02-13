const fs = require('fs');

// Update all components to use dynamic colors
const componentUpdates = [
    {
        file: 'src/components/XPProgress.tsx',
        oldImport: `import { colors, gradients, spacing, borderRadius, fontSize, fontWeight } from '../theme/colors';`,
        newImport: `import { useTheme } from '../contexts/ThemeContext';\nimport { gradients, spacing, borderRadius, fontSize, fontWeight } from '../theme/colors';`,
        oldComponent: 'const XPProgress: React.FC<XPProgressProps> = ({ current, max, level, title }) => {',
        newComponent: 'const XPProgress: React.FC<XPProgressProps> = ({ current, max, level, title }) => {\n    const { colors } = useTheme();'
    },
    {
        file: 'src/components/StatRing.tsx',
        oldImport: `import { colors, fontSize, fontWeight, spacing } from '../theme/colors';`,
        newImport: `import { useTheme } from '../contexts/ThemeContext';\nimport { fontSize, fontWeight, spacing } from '../theme/colors';`,
        oldComponent: 'const StatRing: React.FC<StatRingProps> = ({\n    label,\n    value,\n    color,\n    size = 80,\n    strokeWidth = 6,\n}) => {',
        newComponent: 'const StatRing: React.FC<StatRingProps> = ({\n    label,\n    value,\n    color,\n    size = 80,\n    strokeWidth = 6,\n}) => {\n    const { colors } = useTheme();'
    },
    {
        file: 'src/components/ModuleCard.tsx',
        oldImport: `import { colors, spacing, borderRadius, fontSize, fontWeight } from '../theme/colors';\nimport { cardStyles } from '../styles/commonStyles';`,
        newImport: `import { useTheme } from '../contexts/ThemeContext';\nimport { spacing, borderRadius, fontSize, fontWeight } from '../theme/colors';\nimport { createCardStyles } from '../styles/commonStyles';`,
        oldComponent: 'const ModuleCard: React.FC<ModuleCardProps> = ({ module, onPress }) => {',
        newComponent: 'const ModuleCard: React.FC<ModuleCardProps> = ({ module, onPress }) => {\n    const { colors } = useTheme();\n    const cardStyles = createCardStyles(colors);'
    },
    {
        file: 'src/components/BadgeCard.tsx',
        oldImport: `import { colors, spacing, borderRadius, fontSize, fontWeight } from '../theme/colors';`,
        newImport: `import { useTheme } from '../contexts/ThemeContext';\nimport { spacing, borderRadius, fontSize, fontWeight } from '../theme/colors';`,
        oldComponent: 'const BadgeCard: React.FC<BadgeCardProps> = ({ title, icon, acquired }) => {',
        newComponent: 'const BadgeCard: React.FC<BadgeCardProps> = ({ title, icon, acquired }) => {\n    const { colors } = useTheme();'
    }
];

componentUpdates.forEach(update => {
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
