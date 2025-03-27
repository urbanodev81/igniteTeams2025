import style from 'styled-components/native';

export const Container = style.View`
    flex: 1;
    background-color: ${({theme}) =>theme.COLORS.RED_DARK};
    padding:24px;
    width: 100%;
`;  

export const Title = style.Text`
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
`;