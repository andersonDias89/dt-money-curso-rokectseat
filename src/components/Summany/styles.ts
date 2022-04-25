import styled from "styled-components";

export const Container = styled.section`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 2rem;
margin-top: -8rem;

div{
    background-color: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var();

    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--text);


    }

    strong{
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
        line-height: 3rem;
        color: var(--text-title);
    }

    &.highLight-background {
        background: var(--green);
        p{
            color: #fff;
        }
        strong{
            color: #fff;
        }
    }
}


`