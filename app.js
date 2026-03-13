let tonconnect;

document.getElementById('connectWallet').onclick = async () => {
  tonconnect = new TonConnect();
  await tonconnect.connect();
  alert('Wallet connected: ' + tonconnect.account.address);
};

const price = 0.01; // $0.01 per SYN

document.getElementById('amountIn').addEventListener('input', (e) => {
  const amountIn = parseFloat(e.target.value);
  document.getElementById('amountOut').value = amountIn * 100; // 1 TON = 100 SYN for example
});

document.getElementById('buyToken').onclick = async () => {
  if (!tonconnect) return alert('Connect wallet first!');
  const amount = parseFloat(document.getElementById('amountIn').value);
  alert(`You are buying ${amount * 100} SYN for ${amount} TON`);
  // Real smart contract call goes here
};