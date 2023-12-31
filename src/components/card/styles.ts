import styled from "styled-components";

export const Container = styled.div<{
  $secundaryColor: string;
  $primaryColor: string;
  $abr: string;
}>`
  .card {
    margin-top: 40px;
    position: relative;
    width: 310px;
    height: 430px;
    background: ${(props) => props.$primaryColor};
    opacity: 90%;
    // background: #232323;
    border-radius: 20px;
    overflow: hidden;
  }

  .card:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${(props) => props.$secundaryColor};
    clip-path: circle(150px at 80% 20%);
    transition: 0.5s ease-in-out;
  }

  .card:hover:before {
    clip-path: circle(300px at 80% -20%);
  }

  .card:after {
    content: "${(props) => `${props.$abr}`}";
    position: absolute;
    top: 30%;
    left: -20%;
    font-size: 12em;
    font-weight: 800;
    font-style: italic;
    color: rgba(255, 255, 25, 0.05);
  }

  .card .imgBx {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    // z-index: 10000;
    width: 100%;
    height: 220px;
    transition: 0.5s;
  }

  .card:hover .imgBx {
    top: 0%;
    transform: translateY(0%);
  }

  .card .imgBx img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-25deg);
    width: 270px;
  }

  .card .contentBx {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    text-align: center;
    transition: 1s;
    z-index: 10;
  }

  .card:hover .contentBx {
    height: 210px;
  }

  .card .contentBx h2 {
    position: relative;
    font-weight: 600;
    letter-spacing: 1px;
    color: #fff;
    margin-bottom: 15px;
  }

  .card .contentBx .size,
  .card .contentBx .color {
    justify-content: center;
    align-items: center;
    padding: 4px 10px;
    transition: 0.5s;
    opacity: 0;
    visibility: hidden;
    padding-top: 0;
    padding-bottom: 0;
    margin-right: 18px;
  }

  .card:hover .contentBx .size {
    opacity: 1;
    visibility: visible;
    transition-delay: 0.5s;
  }

  .card:hover .contentBx .color {
    opacity: 1;
    visibility: visible;
    transition-delay: 0.6s;
  }

  .card .contentBx .size h3,
  .card .contentBx .color h3 {
    color: #fff;
    font-weight: 300;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-right: 10px;
  }

  .card .contentBx .size span {
    width: 50px;
    height: 26px;
    text-align: center;
    line-height: 26px;
    font-size: 14px;
    display: inline-block;
    color: #111;
    background: #fff;
    margin: 5px;
    transition: 0.5s;
    color: #111;
    border-radius: 4px;
    cursor: pointer;
  }

  .card .contentBx .size span:hover {
    background: ${(props) => props.$secundaryColor};
  }

  .card .contentBx .color span {
    width: 20px;
    height: 20px;
    background: #ff0;
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
  }

  .card .contentBx a {
    display: inline-block;
    padding: 10px 20px;
    background: white;
    border-radius: 4px;
    margin-top: 10px;
    text-decoration: none;
    font-weight: 600;
    color: #111;
    opacity: 0;
    transform: translateY(50px);
    transition: 0.5s;
    margin-top: 0;
  }

  .card .contentBx a:hover {
    background: ${(props) => props.$secundaryColor};
    transition-delay: 0s;
    color: white;
  }

  .card:hover .contentBx a {
    margin-top: 10px;
    opacity: 1;
    transform: translateY(0px);
  }
`;
