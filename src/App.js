import "./styles.css";
import NewsletterSignUp from "./SignUp/NewsletterSignUp";
import ArtistCollabSignUp from "./SignUp/ArtistCollabSignUp";
import ArtistTiles from "./ArtistTiles/ArtistTiles.jsx";

export default function App() {
  const Artists = [
    {
      name: "UnskilledWorker",
      img: "https://goldloxe.com/assets/collab-unskilled-worker.b2f04fd7.jpg",
      bio: "I am an Artist who does cool stuff"
    },
    {
      name: "Harry Pack",
      img: "https://goldloxe.com/assets/collab-unskilled-worker.b2f04fd7.jpg",
      bio: "I am an Artist who does also does cool stuff"
    },
    {
      name: "Don Luigi",
      img: "https://goldloxe.com/assets/collab-unskilled-worker.b2f04fd7.jpg",
      bio:
        "I am an Artist who does cool stuff, I am an Artist who does cool stuff twice"
    },
    {
      name: "Simon Garfunkle",
      img: "https://goldloxe.com/assets/collab-unskilled-worker.b2f04fd7.jpg",
      bio: "I am an Artist who does cool stuff"
    }
  ];

  return (
    <div className="App">
      {/* <div className="goldloxeBio">
        <p className="bioText">
          Goldloxe has been turning up uninvited on walls around the world since
          2015 reminding us that here on earth we have already hit the cosmic
          jackpot. Not too hot, Not too cold. This moment in life right now is a
          miracle so let's stop sweating about that small thing.{" "}
        </p>
      </div> */}
      <div></div>

      <div className="NewsletterSection">
        <img
          className="goldloxeIcon"
          src="https://goldloxe.com/assets/just-right-coming-soon.8e889649.gif"
        />
        <NewsletterSignUp />
      </div>
      <div className="ArtistCollabSection">
        <h1 className="collabTitle"> Collaboration Project </h1>
        <div className="ArtistCollabTilesSection">
          <ArtistTiles Artists={Artists} />
        </div>
        <div className="ArtistCollabApplySection">
          <ArtistCollabSignUp />
        </div>
      </div>
    </div>
  );
}
