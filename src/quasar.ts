import Vue from "vue";
import "./styles/quasar.scss";
// import "@quasar/extras/roboto-font/roboto-font.css";
// import "@quasar/extras/material-icons/material-icons.css";
import { Quasar, QTooltip } from "quasar";

Vue.use(Quasar, {
    config: {},
    components: {
        /* not needed if importStrategy is not 'manual' */
    },
    directives: {
        /* not needed if importStrategy is not 'manual' */
    },
    plugins: { QTooltip },
});
