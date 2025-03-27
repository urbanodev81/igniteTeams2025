import Groups from '@screens/Groups';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { ThemeProvider} from 'styled-components';
import theme from './src/theme';

export default function App() {
  return (
    <View>
      <ThemeProvider theme={theme}>
        <Groups />
        <StatusBar style="auto" />
      </ThemeProvider>
    </View>
  );
}
