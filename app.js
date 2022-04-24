// Created by Vladimir Barminskiy
const App = {
    data: function () {
        return {
            placehldrIn: "Введите значение в мм.",
            placehldrOutLength: "Искомая длина (м)",
            placehldrOutWeight: "Искомая масса (кг)",

            inSelectCos: "Нетканка",
            inCosRadius: "",
            outCosLength: "",
            outCosWeight: "",

            inSelectBr: "Сеточка",
            inBrRadius: "",
            outBrLength: "",
            outBrWeight: "",

            XXX: "Нет данных",
        };
    },
    methods: {
        // Космопор Е:
        functionCalcCos() {
            this.outCosLength =
                this.inSelectCos === "Нетканка"
                    ? (
                        (this.inCosRadius / 1000) ** 2 * 7113 +
                        (this.inCosRadius / 1000) * 598
                    ).toFixed(3)
                    : this.inSelectCos === "Подушка"
                        ? (
                            (this.inCosRadius / 1000) ** 2 * 3995 +
                            (this.inCosRadius / 1000) * 352
                        ).toFixed(3)
                        : this.inSelectCos === "Накладка"
                            ? (
                                (this.inCosRadius / 1000) ** 2 * 65547 +
                                (this.inCosRadius / 1000) * 6686
                            ).toFixed(3)
                            : this.inSelectCos === "БумагаИУ"
                                ? (
                                    (this.inCosRadius / 1000) ** 2 * 38267 +
                                    (this.inCosRadius / 1000) * 3444
                                ).toFixed(3)
                                : this.inSelectCos === "ПленкаИУ"
                                    ? (
                                        (this.inCosRadius / 1000) ** 2 * 77381 +
                                        (this.inCosRadius / 1000) * 6964
                                    ).toFixed(3)
                                    : false;
            this.outCosWeight =
                this.inSelectCos === "Нетканка"
                    ? this.XXX
                    : this.inSelectCos === "Подушка"
                        ? this.XXX
                        : this.inSelectCos === "Накладка"
                            ? this.XXX
                            : this.inSelectCos === "БумагаИУ"
                                ? this.XXX
                                : this.inSelectCos === "ПленкаИУ"
                                    ? this.XXX
                                    : false;
        },
        functionCalcCosReset() {
            (this.inCosRadius = ""),
                (this.outCosLength = ""),
                (this.outCosWeight = "");
        },
        // Бранолинд Н:
        functionCalcBr() {
            this.outBrLength =
                this.inSelectBr === "Сеточка"
                    ? (
                        (this.inBrRadius / 1000) ** 2 * 8598 +
                        (this.inBrRadius / 1000) * 705
                    ).toFixed(3)
                    : this.inSelectBr === "НакладкаВерх"
                        ? (
                            (this.inBrRadius / 1000) ** 2 * 97738 +
                            (this.inBrRadius / 1000) * 9383
                        ).toFixed(3)
                        : this.inSelectBr === "НакладкаНиз"
                            ? (
                                (this.inBrRadius / 1000) ** 2 * 97738 +
                                (this.inBrRadius / 1000) * 9383
                            ).toFixed(3)
                            : this.inSelectBr === "ИУВерх"
                                ? (
                                    (this.inBrRadius / 1000) ** 2 * 39754 +
                                    (this.inBrRadius / 1000) * 3618
                                ).toFixed(3)
                                : this.inSelectBr === "ИУНиз"
                                    ? (
                                        (this.inBrRadius / 1000) ** 2 * 39754 +
                                        (this.inBrRadius / 1000) * 3618
                                    ).toFixed(3)
                                    : false;
            this.outBrWeight =
                this.inSelectBr === "Сеточка"
                    ? this.XXX
                    : this.inSelectBr === "НакладкаВерх"
                        ? (
                            (this.inBrRadius / 1000) ** 2 * 454 +
                            (this.inBrRadius / 1000) * 44
                        ).toFixed(3)
                        : this.inSelectBr === "НакладкаНиз"
                            ? (
                                (this.inBrRadius / 1000) ** 2 * 454 +
                                (this.inBrRadius / 1000) * 44
                            ).toFixed(3)
                            : this.inSelectBr === "ИУВерх"
                                ? this.XXX
                                : this.inSelectBr === "ИУНиз"
                                    ? this.XXX
                                    : false;
        },
        functionCalcBrReset() {
            (this.inBrRadius = ""), (this.outBrLength = ""), (this.outBrWeight = "");
        },
    },
};
Vue.createApp(App).mount("#app");
