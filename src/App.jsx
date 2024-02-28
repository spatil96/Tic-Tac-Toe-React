import Player from "../Components/Player";
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initalName="Player 1" symbol="X" />
          <Player initalName="Player 2" symbol="O" />
        </ol>
        Game Board
      </div>
    </main>
  );
}

export default App;
