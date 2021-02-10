import styled, { createGlobalStyle } from 'styled-components';

// it can be named as anything
export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html {
        height: 100%;
    }

    body {
        background-image: url('bg.jpg');
        background-size: cover;
        /* background-repeat: none; */
        font-family:  Helvetica, Arial, sans-serif;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

`;

// Other styles
export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	/* only style p tag inside the wrapper */
	> p {
		color: #fff;
	}

	.score {
		color: orange;
		font-size: 1.3rem;
		margin-bottom: 10px;
	}

	h1 {
		font-family: Helvetica, Arial;
		/* bg-image will show through the h1 element */
		background-image: linear-gradient(180deg, #fff, #87f1ff);
		background-size: 100%;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		-webkit-background-clip: text;
		-moz-background-clip: text;
		-moz-text-fill-color: transparent;
		/* create the 3D look with darker border on the right n bottom of the text */
		filter: drop-shadow(2px 2px #0085a3);
		font-size: 70px;
		text-align: center;
		margin: 20px;
	}

	.start,
	.next {
		cursor: pointer;
		background: linear-gradient(180deg, #fff, #ffcc91);
		border: 2px solid #d38558;
		box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
		border-radius: 10px;
		height: 40px;
		margin: 20px 0;
		padding: 0 40px;
		font-size: 1.2rem;
	}
`;
