const gameState = localStorage.getItem("gameState");
if (gameState) {
  const gameStateData = JSON.parse(gameState) as { solution: string };
  window.alert(`こたえ: ${gameStateData.solution.toUpperCase()}`);
}
