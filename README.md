

You can check the Front here https://charlyphi.github.io/pokereact/  If you want to use the login/votes/favorites you'll need to follow the procedure below.

1 . Get the back-end code from this repository <a href="https://github.com/CharlyPhi/Pokerails"> Pokerails </a> and open it in your favorite text editor.
2 . Starting the rails server:
The React part can acces the rails API from "http://localhost:3000" (you are free to change this path in config/initializers/cors if you prefer using another one), so type rails s -p 3001 in your terminal, and check that you dont get any error.
3 . Starting the React server: 
Considering you previously got the code from the very repo you are on right now, open it in your text editor and type npm start in your terminal. The Project should open in your web browser,chrome by default.
4 . You can now register and enjoy seeing the vote count increase as you click, or your favorites add up in your dashboard as you select them !

Back-end Ruby on Rails(API)/DB Postgresql, Bootstrap 5.3.0 via CDN and Front-end React.js, using Create React App and npm.
