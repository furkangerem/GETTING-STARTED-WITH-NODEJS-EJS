let http = require("http"); // HTTP Modülünü programımızın içerisine "require" ile dahil ediyoruz.
let fs = require("fs"); // Oluşturduğumuz Index.html'i kütüphane olarak buraya tanımlıyoruz.
let path = require("path");
let newPageController = require("./app_server/routes/newPageRouter");

let express = require("express");
let app = express();

app.set("view engine", "ejs") // EJS'yi sayfaya tanımlamak için gereken kod kısmıdır.
app.set("views", path.join(__dirname, "/app_server/views")); // EJS'nin bulunacağı uzantılar express kütüphanesine belirtildi.
app.use("/public", express.static(path.join(__dirname, "public"))); // Kullanıcının oluşturduğumuz public dosyaya erişimine izin sağlıyoruz.

app.use(function (req, res, next) {
  // Genel fonksiyon olduğu için her durumda bu fonksiyon çağrılacaktır.
  // "Req" ve "Res" Node.JS'in oluşturduğu "zorunlu" parametrelerdir. "Next" ise bizim oluşturduğumuz bir "MiddleWare" olarak geçmektedir.

  console.log("url: " + req.originalUrl);
  console.log("time: " + Date.now());
  next(); // Bu "MiddleWare" bir sonraki yazılımın çağrılmasını sağlamaktadır.
});

app.use("/", newPageController); // Her "/" işaretini gördüğünde export ettiğimiz routerin bulunduğu klasöre gidip istenilen (request) parametresine bağlı verileri çekiyor.

app.listen(8000); // Kullanıcının hangi porta istekte bulunacağını belirtiyoruz.
