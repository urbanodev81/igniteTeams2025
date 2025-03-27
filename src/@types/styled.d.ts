import theme from "src/theme";
import styled from "styled-components/native";

declare module "styled-components" {
    type ThemeType = typeof theme;

    export interface DefaultTheme extends ThemeType {}
}