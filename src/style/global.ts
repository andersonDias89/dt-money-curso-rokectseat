import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
:root {
    --background: #E5E5E5;
    --red: #E62E4D;
    --blue: #5429CC;
    --blue-light: #6933FF;
    --green: #33CC95;
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
`

