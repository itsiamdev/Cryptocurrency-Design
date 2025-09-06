document.addEventListener('DOMContentLoaded', function() {
    console.log('Scriptul JS rulează!');
    var btc = document.getElementById("bitcoin");
    var eth = document.getElementById("ethereum");
    var doge = document.getElementById("dogecoin");

    fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd")
        .then(function(response) {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(function(data) {
            btc.innerHTML = data.bitcoin.usd;
            eth.innerHTML = data.ethereum.usd;
            doge.innerHTML = data.dogecoin.usd;
        })
        .catch(function(error) {
            btc.innerHTML = "Eroare";
            eth.innerHTML = "Eroare";
            doge.innerHTML = "Eroare";
            console.error('API error:', error);
        });
});