import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
:root {
    --background: #E5E5E5;
    --red: #E62E4D;
    --blue: #5429CC;
    --blue-light: #6933FF;
    --green: #33CC95;
    --shape: #fff;

    --text-title: #363F5F;
    --text: #969CB3;

}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    @media (max-width:1080){
        font-size: 93.75%;
    }

    @media (max-width:720){
        font-size: 87.5%;
    }
}


button{
    cursor: pointer;
}

[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}

body{
    background-color: var(--background);
}

body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;

}

h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;

}

.react-modal-overlay {
    background-color: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;
}
.react-modal-content {
    width: 100%;
    max-width: 576px;
    background-color: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.24rem;

}

.react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background-color: transparent;

    transition: 0.2s;

    &:hover {
        filter: brightness(0.8);
    }


}
`

