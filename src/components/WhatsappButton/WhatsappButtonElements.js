import styled from "styled-components";

export const ButtonWrapper = styled.div`
    display: ${({ specialScroll }) => (specialScroll ? 'flex' : 'none')};
`