import { Paper, Typography } from "@material-ui/core";
import React from "react";
import { PostActions } from "../PostActions";

import styles from "./FullPost.module.scss";

const text = {

}

export const FullPost = () => {
  return (
    <Paper elevation={0} className={styles.paper}>
      <div className="container">
        <Typography variant="h4" className={styles.title}>
          Лабораторная работа №1. Моделирование звеньев автоматических систем.
        </Typography>
        <div>
          <Typography>
            Самолет SSJ100, летящий из Волгограда в Москву, подал сигнал
            бедствия. Об этом сообщает «Интерфакс» со ссылкой на информированный
            источник. По данным источника, самолет резко снизился над Тамбовской
            областью.
          </Typography>
          <Typography>
            По данным источника, самолет резко снизился над Тамбовской областью.
            Возможной причиной этого собеседник агентства назвал
            разгерметизацию.
          </Typography>
          <Typography>
            Самолет продолжает полет на высоте примерно 3000 метров.
          </Typography>
          <Typography>
            Источник не уточнил названия авиакомпании и номера рейса. Судя по
            данным Flightradar24, сейчас в небе находится один SSJ100, летящий в
            Москву из Волгограда. Это — самолет «Аэрофлота», выполняющий рейс
            SU6416. На момент написания заметки он уже пересек Тамбовскую
            область и подлетает к Москве.
          </Typography>
          <iframe
            src="https://codesandbox.io/embed/busy-easley-rpdbx?autoresize=1&fontsize=14&theme=dark"
            className={styles.codeEditor}
            title="busy-easley-rpdbx"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          />
          <div style={{ width: 250, marginLeft: -14 }}>
            <PostActions />
          </div>
        </div>
      </div>
    </Paper>
  );
};
