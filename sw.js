self.addEventListener("install", e => {
  console.log("App instalada");
});

self.addEventListener("activate", e => {
  console.log("App activa");
});

self.addEventListener("fetch", e => {
  // básico (sin offline aún)
});
