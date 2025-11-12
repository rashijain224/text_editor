const homeBtn = document.getElementById("homeBtn");
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");

if (homeBtn) {
  homeBtn.addEventListener("click", () => window.location.href = "index.html");
}
if (loginBtn) {
  loginBtn.addEventListener("click", () => window.location.href = "login.html");
}
if (signupBtn) {
  signupBtn.addEventListener("click", () => window.location.href = "signup.html");
}
const downloadBtn = document.getElementById("downloadBtn");
const learnMoreBtn = document.getElementById("learnMoreBtn");

const downloadModal = document.getElementById("downloadModal");
const learnModal = document.getElementById("learnModal");


const closeDownload = document.getElementById("closeDownload");
const closeLearn = document.getElementById("closeLearn");


if (downloadBtn) {
  downloadBtn.addEventListener("click", () => {
    if (downloadModal) downloadModal.style.display = "flex";
  });
}
if (learnMoreBtn) {
  learnMoreBtn.addEventListener("click", () => {
    if (learnModal) learnModal.style.display = "flex";
  });
}


if (closeDownload) {
  closeDownload.addEventListener("click", () => {
    if (downloadModal) downloadModal.style.display = "none";
  });
}
if (closeLearn) {
  closeLearn.addEventListener("click", () => {
    if (learnModal) learnModal.style.display = "none";
  });
}


window.addEventListener("click", (e) => {
  if (e.target === downloadModal) downloadModal.style.display = "none";
  if (e.target === learnModal) learnModal.style.display = "none";
});
async function translateText(text, lang) {
  try {
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${lang}`;
    const res = await fetch(url);
    const data = await res.json();

    if (data && data.responseData && data.responseData.translatedText) {
      return data.responseData.translatedText;
    } else {
      return "Translation failed. Please try again.";
    }
  } catch (error) {
    console.error("Translation error:", error);
    return "Translation failed. Please try again.";
  }
}


document.querySelectorAll(".translate-input").forEach(input => {
  const output = input.nextElementSibling;

  input.addEventListener("change", async () => {
    const text = input.value.trim();
    const lang = input.dataset.lang;

    if (!text) {
      output.textContent = "";
      return;
    }

    output.textContent = "Translating...";
    const translated = await translateText(text, lang);
    output.textContent = translated;
  });
});

const macLinuxBtn = document.getElementById("macLinuxDownload");

if (macLinuxBtn) {
  macLinuxBtn.addEventListener("click", () => {
    
     alert("Mac/Linux version will be available soon!"); 
});
}

