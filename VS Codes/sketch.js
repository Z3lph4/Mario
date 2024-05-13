
html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  .game-board {
    width: 100%;
    height: 500px;
    border-bottom: 15px solid rgb(35, 160, 35);
    margin: 0 auto;
    position: relative;
    background: linear-gradient(#87CEEB, #E0F6FF);
  
  }
  
  .pipe {
    position: absolute;
    bottom: 0;
    width: 80px;
    animation: pipe-animation 1.5s infinite linear;
  }
  
  
  .mario {
    width:150px;
    position: absolute;
    bottom: 0;
  }
  
  .jump {
    animation: jump 500ms ease-out;
  }
  
  .clouds {
    position: absolute;
    width: 550px;
    animation: clouds-animation 20s infinite linear;
  }
  
  @keyframes pipe-animation {
    from {
    right: -80px;
    }
    
    to {
      right:100%;
    }
  }
  
  @keyframes jump {
    
    0% {
      bottom: 0;
    }
    
    40% {
      bottom: 180px;
    }
    
    50% {
      bottom: 180px;
    }
    
    60% {
      bottom: 180px;
    }
    
    100% {
      bottom: 0;
    }
  
  }
  
  @keyframes clouds-animation {
    from {
      right: -550px;
    }
    
    to {
      right: 100%;
    }
  }
  
  