"use strict";
import home        from "./app/routes/home";
import noticias    from "./app/routes/noticias";
import app         from "./config/server";
import environment from "./config/environmentConst";

home(app);
noticias(app);

app.listen(environment.PORT, () => {
    console.log(environment.APP_NAME, "server listen! in " + environment.PORT)
});
