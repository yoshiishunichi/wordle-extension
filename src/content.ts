const gameState = localStorage.getItem("nyt-wordle-state");
if (gameState) {
  const gameStateData = JSON.parse(gameState) as { solution: string };
  window.alert(`こたえ: ${gameStateData.solution.toUpperCase()}`);
}
