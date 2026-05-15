async function buscarClima() {
  const cidade = document.getElementById("cidade").value;

  // API gratuita (Open-Meteo com geocoding)
  const geo = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cidade}`);
  const geoData = await geo.json();

  if (!geoData.results) {
    alert("Cidade não encontrada");
    return;
  }

  const { latitude, longitude, name, country } = geoData.results[0];

  const clima = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max,weathercode&timezone=auto`
  );

  const data = await clima.json();

  mostrarClima(data, name, country);
}

function mostrarClima(data, cidade, pais) {
  const card = document.getElementById("card");
  card.classList.remove("hidden");

  document.getElementById("local").innerText = `${cidade}, ${pais}`;
  document.getElementById("temp").innerText = `${data.current_weather.temperature}°C`;

  const code = data.current_weather.weathercode;
  const cond = traduzirClima(code);

  document.getElementById("condicao").innerText = cond;

  // Sugestão inteligente
  document.getElementById("sugestao").innerText = gerarSugestao(cond);

  // Tema dinâmico
  aplicarTema(cond);

  // Próximos dias
  const previsao = document.getElementById("previsao");
  previsao.innerHTML = "";

  data.daily.temperature_2m_max.slice(0,3).forEach((temp, i) => {
    previsao.innerHTML += `
      <div>
        <p>Dia ${i+1}</p>
        <p>${temp}°C</p>
      </div>
    `;
  });
}

function traduzirClima(code) {
  if (code < 3) return "Ensolarado";
  if (code < 50) return "Nublado";
  if (code < 70) return "Chuva";
  return "Tempestade";
}

function gerarSugestao(cond) {
  if (cond.includes("Chuva")) return "Leve um guarda-chuva ☔";
  if (cond.includes("Ensolarado")) return "Ótimo dia para sair ☀️";
  if (cond.includes("Nublado")) return "Que tal um filme? 🎬";
  return "Fique atento ao clima!";
}

function aplicarTema(cond) {
  const body = document.getElementById("body");

  if (cond.includes("Chuva")) {
    body.className = "bg-gradient-to-r from-gray-600 to-gray-900 text-white min-h-screen flex items-center justify-center flex-col";
  } else if (cond.includes("Ensolarado")) {
    body.className = "bg-gradient-to-r from-yellow-300 to-orange-500 text-white min-h-screen flex items-center justify-center flex-col";
  } else {
    body.className = "bg-gradient-to-r from-blue-400 to-blue-700 text-white min-h-screen flex items-center justify-center flex-col";
  }
}