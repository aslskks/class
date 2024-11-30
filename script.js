const manejarCookies = {
    set: (nombre, valor, dias) => {
      let expires = "";
      if (dias) {
        const fecha = new Date();
        fecha.setTime(fecha.getTime() + dias * 24 * 60 * 60 * 1000);
        expires = "; expires=" + fecha.toUTCString();
      }
      document.cookie = `${nombre}=${valor || ""}${expires}; path=/`;
    },
  
    get: (nombre) => {
      const cookies = document.cookie.split("; ");
      for (let cookie of cookies) {
        const [key, value] = cookie.split("=");
        if (key === nombre) {
          return decodeURIComponent(value);
        }
      }
      return null;
    },

    remove: (nombre) => {
      document.cookie = `${nombre}=; Max-Age=-99999999; path=/`;
    },
  };
let num = 0;
function sumar() {
    if (manejarCookies.get("num_clicks") == None) {
        num = num++;
        
        manejarCookies.set("num_clicks", num, 10000000000000000000000000000000000000000)
    }
    else{
        num = manejarCookies.get("num_clicks");
    }
    document.getElementById("resultado").innerHTML = num;

}