"use strict";
import home        from "./modules/news/routes/home";
import noticias    from "./modules/news/routes/noticias";
import app         from "./config/server";
import environment from "./config/settings.const";

home(app);
noticias(app);

app.listen(environment.PORT, () => {
    console.log(environment.APP_NAME, "server listen! in " + environment.PORT)
});
