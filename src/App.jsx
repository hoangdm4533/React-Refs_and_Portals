import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';
function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy Challenge" targetTime={1} />
        <TimerChallenge title="Medium Challenge" targetTime={5} />
        <TimerChallenge title="Hard Challenge" targetTime={10} />
        <TimerChallenge title="Expert Challenge" targetTime={15} />
      </div>

    </>
  );
}

export default App;
